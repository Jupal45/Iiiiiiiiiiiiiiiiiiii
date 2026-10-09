import React from 'react';
import { Question } from '../types';
import { X, Check, Bookmark, Circle } from 'lucide-react';

interface QuestionNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  answers: Record<number, 'a' | 'b' | 'c' | 'd'>;
  flagged: Record<number, boolean>;
  currentIndex: number;
  onJumpToQuestion: (index: number) => void;
}

export const QuestionNavModal: React.FC<QuestionNavModalProps> = ({
  isOpen,
  onClose,
  questions,
  answers,
  flagged,
  currentIndex,
  onJumpToQuestion,
}) => {
  if (!isOpen) return null;

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;
  const total = questions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white border-2 border-black max-w-3xl w-full max-h-[85vh] flex flex-col shadow-none text-black rounded-3xl overflow-hidden">
        {/* Encabezado */}
        <div className="p-4 border-b-2 border-black flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base font-serif uppercase tracking-tight">
              HOJA DE NAVEGACIÓN Y RESPUESTAS
            </h3>
            <p className="text-xs font-mono text-zinc-600">
              {answeredCount} de {total} respondidas · {flaggedCount} marcadas
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Leyenda */}
        <div className="p-3 border-b-2 border-black bg-zinc-50 flex flex-wrap items-center justify-between text-xs font-mono gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 bg-black border border-black inline-block rounded-full"></span>
            <span>Respondida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 bg-white border border-black inline-block rounded-full"></span>
            <span>Sin responder</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 bg-zinc-200 border-2 border-black inline-block rounded-full"></span>
            <span>Marcada (Revisión)</span>
          </div>
        </div>

        {/* Grilla de reactivos */}
        <div className="p-5 overflow-y-auto flex-1">
          {/* Secciones agrupadas */}
          {['cognoscitiva', 'espanol', 'matematicas'].map((secKey) => {
            const secQuestions = questions.filter((q) => q.section === secKey);
            if (secQuestions.length === 0) return null;

            const secTitle = secQuestions[0].sectionTitle;

            return (
              <div key={secKey} className="mb-6 last:mb-0">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-3 pb-1 border-b border-zinc-300">
                  {secTitle} ({secQuestions.length} reactivos)
                </h4>
                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2">
                  {secQuestions.map((q) => {
                    const qIdx = questions.findIndex((item) => item.id === q.id);
                    const isAnswered = answers[q.id] !== undefined;
                    const isFlag = !!flagged[q.id];
                    const isCurrent = qIdx === currentIndex;

                    let btnClass = 'bg-white text-black border-black hover:bg-zinc-100';
                    if (isAnswered) {
                      btnClass = 'bg-black text-white border-black';
                    }
                    if (isFlag) {
                      btnClass = 'bg-zinc-300 text-black border-2 border-black font-black';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          onJumpToQuestion(qIdx);
                          onClose();
                        }}
                        className={`h-9 border-2 text-xs font-mono font-bold flex flex-col items-center justify-center cursor-pointer transition-all relative rounded-lg ${btnClass} ${
                          isCurrent ? 'ring-2 ring-black ring-offset-1' : ''
                        }`}
                      >
                        <span>{q.id}</span>
                        {isAnswered && (
                          <span className="text-[9px] uppercase leading-none opacity-80">
                            {answers[q.id]}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pie */}
        <div className="p-4 border-t-2 border-black flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-mono text-xs uppercase font-bold cursor-pointer transition-colors rounded-xl"
          >
            Regresar al examen
          </button>
        </div>
      </div>
    </div>
  );
};
