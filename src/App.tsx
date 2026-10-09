import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ExamScreen } from './components/ExamScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { getPresetExamQuestions, PRESET_OFFICIAL_EXAMS_META, PRESET_GUIDE_EXAMS_META } from './generator/presetExams';
import { Question, CandidateInfo, ExamMode, ExamResults } from './types';

type ScreenState = 'welcome' | 'exam' | 'results';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('welcome');
  
  // Sin datos personales ni escolares por defecto
  const [candidate, setCandidate] = useState<CandidateInfo>({
    fullName: '',
    identifier: '',
    email: '',
    term: '',
    campus: '',
    program: '',
  });

  const [mode, setMode] = useState<ExamMode>('official');
  const [activePresetExamId, setActivePresetExamId] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<ExamResults | null>(null);

  // Historial de pruebas completadas guardado en LocalStorage (20 pruebas en total: 10 oficiales y 10 guías)
  const [completedExams, setCompletedExams] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('piense_completed_exams_v2') || localStorage.getItem('piense_completed_exams');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const saveCompletedExam = (examMode: ExamMode, examId: number, score: number) => {
    const key = `${examMode}-${examId}`;
    setCompletedExams((prev) => {
      const updated = { ...prev, [key]: score };
      try {
        localStorage.setItem('piense_completed_exams_v2', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleResetProgress = () => {
    try {
      localStorage.removeItem('piense_completed_exams_v2');
      localStorage.removeItem('piense_completed_exams');
    } catch {}
    setCompletedExams({});
  };

  // Iniciar examen cargando la versión seleccionada de la serie canónica (10 oficiales o 10 guías)
  const handleStartExam = (cand: CandidateInfo, selectedMode: ExamMode, presetExamId = 1) => {
    setCandidate(cand);
    setMode(selectedMode);
    setActivePresetExamId(presetExamId);

    // Cada una de las 20 pruebas cuenta con 114 reactivos canónicos numerados del 1 al 114
    const newQuestions = getPresetExamQuestions(presetExamId, selectedMode);

    setQuestions(newQuestions);
    setResults(null);
    setCurrentScreen('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Finalizar examen y desplegar resultados
  const handleFinishExam = (finalResults: ExamResults) => {
    saveCompletedExam(mode, activePresetExamId, finalResults.estimatedScaledScore);
    
    // Obtener título descriptivo de la prueba
    const metaList = mode === 'guide' ? PRESET_GUIDE_EXAMS_META : PRESET_OFFICIAL_EXAMS_META;
    const meta = metaList.find((m) => m.id === activePresetExamId);
    
    setResults({
      ...finalResults,
      examId: activePresetExamId,
      examTitle: meta?.title || (mode === 'guide' ? `Prueba de Guía ${activePresetExamId}` : `Simulación Oficial ${activePresetExamId}`),
      isGuideMode: mode === 'guide',
    });
    
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generar la siguiente prueba predeterminada (1 a 10 de la modalidad en curso)
  const handleGenerateNewExam = async () => {
    const nextExamId = activePresetExamId < 10 ? activePresetExamId + 1 : 1;
    setActivePresetExamId(nextExamId);

    const newQuestions = getPresetExamQuestions(nextExamId, mode);

    setQuestions(newQuestions);
    setResults(null);
    setCurrentScreen('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reintentar sólo las preguntas incorrectas
  const handleRetryIncorrect = (incorrectIds: number[]) => {
    if (!results) return;
    const filtered = results.questions.filter((q) => incorrectIds.includes(q.id));
    if (filtered.length > 0) {
      setQuestions(filtered);
      setCurrentScreen('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReturnHome = () => {
    setCurrentScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-black selection:bg-black selection:text-white font-sans">
      {currentScreen === 'welcome' && (
        <WelcomeScreen
          onStartExam={handleStartExam}
          completedExams={completedExams}
          onResetProgress={handleResetProgress}
        />
      )}

      {currentScreen === 'exam' && questions.length > 0 && (
        <ExamScreen
          questions={questions}
          candidate={candidate}
          mode={mode}
          examId={activePresetExamId}
          totalTimeMinutes={100}
          onFinishExam={handleFinishExam}
          onExitExam={handleReturnHome}
        />
      )}

      {currentScreen === 'results' && results && (
        <ResultsScreen
          results={results}
          candidate={candidate}
          mode={mode}
          examId={activePresetExamId}
          onGenerateNewExam={handleGenerateNewExam}
          onRetryIncorrect={handleRetryIncorrect}
          onReturnHome={handleReturnHome}
        />
      )}
    </div>
  );
}
