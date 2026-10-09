import React from 'react';
import { Question } from '../types';
import { DiagramViewer } from './Diagrams';
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Check,
  ArrowDown,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: 'a' | 'b' | 'c' | 'd';
  isFlagged?: boolean;
  isHighlighted?: boolean;
  onSelectAnswer: (key: 'a' | 'b' | 'c' | 'd') => void;
  onToggleFlag: () => void;
  onReturnToReview?: () => void;
  onGoToNextPending?: () => void;
  hasNextPending?: boolean;
  showInstructionsHeader?: boolean;
  isReviewMode?: boolean;
  isGuideMode?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isFlagged,
  isHighlighted,
  onSelectAnswer,
  onToggleFlag,
  onReturnToReview,
  onGoToNextPending,
  hasNextPending = false,
  showInstructionsHeader = true,
  isReviewMode = false,
  isGuideMode = false,
}) => {
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <article
      id={`question-${question.id}`}
      className={`border-2 border-black bg-white p-5 sm:p-7 mb-6 transition-all rounded-3xl shadow-none scroll-mt-24 ${
        isFlagged ? 'bg-zinc-50 border-black' : ''
      } ${
        isHighlighted
          ? 'ring-4 ring-black ring-offset-4 animate-in fade-in duration-300'
          : ''
      }`}
    >
      {/* BANNER DE REVISIÓN CUANDO EL USUARIO FUE LLEVADO AQUÍ DESDE EL PANEL FINAL */}
      {isHighlighted && !isReviewMode && (
        <div className="mb-5 p-4 border-2 border-black bg-black text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-white shrink-0" />
            <div>
              <span className="font-bold block uppercase tracking-wider">
                {isFlagged ? 'Revisión de Duda' : 'Reactivo Sin Responder'} · Reactivo #{question.id}
              </span>
              <span className="text-zinc-300 text-[11px] block mt-0.5">
                {isFlagged
                  ? 'Repiensa tu reactivo, cambia tu opción si lo deseas y desmárcalo al aclarar tu duda.'
                  : 'Selecciona la opción que consideres correcta para no dejarla en blanco.'}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {isFlagged && (
              <button
                type="button"
                onClick={onToggleFlag}
                className="px-3 py-1.5 border-2 border-white bg-white text-black hover:bg-zinc-200 font-bold rounded-xl cursor-pointer transition-colors text-xs flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Desmarcar Duda</span>
              </button>
            )}
            {hasNextPending && onGoToNextPending && (
              <button
                type="button"
                onClick={onGoToNextPending}
                className="px-3 py-1.5 border-2 border-white bg-transparent hover:bg-zinc-800 text-white font-bold rounded-xl cursor-pointer transition-colors text-xs flex items-center gap-1.5"
              >
                <span>Siguiente Pendiente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {onReturnToReview && (
              <button
                type="button"
                onClick={onReturnToReview}
                className="px-3 py-1.5 border-2 border-white bg-transparent hover:bg-zinc-800 text-white font-bold rounded-xl cursor-pointer transition-colors text-xs flex items-center gap-1.5"
              >
                <ArrowDown className="w-3.5 h-3.5" />
                <span>Volver al Final</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Encabezado de Instrucciones si aplica */}
      {showInstructionsHeader && question.instructions && (
        <div className="mb-4 pb-3 border-b-2 border-black text-xs font-mono text-zinc-800 uppercase tracking-wide">
          <span className="font-bold block text-black mb-1">INSTRUCCIONES OFICIALES</span>
          {question.instructions}
        </div>
      )}

      {/* Barra superior de la pregunta: Número, Categoría y Marcar Duda */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black font-sans text-black">#{question.id}</span>
          <span className="text-xs font-mono uppercase text-zinc-600 font-bold">
            {question.sectionTitle} · {question.category}
          </span>
          {isGuideMode && isAnswered && (
            <span
              className={`text-xs font-mono font-bold px-2.5 py-0.5 border-2 rounded-full inline-flex items-center gap-1 ${
                isCorrect
                  ? 'border-black bg-black text-white'
                  : 'border-black bg-white text-black'
              }`}
            >
              {isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
            </span>
          )}
        </div>

        {/* Botón de Marcar Duda */}
        <button
          type="button"
          onClick={onToggleFlag}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border-2 border-black cursor-pointer transition-colors rounded-2xl ${
            isFlagged ? 'bg-black text-white font-bold' : 'bg-white text-black hover:bg-zinc-100'
          }`}
          title={isFlagged ? 'Desmarcar reactivo (Duda aclarada)' : 'Marcar reactivo para revisarlo al final'}
        >
          {isFlagged ? (
            <>
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>Marcado con duda</span>
            </>
          ) : (
            <>
              <Bookmark className="w-3.5 h-3.5" />
              <span>Marcar duda</span>
            </>
          )}
        </button>
      </div>

      {/* AVISO VISIBLE DENTRO DEL REACTIVO CUANDO ESTÁ MARCADO CON DUDA */}
      {isFlagged && !isReviewMode && (
        <div className="mb-5 p-3.5 border-2 border-black bg-zinc-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-4 h-4 text-black shrink-0" />
            <span className="font-bold text-black">
              Marcaste este reactivo con duda para revisarlo al final. Al repensar tu opción, desmárcalo:
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onToggleFlag}
              className="px-3.5 py-1.5 border-2 border-black bg-white hover:bg-black hover:text-white text-black font-bold rounded-xl cursor-pointer transition-colors text-xs flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Desmarcar (Duda resuelta)</span>
            </button>
            {onReturnToReview && (
              <button
                type="button"
                onClick={onReturnToReview}
                className="px-3 py-1.5 border border-zinc-400 bg-zinc-200 hover:bg-zinc-300 text-black font-bold rounded-xl cursor-pointer transition-colors text-xs flex items-center gap-1"
                title="Volver al panel final de revisión"
              >
                <ArrowDown className="w-3 h-3" />
                <span>Al final</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Lectura de contexto si la pregunta la incluye */}
      {question.passage && (
        <div className="mb-5 p-5 border-2 border-black bg-zinc-50 text-xs font-sans leading-relaxed text-black max-h-96 overflow-y-auto rounded-2xl">
          {question.passage.title && (
            <h4 className="font-bold text-sm mb-1 uppercase font-sans tracking-wide">
              {question.passage.title}
            </h4>
          )}
          {question.passage.source && (
            <p className="text-[11px] font-mono text-zinc-600 mb-3 italic">
              {question.passage.source}
            </p>
          )}
          <div className="whitespace-pre-line text-justify leading-relaxed">
            {question.passage.text}
          </div>
        </div>
      )}

      {/* Texto del reactivo */}
      <div
        className="text-sm sm:text-base font-sans text-black mb-4 leading-relaxed font-normal"
        dangerouslySetInnerHTML={{ __html: question.questionText }}
      />

      {/* Diagrama en blanco y negro sin colisiones */}
      {question.diagramType && (
        <DiagramViewer type={question.diagramType} data={question.diagramData} />
      )}

      {/* Opciones de respuesta A, B, C, D */}
      <div className="space-y-2.5 mt-4">
        {question.options.map((opt) => {
          const isThisSelected = selectedAnswer === opt.key;
          const isThisCorrect = question.correctAnswer === opt.key;

          let optionStyle = 'border-black hover:bg-zinc-100 text-black bg-white';

          if (isReviewMode) {
            if (isThisCorrect) {
              optionStyle = 'border-2 border-black bg-zinc-200 text-black font-bold';
            } else if (isThisSelected) {
              optionStyle = 'border-2 border-dashed border-black bg-zinc-100 text-zinc-800 line-through';
            }
          } else if (isGuideMode && isAnswered) {
            if (isThisCorrect) {
              optionStyle = 'border-2 border-black bg-zinc-200 text-black font-bold ring-2 ring-black';
            } else if (isThisSelected && !isThisCorrect) {
              optionStyle = 'border-2 border-dashed border-black bg-zinc-100 text-zinc-800 line-through';
            }
          } else if (isThisSelected) {
            optionStyle = 'border-black bg-black text-white';
          }

          return (
            <label
              key={opt.key}
              onClick={() => {
                if (!isReviewMode) {
                  onSelectAnswer(opt.key);
                }
              }}
              className={`flex items-start gap-3.5 p-3.5 border-2 text-sm font-sans cursor-pointer transition-all rounded-2xl ${optionStyle}`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                  isThisSelected && (!isReviewMode && (!isGuideMode || !isAnswered))
                    ? 'border-white bg-white text-black'
                    : isThisSelected && (isReviewMode || (isGuideMode && isAnswered))
                    ? 'border-black bg-black text-white'
                    : isThisCorrect && ((isGuideMode && isAnswered) || isReviewMode)
                    ? 'border-black bg-black text-white'
                    : 'border-black text-black'
                }`}
              >
                {opt.key.toUpperCase()}
              </div>
              <div className="flex-1 leading-normal pt-0.5">{opt.text}</div>
            </label>
          );
        })}
      </div>

      {/* Control de duda inmediato debajo de las opciones */}
      {!isReviewMode && isAnswered && (
        <div className="mt-3 flex items-center justify-between text-xs font-mono text-zinc-600 px-1">
          <span>Respuesta seleccionada: <strong>{selectedAnswer.toUpperCase()}</strong></span>
          <button
            type="button"
            onClick={onToggleFlag}
            className="underline hover:text-black transition-colors cursor-pointer"
          >
            {isFlagged ? '✓ Duda marcada para revisar al final' : '¿Dudas de esta respuesta? Márcala para el final'}
          </button>
        </div>
      )}

      {/* RETROALIMENTACIÓN INMEDIATA EN MODO GUÍA */}
      {isGuideMode && isAnswered && (
        <div className="mt-5 p-5 border-2 border-black bg-zinc-50 rounded-2xl space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-black text-xs font-mono font-bold">
            <span className="flex items-center gap-1.5 text-sm">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>¡CORRECTO! (1/1 Pts)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-black" />
                  <span>INCORRECTO (0/1 Pts)</span>
                </>
              )}
            </span>
            <span className="bg-black text-white px-2.5 py-0.5 rounded-full">
              Clave correcta: {question.correctAnswer.toUpperCase()}
            </span>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider font-bold block mb-1 text-black">
              ¿Por qué es esta la respuesta?
            </span>
            <p className="text-zinc-900 text-xs sm:text-sm leading-relaxed font-sans text-justify">
              {question.explanation}
            </p>
          </div>

          <div className="mt-2 pt-2 border-t border-zinc-300 flex items-start gap-2 bg-white p-3 rounded-xl border border-zinc-300">
            <Lightbulb className="w-4 h-4 text-black shrink-0 mt-0.5" />
            <div className="text-xs font-sans text-zinc-800">
              <strong className="block font-mono uppercase text-[11px] text-black">
                Consejo clave para el examen real:
              </strong>
              {question.section === 'matematicas'
                ? 'En problemas matemáticos, anota los datos y descarta opciones con magnitudes o signos absurdos antes de calcular el valor final.'
                : question.section === 'espanol'
                ? 'Identifica el núcleo del sujeto y el verbo principal; las trampas de redacción suelen involucrar concordancia y palabras de grafía dudosa.'
                : 'En habilidad cognoscitiva, trabaja las relaciones y los diagramas de adentro hacia afuera o identifica los extremos primero.'}
            </div>
          </div>
        </div>
      )}

      {/* RETROALIMENTACIÓN EN MODO REVISIÓN FINAL */}
      {isReviewMode && (
        <div className="mt-5 p-5 border-2 border-black bg-zinc-50 font-mono text-xs rounded-2xl">
          <div className="font-bold uppercase tracking-wider mb-2 flex items-center justify-between border-b border-black pb-2">
            <span>
              {selectedAnswer === question.correctAnswer
                ? '✓ Respuesta Correcta (1/1 Pts)'
                : '✗ Respuesta Incorrecta (0/1 Pts)'}
            </span>
            <span className="bg-black text-white px-2 py-0.5 rounded-full">
              Clave: {question.correctAnswer.toUpperCase()}
            </span>
          </div>
          <p className="text-zinc-900 leading-relaxed font-sans text-justify text-xs sm:text-sm">
            {question.explanation}
          </p>
        </div>
      )}
    </article>
  );
};
