import { Question, ExamMode } from '../types';
import { getQuestionBySlot, setRandomSeed, resetRandomSeed } from './generatorEngine';

export interface PresetExamMeta {
  id: number;
  code: string;
  title: string;
  mode: ExamMode;
  description: string;
  totalQuestions: number;
  durationMinutes: number;
}

// 10 Pruebas Oficiales
export const PRESET_OFFICIAL_EXAMS_META: PresetExamMeta[] = [
  {
    id: 1,
    code: 'official-1',
    mode: 'official',
    title: 'Simulación I Oficial PrepaTec',
    description: 'Prueba inédita calibrada con 114 reactivos nuevos en habilidad cognoscitiva, lengua española y matemáticas.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 2,
    code: 'official-2',
    mode: 'official',
    title: 'Simulación II Oficial PrepaTec',
    description: 'Nuevos valores en expresiones algebraicas, relaciones con permutación A-C-B-D y texto de ciencias.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 3,
    code: 'official-3',
    mode: 'official',
    title: 'Simulación III Oficial PrepaTec',
    description: 'Enfoque en semejanza de triángulos, silogismos deductivos y analogías institucionales.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 4,
    code: 'official-4',
    mode: 'official',
    title: 'Simulación IV Oficial PrepaTec',
    description: 'Reactivos renovados de ortografía dudosa, trinomios factorizables y diagramas de Venn.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 5,
    code: 'official-5',
    mode: 'official',
    title: 'Simulación V Oficial PrepaTec',
    description: 'Nuevos patrones alfanuméricos, probabilidades en tableros y análisis de estilo literario.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 6,
    code: 'official-6',
    mode: 'official',
    title: 'Simulación VI Oficial PrepaTec',
    description: 'Refuerzo intensivo en deducción condicional, matrices numéricas y prefijos semánticos.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 7,
    code: 'official-7',
    mode: 'official',
    title: 'Simulación VII Oficial PrepaTec',
    description: 'Comprensión lectora profunda, simplificación de radicales y sistemas de ecuaciones lineales.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 8,
    code: 'official-8',
    mode: 'official',
    title: 'Simulación VIII Oficial PrepaTec',
    description: 'Diseñada para entrenar agilidad mental y resolución rápida en menos de 50 segundos por ejercicio.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 9,
    code: 'official-9',
    mode: 'official',
    title: 'Simulación IX Oficial PrepaTec',
    description: 'Variantes con mayor densidad de texto y problemas matemáticos de dos pasos.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 10,
    code: 'official-10',
    mode: 'official',
    title: 'Simulación X Oficial PrepaTec',
    description: 'Última prueba integral de verificación previa a la fecha de examen real. 100% calibrada.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
];

// 10 Pruebas de Guía Exclusivas
export const PRESET_GUIDE_EXAMS_META: PresetExamMeta[] = [
  {
    id: 1,
    code: 'guide-1',
    mode: 'guide',
    title: 'Prueba de Guía I (Fundamentos y Diagnóstico)',
    description: 'Calificación reactivo por reactivo con retroalimentación inmediata y explicaciones conceptuales paso a paso.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 2,
    code: 'guide-2',
    mode: 'guide',
    title: 'Prueba de Guía II (Estrategias de Lectura y Sintaxis)',
    description: 'Consejos pedagógicos en tiempo real para análisis textual, deducción de ideas principales y gramática aplicada.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 3,
    code: 'guide-3',
    mode: 'guide',
    title: 'Prueba de Guía III (Geometría y Lógica Deductiva)',
    description: 'Resolución asistida con diagramas limpios, teoremas de triángulos semejantes y silogismos formales.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 4,
    code: 'guide-4',
    mode: 'guide',
    title: 'Prueba de Guía IV (Álgebra y Redacción Precisa)',
    description: 'Explicaciones detalladas de factorización, despeje de incógnitas y ortografía dudosa en cada reactivo.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 5,
    code: 'guide-5',
    mode: 'guide',
    title: 'Prueba de Guía V (Secuencias, Gráficos y Probabilidad)',
    description: 'Aprende las claves para interpretar rápidamente tablas de datos, tableros y patrones numéricos.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 6,
    code: 'guide-6',
    mode: 'guide',
    title: 'Prueba de Guía VI (Consolidación Cognoscitiva Guiada)',
    description: 'Técnicas de descarte de distractores y razonamiento deductivo con validación inmediata.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 7,
    code: 'guide-7',
    mode: 'guide',
    title: 'Prueba de Guía VII (Lectura Profunda y Sistemas Lineales)',
    description: 'Consejos para responder textos complejos sin perder tiempo y resolver ecuaciones por sustitución rápida.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 8,
    code: 'guide-8',
    mode: 'guide',
    title: 'Prueba de Guía VIII (Técnicas de Agilidad y Descarte)',
    description: 'Entrenamiento guiado para identificar trampas comunes y elegir con seguridad en menos de un minuto.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 9,
    code: 'guide-9',
    mode: 'guide',
    title: 'Prueba de Guía IX (Problemas Multietapa y Comprensión Crítica)',
    description: 'Desglose paso a paso de problemas con enunciados largos y figuras compuestas.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
  {
    id: 10,
    code: 'guide-10',
    mode: 'guide',
    title: 'Prueba de Guía X (Simulacro Guiado Final Pre-Admisión)',
    description: 'Repaso total de los 114 conceptos canónicos con retroalimentación enriquecida antes del examen oficial.',
    totalQuestions: 114,
    durationMinutes: 100,
  },
];

export const ALL_PRESET_EXAMS_META = [
  ...PRESET_OFFICIAL_EXAMS_META,
  ...PRESET_GUIDE_EXAMS_META,
];

// Generador de prueba específica predeterminada
// En total la app cuenta con 20 pruebas (10 Oficiales y 10 de Guía),
// cada una con exactamente 114 reactivos numerados estrictamente del 1 al 114.
// Ninguna prueba es idéntica a otra: cada examen recibe su propia variante única (0 a 19),
// asegurando reactivos y opciones totalmente distintas preservando el orden temático canónico.
export function getPresetExamQuestions(examId: number, mode: ExamMode = 'official'): Question[] {
  // Índice de variante único: 0 a 9 para oficiales, 10 a 19 para guías
  const variantIndex = mode === 'guide' ? ((examId - 1 + 10) % 20) : ((examId - 1) % 20);

  // Semilla determinista complementaria para aleatoriedad interna si aplica
  const seedMultiplier = mode === 'guide' ? 24697 : 10007;
  const seedBase = mode === 'guide' ? 91823 : 42;
  setRandomSeed(examId * seedMultiplier + seedBase);

  const questions: Question[] = [];

  for (let slot = 1; slot <= 114; slot++) {
    const q = getQuestionBySlot(slot, variantIndex);
    questions.push({
      ...q,
      id: slot,
    });
  }

  resetRandomSeed();
  return questions;
}
