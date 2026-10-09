import React, { useState } from 'react';
import { ExamResults, CandidateInfo, ExamMode } from '../types';
import { QuestionCard } from './QuestionCard';
import { generateAndDownloadExamPDF } from '../utils/pdfExport';
import {
  Award,
  Clock,
  RotateCcw,
  CheckCircle2,
  XCircle,
  FileText,
  Printer,
  ChevronDown,
  AlertTriangle,
  ArrowRight,
  Download,
  Loader2,
  Check,
} from 'lucide-react';

interface ResultsScreenProps {
  results: ExamResults;
  candidate: CandidateInfo;
  mode?: ExamMode;
  examId?: number;
  onGenerateNewExam: (useAI?: boolean) => void;
  onRetryIncorrect: (incorrectIds: number[]) => void;
  onReturnHome: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  results,
  candidate,
  mode = 'official',
  examId,
  onGenerateNewExam,
  onRetryIncorrect,
  onReturnHome,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct'>('incorrect');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const incorrectQuestions = results.questions.filter(
    (q) => results.answers[q.id] !== q.correctAnswer
  );
  const correctQuestions = results.questions.filter(
    (q) => results.answers[q.id] === q.correctAnswer
  );

  const displayedQuestions =
    filter === 'all'
      ? results.questions
      : filter === 'incorrect'
      ? incorrectQuestions
      : correctQuestions;

  const isPassed = results.estimatedScaledScore >= 600;
  const displayName = candidate.fullName.trim() || 'Aspirante';
  const displayCampus = candidate.campus.trim() || 'PrepaTec';

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPdf(true);
      await generateAndDownloadExamPDF(results, candidate);
    } catch (err) {
      console.error('Error generating PDF:', err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-black py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* REPORTE OFICIAL DE RESULTADOS */}
        <div className="border-2 border-black bg-white p-6 sm:p-10 shadow-none rounded-3xl">
          {/* Encabezado */}
          <div className="border-b-2 border-black pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 block font-bold">
                REPORTE INSTITUCIONAL DE DESEMPEÑO · PREPATEC
              </span>
              <h1 className="text-2xl sm:text-3xl font-black uppercase font-sans tracking-tight text-black">
                PruebaT - PIENSE II (2027)
              </h1>
              <p className="text-xs font-mono text-zinc-800 mt-1">
                Aspirante: <strong>{displayName}</strong>
                {candidate.identifier.trim() && ` · Folio: ${candidate.identifier.trim()}`}
              </p>
              <p className="text-xs font-mono text-zinc-600">
                Campus: {displayCampus}
                {candidate.program.trim() && ` · Programa: ${candidate.program.trim()}`}
              </p>
            </div>

            <div className="text-center sm:text-right border-2 border-black p-4 bg-zinc-50 font-mono w-full sm:w-auto rounded-3xl">
              <span className="text-xs block text-zinc-600 font-bold uppercase">Puntaje Escala College Board</span>
              <span className="text-3xl sm:text-4xl font-black text-black">
                {results.estimatedScaledScore}
              </span>
              <span className="text-xs block text-zinc-600">de 800 pts posibles</span>
            </div>
          </div>

          {/* INDICADOR CLAVE DE ADMISIÓN: ¿PASASTE O NO EL EXAMEN? */}
          <div className="my-6">
            {isPassed ? (
              <div className="p-6 border-2 border-black bg-black text-white rounded-3xl space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 block">
                      DIAGNÓSTICO OFICIAL DE ADMISIÓN PREPATEC
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black font-sans uppercase">
                      ¡APROBADO! · ADMITIDO A PREPATEC
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-sans text-zinc-200 leading-relaxed pt-1">
                  Tu puntuación estimada de <strong>{results.estimatedScaledScore} puntos</strong> supera el corte mínimo institucional de <strong>600 puntos</strong> requerido para admisión en PrepaTec. Te encuentras en rango competitivo para tu examen real.
                </p>
              </div>
            ) : (
              <div className="p-6 border-2 border-black bg-zinc-50 text-black rounded-3xl space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                    ✗
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 block">
                      DIAGNÓSTICO OFICIAL DE ADMISIÓN PREPATEC
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black font-sans uppercase text-black">
                      NO APROBADO · PUNTAJE INSUFICIENTE
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-sans text-zinc-800 leading-relaxed pt-1">
                  Obtuviste <strong>{results.estimatedScaledScore} puntos</strong> de los <strong>600 puntos mínimos</strong> recomendados para admisión segura en PrepaTec (te faltaron <strong>{600 - results.estimatedScaledScore} puntos</strong>). Revisa a continuación cada reactivo incorrecto con su retroalimentación y realiza otra de las pruebas predeterminadas disponibles.
                </p>
              </div>
            )}
          </div>

          {/* Resumen General de Métricas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 text-center font-mono">
            <div className="border-2 border-black p-3.5 bg-zinc-50 rounded-2xl">
              <span className="text-[11px] uppercase block text-zinc-600 font-bold">Aciertos Totales</span>
              <span className="text-2xl font-black text-black">
                {results.totalCorrect}/{results.totalQuestions}
              </span>
            </div>

            <div className="border-2 border-black p-3.5 bg-zinc-50 rounded-2xl">
              <span className="text-[11px] uppercase block text-zinc-600 font-bold">Porcentaje Global</span>
              <span className="text-2xl font-black text-black">
                {results.scorePercentage}%
              </span>
            </div>

            <div className="border-2 border-black p-3.5 bg-zinc-50 rounded-2xl">
              <span className="text-[11px] uppercase block text-zinc-600 font-bold">Tiempo Empleado</span>
              <span className="text-xl font-black text-black">
                {formatTime(results.timeSpentSeconds)}
              </span>
            </div>

            <div className="border-2 border-black p-3.5 bg-zinc-50 rounded-2xl">
              <span className="text-[11px] uppercase block text-zinc-600 font-bold">Estatus Admisión</span>
              <span className="text-sm font-black text-black mt-1 block">
                {isPassed ? 'APROBADO' : 'NO APROBADO'}
              </span>
            </div>
          </div>

          {/* Desglose por Secciones Oficiales */}
          <div className="border-t-2 border-black pt-6">
            <h2 className="text-sm font-bold uppercase font-mono tracking-wider mb-4">
              DESGLOSE POR ÁREA EVALUADA
            </h2>

            <div className="space-y-4 font-mono text-xs">
              {/* 1. Habilidad Cognoscitiva */}
              <div className="border-2 border-black p-4 bg-white rounded-2xl">
                <div className="flex items-center justify-between font-bold mb-1.5">
                  <span>1. HABILIDAD COGNOSCITIVA</span>
                  <span>
                    {results.sectionScores.cognoscitiva.correct}/
                    {results.sectionScores.cognoscitiva.total} ({results.sectionScores.cognoscitiva.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-zinc-200 h-2.5 border-2 border-black rounded-full overflow-hidden">
                  <div
                    className="bg-black h-full"
                    style={{ width: `${results.sectionScores.cognoscitiva.percentage}%` }}
                  />
                </div>
              </div>

              {/* 2. Español */}
              <div className="border-2 border-black p-4 bg-white rounded-2xl">
                <div className="flex items-center justify-between font-bold mb-1.5">
                  <span>2. LENGUA ESPAÑOLA (ESPAÑOL)</span>
                  <span>
                    {results.sectionScores.espanol.correct}/
                    {results.sectionScores.espanol.total} ({results.sectionScores.espanol.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-zinc-200 h-2.5 border-2 border-black rounded-full overflow-hidden">
                  <div
                    className="bg-black h-full"
                    style={{ width: `${results.sectionScores.espanol.percentage}%` }}
                  />
                </div>
              </div>

              {/* 3. Matemáticas */}
              <div className="border-2 border-black p-4 bg-white rounded-2xl">
                <div className="flex items-center justify-between font-bold mb-1.5">
                  <span>3. MATEMÁTICAS</span>
                  <span>
                    {results.sectionScores.matematicas.correct}/
                    {results.sectionScores.matematicas.total} ({results.sectionScores.matematicas.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-zinc-200 h-2.5 border-2 border-black rounded-full overflow-hidden">
                  <div
                    className="bg-black h-full"
                    style={{ width: `${results.sectionScores.matematicas.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BOTONES DE ACCIÓN PRINCIPALES */}
          <div className="mt-8 pt-6 border-t-2 border-black flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onGenerateNewExam(false)}
                className="px-5 py-3.5 border-2 border-black bg-black text-white hover:bg-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors flex items-center gap-2 rounded-2xl"
                title="Genera un nuevo examen con reactivos diferentes manteniendo el orden canónico oficial"
              >
                <RotateCcw className="w-4 h-4" />
                SIGUIENTE PRUEBA PREDETERMINADA
              </button>

              {incorrectQuestions.length > 0 && (
                <button
                  onClick={() => onRetryIncorrect(incorrectQuestions.map((q) => q.id))}
                  className="px-4 py-3.5 border-2 border-black bg-white text-black hover:bg-zinc-100 font-mono font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors rounded-2xl"
                >
                  Repasar {incorrectQuestions.length} incorrectas
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPdf}
                className="px-5 py-3.5 border-2 border-black bg-black text-white hover:bg-white hover:text-black disabled:opacity-50 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors rounded-2xl"
                title="Descargar archivo PDF completo con todas las preguntas y retroalimentación"
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generando PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>DESCARGAR PDF COMPLETO</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-3.5 border-2 border-black bg-white hover:bg-zinc-100 font-mono text-xs flex items-center gap-1.5 cursor-pointer rounded-2xl"
                title="Imprimir reporte"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir</span>
              </button>

              <button
                onClick={onReturnHome}
                className="px-4 py-3.5 border-2 border-black bg-white hover:bg-zinc-100 font-mono text-xs cursor-pointer rounded-2xl"
              >
                Inicio
              </button>
            </div>
          </div>
        </div>

        {/* REVISIÓN DETALLADA REACTIVO POR REACTIVO */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
                REVISIÓN DETALLADA Y RETROALIMENTACIÓN
              </h2>
              <p className="text-xs font-mono text-zinc-600">
                Consulta la justificación pedagógica y resolución paso a paso de cada reactivo.
              </p>
            </div>

            {/* Pestañas de Filtro */}
            <div className="flex items-center gap-1.5 border-2 border-black p-1 bg-white font-mono text-xs rounded-2xl">
              <button
                onClick={() => setFilter('incorrect')}
                className={`px-3 py-1.5 cursor-pointer rounded-xl font-bold transition-colors ${
                  filter === 'incorrect' ? 'bg-black text-white' : 'hover:bg-zinc-100 text-black'
                }`}
              >
                Solo Errores ({incorrectQuestions.length})
              </button>
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 cursor-pointer rounded-xl font-bold transition-colors ${
                  filter === 'all' ? 'bg-black text-white' : 'hover:bg-zinc-100 text-black'
                }`}
              >
                Todos ({results.questions.length})
              </button>
              <button
                onClick={() => setFilter('correct')}
                className={`px-3 py-1.5 cursor-pointer rounded-xl font-bold transition-colors ${
                  filter === 'correct' ? 'bg-black text-white' : 'hover:bg-zinc-100 text-black'
                }`}
              >
                Aciertos ({correctQuestions.length})
              </button>
            </div>
          </div>

          {/* Lista de Reactivos con Explicaciones */}
          <div className="space-y-6">
            {displayedQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                selectedAnswer={results.answers[question.id]}
                onSelectAnswer={() => {}}
                onToggleFlag={() => {}}
                showInstructionsHeader={true}
                isReviewMode={true}
              />
            ))}
          </div>

          {/* Botón flotante al final de la revisión */}
          <div className="mt-8 p-6 border-2 border-black bg-white text-center rounded-3xl">
            <p className="font-sans text-xs text-zinc-700 mb-4">
              ¿Listo para poner a prueba tus conocimientos con reactivos diferentes en la siguiente prueba predeterminada?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onGenerateNewExam(false)}
                className="px-6 py-3.5 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors flex items-center gap-2 rounded-2xl"
              >
                <RotateCcw className="w-4 h-4" />
                <span>INICIAR SIGUIENTE PRUEBA PREDETERMINADA</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPdf}
                className="px-6 py-3.5 bg-white text-black border-2 border-black hover:bg-black hover:text-white font-mono font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors flex items-center gap-2 rounded-2xl"
              >
                <Download className="w-4 h-4" />
                <span>DESCARGAR PDF COMPLETO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
