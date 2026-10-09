import { Question, SectionId, DiagramType, PassageContext } from '../types';
import { getCognoscitivaQuestion } from './cognoscitivaSlots';
import { getEspanolQuestion } from './espanolSlots';
import { getMatematicasQuestion } from './matematicasSlots';

let currentSeed: number | null = null;

export function setRandomSeed(seed: number) {
  currentSeed = seed;
}

export function resetRandomSeed() {
  currentSeed = null;
}

export function seededRandom(): number {
  if (currentSeed === null) {
    return Math.random();
  }
  let t = (currentSeed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(seededRandom() * arr.length)];
}

export function randomInt(min: number, max: number): number {
  return Math.floor(seededRandom() * (max - min + 1)) + min;
}

export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const KEYS: ('a' | 'b' | 'c' | 'd')[] = ['a', 'b', 'c', 'd'];

export function formatOptions(correct: string, distractors: string[]) {
  const choices = shuffle([
    { text: correct, correct: true },
    { text: distractors[0], correct: false },
    { text: distractors[1], correct: false },
    { text: distractors[2], correct: false },
  ]);
  const correctKey = KEYS[choices.findIndex((c) => c.correct)];
  return {
    options: choices.map((c, i) => ({ key: KEYS[i], text: c.text })),
    correctAnswer: correctKey,
  };
}

// ============================================================================
// GENERADOR CANÓNICO POR NÚMERO DE REACTIVO Y VARIANTE DE EXAMEN (1 AL 114)
// Garantiza que cada una de las 20 pruebas (10 oficiales + 10 guías) tenga
// reactivos diferentes y opciones múltiples diferentes en cada posición.
// ============================================================================

export function getQuestionBySlot(slotNum: number, variantIndex: number): Question {
  if (slotNum >= 1 && slotNum <= 43) {
    return getCognoscitivaQuestion(slotNum, variantIndex);
  }
  if (slotNum >= 44 && slotNum <= 80) {
    return getEspanolQuestion(slotNum, variantIndex);
  }
  if (slotNum >= 81 && slotNum <= 114) {
    return getMatematicasQuestion(slotNum, variantIndex);
  }
  throw new Error(`Slot inválido: ${slotNum}. Debe estar entre 1 y 114.`);
}

// Mapa compatible con la numeración de slot original (7 al 120)
export const SLOT_GENERATORS: Record<number, () => Question> = {};
for (let slot = 7; slot <= 120; slot++) {
  const normalized = slot - 6; // mapea 7 a 1, ..., 120 a 114
  SLOT_GENERATORS[slot] = () => getQuestionBySlot(normalized, 0);
}

// Generador de examen completo numerado del 1 al 114
export function generateFullExam(variantIndex = 0): Question[] {
  const result: Question[] = [];
  for (let slot = 1; slot <= 114; slot++) {
    result.push({
      ...getQuestionBySlot(slot, variantIndex),
      id: slot,
    });
  }
  return result;
}

// Generador Exprés abreviado
export function generateExpressExam(variantIndex = 0): Question[] {
  const selectedSlots = [
    1, 2, 3, 7, 8, 12, 13, 17, 18, 22, 23, 27, 28, 34, 39, // Cognoscitiva (15)
    44, 45, 46, 48, 49, 50, 51, 52, 54, 56, 61, 62, 66, 71, 76, // Español (15)
    81, 82, 83, 85, 86, 87, 88, 90, 91, 94, 96, 98, 102, 104, 112 // Matemáticas (15)
  ];
  return selectedSlots.map((slot, idx) => ({
    ...getQuestionBySlot(slot, variantIndex),
    id: idx + 1,
  }));
}

export function calculateScaledScore(correct: number, total: number): number {
  if (total === 0) return 200;
  const ratio = correct / total;
  return Math.round(200 + ratio * 600);
}
