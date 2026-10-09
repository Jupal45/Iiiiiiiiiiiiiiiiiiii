import React, { useState, useEffect, useRef } from 'react';
import { Question, CandidateInfo, ExamResults, ExamMode } from '../types';
import { QuestionCard } from './QuestionCard';
import { QuestionNavModal } from './QuestionNavModal';
import { calculateScaledScore } from '../generator/generatorEngine';
import {
  Clock,
  ListFilter,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Send,
  BookOpen,
  BookmarkCheck,
  Check,
} from 'lucide-react';

interface ExamScreenProps {
  questions: Question[];
  candidate: CandidateInfo;
  mode: ExamMode;
  examId?: number;
  totalTimeMinutes: number;
  onFinishExam: (results: ExamResults) => void;
  onExitExam: () => void;
}

export const ExamScreen: React.FC<ExamScreenProps> = ({
  questions,
  candidate,
  mode,
  examId = 1,
  totalTimeMinutes,
  onFinishExam,
  onExitExam,
}) => {
  const [answers, setAnswers] = useState<Record<number, 'a' | 'b' | 'c' | 'd'>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [highlightedQuestionId, setHighlightedQuestionId] = useState<number | null>(null);

  // Tiempo fluido: 100 minutos oficiales
  const totalSeconds = totalTimeMinutes * 60;
  const [remainingSeconds, setRemainingSeconds] = useState<number>(totalSeconds);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleForceSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const handleSelectAnswer = (qId: number, key: 'a' | 'b' | 'c' | 'd') => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: key,
    }));
  };

  const handleToggleFlag = (qId: number) => {
    setFlagged((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleForceSubmit = () => {
    submitEvaluation();
  };

  const submitEvaluation = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    let totalCorrect = 0;
    const sectionCounts = {
      cognoscitiva: { correct: 0, total: 0, percentage: 0 },
      espanol: { correct: 0, total: 0, percentage: 0 },
      matematicas: { correct: 0, total: 0, percentage: 0 },
    };

    questions.forEach((q) => {
      sectionCounts[q.section].total++;
      if (answers[q.id] === q.correctAnswer) {
        totalCorrect++;
        sectionCounts[q.section].correct++;
      }
    });

    (['cognoscitiva', 'espanol', 'matematicas'] as const).forEach((sec) => {
      const data = sectionCounts[sec];
      data.percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    });

    const scorePercentage = Math.round((totalCorrect / questions.length) * 100);
    const estimatedScaledScore = calculateScaledScore(totalCorrect, questions.length);

    // Criterio oficial de aprobación PrepaTec: puntaje escalado >= 600 pts
    const passed = estimatedScaledScore >= 600;

    const results: ExamResults = {
      examId,
      isGuideMode: mode === 'guide',
      passed,
      passingScore: 600,
      totalQuestions: questions.length,
      totalCorrect,
      scorePercentage,
      estimatedScaledScore,
      timeSpentSeconds: elapsedSeconds,
      sectionScores: sectionCounts,
      answers,
      questions,
      completedAt: new Date().toISOString(),
    };

    onFinishExam(results);
  };

  // Función para llevar al usuario directamente a una pregunta y resaltarla
  const handleJumpToQuestionId = (id: number) => {
    const el = document.getElementById(`question-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedQuestionId(id);
      setTimeout(() => {
        setHighlightedQuestionId((current) => (current === id ? null : current));
      }, 5000);
    }
  };

  const handleJumpToBottom = () => {
    setHighlightedQuestionId(null);
    const el = document.getElementById('exam-bottom-review-panel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getNextPendingQuestionId = (currentId: number): number | null => {
    const pending = questions.filter(
      (q) => (answers[q.id] === undefined || !!flagged[q.id]) && q.id !== currentId
    );
    if (pending.length === 0) return null;
    const after = pending.find((q) => q.id > currentId);
    return after ? after.id : pending[0].id;
  };

  const answeredCount = Object.keys(answers).length;
  const unansweredQuestions = questions.filter((q) => answers[q.id] === undefined);
  const unansweredCount = unansweredQuestions.length;
  const flaggedQuestions = questions.filter((q) => !!flagged[q.id]);
  const flaggedCount = flaggedQuestions.length;

  const candidateDisplayName = candidate.fullName.trim() || 'Aspirante';
  const candidateCampus = candidate.campus.trim() || 'PrepaTec';

  return (
    <div className="min-h-screen bg-zinc-100 text-black flex flex-col font-sans">
      {/* BARRA SUPERIOR FIJA DE CONTROL (SIN AVISOS MOLESTOS NI BOTÓN FINALIZAR FLOTANTE) */}
      <header className="sticky top-0 z-40 bg-white border-b-2 border-black shadow-none">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Título y Datos */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="p-2 border-2 border-black hover:bg-zinc-100 rounded-2xl cursor-pointer transition-colors"
              title="Salir al menú principal"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-black text-base sm:text-lg uppercase tracking-tight">
                  PruebaT - PIENSE II (2027)
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono border-2 border-black px-2 py-0.5 bg-black text-white rounded-full">
                  {mode === 'guide' ? `PRUEBA DE GUÍA #${examId}` : `SIMULACIÓN OFICIAL #${examId}`}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-600 truncate max-w-xs sm:max-w-md">
                {candidateDisplayName} · {candidateCampus}
              </p>
            </div>
          </div>

          {/* Tiempo fluido continuo y Botón del Índice de reactivos (neutro, sin alertas) */}
          <div className="flex items-center gap-3">
            <div className="text-right font-mono border-2 border-black px-3 py-1.5 rounded-2xl bg-zinc-50">
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-600 font-bold uppercase">
                <Clock className="w-3 h-3" />
                <span>{mode === 'guide' ? 'Tiempo de estudio:' : 'Tiempo fluido:'}</span>
              </div>
              <div className="text-base sm:text-lg font-black tracking-tight text-black leading-none mt-0.5">
                {mode === 'guide' ? formatTime(elapsedSeconds) : formatTime(remainingSeconds)}
              </div>
            </div>

            <button
              onClick={() => setIsNavOpen(true)}
              className="px-3.5 py-2 border-2 border-black bg-white hover:bg-zinc-100 text-xs font-mono font-bold flex items-center gap-2 cursor-pointer rounded-2xl"
              title="Abrir hoja de navegación de reactivos"
            >
              <ListFilter className="w-4 h-4" />
              <span>{answeredCount}/{questions.length}</span>
            </button>
          </div>
        </div>

        {/* Barra de progreso de avance continuo */}
        <div className="w-full bg-zinc-200 h-2">
          <div
            className="bg-black h-2 transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL: FORMULARIO CONTINUO OFICIAL */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        
        {/* Banner Informativo de Inicio de Prueba */}
        <div className="mb-8 p-6 border-2 border-black bg-white rounded-3xl">
          <span className="text-xs font-mono uppercase text-zinc-600 font-bold block mb-1">
            {mode === 'guide'
              ? `MODO PRUEBA DE GUÍA #${examId} · RETROALIMENTACIÓN INMEDIATA Y CONSEJOS`
              : `SIMULACIÓN OFICIAL #${examId} · FORMATO DE FORMULARIO CONTINUO`}
          </span>
          <h2 className="text-2xl font-black uppercase tracking-tight text-black font-sans">
            {mode === 'guide'
              ? `Prueba de Guía #${examId} (114 Reactivos Canónicos)`
              : `Simulación Oficial #${examId} PrepaTec (114 Reactivos Canónicos)`}
          </h2>
          <p className="text-xs sm:text-sm font-sans text-zinc-700 mt-2 leading-relaxed">
            {mode === 'guide'
              ? 'Cada vez que selecciones una opción, el reactivo será calificado al instante para que aprendas inmediatamente si acertaste o te equivocaste, revises la justificación y aproveches los consejos didácticos.'
              : 'El examen consta de 114 reactivos numerados del 1 al 114. Puedes marcar cualquier opción con duda durante la prueba con el botón "Marcar duda". Al final del examen contarás con un panel de revisión para repensar cada reactivo y desmarcarlo.'}
          </p>
        </div>

        {/* Lista de preguntas en orden continuo con separadores por sección */}
        <div className="space-y-6">
          {questions.map((question, index) => {
            const isFirstOfSection =
              index === 0 || questions[index - 1].section !== question.section;
            const nextPending = getNextPendingQuestionId(question.id);

            return (
              <React.Fragment key={question.id}>
                {/* Separador de Sección Oficial */}
                {isFirstOfSection && (
                  <div className="my-8 p-5 border-2 border-black bg-zinc-100 rounded-3xl">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4 text-black" />
                      <span className="text-xs font-mono uppercase font-bold text-zinc-700">
                        SECCIÓN OFICIAL DEL EXAMEN
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-black font-sans">
                      {question.sectionTitle}
                    </h3>
                    <p className="text-xs font-mono text-zinc-600 mt-1">
                      {question.section === 'cognoscitiva' &&
                        'Habilidad Cognoscitiva (Reactivos 1 al 43): Relaciones de orden, matrices numéricas, deducción lógica y diagramas.'}
                      {question.section === 'espanol' &&
                        'Lengua Española (Reactivos 44 al 80): Comprensión de lectura, análisis literario, vocabulario en contexto y sintaxis.'}
                      {question.section === 'matematicas' &&
                        'Matemáticas (Reactivos 81 al 114): Aritmética, álgebra, geometría, trigonometría, probabilidad y estadística.'}
                    </p>
                  </div>
                )}

                <QuestionCard
                  question={question}
                  selectedAnswer={answers[question.id]}
                  isFlagged={flagged[question.id]}
                  isHighlighted={highlightedQuestionId === question.id}
                  onSelectAnswer={(key) => handleSelectAnswer(question.id, key)}
                  onToggleFlag={() => handleToggleFlag(question.id)}
                  onReturnToReview={handleJumpToBottom}
                  onGoToNextPending={nextPending ? () => handleJumpToQuestionId(nextPending) : undefined}
                  hasNextPending={nextPending !== null}
                  showInstructionsHeader={true}
                  isGuideMode={mode === 'guide'}
                />
              </React.Fragment>
            );
          })}
        </div>

        {/* EL AVISO DE PREGUNTAS PENDIENTES Y PANEL DE REVISIÓN APARECE ÚNICAMENTE AL FINAL */}
        <div id="exam-bottom-review-panel" className="mt-12 p-6 sm:p-8 border-2 border-black bg-white rounded-3xl space-y-6">
          
          <div className="border-b-2 border-black pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-bold block mb-0.5">
                PANEL OFICIAL DE VERIFICACIÓN PREVIO A LA FINALIZACIÓN
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black font-sans">
                Revisión de Dudas y Reactivos Pendientes
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono font-bold px-3 py-1 border-2 border-black rounded-full ${flaggedCount > 0 ? 'bg-black text-white' : 'bg-zinc-100 text-black'}`}>
                {flaggedCount} con duda
              </span>
              <span className={`text-xs font-mono font-bold px-3 py-1 border-2 border-black rounded-full ${unansweredCount > 0 ? 'bg-zinc-200 text-black' : 'bg-zinc-100 text-black'}`}>
                {unansweredCount} sin contestar
              </span>
            </div>
          </div>

          {/* 1. SECCIÓN DE PREGUNTAS MARCADAS CON DUDA */}
          <div className="p-5 border-2 border-black rounded-2xl bg-zinc-50 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-black" />
                <h4 className="font-bold text-sm uppercase font-sans">
                  Reactivos Marcados con Duda ({flaggedCount})
                </h4>
              </div>
              {flaggedCount > 0 && (
                <button
                  type="button"
                  onClick={() => handleJumpToQuestionId(flaggedQuestions[0].id)}
                  className="text-xs font-mono font-bold px-3 py-1 border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded-xl cursor-pointer transition-colors"
                >
                  Ir al primer reactivo con duda (#{flaggedQuestions[0].id})
                </button>
              )}
            </div>

            {flaggedCount > 0 ? (
              <div>
                <p className="text-xs font-sans text-zinc-700 mb-3 leading-relaxed">
                  Marcaste los siguientes reactivos para aclararlos antes de enviar tu prueba. Haz clic en cualquiera para ser llevado directamente a él, repensar tu opción y <strong>desmarcarlo</strong> una vez aclarada tu duda:
                </p>
                <div className="flex flex-wrap gap-2">
                  {flaggedQuestions.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpToQuestionId(q.id)}
                      className="px-3 py-1.5 border-2 border-black bg-white hover:bg-black hover:text-white font-mono text-xs font-bold rounded-xl cursor-pointer transition-colors flex items-center gap-1.5"
                    >
                      <span>#{q.id}</span>
                      <span className="text-[10px] opacity-70">({q.category})</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs font-mono text-zinc-600 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-black" />
                <span>Excelente. No tienes reactivos marcados con duda pendientes de desmarcar.</span>
              </p>
            )}
          </div>

          {/* 2. SECCIÓN DE PREGUNTAS SIN RESPONDER */}
          <div className="p-5 border-2 border-black rounded-2xl bg-zinc-50 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-black" />
                <h4 className="font-bold text-sm uppercase font-sans">
                  Reactivos Sin Responder ({unansweredCount})
                </h4>
              </div>
              {unansweredCount > 0 && (
                <button
                  type="button"
                  onClick={() => handleJumpToQuestionId(unansweredQuestions[0].id)}
                  className="text-xs font-mono font-bold px-3 py-1 border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded-xl cursor-pointer transition-colors"
                >
                  Ir al primer reactivo sin responder (#{unansweredQuestions[0].id})
                </button>
              )}
            </div>

            {unansweredCount > 0 ? (
              <div>
                <p className="text-xs font-sans text-zinc-700 mb-3 leading-relaxed">
                  En el PIENSE II <strong>no hay puntos negativos por respuestas erróneas</strong>, por lo que no debes dejar ninguna en blanco. Haz clic en cualquiera para ser llevado a esa pregunta y responderla:
                </p>
                <div className="flex flex-wrap gap-2">
                  {unansweredQuestions.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpToQuestionId(q.id)}
                      className="px-3 py-1.5 border-2 border-black bg-white hover:bg-black hover:text-white font-mono text-xs font-bold rounded-xl cursor-pointer transition-colors"
                    >
                      Reactivo #{q.id}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs font-mono text-zinc-600 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-black" />
                <span>¡Felicidades! Has respondido el 100% de los reactivos (114 de 114).</span>
              </p>
            )}
          </div>

          {/* BOTÓN OFICIAL DE FINALIZAR (SÓLO APARECE AQUÍ AL FINAL) */}
          <div className="pt-4 border-t-2 border-black text-center space-y-3">
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="w-full sm:w-auto px-10 py-5 border-2 border-black bg-black text-white hover:bg-white hover:text-black font-mono font-bold text-sm sm:text-base uppercase tracking-wider cursor-pointer transition-colors inline-flex items-center justify-center gap-3 rounded-2xl shadow-none"
            >
              <Send className="w-5 h-5" />
              <span>FINALIZAR Y CALIFICAR EXAMEN</span>
            </button>
            <p className="text-xs font-mono text-zinc-600">
              Al hacer clic, el sistema procesará tus 114 respuestas y generará tu reporte institucional College Board.
            </p>
          </div>
        </div>
      </main>

      {/* MODAL DE CONFIRMACIÓN DE ENVÍO */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white border-2 border-black max-w-md w-full p-6 text-black rounded-3xl space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-black pb-3">
              <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
              <h3 className="text-lg font-black font-sans uppercase">Confirmar Envío de Prueba</h3>
            </div>
            
            <div className="space-y-3 text-sm font-sans text-zinc-800">
              <p>
                Has respondido <strong>{answeredCount}</strong> de <strong>{questions.length}</strong> reactivos.
              </p>

              {flaggedCount > 0 && (
                <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-300 font-mono text-xs">
                  ⚠️ Tienes <strong>{flaggedCount} reactivo(s) marcado(s) con duda</strong> sin desmarcar.
                </div>
              )}

              {unansweredCount > 0 && (
                <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-300 font-mono text-xs">
                  ⚠️ Tienes <strong>{unansweredCount} reactivo(s) sin responder</strong>.
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 pt-3 border-t border-zinc-200">
              {(flaggedCount > 0 || unansweredCount > 0) && (
                <button
                  onClick={() => {
                    setShowSubmitConfirm(false);
                    if (flaggedCount > 0) {
                      handleJumpToQuestionId(flaggedQuestions[0].id);
                    } else if (unansweredCount > 0) {
                      handleJumpToQuestionId(unansweredQuestions[0].id);
                    }
                  }}
                  className="px-4 py-2.5 border-2 border-black bg-white hover:bg-zinc-100 font-mono text-xs font-bold uppercase rounded-xl cursor-pointer"
                >
                  Volver a aclarar dudas
                </button>
              )}
              <button
                onClick={() => {
                  setShowSubmitConfirm(false);
                  submitEvaluation();
                }}
                className="px-5 py-2.5 border-2 border-black bg-black text-white hover:bg-white hover:text-black font-mono text-xs font-bold uppercase rounded-xl cursor-pointer transition-colors"
              >
                {flaggedCount > 0 || unansweredCount > 0
                  ? 'Entregar de todos modos'
                  : 'Calificar ahora'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMACIÓN DE SALIR */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white border-2 border-black max-w-md w-full p-6 text-black rounded-3xl space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-black pb-3">
              <AlertTriangle className="w-6 h-6 text-black shrink-0" />
              <h3 className="text-lg font-black font-sans uppercase">¿Salir del examen?</h3>
            </div>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              Si sales ahora se perderá el progreso de esta prueba y no se registrará tu calificación.
            </p>
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-zinc-200">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2.5 border-2 border-black bg-white hover:bg-zinc-100 font-mono text-xs font-bold uppercase rounded-xl cursor-pointer"
              >
                Continuar examen
              </button>
              <button
                onClick={() => {
                  setShowExitConfirm(false);
                  onExitExam();
                }}
                className="px-5 py-2.5 border-2 border-black bg-black text-white hover:bg-white hover:text-black font-mono text-xs font-bold uppercase rounded-xl cursor-pointer transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE NAVEGACIÓN Y RESPUESTAS */}
      <QuestionNavModal
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        questions={questions}
        answers={answers}
        flagged={flagged}
        currentIndex={0}
        onJumpToQuestion={(idx) => {
          const q = questions[idx];
          if (q) handleJumpToQuestionId(q.id);
        }}
      />
    </div>
  );
};
