import { Question } from '../types';
import { formatOptions } from './generatorEngine';

// ============================================================================
// HABILIDAD COGNOSCITIVA (REACTIVOS 1 AL 43)
// 20 VARIANTES ÚNICAS POR CADA REACTIVO (10 OFICIALES + 10 GUÍAS)
// ============================================================================

export function getCognoscitivaQuestion(slotIndex: number, variant: number): Question {
  const v = variant % 20;

  switch (slotIndex) {
    // ------------------------------------------------------------------------
    // Reactivo 1: Relaciones de orden (Letras, 4 elementos)
    // ------------------------------------------------------------------------
    case 1: {
      const data = [
        { f: 'Z', s: 'W', t: 'Y', fo: 'X' },
        { f: 'A', s: 'C', t: 'B', fo: 'D' },
        { f: 'J', s: 'L', t: 'K', fo: 'N' },
        { f: 'W', s: 'Y', t: 'X', fo: 'Z' },
        { f: 'F', s: 'H', t: 'G', fo: 'I' },
        { f: 'P', s: 'R', t: 'Q', fo: 'S' },
        { f: 'B', s: 'D', t: 'C', fo: 'E' },
        { f: 'T', s: 'V', t: 'U', fo: 'W' },
        { f: 'K', s: 'M', t: 'L', fo: 'N' },
        { f: 'C', s: 'E', t: 'D', fo: 'F' },
        { f: 'G', s: 'I', t: 'H', fo: 'J' },
        { f: 'N', s: 'P', t: 'O', fo: 'Q' },
        { f: 'D', s: 'F', t: 'E', fo: 'G' },
        { f: 'S', s: 'U', t: 'T', fo: 'V' },
        { f: 'H', s: 'J', t: 'I', fo: 'K' },
        { f: 'O', s: 'Q', t: 'P', fo: 'R' },
        { f: 'E', s: 'G', t: 'F', fo: 'H' },
        { f: 'V', s: 'X', t: 'W', fo: 'Y' },
        { f: 'L', s: 'N', t: 'M', fo: 'O' },
        { f: 'R', s: 'T', t: 'S', fo: 'U' },
      ][v];
      const correctStr = `${data.f}, ${data.s}, ${data.t}, ${data.fo}.`;
      const qText = `La opción que indica que <b>${data.f}</b> va antes de <b>${data.t}</b> y que <b>${data.t}</b> NO va después de <b>${data.fo}</b> ni antes de <b>${data.s}</b> es:`;
      const opts = formatOptions(correctStr, [
        `${data.f}, ${data.t}, ${data.s}, ${data.fo}.`,
        `${data.s}, ${data.f}, ${data.fo}, ${data.t}.`,
        `${data.t}, ${data.fo}, ${data.f}, ${data.s}.`,
      ]);
      return {
        id: 1,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Relaciones de orden',
        instructions: 'En los ejercicios del 1 al 6 se presentan relaciones de orden entre letras o números. Seleccione la opción que indica la relación de orden que se establece.',
        questionText: qText,
        ...opts,
        explanation: `La opción correcta es "${correctStr}". En esta secuencia, ${data.f} precede a ${data.t}, y ${data.t} se sitúa entre ${data.s} y ${data.fo}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 2: Relaciones de orden (Números, 4 elementos)
    // ------------------------------------------------------------------------
    case 2: {
      const data = [
        { n1: 4, n2: 3, n3: 8, n4: 1 },
        { n1: 8, n2: 2, n3: 4, n4: 1 },
        { n1: 9, n2: 3, n3: 5, n4: 4 },
        { n1: 7, n2: 1, n3: 4, n4: 3 },
        { n1: 5, n2: 2, n3: 4, n4: 1 },
        { n1: 8, n2: 3, n3: 6, n4: 2 },
        { n1: 9, n2: 1, n3: 5, n4: 2 },
        { n1: 7, n2: 2, n3: 5, n4: 3 },
        { n1: 6, n2: 2, n3: 4, n4: 1 },
        { n1: 8, n2: 1, n3: 4, n4: 2 },
        { n1: 5, n2: 1, n3: 3, n4: 2 },
        { n1: 7, n2: 3, n3: 6, n4: 4 },
        { n1: 9, n2: 2, n3: 6, n4: 5 },
        { n1: 8, n2: 4, n3: 7, n4: 3 },
        { n1: 6, n2: 3, n3: 5, n4: 2 },
        { n1: 7, n2: 4, n3: 6, n4: 1 },
        { n1: 9, n2: 4, n3: 7, n4: 2 },
        { n1: 8, n2: 5, n3: 7, n4: 1 },
        { n1: 5, n2: 3, n3: 4, n4: 1 },
        { n1: 6, n2: 4, n3: 5, n4: 3 },
      ][v];
      const correctStr = `${data.n1}, ${data.n2}, ${data.n3}, ${data.n4}.`;
      const qText = `La opción que indica que <b>${data.n1}</b> va antes de <b>${data.n3}</b> y que <b>${data.n2}</b> NO va después de <b>${data.n3}</b> ni antes de <b>${data.n1}</b> es:`;
      const opts = formatOptions(correctStr, [
        `${data.n3}, ${data.n1}, ${data.n2}, ${data.n4}.`,
        `${data.n1}, ${data.n3}, ${data.n2}, ${data.n4}.`,
        `${data.n2}, ${data.n4}, ${data.n1}, ${data.n3}.`,
      ]);
      return {
        id: 2,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Relaciones de orden',
        questionText: qText,
        ...opts,
        explanation: `La opción correcta es "${correctStr}". En ella, ${data.n1} va antes de ${data.n3}, y ${data.n2} se ubica directamente entre ${data.n1} y ${data.n3}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 3: Relaciones de orden (Letras, 5 elementos)
    // ------------------------------------------------------------------------
    case 3: {
      const data = [
        { l1: 'W', l2: 'V', l3: 'Y', l4: 'U', l5: 'X' },
        { l1: 'P', l2: 'O', l3: 'R', l4: 'Q', l5: 'S' },
        { l1: 'D', l2: 'C', l3: 'F', l4: 'E', l5: 'G' },
        { l1: 'T', l2: 'S', l3: 'V', l4: 'U', l5: 'W' },
        { l1: 'H', l2: 'G', l3: 'J', l4: 'I', l5: 'K' },
        { l1: 'B', l2: 'A', l3: 'D', l4: 'C', l5: 'E' },
        { l1: 'F', l2: 'E', l3: 'H', l4: 'G', l5: 'I' },
        { l1: 'R', l2: 'Q', l3: 'T', l4: 'S', l5: 'U' },
        { l1: 'M', l2: 'L', l3: 'O', l4: 'N', l5: 'P' },
        { l1: 'V', l2: 'U', l3: 'X', l4: 'W', l5: 'Y' },
        { l1: 'C', l2: 'B', l3: 'E', l4: 'D', l5: 'F' },
        { l1: 'K', l2: 'J', l3: 'M', l4: 'L', l5: 'N' },
        { l1: 'S', l2: 'R', l3: 'U', l4: 'T', l5: 'V' },
        { l1: 'E', l2: 'D', l3: 'G', l4: 'F', l5: 'H' },
        { l1: 'Q', l2: 'P', l3: 'S', l4: 'R', l5: 'T' },
        { l1: 'G', l2: 'F', l3: 'I', l4: 'H', l5: 'J' },
        { l1: 'U', l2: 'T', l3: 'W', l4: 'V', l5: 'X' },
        { l1: 'I', l2: 'H', l3: 'K', l4: 'J', l5: 'L' },
        { l1: 'A', l2: 'Z', l3: 'C', l4: 'B', l5: 'D' },
        { l1: 'O', l2: 'N', l3: 'Q', l4: 'P', l5: 'R' },
      ][v];
      const correctStr = `${data.l1}, ${data.l2}, ${data.l3}, ${data.l4}, ${data.l5}.`;
      const qText = `La opción que indica que <b>${data.l4}</b> va después de <b>${data.l2}</b> y que <b>${data.l2}</b> va entre <b>${data.l1}</b> y <b>${data.l5}</b> y que <b>${data.l3}</b> NO va antes de <b>${data.l1}</b> ni entre <b>${data.l5}</b> y <b>${data.l4}</b> es:`;
      const opts = formatOptions(correctStr, [
        `${data.l1}, ${data.l2}, ${data.l5}, ${data.l3}, ${data.l4}.`,
        `${data.l2}, ${data.l5}, ${data.l1}, ${data.l4}, ${data.l3}.`,
        `${data.l3}, ${data.l4}, ${data.l1}, ${data.l2}, ${data.l5}.`,
      ]);
      return {
        id: 3,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Relaciones de orden',
        questionText: qText,
        ...opts,
        explanation: `La opción correcta es "${correctStr}". Satisface todas las condiciones relativas de orden dadas en el planteamiento.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 4: Relaciones de orden (Números, 5 elementos)
    // ------------------------------------------------------------------------
    case 4: {
      const data = [
        { a: 9, b: 6, c: 3, d: 8, e: 7 },
        { a: 9, b: 6, c: 5, d: 7, e: 8 },
        { a: 8, b: 4, c: 3, d: 5, e: 7 },
        { a: 6, b: 3, c: 2, d: 4, e: 5 },
        { a: 9, b: 5, c: 4, d: 7, e: 8 },
        { a: 7, b: 4, c: 2, d: 5, e: 6 },
        { a: 8, b: 6, c: 5, d: 7, e: 9 },
        { a: 9, b: 7, c: 6, d: 8, e: 1 },
        { a: 6, b: 4, c: 1, d: 5, e: 7 },
        { a: 8, b: 3, c: 2, d: 6, e: 7 },
        { a: 7, b: 2, c: 1, d: 4, e: 5 },
        { a: 9, b: 4, c: 3, d: 6, e: 8 },
        { a: 8, b: 5, c: 3, d: 6, e: 7 },
        { a: 6, b: 2, c: 1, d: 3, e: 5 },
        { a: 7, b: 3, c: 2, d: 5, e: 6 },
        { a: 9, b: 8, c: 5, d: 7, e: 6 },
        { a: 8, b: 2, c: 1, d: 4, e: 9 },
        { a: 5, b: 3, c: 2, d: 4, e: 6 },
        { a: 7, b: 6, c: 3, d: 5, e: 8 },
        { a: 9, b: 3, c: 1, d: 4, e: 6 },
      ][v];
      const correctStr = `${data.a}, ${data.b}, ${data.c}, ${data.d}, ${data.e}.`;
      const qText = `La opción que indica que <b>${data.c}</b> va después de <b>${data.a}</b> y entre <b>${data.b}</b> y <b>${data.d}</b> y que <b>${data.e}</b> NO va antes de <b>${data.b}</b> ni entre <b>${data.d}</b> y <b>${data.c}</b> es:`;
      const opts = formatOptions(correctStr, [
        `${data.b}, ${data.c}, ${data.d}, ${data.e}, ${data.a}.`,
        `${data.b}, ${data.e}, ${data.d}, ${data.c}, ${data.a}.`,
        `${data.a}, ${data.e}, ${data.c}, ${data.b}, ${data.d}.`,
      ]);
      return {
        id: 4,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Relaciones de orden',
        questionText: qText,
        ...opts,
        explanation: `La opción correcta es "${correctStr}". Sigue estrictamente el orden estipulado por las premisas.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 5: Relaciones de orden (Letras complejas, 4 elementos)
    // ------------------------------------------------------------------------
    case 5: {
      const data = [
        { a: 'Q', b: 'P', c: 'N', d: 'R' },
        { a: 'B', b: 'A', c: 'C', d: 'E' },
        { a: 'H', b: 'G', c: 'F', d: 'I' },
        { a: 'N', b: 'M', c: 'L', d: 'P' },
        { a: 'R', b: 'Q', c: 'P', d: 'S' },
        { a: 'V', b: 'U', c: 'T', d: 'X' },
        { a: 'J', b: 'I', c: 'H', d: 'K' },
        { a: 'D', b: 'C', c: 'B', d: 'F' },
        { a: 'L', b: 'K', c: 'J', d: 'M' },
        { a: 'M', b: 'L', c: 'K', d: 'N' },
        { a: 'Z', b: 'Y', c: 'X', d: 'W' },
        { a: 'P', b: 'O', c: 'N', d: 'Q' },
        { a: 'C', b: 'B', c: 'A', d: 'D' },
        { a: 'G', b: 'F', c: 'E', d: 'H' },
        { a: 'K', b: 'J', c: 'I', d: 'L' },
        { a: 'O', b: 'N', c: 'M', d: 'P' },
        { a: 'S', b: 'R', c: 'Q', d: 'T' },
        { a: 'W', b: 'V', c: 'U', d: 'Y' },
        { a: 'E', b: 'D', c: 'C', d: 'F' },
        { a: 'I', b: 'H', c: 'G', d: 'J' },
      ][v];
      const correctStr = `${data.a}, ${data.b}, ${data.c}, ${data.d}.`;
      const qText = `La opción que indica que <b>${data.a}</b> va antes de <b>${data.c}</b> y que <b>${data.c}</b> va después de <b>${data.b}</b> y que <b>${data.d}</b> NO va antes de <b>${data.b}</b> ni entre <b>${data.c}</b> y <b>${data.a}</b> es:`;
      const opts = formatOptions(correctStr, [
        `${data.d}, ${data.c}, ${data.b}, ${data.a}.`,
        `${data.b}, ${data.a}, ${data.d}, ${data.c}.`,
        `${data.b}, ${data.d}, ${data.c}, ${data.a}.`,
      ]);
      return {
        id: 5,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Relaciones de orden',
        questionText: qText,
        ...opts,
        explanation: `La opción correcta es "${correctStr}". Cumple todas las restricciones relativas solicitadas.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 6: Relaciones de orden (Letras complejas, 4 elementos con exclusión)
    // ------------------------------------------------------------------------
    case 6: {
      const data = [
        { a: 'T', b: 'S', c: 'R', d: 'U' },
        { a: 'K', b: 'J', c: 'H', d: 'L' },
        { a: 'P', b: 'O', c: 'N', d: 'Q' },
        { a: 'X', b: 'W', c: 'V', d: 'Y' },
        { a: 'E', b: 'D', c: 'C', d: 'F' },
        { a: 'I', b: 'H', c: 'G', d: 'J' },
        { a: 'N', b: 'M', c: 'L', d: 'O' },
        { a: 'B', b: 'A', c: 'Z', d: 'C' },
        { a: 'G', b: 'F', c: 'E', d: 'H' },
        { a: 'L', b: 'K', c: 'J', d: 'M' },
        { a: 'Q', b: 'P', c: 'O', d: 'R' },
        { a: 'V', b: 'U', c: 'T', d: 'W' },
        { a: 'C', b: 'B', c: 'A', d: 'D' },
        { a: 'H', b: 'G', c: 'F', d: 'I' },
        { a: 'M', b: 'L', c: 'K', d: 'N' },
        { a: 'R', b: 'Q', c: 'P', d: 'S' },
        { a: 'W', b: 'V', c: 'U', d: 'X' },
        { a: 'D', b: 'C', c: 'B', d: 'E' },
        { a: 'J', b: 'I', c: 'H', d: 'K' },
        { a: 'O', b: 'N', c: 'M', d: 'P' },
      ][v];
      const correctStr = `${data.a}, ${data.b}, ${data.c}, ${data.d}.`;
      const qText = `La opción que indica que <b>${data.a}</b> va antes de <b>${data.c}</b> y que <b>${data.b}</b> va después de <b>${data.a}</b> y que <b>${data.d}</b> NO va antes de <b>${data.c}</b> ni entre <b>${data.a}</b> y <b>${data.b}</b> es:`;
      const opts = formatOptions(correctStr, [
        `${data.c}, ${data.a}, ${data.b}, ${data.d}.`,
        `${data.a}, ${data.d}, ${data.c}, ${data.b}.`,
        `${data.b}, ${data.a}, ${data.d}, ${data.c}.`,
      ]);
      return {
        id: 6,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Relaciones de orden',
        questionText: qText,
        ...opts,
        explanation: `La opción correcta es "${correctStr}". Es la única permutación que verifica cada una de las condiciones lógicas.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 7 al 11: Significado de frases metafóricas / poéticas
    // ------------------------------------------------------------------------
    case 7: {
      const phrases = [
        { p: 'Bramido del glaciar', c: 'fractura de hielo', dis: ['lluvia', 'nieve', 'viento suave'], exp: 'Metáfora que describe el sonido rotundo al desprenderse una masa helada.' },
        { p: 'Canto de la brisa', c: 'murmullo', dis: ['huracán', 'eco', 'trueno'], exp: 'Refiere al suave sonido producido por el aire entre los árboles.' },
        { p: 'Rugido del mar', c: 'oleaje', dis: ['arena', 'peces', 'farol'], exp: 'Alude al fuerte sonido de las olas rompiendo contra las rocas.' },
        { p: 'Lamentos del bosque', c: 'crujidos', dis: ['pájaros', 'frutos', 'raíces'], exp: 'Describe poéticamente los sonidos de la madera y las ramas al moverse.' },
        { p: 'Murmullo del arroyo', c: 'corriente', dis: ['cascada', 'fango', 'isla'], exp: 'Evoca el tenue y constante sonido del agua que fluye.' },
        { p: 'Aliento de la montaña', c: 'viento frío', dis: ['fuego', 'nieve', 'cráter'], exp: 'Metáfora que designa la ráfaga helada que desciende de las cumbres.' },
        { p: 'Bramido de la tormenta', c: 'trueno', dis: ['rocío', 'niebla', 'llovizna'], exp: 'Representa el estruendo sonoro que acompaña a los relámpagos.' },
        { p: 'Silbido de la noche', c: 'viento nocturno', dis: ['luna', 'sombra', 'estrella'], exp: 'Hace alusión al paso del aire durante la oscuridad.' },
        { p: 'Rumor de las olas', c: 'resaca marina', dis: ['sal', 'barco', 'algas'], exp: 'Describe la cadencia sonora del agua al retirarse de la orilla.' },
        { p: 'Grito de la tempestad', c: 'vendaval', dis: ['garúa', 'calma', 'arcoíris'], exp: 'Describe la fuerza intempestiva y ruidosa de un viento desatado.' },
        { p: 'Suspiro de la tarde', c: 'crepúsculo', dis: ['mediodía', 'amanecer', 'aurora'], exp: 'Describe la calma y declive de luz al caer el sol.' },
        { p: 'Latido de la tierra', c: 'sismo', dis: ['siembra', 'volcán', 'río'], exp: 'Alude a las vibraciones profundas de la corteza terrestre.' },
        { p: 'Rugido del trueno', c: 'estruendo', dis: ['luz', 'nube', 'chispa'], exp: 'Describe la potencia sonora que rompe el silencio en una tempestad.' },
        { p: 'Susurro de las hojas', c: 'follaje al viento', dis: ['fruto', 'tronco', 'tierra'], exp: 'Metáfora del suave roce de las hojas agitadas.' },
        { p: 'Quejido del glaciar', c: 'desprendimiento de hielo', dis: ['frío', 'mar', 'roca'], exp: 'Describe el sonido de fractura de las masas de hielo polar.' },
        { p: 'Eco de la caverna', c: 'resonancia', dis: ['roca', 'murciélago', 'humedad'], exp: 'Evoca la repetición del sonido rebotado en los muros subterráneos.' },
        { p: 'Canto del manantial', c: 'brote de agua', dis: ['sed', 'lodo', 'hierba'], exp: 'Describe la frescura sonora del agua pura brotando.' },
        { p: 'Relincho del relámpago', c: 'centella', dis: ['lluvia', 'nube', 'charco'], exp: 'Imagen poética del resplandor rápido e impetuoso en el cielo.' },
        { p: 'Queja del desierto', c: 'tolvanera', dis: ['duna', 'sol', 'oasis'], exp: 'Refiere al sonido del viento arrastrando partículas de arena caliente.' },
        { p: 'Aullido del vendaval', c: 'ráfaga intensa', dis: ['calma', 'humo', 'rocío'], exp: 'Alude al silbido penetrante y amenazante del aire tempestuoso.' },
      ][v];
      const opts = formatOptions(phrases.c, phrases.dis);
      return {
        id: 7,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Significado de frases',
        instructions: 'En los ejercicios del 7 al 11 seleccione la opción que mejor representa el significado de la frase metafórica que se ofrece.',
        questionText: `¿Qué significa la frase metafórica: <b>"${phrases.p}"</b>?`,
        ...opts,
        explanation: phrases.exp,
      };
    }

    case 8: {
      const phrases = [
        { p: 'Manto de sombras', c: 'oscuridad nocturna', dis: ['neblina', 'aurora boreal', 'frío'], exp: 'Metáfora que describe la llegada total de la noche.' },
        { p: 'Lágrimas de las nubes', c: 'llovizna', dis: ['nieve', 'vaho', 'tormenta'], exp: 'Describe poéticamente las gotas precipitadas desde la atmósfera.' },
        { p: 'Manto de la noche', c: 'oscuridad', dis: ['sábana', 'luna', 'neblina'], exp: 'Metáfora que representa las tinieblas que cubren el entorno.' },
        { p: 'Espejo del cielo', c: 'lago sereno', dis: ['ventana', 'sol', 'nube'], exp: 'Alude a una superficie de agua tranquila que refleja el firmamento.' },
        { p: 'Fardo de pesadumbres', c: 'tristeza', dis: ['equipaje', 'pereza', 'rabia'], exp: 'Designa el peso anímico del dolor o la aflicción prolongada.' },
        { p: 'Sudor del amanecer', c: 'rocío', dis: ['escarcha', 'niebla', 'calor'], exp: 'Describe las diminutas gotas de humedad condensadas sobre la hierba.' },
        { p: 'Corona del bosque', c: 'copa de los árboles', dis: ['raíz', 'madera', 'musgo'], exp: 'Metáfora del dosel superior formado por las ramas y follaje.' },
        { p: 'Alfombra de la primavera', c: 'pradera florida', dis: ['alfombra', 'arena', 'tierra seca'], exp: 'Evoca el suelo campestre repleto de vegetación y flores.' },
        { p: 'Puente de plata sobre el mar', c: 'reflejo lunar', dis: ['embarcación', 'arrecife', 'muelle'], exp: 'Metáfora del brillo de la luna proyectado sobre las olas.' },
        { p: 'Velo de la mañana', c: 'neblina tenue', dis: ['nieve', 'sol', 'humo'], exp: 'Describe la bruma sutil que se disipa al subir la temperatura.' },
        { p: 'Vestidura del invierno', c: 'manto de nieve', dis: ['abrigo', 'hielo', 'viento'], exp: 'Alude a la capa blanca que cubre el paisaje durante los meses fríos.' },
        { p: 'Llama de la pasión', c: 'entusiasmo ferviente', dis: ['ceniza', 'enojo', 'miedo'], exp: 'Describe el ardor o convicción profunda que mueve a la acción.' },
        { p: 'Joyas del firmamento', c: 'estrellas', dis: ['planetas', 'diamantes', 'satélites'], exp: 'Metáfora que compara los astros luminosos con piedras preciosas.' },
        { p: 'Alas del pensamiento', c: 'imaginación', dis: ['memoria', 'sueño', 'razonamiento'], exp: 'Expresa la libertad y rapidez con la que viaja la mente creativa.' },
        { p: 'Ojos de la casa', c: 'ventanas', dis: ['puertas', 'paredes', 'luces'], exp: 'Metáfora que designa las aberturas por donde penetra la luz al hogar.' },
        { p: 'Brisa de esperanza', c: 'alivio oportuno', dis: ['duda', 'desesperanza', 'cansancio'], exp: 'Describe el sentimiento de consuelo y ánimo ante la dificultad.' },
        { p: 'Rocío de la juventud', c: 'vitalidad temprana', dis: ['infancia', 'vejez', 'experiencia'], exp: 'Alude al vigor, frescura y energía de los primeros años de vida.' },
        { p: 'Sombra del olvido', c: 'desaparición de la memoria', dis: ['recuerdo', 'nostalgia', 'tristeza'], exp: 'Metáfora para el desvanecimiento progresivo de lo vivido.' },
        { p: 'Faro de la sabiduría', c: 'guía intelectual', dis: ['antorcha', 'libro', 'escuela'], exp: 'Describe a quien o lo que orienta el conocimiento de los demás.' },
        { p: 'Pétalos del alba', c: 'luces matutinas', dis: ['flores', 'sol', 'nubes'], exp: 'Designa los primeros tonos y destellos de color al amanecer.' },
      ][v];
      const opts = formatOptions(phrases.c, phrases.dis);
      return {
        id: 8,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Significado de frases',
        questionText: `¿Qué significa la frase: <b>"${phrases.p}"</b>?`,
        ...opts,
        explanation: phrases.exp,
      };
    }

    case 9: {
      const phrases = [
        { p: 'Cuna de la corriente', c: 'manantial de montaña', dis: ['laguna', 'lluvia', 'mar'], exp: 'Lugar de origen geográfico de donde brota el agua.' },
        { p: 'Cuna del árbol', c: 'semilla', dis: ['rama', 'bosque', 'tallo'], exp: 'La semilla encierra el origen embrionario de donde brota el árbol.' },
        { p: 'Madre de las aguas', c: 'manantial', dis: ['nube', 'río', 'mar'], exp: 'Fuente natural de donde nace y surge la corriente de agua.' },
        { p: 'Pilar del cielo', c: 'montaña excelsa', dis: ['nube', 'torre', 'árbol'], exp: 'Metáfora de una cumbre rocosa que parece sostener la bóveda celeste.' },
        { p: 'Fragua del pensamiento', c: 'estudio constante', dis: ['fuego', 'memoria', 'sueño'], exp: 'El espacio o disciplina donde se moldean las ideas y el criterio.' },
        { p: 'Manantial de recuerdos', c: 'nostalgia', dis: ['laguna', 'fotografía', 'diario'], exp: 'Describe el flujo constante de evocaciones del pasado.' },
        { p: 'Cimiento del carácter', c: 'disciplina', dis: ['riqueza', 'orgullo', 'fuerza'], exp: 'Representa la virtud moral sobre la que se construye la personalidad.' },
        { p: 'Raíz del conocimiento', c: 'curiosidad', dis: ['libro', 'diploma', 'aula'], exp: 'El deseo de indagar y comprender como base de todo saber humano.' },
        { p: 'Semillero de artistas', c: 'academia formativa', dis: ['galería', 'museo', 'teatro'], exp: 'Lugar donde se cultivan las facultades estéticas de las personas.' },
        { p: 'Brújula de la conducta', c: 'ética', dis: ['ley', 'costumbre', 'miedo'], exp: 'Principio interior que orienta las decisiones justas y correctas.' },
        { p: 'Cantera del idioma', c: 'literatura clásica', dis: ['diccionario', 'gramática', 'prensa'], exp: 'Fuente nutricia de donde se extrae la riqueza léxica de una lengua.' },
        { p: 'Foco del entendimiento', c: 'razón', dis: ['instinto', 'emoción', 'ojo'], exp: 'Facultad humana que ilumina y distingue la verdad del error.' },
        { p: 'Crisol de culturas', c: 'sociedad diversa', dis: ['monumento', 'frontera', 'idioma'], exp: 'Lugar de encuentro donde se integran múltiples tradiciones.' },
        { p: 'Yunque de la paciencia', c: 'templanza en la adversidad', dis: ['hierro', 'martillo', 'resignación'], exp: 'Metáfora de la fortaleza de ánimo que resiste los golpes de la vida.' },
        { p: 'Fértil manantial de ideas', c: 'creatividad', dis: ['cuaderno', 'charla', 'cerebro'], exp: 'Habilidad espontánea para idear soluciones y propuestas novedosas.' },
        { p: 'Semillero de campeones', c: 'semillero deportivo', dis: ['cancha', 'trofeo', 'gimnasio'], exp: 'Espacio dedicado a desarrollar el talento de nuevos atletas.' },
        { p: 'Antorcha de la libertad', c: 'justicia soberana', dis: ['fuego', 'bandera', 'discurso'], exp: 'Principio civil que guía la emancipación de los pueblos.' },
        { p: 'Motor del progreso', c: 'innovación', dis: ['máquina', 'combustible', 'rueda'], exp: 'Capacidad de transformar favorablemente la tecnología y la vida.' },
        { p: 'Espejo de la sociedad', c: 'arte y costumbres', dis: ['cristal', 'política', 'moda'], exp: 'Manifestaciones que reflejan con fidelidad las virtudes y vicios comunitarios.' },
        { p: 'Escuela de la vida', c: 'experiencia adquirida', dis: ['colegio', 'edad', 'viaje'], exp: 'El aprendizaje directo obtenido mediante los aciertos y reveses vividos.' },
      ][v];
      const opts = formatOptions(phrases.c, phrases.dis);
      return {
        id: 9,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Significado de frases',
        questionText: `¿Qué representa la frase: <b>"${phrases.p}"</b>?`,
        ...opts,
        explanation: phrases.exp,
      };
    }

    case 10: {
      const phrases = [
        { p: 'Baliza del navegante', c: 'faro costero', dis: ['timón', 'muelle', 'brújula'], exp: 'Guía luminosa que orienta a los marineros en la costa.' },
        { p: 'Guardián de las horas', c: 'reloj', dis: ['tiempo', 'siglo', 'calendario'], exp: 'El reloj es el dispositivo que marca y custodia el paso horario.' },
        { p: 'Testigo de los siglos', c: 'monumento milenario', dis: ['historiador', 'reloj', 'libro'], exp: 'Edificación antigua que permanece en pie a través de las generaciones.' },
        { p: 'Custodio del saber', c: 'bibliotecario', dis: ['lector', 'tomo', 'escritorio'], exp: 'Persona encargada de resguardar y organizar el acervo bibliográfico.' },
        { p: 'Rueda de los meses', c: 'calendario', dis: ['rueda', 'estación', 'año'], exp: 'Sistema de cómputo que ordena los días y periodos del ciclo solar.' },
        { p: 'Balanza de la equidad', c: 'justicia', dis: ['peso', 'abogado', 'tribunal'], exp: 'Símbolo del equilibrio e imparcialidad en la aplicación de las leyes.' },
        { p: 'Voz del pueblo', c: 'opinión pública', dis: ['parlamento', 'noticia', 'grito'], exp: 'Conjunto de ideas y demandas compartidas por la ciudadanía.' },
        { p: 'Pulso de la economía', c: 'mercado financiero', dis: ['moneda', 'banco', 'fábrica'], exp: 'Indicador de la vitalidad y dinamismo del intercambio comercial.' },
        { p: 'Báculo de la vejez', c: 'sabiduría serena', dis: ['bastón', 'arruga', 'soledad'], exp: 'Soporte moral y prudencia ganada a lo largo de una vida longeva.' },
        { p: 'Viento de cambio', c: 'transformación social', dis: ['brisa', 'revolución', 'noticia'], exp: 'Movimiento que renueva estructuras y concepciones previas.' },
        { p: 'Memoria de la roca', c: 'fósil', dis: ['polvo', 'mina', 'volcán'], exp: 'Impronta biológica petrificada que atestigua formas de vida remotas.' },
        { p: 'Arquitecto del destino', c: 'voluntad propia', dis: ['azar', 'horóscopo', 'tiempo'], exp: 'Determinación personal para forjar el rumbo individual de vida.' },
        { p: 'Termómetro del éxito', c: 'resultados concretos', dis: ['dinero', 'fama', 'aplauso'], exp: 'Medida objetiva con la cual se comprueba si se alcanzó una meta.' },
        { p: 'Cimientos del edificio', c: 'base sustentadora', dis: ['ladrillo', 'cemento', 'techo'], exp: 'Estructura medular que confiere estabilidad a una construcción o proyecto.' },
        { p: 'Voz de la conciencia', c: 'escrúpulo moral', dis: ['grito', 'sueño', 'mente'], exp: 'Sentido interior que advierte sobre la corrección ética de un acto.' },
        { p: 'Esqueleto de la obra', c: 'armazón conceptual', dis: ['boceto', 'marco', 'papel'], exp: 'Estructura lógica que articula y sostiene el desarrollo de un texto o proyecto.' },
        { p: 'Válvula de escape', c: 'alivio de tensiones', dis: ['llave', 'vapor', 'fuga'], exp: 'Mecanismo o actividad mediante la cual se disipa la presión acumulada.' },
        { p: 'Filtro de la razón', c: 'espíritu crítico', dis: ['colador', 'lente', 'censura'], exp: 'Capacidad de examinar juicios antes de aceptarlos como verdaderos.' },
        { p: 'Palanca del cambio', c: 'educación integral', dis: ['fuerza', 'máquina', 'dinero'], exp: 'Herramienta fundamental para impulsar el desarrollo de los individuos.' },
        { p: 'Sello de distinción', c: 'autenticidad', dis: ['etiqueta', 'firma', 'lujo'], exp: 'Rasgo particular que singulariza y prestigia a una obra o persona.' },
      ][v];
      const opts = formatOptions(phrases.c, phrases.dis);
      return {
        id: 10,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Significado de frases',
        questionText: `La frase: <b>"${phrases.p}"</b> significa:`,
        ...opts,
        explanation: phrases.exp,
      };
    }

    case 11: {
      const phrases = [
        { p: 'Vena de plata de la sierra', c: 'yacimiento mineral', dis: ['nieve', 'camino', 'cascada'], exp: 'Metáfora geológica para una veta metálica subterránea.' },
        { p: 'Sangre de la tierra', c: 'petróleo', dis: ['agua', 'lava', 'mineral'], exp: 'Metáfora habitual para designar al hidrocarburo fósil extraído del subsuelo.' },
        { p: 'Pulmón del planeta', c: 'selva amazónica', dis: ['océano', 'atmósfera', 'glaciar'], exp: 'Refiere a las grandes masas boscosas generadoras de oxígeno.' },
        { p: 'Carbón vegetal del alma', c: 'rencor', dis: ['amor', 'esperanza', 'recuerdo'], exp: 'Residuo amargo que consume por dentro a quien lo alimenta.' },
        { p: 'Oro blanco de los Andes', c: 'litio', dis: ['plata', 'nieve', 'sal'], exp: 'Metáfora económica moderna del mineral alcalino codiciado en baterías.' },
        { p: 'Líquido de la vida', c: 'agua potable', dis: ['sangre', 'leche', 'jugo'], exp: 'Elemento indispensable para la subsistencia de los organismos vivos.' },
        { p: 'Techo del mundo', c: 'cordillera del Himalaya', dis: ['nube', 'cielo', 'polo norte'], exp: 'Designación geográfica de las cumbres más elevadas de la Tierra.' },
        { p: 'Oro negro del desierto', c: 'yacimiento petrolero', dis: ['arena', 'carbón', 'hierro'], exp: 'Riqueza de combustible fósil hallada bajo las arenas desérticas.' },
        { p: 'Cinturón de fuego', c: 'zona sísmica y volcánica', dis: ['ecuador', 'órbita', 'trópico'], exp: 'Región peripacífica de alta actividad tectónica y volcánica.' },
        { p: 'Espejo de obsidiana', c: 'noche cerrada', dis: ['espejo', 'vidrio', 'carbón'], exp: 'Imagen mesoamericana para la oscuridad densa y brillante.' },
        { p: 'Columna de humo', c: 'humareda ascendente', dis: ['nube', 'pilar', 'fuego'], exp: 'Rastro vertical que despide una combustión en el horizonte.' },
        { p: 'Aliento del volcán', c: 'fumarola de gases', dis: ['ceniza', 'lava', 'cráter'], exp: 'Emisión gaseosa y vaporosa emanada de las hendiduras volcánicas.' },
        { p: 'Costilla de la tierra', c: 'sierra montañosa', dis: ['roca', 'falla', 'valle'], exp: 'Metáfora visual de las cadenas de cerros que recorren el paisaje.' },
        { p: 'Lágrima del árbol', c: 'resina', dis: ['hoja', 'flor', 'savia'], exp: 'Sustancia viscosa segregada por los troncos de pinos y coníferas.' },
        { p: 'Piel del suelo', c: 'humus fértil', dis: ['hierba', 'arena', 'ladrillo'], exp: 'Capa superficial del terreno rica en materia orgánica propicia para el cultivo.' },
        { p: 'Arteria de la ciudad', c: 'avenida principal', dis: ['calle', 'metro', 'puente'], exp: 'Vía neurálgica por donde circula el flujo de tránsito urbano.' },
        { p: 'Corazón del pueblo', c: 'plaza central', dis: ['iglesia', 'mercado', 'alcaldía'], exp: 'Espacio medular de convivencia y punto de reunión cívica comunitaria.' },
        { p: 'Colmena humana', c: 'metrópoli transitada', dis: ['barrio', 'edificio', 'taller'], exp: 'Imagen de una urbe densamente poblada y llena de febril actividad.' },
        { p: 'Hilos invisibles de la red', c: 'conexiones digitales', dis: ['cables', 'antenas', 'satélites'], exp: 'Metáfora de las comunicaciones cibernéticas que enlazan a la humanidad.' },
        { p: 'Frontera del horizonte', c: 'límite visual', dis: ['muro', 'playa', 'abismo'], exp: 'Línea aparente donde la tierra y el cielo parecen encontrarse.' },
      ][v];
      const opts = formatOptions(phrases.c, phrases.dis);
      return {
        id: 11,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Significado de frases',
        questionText: `La frase: <b>"${phrases.p}"</b> alude a:`,
        ...opts,
        explanation: phrases.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 12 al 16: Analogías verbales
    // ------------------------------------------------------------------------
    case 12: {
      const data = [
        { a: 'Orfebre', b: 'joya', c: 'ebanista', d: 'mueble tallado', dis: ['madera', 'barniz', 'taller'], exp: 'Oficio artesanal y la obra culminada que crea.' },
        { a: 'Carpintero', b: 'mueble', c: 'alfarero', d: 'vasija', dis: ['barro', 'torno', 'horno'], exp: 'El artesano y el producto que elabora mediante su oficio.' },
        { a: 'Dramaturgo', b: 'obra teatral', c: 'compositor', d: 'sinfonía', dis: ['músico', 'piano', 'batuta'], exp: 'El autor creativo y la obra artística que compone.' },
        { a: 'Poeta', b: 'verso', c: 'novelista', d: 'capítulo', dis: ['libro', 'pluma', 'lector'], exp: 'El creador literario y la unidad textual con la que forja su arte.' },
        { a: 'Pintor', b: 'cuadro', c: 'grabador', d: 'estampa', dis: ['tinta', 'prensa', 'taller'], exp: 'El artista plástico y el objeto que produce con su técnica.' },
        { a: 'Zapatero', b: 'calzado', c: 'sastre', d: 'traje', dis: ['tela', 'aguja', 'botón'], exp: 'Oficio y la prenda de vestir que confecciona directamente.' },
        { a: 'Panadero', b: 'pan', c: 'repostero', d: 'pastel', dis: ['harina', 'dulce', 'horno'], exp: 'El artesano de la harina y su especialidad gastronómica.' },
        { a: 'Cineasta', b: 'película', c: 'coreógrafo', d: 'danza', dis: ['bailarín', 'música', 'teatro'], exp: 'El director escénico y la pieza coreográfica que diseña.' },
        { a: 'Herrero', b: 'herradura', c: 'joyero', d: 'anillo', dis: ['oro', 'gema', 'taller'], exp: 'El artífice y la pieza metálica moldeada que produce.' },
        { a: 'Diseñador', b: 'logotipo', c: 'tipógrafo', d: 'fuente', dis: ['letra', 'prensa', 'tinta'], exp: 'El profesional de las artes gráficas y su diseño fundamental.' },
        { a: 'Médico', b: 'diagnóstico', c: 'juez', d: 'sentencia', dis: ['tribunal', 'ley', 'abogado'], exp: 'El profesional facultado y el dictamen oficial que emite.' },
        { a: 'Docente', b: 'enseñanza', c: 'guía', d: 'orientación', dis: ['camino', 'mapa', 'viajero'], exp: 'La labor profesional y el servicio formativo que provee.' },
        { a: 'Científico', b: 'teoría', c: 'filósofo', d: 'doctrina', dis: ['libro', 'pensador', 'mente'], exp: 'El investigador y el cuerpo de ideas que postula formalmente.' },
        { a: 'Músico', b: 'melodía', c: 'cantante', d: 'canción', dis: ['voz', 'micrófono', 'escenario'], exp: 'El intérprete y la composición que entona con su arte.' },
        { a: 'Traductor', b: 'versión', c: 'intérprete', d: 'discurso', dis: ['idioma', 'voz', 'cabina'], exp: 'El mediador lingüístico y el texto o mensaje resultante.' },
        { a: 'Periodista', b: 'reportaje', c: 'editorialista', d: 'opinión', dis: ['periódico', 'noticia', 'pluma'], exp: 'El comunicador y el formato periodístico de su autoría.' },
        { a: 'Historiador', b: 'crónica', c: 'biógrafo', d: 'semblanza', dis: ['personaje', 'vida', 'tumba'], exp: 'El estudioso del tiempo y el relato testimonial que redacta.' },
        { a: 'Fotógrafo', b: 'retrato', c: 'ilustrador', d: 'viñeta', dis: ['lápiz', 'cómic', 'tinta'], exp: 'El artista de la imagen y la pieza visual que concibe.' },
        { a: 'Ingeniero', b: 'puente', c: 'programador', d: 'software', dis: ['computadora', 'código', 'red'], exp: 'El constructor y la estructura funcional que diseña e implementa.' },
        { a: 'Boticario', b: 'remedio', c: 'químico', d: 'solución', dis: ['matraz', 'laboratorio', 'tubo'], exp: 'El preparador y la mezcla curativa o sustancia que produce.' },
      ][v];
      const qText = `<b>${data.a}</b> es a <b>${data.b}</b> como <b>${data.c}</b> es a:`;
      const opts = formatOptions(data.d, data.dis);
      return {
        id: 12,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Analogías',
        instructions: 'En los ejercicios del 12 al 16 se presentan relaciones analógicas entre palabras. Seleccione la opción que mejor completa la relación.',
        questionText: qText,
        ...opts,
        explanation: data.exp,
      };
    }

    case 13: {
      const data = [
        { a: 'Luxómetro', b: 'iluminancia', c: 'decibelímetro', d: 'sonoridad', dis: ['eco', 'ruido', 'oído'], exp: 'Instrumento técnico y la magnitud acústica que cuantifica.' },
        { a: 'Odómetro', b: 'distancia', c: 'velocímetro', d: 'rapidez', dis: ['tiempo', 'freno', 'motor'], exp: 'Instrumento automotriz y la magnitud de movimiento que registra.' },
        { a: 'Reloj', b: 'tiempo', c: 'báscula', d: 'peso', dis: ['volumen', 'tamaño', 'forma'], exp: 'Instrumento de medición y la magnitud que cuantifica.' },
        { a: 'Brújula', b: 'orientación', c: 'plomada', d: 'verticalidad', dis: ['longitud', 'ángulo', 'peso'], exp: 'Herramienta técnica y el principio geométrico que verifica.' },
        { a: 'Anemómetro', b: 'viento', c: 'pluviómetro', d: 'lluvia', dis: ['nieve', 'granizo', 'humedad'], exp: 'Instrumento meteorológico y el fenómeno atmosférico que mide.' },
        { a: 'Transportador', b: 'ángulo', c: 'regla', d: 'longitud', dis: ['área', 'volumen', 'figura'], exp: 'Útil de dibujo geométrico y la medida que permite trazar.' },
        { a: 'Higrómetro', b: 'humedad', c: 'sismógrafo', d: 'terremoto', dis: ['viento', 'ola', 'marea'], exp: 'Aparato de detección y la perturbación ambiental que registra.' },
        { a: 'Dinamómetro', b: 'fuerza', c: 'tacómetro', d: 'revoluciones', dis: ['velocidad', 'gasolina', 'rueda'], exp: 'Dispositivo mecánico y la variable que cuantifica en operación.' },
        { a: 'Microscopio', b: 'célula', c: 'telescopio', d: 'estrella', dis: ['lente', 'espacio', 'cielo'], exp: 'Instrumento óptico y la dimensión del objeto que permite examinar.' },
        { a: 'Altímetro', b: 'altitud', c: 'sonar', d: 'profundidad', dis: ['agua', 'pez', 'submarino'], exp: 'Sensor técnico y la dimensión espacial que calcula en su medio.' },
        { a: 'Clinómetro', b: 'inclinación', c: 'calibrador', d: 'grosor', dis: ['peso', 'dureza', 'textura'], exp: 'Herramienta de precisión y la dimensión física que determina.' },
        { a: 'Voltímetro', b: 'voltaje', c: 'amperímetro', d: 'corriente', dis: ['resistencia', 'batería', 'chispa'], exp: 'Aparato de medición eléctrica y la magnitud de flujo que cuantifica.' },
        { a: 'Manómetro', b: 'presión de gases', c: 'densímetro', d: 'densidad', dis: ['peso', 'volumen', 'masa'], exp: 'Instrumento de fluidos y la propiedad física que evalúa.' },
        { a: 'Esfigmomanómetro', b: 'presión arterial', c: 'glucómetro', d: 'glucosa', dis: ['sangre', 'insulina', 'célula'], exp: 'Dispositivo clínico de diagnóstico y el parámetro vital que mide.' },
        { a: 'Fotómetro', b: 'intensidad de luz', c: 'sonómetro', d: 'decibeles de sonido', dis: ['música', 'oído', 'eco'], exp: 'Sensor ambiental y la unidad acústica que registra.' },
        { a: 'Podómetro', b: 'pasos', c: 'pulsómetro', d: 'frecuencia cardíaca', dis: ['carrera', 'sangre', 'sudor'], exp: 'Sensor deportivo personal y la señal fisiológica que monitorea.' },
        { a: 'Cuentakilómetros', b: 'recorrido', c: 'cronógrafo', d: 'lapso', dis: ['hora', 'reloj', 'segundo'], exp: 'Mecanismo de conteo y la magnitud que cuantifica.' },
        { a: 'Goniometro', b: 'ángulo articular', c: 'dinamómetro', d: 'fuerza muscular', dis: ['músculo', 'hueso', 'peso'], exp: 'Aparato de fisioterapia y la función motriz que evalúa.' },
        { a: 'Espectrómetro', b: 'longitud de onda', c: 'interferómetro', d: 'fase de ondas', dis: ['luz', 'prisma', 'color'], exp: 'Instrumento de física óptica y la propiedad analizada.' },
        { a: 'Piómetro', b: 'precipitación', c: 'heliógrafo', d: 'horas de sol', dis: ['calor', 'verano', 'cielo'], exp: 'Instrumento de estación meteorológica y la magnitud climática que registra.' },
      ][v];
      const qText = `<b>${data.a}</b> es a <b>${data.b}</b> como <b>${data.c}</b> es a:`;
      const opts = formatOptions(data.d, data.dis);
      return {
        id: 13,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Analogías',
        questionText: qText,
        ...opts,
        explanation: data.exp,
      };
    }

    case 14: {
      const data = [
        { a: 'Mural', b: 'contemplar', c: 'perfume', d: 'oler', dis: ['frasco', 'aroma', 'aire'], exp: 'Creación artística o sensorial y la acción perceptiva correspondiente.' },
        { a: 'Cuadro', b: 'contemplar', c: 'discurso', d: 'atender', dis: ['orador', 'tarima', 'aplauso'], exp: 'Obra perceptible y la actitud perceptiva adecuada frente a ella.' },
        { a: 'Comida', b: 'degustar', c: 'aroma', d: 'oler', dis: ['perfume', 'flor', 'aire'], exp: 'Estímulo sensorial y el verbo de recepción correspondiente.' },
        { a: 'Película', b: 'ver', c: 'novela', d: 'recorrer con la vista', dis: ['escribir', 'imprimir', 'comprar'], exp: 'Producto de comunicación y el sentido que lo procesa.' },
        { a: 'Escultura', b: 'palpar', c: 'paisaje', d: 'admirar', dis: ['caminar', 'dibujar', 'viajar'], exp: 'Realidad física exterior y la conducta estética con la que se capta.' },
        { a: 'Manjar', b: 'saborear', c: 'concierto', d: 'presenciar auditivamente', dis: ['cantar', 'bailar', 'pagar'], exp: 'Acontecimiento artístico y el sentido primario de disfrute.' },
        { a: 'Poema', b: 'recitar', c: 'obra dramática', d: 'actuar', dis: ['aplaudir', 'vestir', 'escribir'], exp: 'Texto lírico o teatral y su correspondiente puesta en práctica.' },
        { a: 'Monumento', b: 'visitar', c: 'conferencia', d: 'escuchar', dis: ['hablar', 'enseñar', 'grabar'], exp: 'Patrimonio material y la acción cultural que le corresponde.' },
        { a: 'Partitura', b: 'interpretar', c: 'plano', d: 'edificar', dis: ['dibujar', 'doblar', 'medir'], exp: 'Guía técnica codificada y la acción material que ejecuta su diseño.' },
        { a: 'Canción', b: 'entonar', c: 'cuento', d: 'narrar', dis: ['escribir', 'vender', 'leer'], exp: 'Composición oral y el acto de relatarla o transmitirla en público.' },
        { a: 'Pregunta', b: 'responder', c: 'desafío', d: 'afrontar', dis: ['esquivar', 'temer', 'proponer'], exp: 'Planteamiento inicial y la acción que le da resolución adecuada.' },
        { a: 'Acertijo', b: 'descifrar', c: 'laberinto', d: 'recorrer', dis: ['perderse', 'construir', 'mirar'], exp: 'Reto intelectual o espacial y la acción para resolverlo.' },
        { a: 'Herida', b: 'sanar', c: 'problema', d: 'resolver', dis: ['ignorar', 'causar', 'explicar'], exp: 'Situación desfavorable y la acción correctiva que restaura el orden.' },
        { a: 'Riesgo', b: 'mitigar', c: 'falta', d: 'corregir', dis: ['cometer', 'castigar', 'olvidar'], exp: 'Elemento perjudicial y la acción adecuada orientada a reducir su impacto.' },
        { a: 'Regla', b: 'acatar', c: 'promesa', d: 'cumplir', dis: ['jurar', 'romper', 'firmar'], exp: 'Pauta normativa o compromiso y la conducta de lealtad esperada.' },
        { a: 'Deuda', b: 'saldar', c: 'deber', d: 'asumir', dis: ['olvidar', 'cobrar', 'pedir'], exp: 'Compromiso moral o financiero y la acción formal de honrarlo.' },
        { a: 'Misterio', b: 'desvelar', c: 'duda', d: 'disipar', dis: ['tener', 'aumentar', 'creer'], exp: 'Incertidumbre cognitiva y el acto que aporta claridad sobre ella.' },
        { a: 'Obstáculo', b: 'superar', c: 'meta', d: 'alcanzar', dis: ['soñar', 'marcar', 'esperar'], exp: 'Dificultad en el trayecto y la conquista del objetivo final.' },
        { a: 'Código', b: 'desencriptar', c: 'enigma', d: 'solucionar', dis: ['ocultar', 'pensar', 'escribir'], exp: 'Mensaje cifrado y la acción que revela su contenido original.' },
        { a: 'Convenio', b: 'ratificar', c: 'pacto', d: 'sellar', dis: ['discutir', 'romper', 'olvidar'], exp: 'Acuerdo voluntario y la formalización que consolida su vigencia.' },
      ][v];
      const qText = `<b>${data.a}</b> es a <b>${data.b}</b> como <b>${data.c}</b> es a:`;
      const opts = formatOptions(data.d, data.dis);
      return {
        id: 14,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Analogías',
        questionText: qText,
        ...opts,
        explanation: data.exp,
      };
    }

    case 15: {
      const data = [
        { a: 'Vidriera', b: 'claraboya', c: 'linóleo', d: 'suelo interior', dis: ['techo', 'pared', 'puerta'], exp: 'Material de revestimiento y la superficie arquitectónica donde se coloca.' },
        { a: 'Alfombra', b: 'suelo', c: 'mural', d: 'muro', dis: ['pintura', 'museo', 'brocha'], exp: 'Elemento decorativo y el soporte arquitectónico donde se instala.' },
        { a: 'Teja', b: 'techo', c: 'adoquín', d: 'calle', dis: ['cemento', 'vereda', 'tierra'], exp: 'Pieza de recubrimiento estructural y el área que impermeabiliza o pavimenta.' },
        { a: 'Pintura', b: 'lienzo', c: 'escritura', d: 'papel', dis: ['tinta', 'letra', 'libro'], exp: 'Expresión gráfica y el soporte físico donde queda plasmada.' },
        { a: 'Tapete', b: 'recámara', c: 'tapiz', d: 'paredón', dis: ['aguja', 'hilo', 'taller'], exp: 'Objeto textil y la superficie habitacional a la que da abrigo visual.' },
        { a: 'Vidrio', b: 'ventana', c: 'madera', d: 'puerta', dis: ['árbol', 'clavo', 'chapa'], exp: 'Material esencial y la estructura arquitectónica que compone.' },
        { a: 'Riel', b: 'ferrocarril', c: 'pista', d: 'avión', dis: ['vuelo', 'aeropuerto', 'ala'], exp: 'Superficie de rodamiento y el vehículo que transita por ella.' },
        { a: 'Viga', b: 'techo', c: 'columna', d: 'piso', dis: ['pared', 'ladrillo', 'arena'], exp: 'Elemento estructural de soporte y la carga que sostiene en la edificación.' },
        { a: 'Barandal', b: 'escalera', c: 'cerca', d: 'jardín', dis: ['flor', 'hierba', 'árbol'], exp: 'Protección perimetral y el espacio delimitado que resguarda.' },
        { a: 'Asfalto', b: 'carretera', c: 'grava', d: 'sendero', dis: ['piedra', 'camino', 'bosque'], exp: 'Material de superficie y la vía terrestre de comunicación.' },
        { a: 'Césped', b: 'campo', c: 'arena', d: 'playa', dis: ['mar', 'ola', 'sol'], exp: 'Cubierta natural característica y el entorno geográfico que tapiza.' },
        { a: 'Lona', b: 'tienda', c: 'vela', d: 'embarcación', dis: ['viento', 'mar', 'mástil'], exp: 'Material flexible y el conjunto funcional que resguarda o impulsa.' },
        { a: 'Mosaico', b: 'muro', c: 'duela', d: 'piso interior', dis: ['árbol', 'tierra', 'mueble'], exp: 'Revestimiento seccional y la base horizontal sobre la que se ensambla.' },
        { a: 'Yeso', b: 'muro interior', c: 'mortero', d: 'junta de ladrillos', dis: ['cuchara', 'arena', 'agua'], exp: 'Material aglutinante y el espacio de fijación constructiva.' },
        { a: 'Reja', b: 'balcón', c: 'alambrada', d: 'límite de terreno', dis: ['poste', 'hierro', 'tierra'], exp: 'Elemento de contención protectora y el área periférica que resguarda.' },
        { a: 'Domo', b: 'azotea', c: 'tragaluz', d: 'plafón', dis: ['vidrio', 'sol', 'teja'], exp: 'Abertura superior que introduce luz natural al recinto habitado.' },
        { a: 'Cortina', b: 'ventanal', c: 'biombo', d: 'división de cuartos', dis: ['mueble', 'madera', 'pared'], exp: 'Elemento móvil de separación que brinda privacidad al espacio.' },
        { a: 'Césped sintético', b: 'estadio', c: 'tartán', d: 'pista de atletismo', dis: ['corredor', 'tenis', 'meta'], exp: 'Pavimento técnico amortiguante y el escenario deportivo donde se instala.' },
        { a: 'Placa conmemorativa', b: 'fachada', c: 'lápida', d: 'monumento fúnebre', dis: ['tierra', 'hierba', 'cruz'], exp: 'Inscripción solemne grabada y la estructura física de homenaje.' },
        { a: 'Pizarra', b: 'aula', c: 'pantalla', d: 'sala audiovisual', dis: ['proyector', 'asiento', 'cable'], exp: 'Medio de despliegue informativo y el recinto educativo en el que opera.' },
      ][v];
      const qText = `<b>${data.a}</b> es a <b>${data.b}</b> como <b>${data.c}</b> es a:`;
      const opts = formatOptions(data.d, data.dis);
      return {
        id: 15,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Analogías',
        questionText: qText,
        ...opts,
        explanation: data.exp,
      };
    }

    case 16: {
      const data = [
        { a: 'Validar', b: 'autenticar', c: 'examinar', d: 'inspeccionar', dis: ['aprobar', 'firmar', 'ignorar'], exp: 'Relación de sinonimia de acciones analíticas de verificación.' },
        { a: 'Aseverar', b: 'afirmar', c: 'indagar', d: 'averiguar', dis: ['concluir', 'olvidar', 'dudar'], exp: 'Sinonimia entre verbos que denotan indagación y búsqueda de información.' },
        { a: 'Refutar', b: 'contradecir', c: 'demostrar', d: 'evidenciar', dis: ['ocultar', 'suponer', 'opinar'], exp: 'Relación sinonímica entre verbos argumentativos de prueba lógica.' },
        { a: 'Elogiar', b: 'alabar', c: 'censurar', d: 'reprobar', dis: ['admirar', 'ignorar', 'premiar'], exp: 'Relación de sinonimia en expresiones de juicio valorativo moral.' },
        { a: 'Atenuar', b: 'mitigar', c: 'agudizar', d: 'intensificar', dis: ['calmar', 'detener', 'cambiar'], exp: 'Sinónimos que describen el incremento de intensidad o severidad.' },
        { a: 'Fomentar', b: 'promover', c: 'inhibir', d: 'reprimir', dis: ['solicitar', 'permitir', 'premiar'], exp: 'Sinonimia entre acciones que frenan o contienen el desarrollo de algo.' },
        { a: 'Sustentar', b: 'fundamentar', c: 'deducir', d: 'inferir', dis: ['adivinar', 'inventar', 'repetir'], exp: 'Verbos de lógica que expresan extracción formal de conclusiones.' },
        { a: 'Exhortar', b: 'animar', c: 'disuadir', d: 'desaconsejar', dis: ['obligar', 'permitir', 'mandar'], exp: 'Sinonimia entre verbos orientados a desviar la intención de actuar.' },
        { a: 'Constatar', b: 'verificar', c: 'estimar', d: 'calcular aproximadamente', dis: ['afirmar', 'ignorar', 'dudar'], exp: 'Sinonimia en procesos de apreciación y medición de magnitudes.' },
        { a: 'Dirimir', b: 'resolver un conflicto', c: 'postergar', d: 'aplazar', dis: ['acelerar', 'juzgar', 'olvidar'], exp: 'Sinónimos que implican diferir temporalmente una acción o evento.' },
        { a: 'Propagar', b: 'difundir', c: 'acopiar', d: 'recolectar', dis: ['repartir', 'vender', 'gastar'], exp: 'Sinonimia de acumulación y concentración metódica de elementos.' },
        { a: 'Esclarecer', b: 'dilucidar', c: 'tergiversar', d: 'distorsionar', dis: ['traducir', 'copiar', 'afirmar'], exp: 'Sinonimia en la deformación intencionada del sentido de un mensaje.' },
        { a: 'Ponderar', b: 'evaluar con mesura', c: 'precipitar', d: 'apresurar', dis: ['frenar', 'pensar', 'dudar'], exp: 'Sinonimia que alude al adelantamiento impulsivo de los acontecimientos.' },
        { a: 'Congregar', b: 'reunir', c: 'dispersar', d: 'diseminar', dis: ['juntar', 'ordenar', 'perder'], exp: 'Sinónimos que expresan la separación y esparcimiento de un grupo.' },
        { a: 'Subsanar', b: 'enmendar', c: 'reiterar', d: 'repetir', dis: ['olvidar', 'borrar', 'cambiar'], exp: 'Sinonimia de reiteración conceptual o verbal de un mismo contenido.' },
        { a: 'Instaurar', b: 'fundar', c: 'abolir', d: 'derogar', dis: ['reformar', 'publicar', 'firmar'], exp: 'Sinonimia jurídica referida a la anulación de una ley o costumbre.' },
        { a: 'Mermar', b: 'disminuir', c: 'acrecentar', d: 'incrementar', dis: ['frenar', 'mantener', 'invertir'], exp: 'Sinónimos referidos al aumento continuo de volumen, caudal o grado.' },
        { a: 'Disentir', b: 'discrepar', c: 'concordar', d: 'coincidir', dis: ['opinar', 'hablar', 'ceder'], exp: 'Sinonimia entre posturas que convergen en el mismo punto de vista.' },
        { a: 'Coadyuvar', b: 'colaborar', c: 'entorpecer', d: 'obstaculizar', dis: ['apoyar', 'mirar', 'ceder'], exp: 'Sinonimia de acciones que traban o dificultan la realización de un fin.' },
        { a: 'Plasmar', b: 'materializar', c: 'esbozar', d: 'bosquejar', dis: ['borrar', 'firmar', 'romper'], exp: 'Sinónimos que designan el trazo preliminar o esquema inicial de una idea.' },
      ][v];
      const qText = `<b>${data.a}</b> es a <b>${data.b}</b> como <b>${data.c}</b> es a:`;
      const opts = formatOptions(data.d, data.dis);
      return {
        id: 16,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Analogías',
        questionText: qText,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 17 al 21: Secuencias alfanuméricas
    // ------------------------------------------------------------------------
    case 17: {
      const data = [
        { seq: '3b, 6c, 18d, 72e, ___.', c: '360f', dis: ['144f', '216f', '720g'], exp: 'Factores multiplicativos ×2, ×3, ×4, ×5 (72×5=360) y letras correlativas b, c, d, e, f.' },
        { seq: '2a, 4b, 12c, 48d, ___.', c: '240e', dis: ['96e', '120e', '480f'], exp: 'Números multiplican por 2, 3, 4, 5 (48×5=240) y letras siguen orden correlativo: a, b, c, d, e.' },
        { seq: '3m, 6n, 18o, 72p, ___.', c: '360q', dis: ['144q', '216q', '720r'], exp: 'Multiplicadores sucesivos: ×2, ×3, ×4, ×5 (72×5=360) y letras: m, n, o, p, q.' },
        { seq: '1b, 3c, 9d, 27e, ___.', c: '81f', dis: ['54f', '64f', '243g'], exp: 'Progresión geométrica de razón 3 (27×3=81) y letras correlativas b, c, d, e, f.' },
        { seq: '4z, 8y, 24x, 96w, ___.', c: '480v', dis: ['192v', '384v', '576u'], exp: 'Factores multiplicativos 2, 3, 4, 5 (96×5=480) y letras en retroceso: z, y, x, w, v.' },
        { seq: '2p, 6q, 24r, 120s, ___.', c: '720t', dis: ['240t', '480t', '600u'], exp: 'Serie factorial: ×3, ×4, ×5, ×6 (120×6=720) con letras correlativas p, q, r, s, t.' },
        { seq: '5c, 10d, 30e, 120f, ___.', c: '600g', dis: ['240g', '480g', '720h'], exp: 'Multiplicadores ×2, ×3, ×4, ×5 (120×5=600) y letras consecutivas c, d, e, f, g.' },
        { seq: '1k, 4l, 16m, 64n, ___.', c: '256o', dis: ['128o', '192o', '512p'], exp: 'Potencias de 4 (64×4=256) con letras alfabéticas consecutivas: k, l, m, n, o.' },
        { seq: '2d, 8e, 32f, 128g, ___.', c: '512h', dis: ['256h', '384h', '1024i'], exp: 'Progresión de razón 4 (128×4=512) y letras d, e, f, g, h.' },
        { seq: '3r, 9s, 36t, 180u, ___.', c: '1080v', dis: ['540v', '720v', '900w'], exp: 'Patrón de multiplicación: ×3, ×4, ×5, ×6 (180×6=1080) y letras r, s, t, u, v.' },
        { seq: '1f, 5g, 25h, 125i, ___.', c: '625j', dis: ['250j', '500j', '750k'], exp: 'Potencias de base 5 (125×5=625) con letras correlativas f, g, h, i, j.' },
        { seq: '2g, 6h, 18i, 54j, ___.', c: '162k', dis: ['108k', '128k', '216l'], exp: 'Razón geométrica de 3 (54×3=162) y letras en orden consecutivo g, h, i, j, k.' },
        { seq: '4a, 12b, 48c, 240d, ___.', c: '1440e', dis: ['720e', '960e', '1200f'], exp: 'Multiplicadores crecientes: ×3, ×4, ×5, ×6 (240×6=1440) y letras a, b, c, d, e.' },
        { seq: '1h, 2i, 8j, 48k, ___.', c: '384l', dis: ['192l', '240l', '576m'], exp: 'Factores pares: ×2, ×4, ×6, ×8 (48×8=384) y letras h, i, j, k, l.' },
        { seq: '3a, 6b, 24c, 144d, ___.', c: '1152e', dis: ['576e', '864e', '1008f'], exp: 'Factores que duplican: ×2, ×4, ×6, ×8 (144×8=1152) y letras a, b, c, d, e.' },
        { seq: '5m, 15n, 60o, 300p, ___.', c: '1800q', dis: ['900q', '1200q', '1500r'], exp: 'Multiplicadores ×3, ×4, ×5, ×6 (300×6=1800) y letras m, n, o, p, q.' },
        { seq: '2t, 10u, 60v, 420w, ___.', c: '3360x', dis: ['1680x', '2100x', '2520y'], exp: 'Factores consecutivos: ×5, ×6, ×7, ×8 (420×8=3360) y letras t, u, v, w, x.' },
        { seq: '1x, 3w, 12v, 60u, ___.', c: '360t', dis: ['180t', '240t', '480s'], exp: 'Multiplicadores ×3, ×4, ×5, ×6 (60×6=360) y letras en sentido inverso: x, w, v, u, t.' },
        { seq: '4k, 8l, 32m, 192n, ___.', c: '1536o', dis: ['768o', '960o', '1152p'], exp: 'Factores ×2, ×4, ×6, ×8 (192×8=1536) y letras consecutivas k, l, m, n, o.' },
        { seq: '2s, 4t, 16u, 96v, ___.', c: '768w', dis: ['384w', '480w', '576x'], exp: 'Multiplicación escalonada: ×2, ×4, ×6, ×8 (96×8=768) con letras s, t, u, v, w.' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 17,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Secuencias alfanuméricas',
        instructions: 'En los ejercicios del 17 al 21 se ofrecen secuencias alfanuméricas incompletas. Seleccione la opción que mejor completa la secuencia.',
        questionText: `¿Qué término completa la secuencia: <b>${data.seq}</b>?`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 18: {
      const data = [
        { seq: '(2,4), (5,9), (8,14), (___,___).', c: '(11,19)', dis: ['(10,18)', '(11,18)', '(12,20)'], exp: 'Primer componente suma 3 (2→5→8→11) y segundo suma 5 (4→9→14→19).' },
        { seq: '(2,3), (5,7), (8,11), (___,___).', c: '(11,15)', dis: ['(10,14)', '(11,13)', '(12,16)'], exp: 'Primer elemento suma 3 (2→5→8→11) y segundo suma 4 (3→7→11→15).' },
        { seq: '(3,1), (7,4), (11,7), (___,___).', c: '(15,10)', dis: ['(14,9)', '(15,9)', '(16,11)'], exp: 'Primer componente suma 4 (3→7→11→15) y segundo suma 3 (1→4→7→10).' },
        { seq: '(1,5), (3,9), (5,13), (___,___).', c: '(7,17)', dis: ['(6,16)', '(7,15)', '(8,18)'], exp: 'Primer término suma 2 (1→3→5→7) y el segundo suma 4 (5→9→13→17).' },
        { seq: '(4,2), (9,6), (14,10), (___,___).', c: '(19,14)', dis: ['(18,12)', '(19,12)', '(20,15)'], exp: 'Primer término suma 5 (4→9→14→19) y el segundo suma 4 (2→6→10→14).' },
        { seq: '(2,4), (6,9), (10,14), (___,___).', c: '(14,19)', dis: ['(13,18)', '(14,18)', '(15,20)'], exp: 'Primer valor suma 4 (2→6→10→14) y segundo suma 5 (4→9→14→19).' },
        { seq: '(5,1), (8,5), (11,9), (___,___).', c: '(14,13)', dis: ['(13,12)', '(14,12)', '(15,14)'], exp: 'Primer elemento suma 3 (5→8→11→14) y segundo suma 4 (1→5→9→13).' },
        { seq: '(1,3), (5,8), (9,13), (___,___).', c: '(13,18)', dis: ['(12,17)', '(13,16)', '(14,19)'], exp: 'Primer valor suma 4 (1→5→9→13) y segundo suma 5 (3→8→13→18).' },
        { seq: '(3,2), (8,7), (13,12), (___,___).', c: '(18,17)', dis: ['(17,16)', '(18,15)', '(19,18)'], exp: 'Ambos términos avanzan en 5 unidades: (13+5=18, 12+5=17).' },
        { seq: '(6,3), (10,8), (14,13), (___,___).', c: '(18,18)', dis: ['(17,17)', '(18,16)', '(19,19)'], exp: 'Primer valor suma 4 (6→10→14→18) y segundo suma 5 (3→8→13→18).' },
        { seq: '(2,1), (7,4), (12,7), (___,___).', c: '(17,10)', dis: ['(16,9)', '(17,9)', '(18,11)'], exp: 'Primer componente suma 5 (2→7→12→17) y segundo suma 3 (1→4→7→10).' },
        { seq: '(1,4), (4,9), (7,14), (___,___).', c: '(10,19)', dis: ['(9,18)', '(10,18)', '(11,20)'], exp: 'Primer valor suma 3 (1→4→7→10) y segundo suma 5 (4→9→14→19).' },
        { seq: '(3,3), (9,7), (15,11), (___,___).', c: '(21,15)', dis: ['(20,14)', '(21,14)', '(22,16)'], exp: 'Primer término suma 6 (3→9→15→21) y segundo suma 4 (3→7→11→15).' },
        { seq: '(4,1), (8,6), (12,11), (___,___).', c: '(16,16)', dis: ['(15,15)', '(16,15)', '(17,17)'], exp: 'Primer valor suma 4 (4→8→12→16) y segundo suma 5 (1→6→11→16).' },
        { seq: '(2,2), (5,8), (8,14), (___,___).', c: '(11,20)', dis: ['(10,18)', '(11,18)', '(12,22)'], exp: 'Primer valor suma 3 (2→5→8→11) y segundo suma 6 (2→8→14→20).' },
        { seq: '(1,6), (6,11), (11,16), (___,___).', c: '(16,21)', dis: ['(15,20)', '(16,20)', '(17,22)'], exp: 'Ambos términos avanzan de 5 en 5: (11+5=16, 16+5=21).' },
        { seq: '(5,2), (9,7), (13,12), (___,___).', c: '(17,17)', dis: ['(16,16)', '(17,15)', '(18,18)'], exp: 'Primer término suma 4 (5→9→13→17) y segundo suma 5 (2→7→12→17).' },
        { seq: '(2,5), (8,10), (14,15), (___,___).', c: '(20,20)', dis: ['(19,19)', '(20,19)', '(21,21)'], exp: 'Primer componente suma 6 (2→8→14→20) y segundo suma 5 (5→10→15→20).' },
        { seq: '(3,4), (7,10), (11,16), (___,___).', c: '(15,22)', dis: ['(14,20)', '(15,20)', '(16,24)'], exp: 'Primer componente suma 4 (3→7→11→15) y segundo suma 6 (4→10→16→22).' },
        { seq: '(1,1), (6,5), (11,9), (___,___).', c: '(16,13)', dis: ['(15,12)', '(16,12)', '(17,14)'], exp: 'Primer valor suma 5 (1→6→11→16) y segundo suma 4 (1→5→9→13).' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 18,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Secuencias alfanuméricas',
        questionText: `Seleccione el par que completa la secuencia: <b>${data.seq}</b>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 19: {
      const data = [
        { seq: '15K, ___, 27M, 33N.', c: '21L', dis: ['19L', '20L', '22M'], exp: 'Los números aumentan de 6 en 6 (15+6=21, 21+6=27) y las letras son correlativas (K, L, M, N).' },
        { seq: '12J, ___, 22L, 27M.', c: '17K', dis: ['15K', '16K', '18L'], exp: 'Números suman 5 (12+5=17, 17+5=22) y letras avanzan una posición (J, K, L, M).' },
        { seq: '15P, ___, 25R, 30S.', c: '20Q', dis: ['18Q', '19Q', '21R'], exp: 'Números avanzan de 5 en 5 (15+5=20) y letras consecutivas (P, Q, R, S).' },
        { seq: '14B, ___, 26D, 32E.', c: '20C', dis: ['18C', '19C', '21D'], exp: 'Números suman 6 (14+6=20, 20+6=26) y letras en orden alfabético (B, C, D, E).' },
        { seq: '21G, ___, 31I, 36J.', c: '26H', dis: ['24H', '25H', '27I'], exp: 'Suma de 5 en 5 (21+5=26, 26+5=31) y letras consecutivas (G, H, I, J).' },
        { seq: '18M, ___, 28O, 33P.', c: '23N', dis: ['21N', '22N', '24O'], exp: 'Incremento numérico de 5 unidades y progresión alfabética (M, N, O, P).' },
        { seq: '11T, ___, 25V, 32W.', c: '18U', dis: ['16U', '17U', '19V'], exp: 'Números suman 7 (11+7=18, 18+7=25) y letras consecutivas (T, U, V, W).' },
        { seq: '16A, ___, 28C, 34D.', c: '22B', dis: ['20B', '21B', '23C'], exp: 'Números suman 6 (16+6=22, 22+6=28) y letras en orden consecutivo (A, B, C, D).' },
        { seq: '25E, ___, 37G, 43H.', c: '31F', dis: ['29F', '30F', '32G'], exp: 'Números suman 6 (25+6=31, 31+6=37) y letras correlativas (E, F, G, H).' },
        { seq: '13K, ___, 21M, 25N.', c: '17L', dis: ['15L', '16L', '18M'], exp: 'Números suman 4 (13+4=17, 17+4=21) y letras correlativas (K, L, M, N).' },
        { seq: '22R, ___, 32T, 37U.', c: '27S', dis: ['25S', '26S', '28T'], exp: 'Aumento constante de 5 en 5 con avance alfabético (R, S, T, U).' },
        { seq: '10C, ___, 22E, 28F.', c: '16D', dis: ['14D', '15D', '17E'], exp: 'Números suman 6 (10+6=16, 16+6=22) y letras consecutivas (C, D, E, F).' },
        { seq: '17W, ___, 27Y, 32Z.', c: '22X', dis: ['20X', '21X', '23Y'], exp: 'Números suman 5 (17+5=22) y letras correlativas (W, X, Y, Z).' },
        { seq: '30H, ___, 42J, 48K.', c: '36I', dis: ['34I', '35I', '37J'], exp: 'Números suman 6 (30+6=36) y letras en orden alfabético (H, I, J, K).' },
        { seq: '23L, ___, 31N, 35O.', c: '27M', dis: ['25M', '26M', '28N'], exp: 'Números suman 4 (23+4=27) y letras en secuencia (L, M, N, O).' },
        { seq: '19P, ___, 31R, 37S.', c: '25Q', dis: ['23Q', '24Q', '26R'], exp: 'Números suman 6 (19+6=25) y letras consecutivas (P, Q, R, S).' },
        { seq: '14F, ___, 24H, 29I.', c: '19G', dis: ['17G', '18G', '20H'], exp: 'Números suman 5 (14+5=19) y letras en orden consecutivo (F, G, H, I).' },
        { seq: '27U, ___, 39W, 45X.', c: '33V', dis: ['31V', '32V', '34W'], exp: 'Números suman 6 (27+6=33) y letras correlativas (U, V, W, X).' },
        { seq: '18B, ___, 26D, 30E.', c: '22C', dis: ['20C', '21C', '23D'], exp: 'Números suman 4 (18+4=22) y letras consecutivas (B, C, D, E).' },
        { seq: '20N, ___, 32P, 38Q.', c: '26O', dis: ['24O', '25O', '27P'], exp: 'Números suman 6 (20+6=26) y letras correlativas (N, O, P, Q).' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 19,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Secuencias alfanuméricas',
        questionText: `Seleccione el elemento que completa el espacio en blanco: <b>${data.seq}</b>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 20: {
      const data = [
        { seq: '2, W, 4, U, 8, S, 16, Q, ___, ___.', c: '32, O', dis: ['24, P', '32, P', '28, O'], exp: 'Números duplican (16×2=32) y letras retroceden 2 posiciones (W, U, S, Q, O).' },
        { seq: '2, Z, 4, X, 8, V, 16, T, ___, ___.', c: '32, R', dis: ['24, S', '32, S', '28, R'], exp: 'Números multiplican por 2 (16×2=32) y letras retroceden de 2 en 2 (Z, X, V, T, R).' },
        { seq: '3, M, 6, K, 12, I, 24, G, ___, ___.', c: '48, E', dis: ['36, F', '48, F', '40, E'], exp: 'Números duplican (24×2=48) y letras retroceden 2 lugares (M, K, I, G, E).' },
        { seq: '1, P, 3, N, 9, L, 27, J, ___, ___.', c: '81, H', dis: ['54, I', '81, I', '64, H'], exp: 'Números multiplican por 3 (27×3=81) y letras retroceden de 2 en 2 (P, N, L, J, H).' },
        { seq: '5, Y, 10, W, 20, U, 40, S, ___, ___.', c: '80, Q', dis: ['60, R', '80, R', '70, Q'], exp: 'Números duplican (40×2=80) y letras retroceden 2 posiciones (Y, W, U, S, Q).' },
        { seq: '2, O, 6, M, 18, K, 54, I, ___, ___.', c: '162, G', dis: ['108, H', '162, H', '128, G'], exp: 'Números triplican (54×3=162) y letras retroceden de 2 en 2 (O, M, K, I, G).' },
        { seq: '4, T, 8, R, 16, P, 32, N, ___, ___.', c: '64, L', dis: ['48, M', '64, M', '56, L'], exp: 'Números duplican (32×2=64) y letras retroceden 2 letras (T, R, P, N, L).' },
        { seq: '1, U, 2, S, 4, Q, 8, O, ___, ___.', c: '16, M', dis: ['12, N', '16, N', '14, M'], exp: 'Números duplican (8×2=16) y letras retroceden 2 posiciones (U, S, Q, O, M).' },
        { seq: '3, W, 6, U, 12, S, 24, Q, ___, ___.', c: '48, O', dis: ['36, P', '48, P', '42, O'], exp: 'Números duplican (24×2=48) y letras retroceden de 2 en 2 (W, U, S, Q, O).' },
        { seq: '2, K, 4, I, 8, G, 16, E, ___, ___.', c: '32, C', dis: ['24, D', '32, D', '28, C'], exp: 'Números duplican (16×2=32) y letras retroceden 2 lugares (K, I, G, E, C).' },
        { seq: '1, L, 3, J, 9, H, 27, F, ___, ___.', c: '81, D', dis: ['54, E', '81, E', '64, D'], exp: 'Números triplican (27×3=81) y letras retroceden de 2 en 2 (L, J, H, F, D).' },
        { seq: '5, R, 10, P, 20, N, 40, L, ___, ___.', c: '80, J', dis: ['60, K', '80, K', '70, J'], exp: 'Números duplican (40×2=80) y letras retroceden 2 lugares (R, P, N, L, J).' },
        { seq: '2, V, 6, T, 18, R, 54, P, ___, ___.', c: '162, N', dis: ['108, O', '162, O', '120, N'], exp: 'Números triplican (54×3=162) y letras retroceden de 2 en 2 (V, T, R, P, N).' },
        { seq: '4, Q, 8, O, 16, M, 32, K, ___, ___.', c: '64, I', dis: ['48, J', '64, J', '56, I'], exp: 'Números duplican (32×2=64) y letras retroceden 2 lugares (Q, O, M, K, I).' },
        { seq: '1, X, 2, V, 4, T, 8, R, ___, ___.', c: '16, P', dis: ['12, Q', '16, Q', '14, P'], exp: 'Números duplican (8×2=16) y letras retroceden 2 posiciones (X, V, T, R, P).' },
        { seq: '3, S, 6, Q, 12, O, 24, M, ___, ___.', c: '48, K', dis: ['36, L', '48, L', '40, K'], exp: 'Números duplican (24×2=48) y letras retroceden de 2 en 2 (S, Q, O, M, K).' },
        { seq: '2, N, 4, L, 8, J, 16, H, ___, ___.', c: '32, F', dis: ['24, G', '32, G', '28, F'], exp: 'Números duplican (16×2=32) y letras retroceden 2 letras (N, L, J, H, F).' },
        { seq: '1, T, 3, R, 9, P, 27, N, ___, ___.', c: '81, L', dis: ['54, M', '81, M', '60, L'], exp: 'Números triplican (27×3=81) y letras retroceden de 2 en 2 (T, R, P, N, L).' },
        { seq: '5, M, 10, K, 20, I, 40, G, ___, ___.', c: '80, E', dis: ['60, F', '80, F', '70, E'], exp: 'Números duplican (40×2=80) y letras retroceden 2 posiciones (M, K, I, G, E).' },
        { seq: '2, Y, 6, W, 18, U, 54, S, ___, ___.', c: '162, Q', dis: ['108, R', '162, R', '128, Q'], exp: 'Números triplican (54×3=162) y letras retroceden de 2 en 2 (Y, W, U, S, Q).' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 20,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Secuencias alfanuméricas',
        questionText: `¿Qué elementos completan los dos últimos términos de la secuencia: <b>${data.seq}</b>?`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 21: {
      const data = [
        { seq: '1b, 4E, 7h, 10K, ___.', c: '13n', dis: ['12m', '13N', '14o'], exp: 'Números aumentan de 3 en 3 (4, 7, 10, 13, 16) y letras avanzan 3 posiciones alternando caja: b, E, h, K, n.' },
        { seq: '3b, 5E, 7h, 9K, ___.', c: '11n', dis: ['10l', '11M', '12n'], exp: 'Números suman 2 en cada paso. Letras avanzan 3 posiciones con alternancia de caja: b, E, h, K, n.' },
        { seq: '4c, 6F, 8i, 10L, ___.', c: '12o', dis: ['11m', '12N', '14o'], exp: 'Números suman 2. Letras avanzan 3 lugares alternando minúscula/mayúscula: c, F, i, L, o.' },
        { seq: '2d, 4G, 6j, 8M, ___.', c: '10p', dis: ['9n', '10O', '12p'], exp: 'Números aumentan de 2 en 2 (8+2=10). Letras avanzan 3 posiciones (d, G, j, M, p).' },
        { seq: '6e, 8H, 10k, 12N, ___.', c: '14q', dis: ['13o', '14P', '16q'], exp: 'Números avanzan de 2 en 2 y letras avanzan 3 posiciones alternando caja.' },
        { seq: '1a, 4D, 7g, 10J, ___.', c: '13m', dis: ['12l', '13L', '14m'], exp: 'Números suman 3 (1, 4, 7, 10, 13). Letras avanzan 3 lugares: a, D, g, J, m.' },
        { seq: '2b, 5E, 8h, 11K, ___.', c: '14n', dis: ['13m', '14M', '15n'], exp: 'Números suman 3 (11+3=14). Letras avanzan 3 posiciones con alternancia de caja.' },
        { seq: '3c, 6F, 9i, 12L, ___.', c: '15o', dis: ['14n', '15N', '16o'], exp: 'Números avanzan en múltiplos de 3 (12+3=15). Letras avanzan 3 lugares: c, F, i, L, o.' },
        { seq: '4d, 7G, 10j, 13M, ___.', c: '16p', dis: ['15o', '16O', '17p'], exp: 'Números suman 3 (13+3=16). Letras avanzan de 3 en 3 alternando minúscula y mayúscula.' },
        { seq: '5e, 8H, 11k, 14N, ___.', c: '17q', dis: ['16p', '17P', '18q'], exp: 'Números suman 3 (14+3=17). Letras avanzan 3 lugares en orden alfabético.' },
        { seq: '7a, 9D, 11g, 13J, ___.', c: '15m', dis: ['14l', '15L', '16m'], exp: 'Números impares consecutivos (13+2=15). Letras avanzan 3 lugares alternando caja.' },
        { seq: '8b, 10E, 12h, 14K, ___.', c: '16n', dis: ['15m', '16M', '17n'], exp: 'Números pares consecutivos (14+2=16). Letras avanzan 3 lugares: b, E, h, K, n.' },
        { seq: '9c, 11F, 13i, 15L, ___.', c: '17o', dis: ['16n', '17N', '18o'], exp: 'Números aumentan de 2 en 2 (15+2=17). Letras avanzan 3 posiciones.' },
        { seq: '10d, 12G, 14j, 16M, ___.', c: '18p', dis: ['17o', '18O', '19p'], exp: 'Números suman 2 en cada paso (16+2=18). Letras avanzan 3 posiciones alternando caja.' },
        { seq: '11e, 13H, 15k, 17N, ___.', c: '19q', dis: ['18p', '19P', '20q'], exp: 'Números impares (17+2=19). Letras avanzan 3 lugares: e, H, k, N, q.' },
        { seq: '1f, 3I, 5l, 7O, ___.', c: '9r', dis: ['8p', '9Q', '10r'], exp: 'Números impares (7+2=9). Letras avanzan 3 lugares: f, I, l, O, r.' },
        { seq: '2g, 4J, 6m, 8P, ___.', c: '10s', dis: ['9q', '10R', '11s'], exp: 'Números pares (8+2=10). Letras avanzan 3 posiciones con alternancia de caja.' },
        { seq: '3h, 5K, 7n, 9Q, ___.', c: '11t', dis: ['10r', '11S', '12t'], exp: 'Números avanzan de 2 en 2 (9+2=11). Letras avanzan 3 posiciones: h, K, n, Q, t.' },
        { seq: '4i, 6L, 8o, 10R, ___.', c: '12u', dis: ['11s', '12T', '13u'], exp: 'Números suman 2 (10+2=12). Letras avanzan 3 lugares alternando minúscula y mayúscula.' },
        { seq: '5j, 7M, 9p, 11S, ___.', c: '13v', dis: ['12t', '13U', '14v'], exp: 'Números impares consecutivos (11+2=13). Letras avanzan 3 posiciones: j, M, p, S, v.' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 21,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Secuencias alfanuméricas',
        questionText: `Seleccione la opción que continúa la secuencia: <b>${data.seq}</b>`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 22 al 26: Matrices lógicas y numéricas (3x3 y distribuciones)
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Reactivos 22 al 26: Matrices lógicas y numéricas (3x3 y distribuciones)
    // ------------------------------------------------------------------------
    case 22: {
      const base = 2 + v; // 2..21 (20 únicos)
      const mult = 3 + (v % 3);
      const r1 = [base, base * 2, base * 3];
      const r2 = [base * mult, base * mult * 2, base * mult * 3];
      const r3_1 = base * (mult + 2);
      const r3_2 = base * (mult + 2) * 2;
      const ans = base * (mult + 2) * 3;
      const qText = `Considere la siguiente matriz numérica para la variante ${v + 1}:<br><br>` +
        `[ ${r1[0]} | ${r1[1]} | ${r1[2]} ]<br>` +
        `[ ${r2[0]} | ${r2[1]} | ${r2[2]} ]<br>` +
        `[ ${r3_1} | ${r3_2} | <b>?</b> ]<br><br>` +
        `¿Qué número completa lógicamente el casillero faltante?`;
      const opts = formatOptions(`${ans}`, [`${ans - base}`, `${ans + base * 2}`, `${ans * 2 + 1}`]);
      return {
        id: 22,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Matrices lógicas',
        diagramType: 'matrix',
        diagramData: { rows: [[r1[0], r1[1], r1[2]], [r2[0], r2[1], r2[2]], [r3_1, r3_2, '?']] },
        questionText: qText,
        ...opts,
        explanation: `En cada fila, la segunda columna es el doble de la primera, y la tercera es el triple de la primera. Para la última fila: ${r3_1} × 3 = ${ans}.`,
      };
    }

    case 23: {
      const a = 2 + v; // 2..21 (20 únicos)
      const k = 2 + (v % 3);
      const b = a + 3;
      const c = a + 5;
      const prod1 = a * k + 1;
      const prod2 = b * k + 1;
      const ans = c * k + 1;
      const qText = `Observe la distribución operacional en las filas (caso ${v + 1}):<br><br>` +
        `Fila 1: [ ${a} | ${k} | ${prod1} ]<br>` +
        `Fila 2: [ ${b} | ${k} | ${prod2} ]<br>` +
        `Fila 3: [ ${c} | ${k} | <b>?</b> ]<br><br>` +
        `Seleccione el valor que completa la tercera fila:`;
      const opts = formatOptions(`${ans}`, [`${ans - 2}`, `${ans + 3}`, `${c * (k + 1)}`]);
      return {
        id: 23,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Matrices lógicas',
        questionText: qText,
        ...opts,
        explanation: `La regla operacional entre columnas es: (Columna 1 × Columna 2) + 1 = Columna 3. Por lo tanto, (${c} × ${k}) + 1 = ${ans}.`,
      };
    }

    case 24: {
      const step = 3 + (v % 4);
      const s1 = 10 + v * 4; // 10..86 (20 únicos)
      const s2 = s1 + step;
      const s3 = s2 + step;
      const s4 = s3 + step;
      const ans = s4 + step;
      const qText = `En la matriz cuadrada (serie ${v + 1}), cada término avanza de forma constante:<br><br>` +
        `[ ${s1} | ${s2} ]<br>` +
        `[ ${s3} | ${s4} ]<br>` +
        `Siguiente término de la secuencia proyectada: <b>?</b>`;
      const opts = formatOptions(`${ans}`, [`${ans - step + 1}`, `${ans + step}`, `${ans - 2 * step}`]);
      return {
        id: 24,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Matrices lógicas',
        questionText: qText,
        ...opts,
        explanation: `El incremento entre celdas sucesivas es de ${step} unidades. Por lo tanto, el siguiente valor es ${s4} + ${step} = ${ans}.`,
      };
    }

    case 25: {
      const x = 3 + v; // 3..22 (20 únicos)
      const y = 2 + (v % 5);
      const f1 = [x, y, x + y];
      const f2 = [x * 2, y * 2, (x + y) * 2];
      const ans = (x + y) * 3;
      const qText = `Determine el valor del elemento interrogante en la matriz del modelo ${v + 1}:<br><br>` +
        `[ ${f1[0]} | ${f1[1]} | ${f1[2]} ]<br>` +
        `[ ${f2[0]} | ${f2[1]} | ${f2[2]} ]<br>` +
        `[ ${x * 3} | ${y * 3} | <b>?</b> ]`;
      const opts = formatOptions(`${ans}`, [`${ans - x}`, `${ans + y}`, `${(x + y) * 4}`]);
      return {
        id: 25,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Matrices lógicas',
        diagramType: 'matrix',
        diagramData: { rows: [[f1[0], f1[1], f1[2]], [f2[0], f2[1], f2[2]], [x * 3, y * 3, '?']] },
        questionText: qText,
        ...opts,
        explanation: `La tercera columna equivale a la suma de las dos primeras: ${x * 3} + ${y * 3} = ${ans}.`,
      };
    }

    case 26: {
      const k = 2 + v; // 2..21 (20 únicos)
      const m1 = k * k;
      const m2 = (k + 1) * (k + 1);
      const ans = (k + 2) * (k + 2);
      const qText = `En el cuadro lógico (versión ${v + 1}) los números guardan una relación cuadrática:<br><br>` +
        `Fila 1: [ ${k} | ${m1} ]<br>` +
        `Fila 2: [ ${k + 1} | ${m2} ]<br>` +
        `Fila 3: [ ${k + 2} | <b>?</b> ]`;
      const opts = formatOptions(`${ans}`, [`${ans - 2 * k}`, `${ans + 4}`, `${(k + 2) * 2}`]);
      return {
        id: 26,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Matrices lógicas',
        questionText: qText,
        ...opts,
        explanation: `La segunda columna corresponde al cuadrado de la primera columna: (${k + 2})² = ${ans}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 27 al 33: Diagramas de Venn y razonamiento de conjuntos
    // ------------------------------------------------------------------------
    case 27: {
      const genres = [
        { g: 'comedias musicales', set: 'A ∩ B', exp: 'Corresponde a la intersección exclusiva entre A y B.' },
        { g: 'obras de teatro clásico', set: 'A ∩ C', exp: 'Corresponde a la intersección exclusiva entre A y C.' },
        { g: 'documentales científicos', set: 'B ∩ C', exp: 'Corresponde a la intersección de los conjuntos B y C.' },
        { g: 'producciones animadas', set: 'Solo A', exp: 'Ubicadas en el sector exclusivo del conjunto A.' },
        { g: 'largometrajes históricos', set: 'A ∩ B ∩ C', exp: 'Ubicadas en la región central compartida por los 3 conjuntos.' },
        { g: 'óperas sinfónicas', set: 'Solo C', exp: 'Ubicadas exclusivamente en el conjunto C.' },
        { g: 'cine de arte experimental', set: 'Solo B', exp: 'Ubicadas en la porción no compartida de B.' },
        { g: 'recitales acústicos al aire libre', set: 'A - (B ∪ C)', exp: 'Sector de A sin contacto con B ni C.' },
        { g: 'series de divulgación cultural', set: 'B ∩ C - A', exp: 'Intersección de B y C sin elementos de A.' },
        { g: 'festivales de cortometrajes', set: 'B - (A ∪ C)', exp: 'Conjunto B excluyendo por completo A y C.' },
        { g: 'zarzuelas tradicionales', set: 'C - (A ∪ B)', exp: 'Conjunto C excluyendo A y B.' },
        { g: 'cine mudo con orquesta en vivo', set: 'A ∩ B - C', exp: 'Intersección de A y B excluyendo C.' },
        { g: 'adaptaciones teatrales de novelas', set: 'C ∩ A - B', exp: 'Intersección de C y A sin B.' },
        { g: 'proyectos multimedia inmersivos', set: 'A ∪ B ∪ C', exp: 'Unión total de los tres conjuntos artísticos.' },
        { g: 'espectáculos de danza folclórica', set: 'Exclusivo C', exp: 'Área propia del conjunto C.' },
        { g: 'festivales de jazz independiente', set: 'Exclusivo A', exp: 'Área propia del conjunto A.' },
        { g: 'conferencias magistrales sin artes', set: 'Exterior a A, B y C', exp: 'Complemento exterior a los 3 círculos.' },
        { g: 'exposiciones de fotografía de rodaje', set: 'B ∩ C', exp: 'Región común compartida por B y C.' },
        { g: 'musicales de Broadway premiados', set: 'A ∩ B ∩ C', exp: 'Núcleo común central de los tres géneros.' },
        { g: 'radioteatro de suspenso', set: 'A ∩ C', exp: 'Cruce entre las disciplinas A y C.' },
      ][v];
      const qText = `En un diagrama de Venn con tres conjuntos A (Música), B (Cine) y C (Teatro), las producciones clasificadas como <b>"${genres.g}"</b> se localizan formalmente en la región de:`;
      const opts = formatOptions(`Región ${genres.set} para ${genres.g}`, [
        `Región Solo C para ${genres.g}`,
        `Región Solo B para ${genres.g}`,
        `Fuera de los círculos para ${genres.g}`,
      ]);
      return {
        id: 27,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Diagramas de Venn',
        diagramType: 'venn',
        questionText: qText,
        ...opts,
        explanation: genres.exp,
      };
    }

    case 28: {
      const sets = [
        { name: 'géneros cinematográficos', s: 'A (Drama), B (Comedia) y C (Terror)' },
        { name: 'disciplinas deportivas', s: 'Fútbol (A), Básquetbol (B) y Natación (C)' },
        { name: 'idiomas extranjeros', s: 'Inglés (A), Francés (B) y Alemán (C)' },
        { name: 'áreas académicas', s: 'Ciencias (A), Humanidades (B) y Artes (C)' },
        { name: 'preferencias musicales', s: 'Rock (A), Pop (B) y Jazz (C)' },
        { name: 'instrumentos musicales', s: 'Cuerda (A), Viento (B) y Percusión (C)' },
        { name: 'artes plásticas', s: 'Pintura (A), Escultura (B) y Grabado (C)' },
        { name: 'aplicaciones móviles', s: 'Mensajería (A), Video (B) y Juegos (C)' },
        { name: 'transportes urbanos', s: 'Metro (A), Autobús (B) y Bicicleta (C)' },
        { name: 'clubes estudiantiles', s: 'Debate (A), Robótica (B) y Ajedrez (C)' },
        { name: 'géneros literarios', s: 'Épica (A), Lírica (B) y Dramática (C)' },
        { name: 'grupos de alimentos', s: 'Frutas (A), Granos (B) y Lácteos (C)' },
        { name: 'redes sociales', s: 'Fotografía (A), Microblog (B) y Video corto (C)' },
        { name: 'energías limpias', s: 'Solar (A), Eólica (B) e Hidráulica (C)' },
        { name: 'asignaturas científicas', s: 'Biología (A), Química (B) y Física (C)' },
        { name: 'plataformas digitales', s: 'Cine (A), Música (B) y Podcasts (C)' },
        { name: 'tipos de hospedaje', s: 'Hotel (A), Albergue (B) y Campamento (C)' },
        { name: 'técnicas de estudio', s: 'Mapas conceptuales (A), Resúmenes (B) y Fichas (C)' },
        { name: 'animales marinos', s: 'Cetáceos (A), Peces (B) y Moluscos (C)' },
        { name: 'bebidas naturales', s: 'Jugos (A), Té (B) e Infusiones (C)' },
      ][v];
      const qText = `En el diagrama de Venn con 3 conjuntos que representan <b>${sets.name}</b> (${sets.s}), ¿qué sector representa a los elementos que <b>NO pertenecen a ninguna</b> de las tres categorías evaluadas?`;
      const opts = formatOptions(`El área exterior que rodea a los 3 círculos (complemento de ${sets.name})`, [
        `La intersección central de los 3 círculos de ${sets.name}`,
        `La región exclusiva del primer círculo A`,
        `La unión de los círculos A y B excluyendo C`,
      ]);
      return {
        id: 28,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Diagramas de Venn',
        diagramType: 'venn',
        questionText: qText,
        ...opts,
        explanation: 'Los elementos que no forman parte de ninguno de los tres conjuntos se ubican en el complemento exterior a los círculos.',
      };
    }

    case 29: {
      const candidates = [
        { name: 'Paco', circle: 'B (Cine)', pref: 'cine', exp: 'círculo B' },
        { name: 'Sofía', circle: 'C (Teatro)', pref: 'teatro', exp: 'círculo C' },
        { name: 'Rodrigo', circle: 'A (Música)', pref: 'música clásica', exp: 'círculo A' },
        { name: 'Valeria', circle: 'B (Literatura)', pref: 'narrativa universal', exp: 'círculo B' },
        { name: 'Esteban', circle: 'A (Atletismo)', pref: 'carreras de fondo', exp: 'círculo A' },
        { name: 'Camila', circle: 'C (Física)', pref: 'mecánica celeste', exp: 'círculo C' },
        { name: 'Tomás', circle: 'A (Jazz)', pref: 'jazz tradicional', exp: 'círculo A' },
        { name: 'Renata', circle: 'B (Pintura)', pref: 'acuarela y óleo', exp: 'círculo B' },
        { name: 'Mateo', circle: 'C (Programación)', pref: 'desarrollo de software', exp: 'círculo C' },
        { name: 'Daniela', circle: 'B (Oratoria)', pref: 'debate competitivo', exp: 'círculo B' },
        { name: 'Emilio', circle: 'A (Botánica)', pref: 'flora endémica', exp: 'círculo A' },
        { name: 'Valentina', circle: 'C (Natación)', pref: 'estilo mariposa', exp: 'círculo C' },
        { name: 'Samuel', circle: 'B (Filosofía)', pref: 'ética contemporánea', exp: 'círculo B' },
        { name: 'Luciana', circle: 'A (Piano)', pref: 'repertorio barroco', exp: 'círculo A' },
        { name: 'Nicolás', circle: 'C (Dibujo)', pref: 'ilustración digital', exp: 'círculo C' },
        { name: 'Ximena', circle: 'B (Robótica)', pref: 'visión artificial', exp: 'círculo B' },
        { name: 'Joaquín', circle: 'A (Ajedrez)', pref: 'aperturas clásicas', exp: 'círculo A' },
        { name: 'Mariana', circle: 'C (Poesía)', pref: 'verso hispánico', exp: 'círculo C' },
        { name: 'Leonardo', circle: 'B (Diseño Web)', pref: 'arquitectura frontend', exp: 'círculo B' },
        { name: 'Natalia', circle: 'A (Lingüística)', pref: 'gramática comparada', exp: 'círculo A' },
      ][v];
      const qText = `Si ${candidates.name} tiene preferencia exclusiva por la categoría del ${candidates.circle} y descarta rotundamente las demás opciones del diagrama, ¿en cuál sector debe registrarse formalmente su elección?`;
      const opts = formatOptions(`En la región exclusiva de ${candidates.circle} (sin intersección alguna)`, [
        `En la intersección central compartida de los 3 círculos`,
        `En la región compartida entre ${candidates.circle} y los adyacentes`,
        `En el exterior de todos los conjuntos evaluados`,
      ]);
      return {
        id: 29,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Diagramas de Venn',
        diagramType: 'venn',
        questionText: qText,
        ...opts,
        explanation: `Al pertenecer únicamente a ${candidates.circle} y excluir el resto, se localiza en la región propia y no compartida.`,
      };
    }

    case 30: {
      const total = 42 + v * 3; // 42..99 (20 únicos)
      const soloA = 14 + (v % 5) * 2;
      const soloB = 12 + ((v * 2) % 4) * 2;
      const ambos = total - soloA - soloB;
      const sportA = ['fútbol', 'voleibol', 'tenis', 'natación'][v % 4];
      const sportB = ['básquetbol', 'atletismo', 'bádminton', 'ciclismo'][v % 4];
      const qText = `En una muestra de <b>${total}</b> estudiantes, <b>${soloA}</b> practican únicamente ${sportA} y <b>${soloB}</b> practican únicamente ${sportB}. Si todos los alumnos practican al menos uno de los dos deportes, ¿cuántos practican <b>ambos</b> deportes a la vez?`;
      const opts = formatOptions(`${ambos}`, [`${ambos + 4}`, `${ambos - 3}`, `${soloA + soloB}`]);
      return {
        id: 30,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Diagramas de Venn',
        questionText: qText,
        ...opts,
        explanation: `Restamos los practicantes exclusivos del total: ${total} - (${soloA} + ${soloB}) = ${ambos} estudiantes en la intersección simultánea.`,
      };
    }

    case 31: {
      const eco = [
        { e1: 'bosque templado (A)', e2: 'humedales ribereños (B)' },
        { e1: 'arrecifes marinos (A)', e2: 'manglares costeros (B)' },
        { e1: 'zonas desérticas (A)', e2: 'oasis subterráneos (B)' },
        { e1: 'praderas abiertas (A)', e2: 'bosques montañosos (B)' },
        { e1: 'selva húmeda (A)', e2: 'bosques de niebla (B)' },
        { e1: 'tundras árticas (A)', e2: 'taigas boreales (B)' },
        { e1: 'sabanas africanas (A)', e2: 'deltas fluviales (B)' },
        { e1: 'matorrales xerófilos (A)', e2: 'cañones rocosos (B)' },
        { e1: 'estepas patagónicas (A)', e2: 'lagunas glaciares (B)' },
        { e1: 'bosques mediterráneos (A)', e2: 'dunas litorales (B)' },
        { e1: 'valles fluviales (A)', e2: 'mesetas semiáridas (B)' },
        { e1: 'pastizales alpinos (A)', e2: 'pedregales de altura (B)' },
        { e1: 'selvas secas (A)', e2: 'pantanos de agua dulce (B)' },
        { e1: 'bosques de coníferas (A)', e2: 'turberas boreales (B)' },
        { e1: 'islas volcánicas (A)', e2: 'bancos de arena (B)' },
        { e1: 'cavernas kársticas (A)', e2: 'ríos subterráneos (B)' },
        { e1: 'lagunas costeras (A)', e2: 'estuarios salobres (B)' },
        { e1: 'llanuras aluviales (A)', e2: 'terrazas agrícolas (B)' },
        { e1: 'bosques de galería (A)', e2: 'charcas estacionales (B)' },
        { e1: 'cordilleras nevadas (A)', e2: 'glaciares colgantes (B)' },
      ][v];
      const qText = `Una expedición científica estudia especies que habitan simultáneamente en <b>${eco.e1}</b> y en <b>${eco.e2}</b>. ¿Qué operación formal de teoría de conjuntos representa a estos organismos compartidos?`;
      const opts = formatOptions(`Intersección formal A ∩ B de ${eco.e1.split(' ')[0]} y ${eco.e2.split(' ')[0]}`, [
        `Unión total A ∪ B de ambos ecosistemas`,
        `Diferencia relativa A - B excluyente`,
        `Complemento exterior (A ∪ B)ᶜ`,
      ]);
      return {
        id: 31,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Diagramas de Venn',
        questionText: qText,
        ...opts,
        explanation: 'La presencia simultánea en ambos hábitats corresponde a la intersección formal de los conjuntos A y B.',
      };
    }

    case 32: {
      const eco = [
        { a: 'bosques montañosos (A)', b: 'humedales (B)' },
        { a: 'zonas áridas (A)', b: 'selvas tropicales (B)' },
        { a: 'aguas dulces (A)', b: 'ambientes marinos salinos (B)' },
        { a: 'páramos de altura (A)', b: 'valles cálidos (B)' },
        { a: 'arrecifes coralinos (A)', b: 'fondos abisales (B)' },
        { a: 'praderas templadas (A)', b: 'desiertos de dunas (B)' },
        { a: 'taigas boreales (A)', b: 'bosques tropicales secos (B)' },
        { a: 'manglares litorales (A)', b: 'estepas semiáridas (B)' },
        { a: 'glaciares continentales (A)', b: 'oasis desérticos (B)' },
        { a: 'sabanas arboladas (A)', b: 'pantanos de turba (B)' },
        { a: 'bosques de niebla (A)', b: 'planicies salinas (B)' },
        { a: 'ríos de montaña (A)', b: 'lagunas hipersalinas (B)' },
        { a: 'selvas bajas (A)', b: 'cumbres nevadas (B)' },
        { a: 'matorrales espinosos (A)', b: 'bosques lluviosos (B)' },
        { a: 'pastizales de puna (A)', b: 'playas arenosas (B)' },
        { a: 'cañones fluviales (A)', b: 'charcas temporales (B)' },
        { a: 'cuevas subterráneas (A)', b: 'dunas costeras (B)' },
        { a: 'bosques de encino (A)', b: 'estuarios marinos (B)' },
        { a: 'lagos cratéricos (A)', b: 'marismas saladas (B)' },
        { a: 'mesetas rocosas (A)', b: 'humedales de marea (B)' },
      ][v];
      const qText = `Si un proyecto analiza organismos que habitan en <b>${eco.a}</b> pero que <b>bajo ninguna circunstancia</b> pueden vivir en <b>${eco.b}</b>, la región formal del diagrama corresponde a:`;
      const opts = formatOptions(`Diferencia A - B (solo ${eco.a} sin ${eco.b})`, [
        `Intersección conjunta A ∩ B (ambos hábitats)`,
        `Unión total A ∪ B (cualquiera de los dos)`,
        `Conjunto B exclusivo (solo ${eco.b})`,
      ]);
      return {
        id: 32,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Diagramas de Venn',
        questionText: qText,
        ...opts,
        explanation: 'La diferencia A - B contiene a todos los elementos pertenecientes a A que no pertenecen a B.',
      };
    }

    case 33: {
      const labels = [
        'Arte (A), Música (B) y Teatro (C)',
        'Biología (A), Química (B) y Física (C)',
        'Francés (A), Inglés (B) y Alemán (C)',
        'Robótica (A), Programación (B) y Matemáticas (C)',
        'Pintura (A), Escultura (B) y Grabado (C)',
        'Economía (A), Sociología (B) e Historia (C)',
        'Medicina (A), Enfermería (B) y Nutrición (C)',
        'Atletismo (A), Natación (B) y Gimnasia (C)',
        'Cine (A), Fotografía (B) y Animación (C)',
        'Filosofía (A), Literatura (B) y Lingüística (C)',
        'Geografía (A), Geología (B) y Climatología (C)',
        'Arquitectura (A), Urbanismo (B) y Diseño (C)',
        'Electrónica (A), Mecánica (B) y Neumática (C)',
        'Derecho (A), Criminología (B) y Ciencias Políticas (C)',
        'Agronomía (A), Veterinaria (B) y Zootecnia (C)',
        'Astronomía (A), Astrofísica (B) y Cosmología (C)',
        'Pedagogía (A), Psicología (B) y Didáctica (C)',
        'Genética (A), Bioquímica (B) y Biología Celular (C)',
        'Poesía (A), Ensayo (B) y Dramaturgia (C)',
        'Ecología (A), Botánica (B) y Zoología (C)',
      ][v];
      const qText = `En un diagrama de Venn de 3 conjuntos que describe <b>${labels}</b>, ¿cómo se designa formalmente la región central donde coinciden los tres sectores simultáneamente?`;
      const opts = formatOptions(`Triple intersección central A ∩ B ∩ C de ${labels}`, [
        `Unión universal A ∪ B ∪ C de ${labels}`,
        `Complemento periférico exterior a ${labels}`,
        `Diferencia simétrica bilateral en ${labels}`,
      ]);
      return {
        id: 33,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Diagramas de Venn',
        diagramType: 'venn',
        questionText: qText,
        ...opts,
        explanation: 'La región central compartida por los 3 círculos es la intersección simultánea de todos ellos: A ∩ B ∩ C.',
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 34 al 38: Razonamiento deductivo y lógica de situaciones
    // ------------------------------------------------------------------------
    case 34: {
      const people = [
        { a: 'Ana', b: 'Juan', c: 'Pedro', obj: 'libro de cálculo', ret: 'revista científica' },
        { a: 'Lucía', b: 'Carlos', c: 'Mario', obj: 'pluma estilográfica', ret: 'cuaderno de notas' },
        { a: 'Elena', b: 'Diego', c: 'Roberto', obj: 'reloj de bolsillo', ret: 'pulsera de plata' },
        { a: 'Sofía', b: 'Miguel', c: 'Andrés', obj: 'mochila de campamento', ret: 'estuche de brújula' },
        { a: 'Valeria', b: 'Esteban', c: 'Gonzalo', obj: 'cámara instantánea', ret: 'álbum fotográfico' },
        { a: 'Camila', b: 'Fernando', c: 'Héctor', obj: 'tablero de ajedrez', ret: 'manual de aperturas' },
        { a: 'Daniela', b: 'Gabriel', c: 'Ignacio', obj: 'calculadora gráfica', ret: 'estuche protector' },
        { a: 'Renata', b: 'Javier', c: 'Leonardo', obj: 'telescopio refractor', ret: 'mapa estelar' },
        { a: 'Mariana', b: 'Mauricio', c: 'Óscar', obj: 'violín de concierto', ret: 'arco de crin' },
        { a: 'Natalia', b: 'Pablo', c: 'Rodrigo', obj: 'microscopio óptico', ret: 'caja de muestras' },
        { a: 'Paulina', b: 'Ricardo', c: 'Sebastián', obj: 'dron de mapeo', ret: 'batería de repuesto' },
        { a: 'Sara', b: 'Tomás', c: 'Víctor', obj: 'laptop de laboratorio', ret: 'disco externo' },
        { a: 'Andrea', b: 'Adrián', c: 'Bruno', obj: 'tienda de campaña', ret: 'linterna solar' },
        { a: 'Beatriz', b: 'César', c: 'David', obj: 'prismáticos marinos', ret: 'estuche impermeable' },
        { a: 'Carmen', b: 'Eduardo', c: 'Felipe', obj: 'guitarra acústica', ret: 'afinador digital' },
        { a: 'Diana', b: 'Guillermo', c: 'Hugo', obj: 'globo terráqueo antiguo', ret: 'lupa de aumento' },
        { a: 'Fernanda', b: 'Iván', c: 'Jorge', obj: 'bicicleta de ruta', ret: 'casco de seguridad' },
        { a: 'Gloria', b: 'Manuel', c: 'Nicolás', obj: 'set de acuarelas finas', ret: 'pincel de pelo' },
        { a: 'Inés', b: 'Patricio', c: 'Raúl', obj: 'compás de precisión', ret: 'regla graduada' },
        { a: 'Laura', b: 'Salvador', c: 'Vicente', obj: 'termómetro digital', ret: 'barómetro de pared' },
      ][v];
      const qText = `${people.a} le prestó su <b>${people.obj}</b> a ${people.b}. Luego ${people.b} se lo entregó a ${people.c}. Finalmente ${people.c} le dio a ${people.a} una ${people.ret} como garantía. ¿Quién tiene en este momento el <b>${people.obj}</b> original de ${people.a}?`;
      const opts = formatOptions(people.c, [people.b, people.a, 'Ninguno de los tres']);
      return {
        id: 34,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Razonamiento deductivo',
        questionText: qText,
        ...opts,
        explanation: `Siguiendo la cadena de transferencias: ${people.a} → ${people.b} → ${people.c}. El ${people.obj} permanece en posesión de ${people.c}.`,
      };
    }

    case 35: {
      const expData = [
        { mat: 'algodón', c1: 'al sol en 30 min', c2: 'a la sombra en 60 min', c3: 'con secadora en 15 min', concl: 'El calor y la ventilación aceleran la evaporación del agua.' },
        { mat: 'semillas de frijol', c1: 'con luz solar germinaron en 4 días', c2: 'a oscuras en 8 días', c3: 'en refrigerador no germinaron', concl: 'La temperatura templada y la luz favorecen la rapidez de germinación.' },
        { mat: 'bloques de hielo', c1: 'sobre madera tardaron 45 min en derretirse', c2: 'sobre metal 18 min', c3: 'sobre unicel 80 min', concl: 'El metal conduce el calor con mayor rapidez que la madera y el unicel.' },
        { mat: 'cucharas', c1: 'de plata se calentó en 10 s en sopa hirviendo', c2: 'de madera en 90 s', c3: 'de plástico en 60 s', concl: 'La plata es mejor conductor térmico que la madera y el plástico.' },
        { mat: 'muestras de sal', c1: 'en agua caliente se disolvieron en 15 s', c2: 'en agua tibia en 40 s', c3: 'en agua fría en 90 s', concl: 'A mayor temperatura del disolvente, mayor velocidad de disolución.' },
        { mat: 'pelotas de hule', c1: 'en piso de concreto rebotaron 1.5 m', c2: 'en duela de madera 1.2 m', c3: 'en pasto 0.3 m', concl: 'La rigidez de la superficie determina la conservación de energía en el rebote.' },
        { mat: 'velas idénticas', c1: 'en frasco de 2 L ardió 60 s', c2: 'en frasco de 1 L ardió 30 s', c3: 'en frasco de 500 mL ardió 15 s', concl: 'La duración de la combustión es proporcional al volumen de oxígeno disponible.' },
        { mat: 'circuitos con cables', c1: 'de cobre encendieron el foco intensamente', c2: 'de hierro con brillo medio', c3: 'de nicrom con brillo tenue', concl: 'El cobre presenta menor resistencia eléctrica que el hierro y el nicrom.' },
        { mat: 'plantas acuáticas', c1: 'bajo foco LED produjeron 40 burbujas/min', c2: 'con luz natural 25 burbujas/min', c3: 'en penumbra 4 burbujas/min', concl: 'La intensidad lumínica incrementa la tasa de fotosíntesis.' },
        { mat: 'cubos de mantequilla', c1: 'en sartén de cobre se fundieron en 12 s', c2: 'en sartén de hierro en 28 s', c3: 'en sartén de barro en 55 s', concl: 'El cobre transfiere el calor a los alimentos con mayor celeridad.' },
        { mat: 'muestras de arcilla', c1: 'horneadas a 1000 °C resistieron 50 kg', c2: 'a 600 °C resistieron 20 kg', c3: 'secadas al aire 5 kg', concl: 'La alta temperatura de cocción incrementa la dureza estructural de la arcilla.' },
        { mat: 'hojas de árbol', c1: 'enceradas perdieron 2% de peso en 3 días', c2: 'normales perdieron 15%', c3: 'secas perdieron 35%', concl: 'La cutícula cerosa reduce significativamente la transpiración vegetal.' },
        { mat: 'aceites vegetales', c1: 'de oliva tardó 40 s en fluir por un embudo', c2: 'de maíz 25 s', c3: 'de girasol 20 s', concl: 'El aceite de oliva posee mayor viscosidad cinemática.' },
        { mat: 'resortes de acero', c1: 'con 1 kg se estiró 2 cm', c2: 'con 2 kg se estiró 4 cm', c3: 'con 3 kg se estiró 6 cm', concl: 'La deformación del resorte es directamente proporcional a la carga aplicada.' },
        { mat: 'trozos de manzana', c1: 'con jugo de limón no se oscurecieron en 5 h', c2: 'con agua en 1 h', c3: 'al aire libre en 20 min', concl: 'El ácido ascórbico del limón inhibe la oxidación enzimática.' },
        { mat: 'cápsulas efervescentes', c1: 'trituradas reaccionaron en 8 s', c2: 'en cuartos en 20 s', c3: 'enteras en 45 s', concl: 'A mayor área de contacto superficial, mayor velocidad de reacción química.' },
        { mat: 'láminas de cartón', c1: 'corrugado doble aislaron el ruido un 40%', c2: 'sencillo un 20%', c3: 'liso un 8%', concl: 'La estructura con cámaras de aire mejora la atenuación acústica.' },
        { mat: 'vasos de agua', c1: 'tapados no perdieron volumen en 1 semana', c2: 'abiertos perdieron 25%', c3: 'con ventilador perdieron 60%', concl: 'La ventilación y la exposición abierta incrementan la tasa de evaporación.' },
        { mat: 'baterías alcalinas', c1: 'a 25 °C duraron 20 h de uso continuo', c2: 'a 10 °C duraron 14 h', c3: 'a 0 °C duraron 7 h', concl: 'El rendimiento electroquímico de las pilas decrece en climas gélidos.' },
        { mat: 'placas solares', c1: 'a 90° respecto al sol generaron 100 W', c2: 'a 45° generaron 70 W', c3: 'paralelas generaron 5 W', concl: 'La incidencia perpendicular de los rayos optimiza la generación fotovoltaica.' },
      ][v];
      const qText = `En un experimento controlado con <b>${expData.mat}</b> se observó que la muestra 1 (${expData.c1}); la muestra 2 (${expData.c2}); y la muestra 3 (${expData.c3}). ¿Cuál conclusión científica es necesariamente verdadera?`;
      const opts = formatOptions(expData.concl, [
        'Los tres tratamientos generaron resultados idénticos sin variación.',
        'Las condiciones ambientales no tienen impacto sobre el material evaluado.',
        'El resultado dependió exclusivamente del azar y no de variables físicas.',
      ]);
      return {
        id: 35,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Razonamiento deductivo',
        questionText: qText,
        ...opts,
        explanation: expData.concl,
      };
    }

    case 36: {
      const experts = [
        { n1: 'Carlos', n2: 'Laura', role: 'chefs reposteros', test: 'un pastel artesanal', taste: 'azúcar refinada', concl: 'El pastel no contenía azúcar refinada ni miel natural en proporciones perceptibles.' },
        { n1: 'Martín', n2: 'Andrea', role: 'sommeliers de cata', test: 'un vino blanco', taste: 'notas de madera de roble', concl: 'El vino fue añejado en depósitos de acero inoxidable y carece de notas amaderadas.' },
        { n1: 'Fernando', n2: 'Gabriela', role: 'analistas químicos', test: 'un compuesto orgánico', taste: 'trazas de plomo o mercurio', concl: 'La muestra química está libre de contaminación por metales pesados.' },
        { n1: 'Roberto', n2: 'Sofía', role: 'peritos mecánicos', test: 'el motor de un vehículo', taste: 'fugas de aceite o refrigerante', concl: 'El sistema mecánico opera con estanqueidad y sin filtraciones de fluidos.' },
        { n1: 'Diego', n2: 'Valeria', role: 'veterinarios clínicos', test: 'un ejemplar canino', taste: 'síntomas de fiebre o deshidratación', concl: 'El paciente animal se encuentra clínicamente sano y eutérmico.' },
        { n1: 'Rodrigo', n2: 'Camila', role: 'catadores de café', test: 'un grano de especialidad', taste: 'acidez cítrica excesiva', concl: 'El perfil de tueste y extracción del café presenta un balance neutral.' },
        { n1: 'Esteban', n2: 'Daniela', role: 'geólogos de campo', test: 'una roca volcánica', taste: 'porosidad vesicular alta', concl: 'La roca analizada presenta una estructura compacta y masiva.' },
        { n1: 'Gonzalo', n2: 'Renata', role: 'inspectores de calidad textil', test: 'un lote de seda', taste: 'fibras sintéticas mezcladas', concl: 'El tejido evaluado está compuesto al 100% por seda natural pura.' },
        { n1: 'Mauricio', n2: 'Mariana', role: 'técnicos acústicos', test: 'una sala de conciertos', taste: 'ecos flotantes o distorsión armónica', concl: 'El recinto arquitectónico posee un acondicionamiento acústico óptimo.' },
        { n1: 'Ignacio', n2: 'Natalia', role: 'farmacéuticos industriales', test: 'un lote de jarabe', taste: 'sedimentación o turbidez', concl: 'La formulación líquida conserva una estabilidad coloidal homogénea.' },
        { n1: 'Héctor', n2: 'Paulina', role: 'restauradores de arte', test: 'un lienzo del siglo XVIII', taste: 'repintes modernos de acrílico', concl: 'La pintura al óleo conserva su capa pictórica original sin alteraciones.' },
        { n1: 'Javier', n2: 'Beatriz', role: 'auditores contables', test: 'el balance financiero', taste: 'discrepancias o saldos no conciliados', concl: 'Los registros contables de la institución reflejan balances exactos.' },
        { n1: 'Óscar', n2: 'Carmen', role: 'agrónomos edafólogos', test: 'un suelo de cultivo', taste: 'salinidad alcalina excesiva', concl: 'El sustrato agrícola posee niveles de pH y conductividad adecuados.' },
        { n1: 'Pablo', n2: 'Diana', role: 'oftalmólogos forenses', test: 'un fondo de ojo', taste: 'daño macular o hipertensión', concl: 'La estructura retiniana del paciente examinado permanece íntegra.' },
        { n1: 'Ricardo', n2: 'Elena', role: 'ingenieros de redes', test: 'un enlace de fibra', taste: 'pérdida de paquetes o latencia crítica', concl: 'La conexión de telecomunicaciones opera dentro de los estándares de calidad.' },
        { n1: 'Sebastián', n2: 'Gloria', role: 'biólogos marinos', test: 'un banco de corales', taste: 'blanqueamiento por estrés térmico', concl: 'La colonia de coral mantiene su simbiosis activa con zooxantelas.' },
        { n1: 'Víctor', n2: 'Inés', role: 'bromatólogos de leche', test: 'un tanque pasteurizado', taste: 'adición de agua o féculas', concl: 'El producto lácteo cumple con la densidad y sólidos grasos normativos.' },
        { n1: 'Tomás', n2: 'Luciana', role: 'peritos balísticos', test: 'un casquillo percutido', taste: 'estrías incompatibles con el arma', concl: 'Las marcas percutoras coinciden con las especificaciones del calibre.' },
        { n1: 'Adrián', n2: 'Ximena', role: 'meteorólogos sinópticos', test: 'la presión barométrica', taste: 'frentes fríos o ciclogénesis inminente', concl: 'La estabilidad atmosférica predominará en la región durante la jornada.' },
        { n1: 'Bruno', n2: 'Paula', role: 'paleontólogos de fósiles', test: 'un molar de mastodonte', taste: 'fracturas por compresión sedimentaria', concl: 'La pieza esquelética fósil se preservó en condiciones anatómicas intactas.' },
      ][v];
      const qText = `${experts.n1} y ${experts.n2} son reconocidos ${experts.role}. Al examinar ${experts.test}, tras un minucioso análisis dictaminaron formalmente que NO se detectó presencia de ${experts.taste}. ¿Qué se deduce lógicamente de este dictamen?`;
      const opts = formatOptions(experts.concl, [
        `Ambos especialistas carecen de competencia técnica para evaluar la muestra.`,
        `La muestra fue alterada intencionalmente para engañar a los evaluadores.`,
        `El dictamen confirma la presencia encubierta del elemento descartado.`,
      ]);
      return {
        id: 36,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Razonamiento deductivo',
        questionText: qText,
        ...opts,
        explanation: experts.concl,
      };
    }

    case 37: {
      const contexts = [
        { city: 'Monterrey', event: 'ola de calor', tech: 'paneles solares', red: '10% menos consumo de red', c: 'La energía autogenerada cubrió la demanda adicional provocada por el calor.' },
        { city: 'Guadalajara', event: 'sequía prolongada', tech: 'captación pluvial y reciclaje', red: '15% menos extracción de pozos', c: 'Los sistemas de reciclaje hídrico sustituyeron parte del agua del subsuelo.' },
        { city: 'Puebla', event: 'congestión vehicular', tech: 'ciclovías segregadas', red: '20% menos uso de automóviles en el centro', c: 'El transporte no motorizado absorbió una fracción sustancial de los traslados urbanos.' },
        { city: 'Querétaro', event: 'alza en tarifas eléctricas', tech: 'luminarias LED inteligentes', red: '30% de ahorro en alumbrado público', c: 'La eficiencia lumínica redujo el gasto energético municipal sin mermar la iluminación.' },
        { city: 'Toluca', event: 'invierno gélido', tech: 'aislamiento térmico de celulosa', red: '25% menos consumo de gas de calefacción', c: 'La retención del calor en los muros disminuyó la necesidad de combustión de gas.' },
        { city: 'Mérida', event: 'humedad extrema', tech: 'arquitectura bioclimática con ventilación cruzada', red: '18% menos encendido de aires acondicionados', c: 'El diseño arquitectónico pasivo logró regular la temperatura interior de los edificios.' },
        { city: 'Tijuana', event: 'vientos secos', tech: 'cortinas rompevientos de árboles nativos', red: '40% menos erosión en cultivos agrícolas', c: 'La barrera vegetal mitigó el impacto mecánico del viento sobre la capa arable.' },
        { city: 'Chihuahua', event: 'heladas agrícolas', tech: 'riego por goteo subterráneo', red: '35% menos congelamiento radicular en nogales', c: 'La irrigación bajo el suelo protegió las raíces de las bajas temperaturas superficiales.' },
        { city: 'León', event: 'generación de residuos', tech: 'planta de biogás con desechos de curtidurías', red: '12% de electricidad limpia generada in situ', c: 'La valorización energética de residuos redujo la dependencia energética externa.' },
        { city: 'Saltillo', event: 'alta demanda siderúrgica', tech: 'hornos de arco con recuperación de calor', red: '22% de reducción en emisión térmica residual', c: 'El aprovechamiento del calor residual incrementó el rendimiento térmico global.' },
        { city: 'Hermosillo', event: 'radiación solar extrema', tech: 'pintura reflectante en techos industriales', red: '5 °C menos en la temperatura de naves de ensamble', c: 'El albedo elevado de la pintura impidió la absorción del calor solar en el inmueble.' },
        { city: 'San Luis Potosí', event: 'estrés hídrico minero', tech: 'filtración por membranas de ósmosis inversa', red: '80% de agua de proceso recirculada', c: 'La purificación avanzada evitó la extracción de nuevos volúmenes de mantos freáticos.' },
        { city: 'Aguascalientes', event: 'tráfico en horas pico', tech: 'semáforos adaptativos con inteligencia artificial', red: '25% menos tiempo de espera en cruces viales', c: 'La sincronización dinámica de tiempos semafóricos optimizó el flujo automotor.' },
        { city: 'Morelia', event: 'deforestación periférica', tech: 'brigadas de drones de reforestación rápida', red: '50 mil semillas peletizadas sembradas en laderas', c: 'La dispersión aérea permitió reforestar zonas escarpadas inaccesibles a pie.' },
        { city: 'Culiacán', event: 'temperaturas de siembra', tech: 'acolchado plástico biodegradable con sombraje', red: '30% menos estrés térmico en hortalizas', c: 'La cubierta protectora del suelo amortiguó el sobrecalentamiento del sistema radicular.' },
        { city: 'Veracruz', event: 'vientos de norte', tech: 'rompeolas con bloques disipadores de hormigón', red: '60% menos socavación en el muelle portuario', c: 'La disipación hidrodinámica del oleaje resguardó la estabilidad de las obras portuarias.' },
        { city: 'Cancún', event: 'arribo de sargazo', tech: 'barreras marinas de contención y recolección', red: '75% menos depósito de algas en la arena playera', c: 'La intercepción en altamar evitó el impacto ecológico de la descomposición costera.' },
        { city: 'Cuernavaca', event: 'contaminación de barrancas', tech: 'humedales artificiales con plantas fitorremediadoras', red: '85% menos coliformes fecales en el efluente', c: 'Los procesos biológicos de las raíces depuraron el agua residual de forma natural.' },
        { city: 'Oaxaca', event: 'vulnerabilidad sísmica', tech: 'disipadores sísmicos de fluido viscoso en escuelas', red: '40% menos desplazamiento lateral en temblores', c: 'La amortiguación suplementaria absorbió la energía cinética de las ondas telúricas.' },
        { city: 'Villahermosa', event: 'inundaciones fluviales', tech: 'bordos de contención y compuertas de control', red: 'desbordamiento cero en zonas habitacionales bajas', c: 'El control hidráulico reguló el caudal del río evitando anegaciones en la mancha urbana.' },
      ][v];
      const qText = `En la ciudad de <b>${contexts.city}</b>, a pesar de enfrentar ${contexts.event}, se implementó ${contexts.tech}, logrando registrar <b>${contexts.red}</b>. ¿Qué conclusión se desprende necesariamente de este fenómeno?`;
      const opts = formatOptions(contexts.c, [
        'El fenómeno climático o problema cesó de existir por completo.',
        'La solución tecnológica resultó ineficaz y fue descartada de inmediato.',
        'Los habitantes abandonaron la ciudad ante la falta de alternativas viables.',
      ]);
      return {
        id: 37,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Razonamiento deductivo',
        questionText: qText,
        ...opts,
        explanation: contexts.c,
      };
    }

    case 38: {
      const arrangements = [
        { obj: 'tres residencias contiguas (roja, azul y verde)', item: 'un perro guardián', center: 'la residencia azul', c: 'El habitante de la residencia azul' },
        { obj: 'tres vehículos aparcados en batería (blanco, gris y negro)', item: 'una caja de herramientas', center: 'el vehículo gris', c: 'El conductor del vehículo gris' },
        { obj: 'tres tiendas de campaña en línea (amarilla, naranja y café)', item: 'un farol de aceite', center: 'la tienda naranja', c: 'El campista de la tienda naranja' },
        { obj: 'tres oficinas consecutivas (101, 102 y 103)', item: 'la fotocopiadora compartida', center: 'la oficina 102', c: 'El empleado asignado a la oficina 102' },
        { obj: 'tres vagones de tren engranados (primero, segundo y tercero)', item: 'el generador auxiliar', center: 'el segundo vagón', c: 'El maquinista del segundo vagón central' },
        { obj: 'tres puestos de feria alineados (artesanías, dulces y libros)', item: 'el toldo impermeable central', center: 'el puesto de dulces', c: 'El comerciante del puesto de dulces' },
        { obj: 'tres laboratorios científicos contiguos (química, física y cómputo)', item: 'la campana de extracción de gases', center: 'el laboratorio de física', c: 'El investigador a cargo del laboratorio de física' },
        { obj: 'tres cubículos de asesoría (A, B y C)', item: 'el archivo confidencial', center: 'el cubículo B', c: 'El asesor ubicado en el cubículo B' },
        { obj: 'tres hangares de aeronaves (1, 2 y 3)', item: 'el camión cisterna de combustible', center: 'el hangar 2', c: 'El jefe de mantenimiento del hangar 2' },
        { obj: 'tres gradas del estadio (superior, media e inferior)', item: 'la cabina de cronometraje oficial', center: 'la grada media', c: 'Los jueces de la grada media central' },
        { obj: 'tres invernaderos alineados (rosas, tulipanes y orquídeas)', item: 'el sistema de fertirriego automatizado', center: 'el invernadero de tulipanes', c: 'El floricultor del invernadero de tulipanes' },
        { obj: 'tres muelles del puerto pesquero (norte, centro y sur)', item: 'la grúa telescópica de carga', center: 'el muelle central', c: 'El estibador del muelle central' },
        { obj: 'tres salas de proyección contiguas (1, 2 y 3)', item: 'el proyector IMAX láser', center: 'la sala 2', c: 'El operador de cabina de la sala 2' },
        { obj: 'tres corrales contiguos en el rancho (ovino, caprino y bovino)', item: 'el bebedero automatizado', center: 'el corral caprino', c: 'El veterinario a cargo del corral caprino' },
        { obj: 'tres casetas de peaje (carril 1, carril 2 y carril 3)', item: 'el lector de telepeaje de alta velocidad', center: 'la caseta del carril 2', c: 'El cajero de la caseta central del carril 2' },
        { obj: 'tres quirófanos contiguos en el hospital (A, B y C)', item: 'el monitor cardiovascular avanzado', center: 'el quirófano B', c: 'El equipo de cirugía del quirófano B' },
        { obj: 'tres aulas escolares en el pasillo (1°A, 1°B y 1°C)', item: 'la pantalla interactiva multitáctil', center: 'el aula 1°B', c: 'El docente titular del aula 1°B' },
        { obj: 'tres módulos de biblioteca (consulta, lectura y préstamo)', item: 'el terminal de catálogo bibliográfico', center: 'el módulo de lectura', c: 'El bibliotecario asignado al módulo de lectura' },
        { obj: 'tres talleres mecánicos contiguos (frenos, suspensión y hojalatería)', item: 'la rampa hidráulica de cuatro postes', center: 'el taller de suspensión', c: 'El mecánico del taller de suspensión central' },
        { obj: 'tres bodegas de almacenamiento (cereales, harinas y azúcar)', item: 'el montacargas eléctrico frontal', center: 'la bodega de harinas', c: 'El almacenista de la bodega de harinas' },
      ][v];
      const qText = `Considere <b>${arrangements.obj}</b> dispuestas en estricta fila horizontal. La unidad intermedia alberga <b>${arrangements.item}</b>, mientras que los extremos albergan únicamente insumos secundarios. Si se confirma que la unidad central es <b>${arrangements.center}</b>, ¿a quién le corresponde la custodia directa de ${arrangements.item}?`;
      const opts = formatOptions(arrangements.c, [
        'A la persona ubicada en el extremo izquierdo de la fila.',
        'A la persona ubicada en el extremo derecho de la fila.',
        'A un visitante externo no asignado a ninguna de las unidades.',
      ]);
      return {
        id: 38,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Razonamiento deductivo',
        questionText: qText,
        ...opts,
        explanation: `Por la disposición topológica dada, el objeto se sitúa en la unidad central: ${arrangements.c}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 39 al 43: Silogismos y premisas lógicas
    // ------------------------------------------------------------------------
    case 39: {
      const syllogisms = [
        { p1: 'mamíferos son animales vertebrados', p2: 'felinos son mamíferos', conc: 'Todos los felinos son animales vertebrados.' },
        { p1: 'árboles son seres vegetales', p2: 'robles son árboles', conc: 'Todos los robles son seres vegetales.' },
        { p1: 'metales son conductores térmicos', p2: 'cobres son metales', conc: 'Todos los cobres son conductores térmicos.' },
        { p1: 'aves tienen extremidades anteriores aladas', p2: 'águilas son aves', conc: 'Todas las águilas tienen extremidades anteriores aladas.' },
        { p1: 'triángulos tienen ángulos interiores que suman 180°', p2: 'triángulos equiláteros son triángulos', conc: 'Todos los triángulos equiláteros tienen ángulos interiores que suman 180°.' },
        { p1: 'planetas del sistema solar orbitan alrededor del Sol', p2: 'planetas rocosos son planetas del sistema solar', conc: 'Todos los planetas rocosos orbitan alrededor del Sol.' },
        { p1: 'anfibios experimentan metamorfosis en su ciclo de vida', p2: 'ranas son anfibios', conc: 'Todas las ranas experimentan metamorfosis en su ciclo de vida.' },
        { p1: 'gases nobles poseen capa de valencia completa', p2: 'átomos de helio son gases nobles', conc: 'Todos los átomos de helio poseen capa de valencia completa.' },
        { p1: 'polígonos regulares son equiláteros y equiángulos', p2: 'hexágonos regulares son polígonos regulares', conc: 'Todos los hexágonos regulares son equiláteros y equiángulos.' },
        { p1: 'moluscos poseen cuerpo blando no segmentado', p2: 'pulpos son moluscos', conc: 'Todos los pulpos poseen cuerpo blando no segmentado.' },
        { p1: 'enzimas son biocatalizadores de reacciones químicas', p2: 'amilasas son enzimas', conc: 'Todas las amilasas son biocatalizadores de reacciones químicas.' },
        { p1: 'números enteros pares son divisibles entre dos', p2: 'múltiplos de cuatro son números enteros pares', conc: 'Todos los múltiplos de cuatro son divisibles entre dos.' },
        { p1: 'células vegetales poseen pared celular de celulosa', p2: 'células del parénquima son células vegetales', conc: 'Todas las células del parénquima poseen pared celular de celulosa.' },
        { p1: 'cristales minerales presentan exfoliación geométrica', p2: 'muestras de calcita son cristales minerales', conc: 'Todas las muestras de calcita presentan exfoliación geométrica.' },
        { p1: 'letras vocales son fonemas sonoros abiertos', p2: 'grafías del abecedario {a, e, o} son letras vocales', conc: 'Todas las grafías {a, e, o} son fonemas sonoros abiertos.' },
        { p1: 'organismos fotosintéticos fijan dióxido de carbono', p2: 'cianobacterias son organismos fotosintéticos', conc: 'Todas las cianobacterias fijan dióxido de carbono.' },
        { p1: 'cuadriláteros tienen cuatro vértices coplanares', p2: 'rombos son cuadriláteros', conc: 'Todos los rombos tienen cuatro vértices coplanares.' },
        { p1: 'sustancias ácidas tienen pH inferior a 7', p2: 'disoluciones de vinagre son sustancias ácidas', conc: 'Todas las disoluciones de vinagre tienen pH inferior a 7.' },
        { p1: 'estrellas emiten radiación por fusión nuclear', p2: 'enanas amarillas son estrellas', conc: 'Todas las enanas amarillas emiten radiación por fusión nuclear.' },
        { p1: 'vertebrados poseen sistema nervioso dorsal', p2: 'primates son vertebrados', conc: 'Todos los primates poseen sistema nervioso dorsal.' },
      ][v];
      const qText = `Premisa 1: Todos los <b>${syllogisms.p1}</b>.<br>Premisa 2: Todos los <b>${syllogisms.p2}</b>.<br>¿Cuál conclusión formal se deduce válidamente por regla silogística?`;
      const opts = formatOptions(syllogisms.conc, [
        'Algunos elementos de la premisa 2 carecen de la propiedad de la premisa 1.',
        'Ningún miembro de la categoría subordinada cumple la propiedad universal.',
        'Solo los miembros de la categoría 1 pueden poseer dicha propiedad.',
      ]);
      return {
        id: 39,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Silogismos y premisas',
        questionText: qText,
        ...opts,
        explanation: `Por silogismo universal afirmativo categórico (modo Bárbara): Todo M es P; todo S es M; por lo tanto, todo S es P. Conclusión: ${syllogisms.conc}`,
      };
    }

    case 40: {
      const syllogisms = [
        { s1: 'Algunos deportistas universitarios son vegetarianos', s2: 'Todos los vegetarianos consumen legumbres', c: 'Algunos deportistas universitarios consumen legumbres.' },
        { s1: 'Algunos músicos de la orquesta son pianistas', s2: 'Todos los pianistas leen partituras complejas', c: 'Algunos músicos de la orquesta leen partituras complejas.' },
        { s1: 'Algunos científicos del instituto son astrónomos', s2: 'Todos los astrónomos observan el cielo nocturno', c: 'Algunos científicos del instituto observan el cielo nocturno.' },
        { s1: 'Algunos médicos del hospital son cirujanos', s2: 'Todos los cirujanos operan con batas esterilizadas', c: 'Algunos médicos del hospital operan con batas esterilizadas.' },
        { s1: 'Algunos estudiantes de preparatoria son políglotas', s2: 'Todos los políglotas hablan tres o más idiomas', c: 'Algunos estudiantes de preparatoria hablan tres o más idiomas.' },
        { s1: 'Algunos ingenieros de software son ajedrecistas', s2: 'Todos los ajedrecistas calculan jugadas por anticipado', c: 'Algunos ingenieros de software calculan jugadas por anticipado.' },
        { s1: 'Algunos docentes del colegio son historiadores', s2: 'Todos los historiadores consultan fuentes primarias', c: 'Algunos docentes del colegio consultan fuentes primarias.' },
        { s1: 'Algunos pintores de la academia son muralistas', s2: 'Todos los muralistas trabajan sobre grandes muros', c: 'Algunos pintores de la academia trabajan sobre grandes muros.' },
        { s1: 'Algunos biólogos marinos son buzos certificados', s2: 'Todos los buzos certificados dominan el uso del regulador', c: 'Algunos biólogos marinos dominan el uso del regulador.' },
        { s1: 'Algunos químicos del laboratorio son toxicólogos', s2: 'Todos los toxicólogos analizan sustancias peligrosas', c: 'Algunos químicos del laboratorio analizan sustancias peligrosas.' },
        { s1: 'Algunos arquitectos de la firma son paisajistas', s2: 'Todos los paisajistas diseñan áreas verdes sustentables', c: 'Algunos arquitectos de la firma diseñan áreas verdes sustentables.' },
        { s1: 'Algunos fotógrafos del certamen son documentalistas', s2: 'Todos los documentalistas registran eventos reales', c: 'Algunos fotógrafos del certamen registran eventos reales.' },
        { s1: 'Algunos filósofos contemporáneos son lógicos', s2: 'Todos los lógicos estudian demostraciones formales', c: 'Algunos filósofos contemporáneos estudian demostraciones formales.' },
        { s1: 'Algunos poetas del taller son sonetistas', s2: 'Todos los sonetistas componen poemas de catorce versos', c: 'Algunos poetas del taller componen poemas de catorce versos.' },
        { s1: 'Algunos economistas del panel son estadísticos', s2: 'Todos los estadísticos modelan distribuciones de probabilidad', c: 'Algunos economistas del panel modelan distribuciones de probabilidad.' },
        { s1: 'Algunos periodistas del diario son corresponsales de guerra', s2: 'Todos los corresponsales de guerra viajan a zonas de conflicto', c: 'Algunos periodistas del diario viajan a zonas de conflicto.' },
        { s1: 'Algunos botánicos del herbario son taxónomos', s2: 'Todos los taxónomos clasifican especímenes vegetales', c: 'Algunos botánicos del herbario clasifican especímenes vegetales.' },
        { s1: 'Algunos atletas del selectivo son velocistas', s2: 'Todos los velocistas entrenan salidas en bloques', c: 'Algunos atletas del selectivo entrenan salidas en bloques.' },
        { s1: 'Algunos astrónomos del observatorio son astrofotógrafos', s2: 'Todos los astrofotógrafos capturan nebulosas con sensores CCD', c: 'Algunos astrónomos del observatorio capturan nebulosas con sensores CCD.' },
        { s1: 'Algunos lingüistas del centro son dialectólogos', s2: 'Todos los dialectólogos recolectan variantes orales', c: 'Algunos lingüistas del centro recolectan variantes orales.' },
      ][v];
      const qText = `Premisa 1: ${syllogisms.s1}.<br>Premisa 2: ${syllogisms.s2}.<br>¿Qué conclusión se sigue necesariamente?`;
      const opts = formatOptions(syllogisms.c, [
        'Todos los miembros del primer grupo cumplen obligatoriamente la propiedad 2.',
        'Ningún miembro del primer grupo puede cumplir la propiedad de la segunda premisa.',
        'La propiedad descrita solo pertenece a los miembros del primer grupo.',
      ]);
      return {
        id: 40,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Silogismos y premisas',
        questionText: qText,
        ...opts,
        explanation: `Por silogismo particular afirmativo (modo Darii): Algún S es M; todo M es P; por lo tanto, algún S es P: ${syllogisms.c}`,
      };
    }

    case 41: {
      const syllogisms = [
        { s1: 'Todas las frutas frescas aportan vitaminas al organismo', s2: 'Algunas frutas frescas son cítricos', c: 'Algunos cítricos aportan vitaminas al organismo.' },
        { s1: 'Todos los mamíferos marinos respiran aire atmosférico', s2: 'Algunos mamíferos marinos son cetáceos', c: 'Algunos cetáceos respiran aire atmosférico.' },
        { s1: 'Todos los idiomas romances derivan del latín vulgar', s2: 'Algunos idiomas romances son lenguas ibéricas', c: 'Algunas lenguas ibéricas derivan del latín vulgar.' },
        { s1: 'Todos los minerales cristalinos tienen orden atómico periódico', s2: 'Algunos minerales cristalinos son variedades de cuarzo', c: 'Algunas variedades de cuarzo tienen orden atómico periódico.' },
        { s1: 'Todos los insectos adultos poseen tres pares de patas', s2: 'Algunos insectos adultos son coleópteros', c: 'Algunos coleópteros poseen tres pares de patas.' },
        { s1: 'Todos los triángulos rectángulos cumplen el teorema de Pitágoras', s2: 'Algunos triángulos rectángulos son isósceles', c: 'Algunos triángulos isósceles cumplen el teorema de Pitágoras.' },
        { s1: 'Todos los planetas enanos orbitan fuera del cinturón de asteroides', s2: 'Algunos planetas enanos son plutoides', c: 'Algunos plutoides orbitan fuera del cinturón de asteroides.' },
        { s1: 'Todos los hidrocarburos aromáticos contienen anillos bencénicos', s2: 'Algunos hidrocarburos aromáticos son toluenos', c: 'Algunos toluenos contienen anillos bencénicos.' },
        { s1: 'Todos los reptiles son organismos poiquilotermos', s2: 'Algunos reptiles son serpientes de cascabel', c: 'Algunas serpientes de cascabel son organismos poiquilotermos.' },
        { s1: 'Todos los instrumentos de viento madera emplean cañas o biseles', s2: 'Algunos instrumentos de viento madera son clarinetes', c: 'Algunos clarinetes emplean cañas o biseles.' },
        { s1: 'Todos los animales endotermos regulan internamente su calor', s2: 'Algunos animales endotermos son aves rapaces', c: 'Algunas aves rapaces regulan internamente su calor.' },
        { s1: 'Todos los números primos mayores que 2 son impares', s2: 'Algunos números primos mayores que 2 son primos de Mersenne', c: 'Algunos primos de Mersenne son impares.' },
        { s1: 'Todos los hongos macroscópicos se reproducen por esporas', s2: 'Algunos hongos macroscópicos son basidiomicetos', c: 'Algunos basidiomicetos se reproducen por esporas.' },
        { s1: 'Todos los satélites geoestacionarios orbitan a 35,786 km de altitud', s2: 'Algunos satélites geoestacionarios son meteorológicos', c: 'Algunos satélites meteorológicos orbitan a 35,786 km de altitud.' },
        { s1: 'Todas las aleaciones metálicas están compuestas por dos o más elementos', s2: 'Algunas aleaciones metálicas son bronces', c: 'Algunos bronces están compuestos por dos o más elementos.' },
        { s1: 'Todos los ácidos carboxílicos poseen el grupo funcional -COOH', s2: 'Algunos ácidos carboxílicos son ácidos acéticos', c: 'Algunos ácidos acéticos poseen el grupo funcional -COOH.' },
        { s1: 'Todos los prismas rectos tienen caras laterales rectangulares', s2: 'Algunos prismas rectos son hexagonales', c: 'Algunos prismas hexagonales tienen caras laterales rectangulares.' },
        { s1: 'Todos los crustáceos decápodos tienen cinco pares de apéndices', s2: 'Algunos crustáceos decápodos son langostas', c: 'Algunas langostas tienen cinco pares de apéndices.' },
        { s1: 'Todos los mamíferos marsupiales poseen una bolsa marsupial de crianza', s2: 'Algunos mamíferos marsupiales son canguros', c: 'Algunos canguros poseen una bolsa marsupial de crianza.' },
        { s1: 'Todos los ácidos nucleicos están formados por nucleótidos encadenados', s2: 'Algunos ácidos nucleicos son ARN mensajeros', c: 'Algunos ARN mensajeros están formados por nucleótidos encadenados.' },
      ][v];
      const qText = `Premisa 1: ${syllogisms.s1}.<br>Premisa 2: ${syllogisms.s2}.<br>¿Qué enunciado se deduce de forma indiscutible?`;
      const opts = formatOptions(syllogisms.c, [
        'Todos los elementos con la propiedad pertenecen al primer grupo.',
        'Ningún elemento del segundo grupo cumple la propiedad mencionada.',
        'La propiedad se pierde por completo al particularizar la categoría.',
      ]);
      return {
        id: 41,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Silogismos y premisas',
        questionText: qText,
        ...opts,
        explanation: syllogisms.c,
      };
    }

    case 42: {
      const syllogisms = [
        { s1: 'Ningún pez respira aire directamente con pulmones', s2: 'Todas las truchas son peces', c: 'Ninguna trucha respira aire directamente con pulmones.' },
        { s1: 'Ningún reptil posee plumas corporales', s2: 'Todas las iguanas son reptiles', c: 'Ninguna iguana posee plumas corporales.' },
        { s1: 'Ningún mineral inorgánico es un ser viviente', s2: 'Todos los diamantes son minerales inorgánicos', c: 'Ningún diamante es un ser viviente.' },
        { s1: 'Ningún número primo par mayor que 2 es divisible solo entre 1 y sí mismo', s2: 'El número 8 es par mayor que 2', c: 'El número 8 no es un número primo.' },
        { s1: 'Ningún mamífero es un organismo ectotermo', s2: 'Todos los delfines son mamíferos', c: 'Ningún delfín es un organismo ectotermo.' },
        { s1: 'Ningún gas noble reacciona espontáneamente en condiciones estándar', s2: 'El gas xenón es un gas noble', c: 'El gas xenón no reacciona espontáneamente en condiciones estándar.' },
        { s1: 'Ningún triángulo equilátero tiene un ángulo obtuso', s2: 'Todas las figuras delta son triángulos equiláteros', c: 'Ninguna figura delta tiene un ángulo obtuso.' },
        { s1: 'Ningún crustáceo es un vertebrado terrestre', s2: 'Todos los cangrejos son crustáceos', c: 'Ningún cangrejo es un vertebrado terrestre.' },
        { s1: 'Ningún hongo realiza fotosíntesis clorofílica', s2: 'Todos los champiñones son hongos', c: 'Ningún champiñón realiza fotosíntesis clorofílica.' },
        { s1: 'Ningún polígono regular posee lados de longitudes dispares', s2: 'Todos los pentágonos regulares son polígonos regulares', c: 'Ningún pentágono regular posee lados de longitudes dispares.' },
        { s1: 'Ningún ave rapaz es vegetariana estricta', s2: 'Todos los halcones peregrinos son aves rapaces', c: 'Ningún halcón peregrino es vegetariano estricto.' },
        { s1: 'Ningún compuesto iónico puro es conductor eléctrico en estado sólido', s2: 'La sal de roca es un compuesto iónico puro', c: 'La sal de roca no es conductor eléctrico en estado sólido.' },
        { s1: 'Ningún insecto volador carece de exoesqueleto de quitina', s2: 'Todas las abejas son insectos voladores', c: 'Ninguna abeja carece de exoesqueleto de quitina.' },
        { s1: 'Ningún número negativo tiene raíz cuadrada real', s2: 'El valor -16 es un número negativo', c: 'El valor -16 no tiene raíz cuadrada real.' },
        { s1: 'Ningún hidrocarburo saturado posee dobles enlaces de carbono', s2: 'El metano es un hidrocarburo saturado', c: 'El metano no posee dobles enlaces de carbono.' },
        { s1: 'Ningún país soberano carece de territorio reconocido', s2: 'México es un país soberano', c: 'México no carece de territorio reconocido.' },
        { s1: 'Ningún anfibio adulto respira exclusivamente por branquias', s2: 'Todos los sapos comunes son anfibios adultos', c: 'Ningún sapo común respira exclusivamente por branquias.' },
        { s1: 'Ninguna célula procariota posee membrana nuclear definida', s2: 'Todas las bacterias son células procariotas', c: 'Ninguna bacteria posee membrana nuclear definida.' },
        { s1: 'Ningún prisma recto regular tiene bases circulares curvas', s2: 'Todos los prismas triangulares son prismas rectos regulares', c: 'Ningún prisma triangular tiene bases circulares curvas.' },
        { s1: 'Ninguna estrella de la secuencia principal obtiene energía por fisión', s2: 'Nuestro Sol es una estrella de la secuencia principal', c: 'Nuestro Sol no obtiene energía por fisión.' },
      ][v];
      const qText = `Premisa 1: ${syllogisms.s1}.<br>Premisa 2: ${syllogisms.s2}.<br>¿Cuál es la conclusión formal rigurosa?`;
      const opts = formatOptions(syllogisms.c, [
        'Algunos miembros de la segunda premisa violan la exclusión planteada.',
        'Todos los elementos no mencionados cumplen forzosamente la primera premisa.',
        'No es posible deducir ninguna exclusión categórica de estas premisas.',
      ]);
      return {
        id: 42,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Silogismos y premisas',
        questionText: qText,
        ...opts,
        explanation: `Silogismo de modo Celarent: exclusión universal de la clase sobre la subclase: ${syllogisms.c}`,
      };
    }

    case 43: {
      const syllogisms = [
        { p1: 'Todos los graduados con honores son estudiantes disciplinados', ind: 'Andrés', c: 'Andrés es un estudiante disciplinado.' },
        { p1: 'Todos los campeones olímpicos entrenan con rigurosa constancia', ind: 'Valeria', c: 'Valeria entrena con rigurosa constancia.' },
        { p1: 'Todos los investigadores del laboratorio siguen el protocolo bioético', ind: 'Gabriel', c: 'Gabriel sigue el protocolo bioético.' },
        { p1: 'Todos los compositores sinfónicos dominan la armonía tonal avanzada', ind: 'Mariana', c: 'Mariana domina la armonía tonal avanzada.' },
        { p1: 'Todos los pilotos comerciales de aerolínea aprueban pruebas psicofísicas anuales', ind: 'Carlos', c: 'Carlos aprueba pruebas psicofísicas anuales.' },
        { p1: 'Todos los ajedrecistas con título de Gran Maestro calculan variantes complejas', ind: 'Sofía', c: 'Sofía calcula variantes complejas.' },
        { p1: 'Todos los cirujanos cardiovasculares conocen la anatomía coronaria al detalle', ind: 'Roberto', c: 'Roberto conoce la anatomía coronaria al detalle.' },
        { p1: 'Todos los traductores certificados acreditan dominio bilingüe nivel C2', ind: 'Lucía', c: 'Lucía acredita dominio bilingüe nivel C2.' },
        { p1: 'Todos los ingenieros aeroespaciales comprenden mecánica orbital', ind: 'Diego', c: 'Diego comprende mecánica orbital.' },
        { p1: 'Todos los paleontólogos de campo identifican fósiles de transición', ind: 'Camila', c: 'Camila identifica fósiles de transición.' },
        { p1: 'Todos los buzos profesionales de saturación conocen las tablas de descompresión', ind: 'Esteban', c: 'Esteban conoce las tablas de descompresión.' },
        { p1: 'Todos los meteorólogos aeronáuticos analizan cartas de vientos de altura', ind: 'Renata', c: 'Renata analiza cartas de vientos de altura.' },
        { p1: 'Todos los arqueólogos certificados documentan estratigrafía contextual', ind: 'Mateo', c: 'Mateo documenta estratigrafía contextual.' },
        { p1: 'Todos los genetistas moleculares manejan secuencias de nucleótidos', ind: 'Daniela', c: 'Daniela maneja secuencias de nucleótidos.' },
        { p1: 'Todos los arquitectos restauradores respetan la carta internacional de Venecia', ind: 'Tomás', c: 'Tomás respeta la carta internacional de Venecia.' },
        { p1: 'Todos los astrónomos observacionales calibran filtros fotométricos', ind: 'Ximena', c: 'Ximena calibra filtros fotométricos.' },
        { p1: 'Todos los vulcanólogos de monitoreo vigilan señales de sismicidad armónica', ind: 'Javier', c: 'Javier vigila señales de sismicidad armónica.' },
        { p1: 'Todos los jueces de corte constitucional fundamentan sus votos en derecho', ind: 'Beatriz', c: 'Beatriz fundamenta sus votos en derecho.' },
        { p1: 'Todos los neurobiólogos experimentales registran potenciales de acción', ind: 'Fernando', c: 'Fernando registra potenciales de acción.' },
        { p1: 'Todos los directores de coro afinan las voces por acordes polifónicos', ind: 'Natalia', c: 'Natalia afina las voces por acordes polifónicos.' },
      ][v];
      const qText = `Premisa 1: ${syllogisms.p1}.<br>Premisa 2: <b>${syllogisms.ind}</b> pertenece formalmente a esa distinguida categoría.<br>¿Cuál afirmación es necesariamente verdadera?`;
      const opts = formatOptions(syllogisms.c, [
        `${syllogisms.ind} nunca comete errores de ninguna clase.`,
        'Solo las personas con dicha cualidad pueden estudiar en la universidad.',
        'La distinción mencionada se concede de forma aleatoria.',
      ]);
      return {
        id: 43,
        section: 'cognoscitiva',
        sectionTitle: 'Parte 1 - Habilidad Cognoscitiva',
        category: 'Silogismos y premisas',
        questionText: qText,
        ...opts,
        explanation: `Por aplicación particular directa del principio universal categórico: ${syllogisms.c}`,
      };
    }

    default:
      throw new Error(`Slot no válido para Cognoscitiva: ${slotIndex}`);
  }
}
