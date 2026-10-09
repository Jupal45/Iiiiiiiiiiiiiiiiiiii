import React, { useState } from 'react';
import { CandidateInfo, ExamMode } from '../types';
import {
  Clock,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Check,
} from 'lucide-react';

interface WelcomeScreenProps {
  onStartExam: (candidate: CandidateInfo, mode: ExamMode, presetExamId?: number) => void;
  completedExams: Record<string, number>;
  onResetProgress?: () => void;
}

const PREPATC_CAMPUSES = [
  'PrepaTec Eugenio Garza Sada',
  'PrepaTec Cumbres',
  'PrepaTec Eugenio Garza Lagüera',
  'PrepaTec Santa Catarina',
  'PrepaTec Valle Alto',
  'PrepaTec Ciudad de México',
  'PrepaTec Santa Fe',
  'PrepaTec Estado de México',
  'PrepaTec Esmeralda',
  'PrepaTec Guadalajara',
  'PrepaTec Santa Anita',
  'PrepaTec Querétaro',
  'PrepaTec Puebla',
  'PrepaTec León',
  'PrepaTec Toluca',
  'PrepaTec Chihuahua',
  'PrepaTec Saltillo',
  'PrepaTec San Luis Potosí',
  'PrepaTec Laguna',
  'PrepaTec Cuernavaca',
  'PrepaTec Chiapas',
  'PrepaTec Sinaloa',
  'PrepaTec Sonora Norte',
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartExam,
  completedExams,
  onResetProgress,
}) => {
  // Sin datos escolares o personales por defecto
  const [candidate, setCandidate] = useState<CandidateInfo>({
    fullName: '',
    identifier: '',
    email: '',
    term: '',
    campus: '',
    program: '',
  });

  const [mode, setMode] = useState<ExamMode>('official');
  const [showTips, setShowTips] = useState<boolean>(false);
  const [showRegistration, setShowRegistration] = useState<boolean>(false);

  // Conteo de las 10 pruebas oficiales y 10 pruebas de guía (20 pruebas en total)
  const completedOfficialCount = Object.keys(completedExams).filter(
    (k) => k.startsWith('official-') || k.startsWith('sim-')
  ).length;

  const completedGuideCount = Object.keys(completedExams).filter(
    (k) => k.startsWith('guide-')
  ).length;

  const totalCompleted = completedOfficialCount + completedGuideCount;
  const remainingOfficial = Math.max(0, 10 - completedOfficialCount);
  const remainingGuide = Math.max(0, 10 - completedGuideCount);

  const nextOfficialId = Math.min(10, completedOfficialCount + 1);
  const nextGuideId = Math.min(10, completedGuideCount + 1);

  const activeNextExamId = mode === 'official' ? nextOfficialId : nextGuideId;
  const activeRemaining = mode === 'official' ? remainingOfficial : remainingGuide;
  const activeCompleted = mode === 'official' ? completedOfficialCount : completedGuideCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartExam(candidate, mode, activeNextExamId);
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-black py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto border-2 border-black p-6 sm:p-10 bg-white shadow-none rounded-3xl">
        
        {/* Encabezado Institucional Redondeado */}
        <header className="border-b-2 border-black pb-6 mb-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 block mb-1 font-bold">
                EVALUACIÓN DE ADMISIÓN A PREPARATORIA · PREPATEC
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black font-sans">
                PruebaT - PIENSE II (2027)
              </h1>
              <p className="text-sm font-sans text-zinc-700 mt-1">
                Simulador Oficial PrepaTec · 20 Pruebas Exclusivas (10 Oficiales + 10 Guías) · 114 Reactivos (del 1 al 114)
              </p>
            </div>
            <div className="text-center sm:text-right border-2 border-black p-3.5 bg-zinc-50 font-mono text-xs rounded-2xl">
              <span className="block font-bold">DURACIÓN OFICIAL</span>
              <span className="text-base font-black">100 MINUTOS</span>
              <span className="block text-zinc-600">Tiempo fluido continuo</span>
            </div>
          </div>
        </header>

        {/* CONTADOR DE PRUEBAS DISPONIBLES AL USUARIO (10 OFICIALES Y 10 DE GUÍA = 20 TOTAL) */}
        <section className="mb-8 border-2 border-black p-6 bg-zinc-50 rounded-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-bold block">
                PRUEBAS DISPONIBLES EN MODALIDAD {mode === 'official' ? 'SIMULACIÓN OFICIAL' : 'PRUEBA DE GUÍA'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black font-sans mt-0.5">
                Te quedan {activeRemaining} de 10 {mode === 'official' ? 'pruebas oficiales' : 'pruebas de guía'} disponibles
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold px-3.5 py-1.5 border-2 border-black bg-black text-white rounded-full inline-block">
                {activeCompleted}/10 Realizadas en {mode === 'official' ? 'Oficial' : 'Guía'}
              </span>
            </div>
          </div>

          {/* Barra de progreso de la modalidad activa */}
          <div className="w-full bg-zinc-200 h-3 border-2 border-black rounded-full overflow-hidden mb-3">
            <div
              className="bg-black h-full transition-all duration-300"
              style={{ width: `${(activeCompleted / 10) * 100}%` }}
            />
          </div>

          {/* Resumen Global del Sistema (20 Pruebas) */}
          <div className="p-3 bg-white border border-zinc-300 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-black shrink-0" />
              <span>
                <strong>20 Pruebas Totales en el Sistema:</strong> 10 Simulaciones Oficiales + 10 Pruebas de Guía Exclusivas.
              </span>
            </div>
            <div className="font-bold">
              Avance global: {totalCompleted}/20 ({completedOfficialCount} oficiales + {completedGuideCount} guías)
            </div>
          </div>

          <p className="text-xs sm:text-sm font-sans text-zinc-700 leading-relaxed">
            Cada uno de los 10 exámenes por sección es completamente nuevo, inédito y diferente al anterior. La primera prueba que recibes no es el examen muestra que enviaste: cada una de las 20 pruebas cuenta con <strong>114 reactivos nuevos numerados del 1 al 114</strong>, con enunciados y opciones múltiples distintas, manteniendo idéntica temática y orden canónico por sección.
          </p>

          {totalCompleted > 0 && onResetProgress && (
            <div className="mt-3 pt-3 border-t border-zinc-300 flex justify-end">
              <button
                type="button"
                onClick={onResetProgress}
                className="text-xs font-mono underline hover:text-zinc-600 transition-colors cursor-pointer"
              >
                Reiniciar contador de pruebas (restablecer a 20 pruebas disponibles)
              </button>
            </div>
          )}
        </section>

        {/* SELECCIÓN DE MODALIDAD DE PRUEBA */}
        <section className="mb-8 border-b-2 border-black pb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
            <BookOpen className="w-4 h-4" />
            ELIGE LA MODALIDAD DE ESTUDIO (10 PRUEBAS POR MODALIDAD):
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Modalidad 1: Simulación Oficial */}
            <div
              onClick={() => setMode('official')}
              className={`p-5 border-2 rounded-3xl cursor-pointer transition-all flex flex-col justify-between ${
                mode === 'official'
                  ? 'border-black bg-black text-white'
                  : 'border-black bg-white text-black hover:bg-zinc-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase font-bold tracking-wider">
                    MODALIDAD 1 · 10 PRUEBAS OFICIALES
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      mode === 'official' ? 'border-white bg-white text-black' : 'border-black'
                    }`}
                  >
                    {mode === 'official' && <Check className="w-3 h-3" />}
                  </div>
                </div>
                <h3 className="text-lg font-black uppercase mt-1 font-sans">
                  Simulación Oficial PrepaTec
                </h3>
                <p
                  className={`text-xs mt-2 leading-relaxed ${
                    mode === 'official' ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  Examen continuo con tiempo fluido (100 minutos), sin pausas por sección. Calificación integral y reporte final con puntaje College Board al terminar.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-400 text-xs font-mono flex items-center justify-between">
                <span>114 reactivos (1 al 114)</span>
                <span>{completedOfficialCount}/10 Realizadas</span>
              </div>
            </div>

            {/* Modalidad 2: Prueba de Guía con Calificación Inmediata */}
            <div
              onClick={() => setMode('guide')}
              className={`p-5 border-2 rounded-3xl cursor-pointer transition-all flex flex-col justify-between ${
                mode === 'guide'
                  ? 'border-black bg-black text-white'
                  : 'border-black bg-white text-black hover:bg-zinc-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase font-bold tracking-wider">
                    MODALIDAD 2 · 10 PRUEBAS DE GUÍA
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      mode === 'guide' ? 'border-white bg-white text-black' : 'border-black'
                    }`}
                  >
                    {mode === 'guide' && <Check className="w-3 h-3" />}
                  </div>
                </div>
                <h3 className="text-lg font-black uppercase mt-1 font-sans">
                  Prueba de Guía (Estudio Interactivo)
                </h3>
                <p
                  className={`text-xs mt-2 leading-relaxed ${
                    mode === 'guide' ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  Cada reactivo respondido es <strong>calificado inmediatamente</strong>. Te indica al instante si acertaste o te equivocaste, te explica el por qué y te enseña mediante consejos pedagógicos.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-400 text-xs font-mono flex items-center justify-between">
                <span>114 reactivos (1 al 114)</span>
                <span>{completedGuideCount}/10 Realizadas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ESTRUCTURA CANÓNICA DE LA SIMULACIÓN */}
        <section className="mb-8 border-b-2 border-black pb-8">
          <h2 className="text-base font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            ESTRUCTURA CANÓNICA DE LA EVALUACIÓN (114 REACTIVOS DEL 1 AL 114)
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-zinc-900 font-sans text-justify">
            <p>
              El examen se presenta en formato de formulario con <strong>tiempo fluido continuo</strong> y contiene 114 reactivos ordenados consecutivamente del 1 al 114:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs my-3">
              <div className="border-2 border-black p-3.5 bg-zinc-50 rounded-2xl">
                <span className="font-bold block">PARTE 1: COGNOSCITIVA</span>
                <span>Reactivos 1 al 43 · 43 reactivos</span>
                <p className="font-sans text-[11px] text-zinc-700 mt-1">
                  Relaciones de orden, silogismos deductivos, matrices numéricas y diagramas lógicos.
                </p>
              </div>
              <div className="border-2 border-black p-3.5 bg-zinc-50 rounded-2xl">
                <span className="font-bold block">PARTE 2: ESPAÑOL</span>
                <span>Reactivos 44 al 80 · 37 reactivos</span>
                <p className="font-sans text-[11px] text-zinc-700 mt-1">
                  Comprensión de textos, vocabulario en contexto, redacción, sintaxis y ortografía.
                </p>
              </div>
              <div className="border-2 border-black p-3.5 bg-zinc-50 rounded-2xl">
                <span className="font-bold block">PARTE 3: MATEMÁTICAS</span>
                <span>Reactivos 81 al 114 · 34 reactivos</span>
                <p className="font-sans text-[11px] text-zinc-700 mt-1">
                  Aritmética, álgebra, geometría euclidiana, figuras compuestas y probabilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULARIO DE REGISTRO DEL ASPIRANTE (OPCIONAL Y SIN DATOS POR DEFECTO) */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-black p-6 bg-white rounded-3xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-base font-sans uppercase">
                  DATOS DEL ASPIRANTE (OPCIONAL)
                </h3>
                <p className="text-xs text-zinc-600 font-sans">
                  Estos datos aparecerán en tu reporte oficial y en el PDF descargable.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowRegistration(!showRegistration)}
                className="text-xs font-mono underline hover:text-zinc-600 transition-colors cursor-pointer"
              >
                {showRegistration ? 'Ocultar campos' : 'Personalizar mis datos'}
              </button>
            </div>

            {showRegistration && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
                <div>
                  <label className="block font-bold mb-1 uppercase">Nombre completo</label>
                  <input
                    type="text"
                    value={candidate.fullName}
                    onChange={(e) => setCandidate({ ...candidate, fullName: e.target.value })}
                    placeholder="Ej. Juan Pérez (opcional)"
                    className="w-full p-3 border-2 border-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 uppercase">Matrícula / Folio</label>
                  <input
                    type="text"
                    value={candidate.identifier}
                    onChange={(e) => setCandidate({ ...candidate, identifier: e.target.value })}
                    placeholder="Ej. Folio de registro (opcional)"
                    className="w-full p-3 border-2 border-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 uppercase">Campus PrepaTec deseado</label>
                  <input
                    type="text"
                    value={candidate.campus}
                    onChange={(e) => setCandidate({ ...candidate, campus: e.target.value })}
                    placeholder="Ej. PrepaTec Eugenio Garza Sada"
                    className="w-full p-3 border-2 border-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                    list="campus-list"
                  />
                  <datalist id="campus-list">
                    {PREPATC_CAMPUSES.map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="block font-bold mb-1 uppercase">Programa de Preparatoria</label>
                  <input
                    type="text"
                    value={candidate.program}
                    onChange={(e) => setCandidate({ ...candidate, program: e.target.value })}
                    placeholder="Ej. Multicultural / Bicultural / Bachillerato Internacional"
                    className="w-full p-3 border-2 border-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            )}
          </div>

          {/* BOTÓN PRINCIPAL DE INICIO */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-5 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-sans font-black text-base sm:text-lg uppercase tracking-wider cursor-pointer transition-all flex items-center justify-center gap-3 mx-auto rounded-3xl shadow-none"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>
                {mode === 'guide'
                  ? `INICIAR PRUEBA DE GUÍA #${activeNextExamId} (114 REACTIVOS)`
                  : `INICIAR SIMULACIÓN OFICIAL #${activeNextExamId} (114 REACTIVOS)`}
              </span>
            </button>
            <p className="text-xs font-mono text-zinc-600 mt-3">
              {activeRemaining > 0
                ? `Te quedan ${activeRemaining} pruebas disponibles en esta modalidad.`
                : `Has presentado las 10 pruebas de esta modalidad. Puedes reiniciar el contador o tomar una prueba de la otra modalidad.`}
            </p>
          </div>
        </form>

        {/* CONSEJOS PARA EL EXAMEN REAL EN 2 DÍAS */}
        <section className="mt-10 pt-6 border-t-2 border-black">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="flex items-center justify-between w-full text-left font-mono text-xs font-bold uppercase tracking-wider text-black cursor-pointer hover:underline"
          >
            <span className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Estrategias indispensables para tu prueba real en 2 días:
            </span>
            <span>{showTips ? '▲ Ocultar' : '▼ Ver consejos'}</span>
          </button>

          {showTips && (
            <div className="mt-4 p-5 border-2 border-black bg-zinc-50 font-sans text-xs sm:text-sm space-y-2.5 rounded-2xl">
              <p>
                <strong>1. Nunca dejes preguntas vacías:</strong> En la prueba PIENSE II los errores no restan puntos. Si dudas entre dos opciones, descarta las absurdas y elige una.
              </p>
              <p>
                <strong>2. Control del ritmo (50 segundos por reactivo):</strong> Si un problema matemático te toma más de 1 minuto, márcalo con duda y avanza; al final el sistema te llevará directo a él para resolverlo.
              </p>
              <p>
                <strong>3. En Español:</strong> Lee siempre la pregunta antes del fragmento largo para saber qué información clave buscar.
              </p>
              <p>
                <strong>4. En Matemáticas:</strong> Apóyate en el cálculo mental y el descarte de órdenes de magnitud.
              </p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};
