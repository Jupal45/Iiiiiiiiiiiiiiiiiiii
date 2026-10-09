import { Question } from '../types';
import { formatOptions } from './generatorEngine';

// ============================================================================
// PARTE 3 - MATEMÁTICAS (REACTIVOS 81 AL 114)
// 20 VARIANTES COMPLETAMENTE ÚNICAS POR CADA REACTIVO (10 OFICIALES + 10 GUÍAS)
// NINGÚN REACTIVO COMPARTE TEXTO NI OPCIONES ENTRE PRUEBAS
// ============================================================================

export function getMatematicasQuestion(slotIndex: number, variant: number): Question {
  const v = variant % 20;

  switch (slotIndex) {
    // ------------------------------------------------------------------------
    // Reactivo 81: Ecuaciones de primer grado con decimales
    // ------------------------------------------------------------------------
    case 81: {
      const a = Number((2.4 + v * 0.35).toFixed(2));
      const b = Number((3.1 + ((v * 3) % 7) * 0.4).toFixed(2));
      const missing = Number((3.2 + v * 0.45).toFixed(2));
      const target = Number((a + b + missing).toFixed(2));
      const qText = `¿Qué valor decimal completa correctamente la igualdad: <b>${a} + ___ + ${b} = ${target}</b> en la variante ${v + 1}?`;
      const opts = formatOptions(
        `${missing}`,
        [`${(missing + 1.2).toFixed(2)}`, `${(missing - 0.8 > 0 ? missing - 0.8 : missing + 2.5).toFixed(2)}`, `${(missing + 2.4).toFixed(2)}`]
      );
      return {
        id: 81,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Ecuaciones y decimales',
        instructions: 'En los ejercicios del 81 al 114 resuelva los problemas matemáticos y seleccione la opción correcta entre las cuatro alternativas.',
        questionText: qText,
        ...opts,
        explanation: `Despejamos el término faltante restando de la suma total: ${target} - (${a} + ${b}) = ${missing}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 82: Orden de números racionales (decimales y fracciones)
    // ------------------------------------------------------------------------
    case 82: {
      const baseNum = Number((0.25 + v * 0.18).toFixed(2));
      const s1 = Number((baseNum).toFixed(3));
      const s2 = Number((baseNum + 0.12).toFixed(3));
      const s3 = Number((baseNum + 0.28).toFixed(3));
      const s4 = Number((baseNum + 0.45).toFixed(3));
      const qText = `Seleccione la opción que presenta la serie numérica del grupo ${v + 1} ordenada estrictamente de <b>MENOR A MAYOR</b>:`;
      const correctStr = `${s1},  ${s2},  ${s3},  ${s4}`;
      const opts = formatOptions(correctStr, [
        `${s2},  ${s1},  ${s4},  ${s3}`,
        `${s3},  ${s4},  ${s1},  ${s2}`,
        `${s4},  ${s3},  ${s2},  ${s1}`,
      ]);
      return {
        id: 82,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Orden de números racionales',
        questionText: qText,
        ...opts,
        explanation: `Comparando el valor posicional de las décimas y centésimas: ${s1} < ${s2} < ${s3} < ${s4}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 83: Problemas verbales de adición razonada y proporciones
    // ------------------------------------------------------------------------
    case 83: {
      const contexts = [
        { item: 'asistentes al congreso médico', d1: 140, p2: 1.5, d3: 65 },
        { item: 'kilos de fruta cosechada en el huerto', d1: 180, p2: 1.25, d3: 95 },
        { item: 'libros donados a la biblioteca municipal', d1: 120, p2: 1.5, d3: 50 },
        { item: 'piezas metálicas elaboradas en el torno', d1: 210, p2: 1.3, d3: 85 },
        { item: 'árboles plantados en la reserva ecológica', d1: 160, p2: 1.75, d3: 110 },
        { item: 'paquetes entregados por la mensajería', d1: 250, p2: 1.4, d3: 120 },
        { item: 'boletos vendidos para la función teatral', d1: 300, p2: 1.2, d3: 140 },
        { item: 'kilómetros recorridos por el convoy ciclista', d1: 115, p2: 1.6, d3: 75 },
        { item: 'alumnos inscritos en el curso de verano', d1: 175, p2: 1.4, d3: 90 },
        { item: 'artículos manufacturados en la línea de montaje', d1: 220, p2: 1.5, d3: 130 },
        { item: 'visitas registradas en el portal educativo', d1: 350, p2: 1.2, d3: 180 },
        { item: 'raciones de alimentos distribuidas en el campamento', d1: 190, p2: 1.5, d3: 80 },
        { item: 'encuestas aplicadas en la investigación de campo', d1: 130, p2: 1.7, d3: 70 },
        { item: 'vacunas aplicadas en la jornada de salud', d1: 240, p2: 1.25, d3: 115 },
        { item: 'metros cúbicos de agua purificada en la planta', d1: 280, p2: 1.3, d3: 150 },
        { item: 'computadoras ensambladas durante la semana', d1: 145, p2: 1.6, d3: 95 },
        { item: 'cajas de insumos clasificadas en el almacén', d1: 310, p2: 1.2, d3: 125 },
        { item: 'kilogramos de reciclaje recolectados en la escuela', d1: 205, p2: 1.4, d3: 105 },
        { item: 'uniformes confeccionados por la cooperativa', d1: 165, p2: 1.8, d3: 85 },
        { item: 'tarjetas electrónicas revisadas por el técnico', d1: 270, p2: 1.3, d3: 140 },
      ][v];
      const d1 = contexts.d1;
      const d2 = Math.round(d1 * contexts.p2);
      const d3 = contexts.d3;
      const total = d1 + d2 + d3;
      const qText = `En una jornada de registro de ${contexts.item}, se reportaron <b>${d1}</b> el primer día, <b>${d2}</b> el segundo día (equivalente al ${Math.round(contexts.p2 * 100)}% del primer día) y <b>${d3}</b> el tercer día. ¿Cuál fue el total acumulado en los tres días (caso ${v + 1})?`;
      const opts = formatOptions(`${total}`, [`${total - 35}`, `${total + 45}`, `${total - 70}`]);
      return {
        id: 83,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Problemas de adición razonada',
        questionText: qText,
        ...opts,
        explanation: `Sumamos las tres cantidades: ${d1} + ${d2} + ${d3} = ${total}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 84: Fracciones en la recta numérica
    // ------------------------------------------------------------------------
    case 84: {
      const fractions = [
        { num: 1, den: 3 }, { num: 2, den: 5 }, { num: 3, den: 7 }, { num: 5, den: 8 },
        { num: 4, den: 9 }, { num: 7, den: 10 }, { num: 5, den: 12 }, { num: 3, den: 8 },
        { num: 2, den: 7 }, { num: 4, den: 11 }, { num: 7, den: 12 }, { num: 5, den: 9 },
        { num: 1, den: 6 }, { num: 5, den: 6 }, { num: 3, den: 10 }, { num: 9, den: 10 },
        { num: 7, den: 8 }, { num: 3, den: 5 }, { num: 2, den: 3 }, { num: 11, den: 12 },
      ][v];
      const qText = `En una recta numérica que va de 0 a 1 dividida en <b>${fractions.den}</b> segmentos iguales (ejercicio ${v + 1}), un indicador apunta exactamente a la marca número <b>${fractions.num}</b>. ¿Qué fracción representa dicha posición?`;
      const opts = formatOptions(
        `${fractions.num}/${fractions.den}`,
        [
          `${fractions.num + 1}/${fractions.den}`,
          `${fractions.num}/${fractions.den + 2}`,
          `${fractions.num > 1 ? fractions.num - 1 : fractions.num + 2}/${fractions.den}`,
        ]
      );
      return {
        id: 84,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Fracciones en la recta',
        diagramType: 'number_line',
        diagramData: { min: 0, max: 1, point: fractions.num / fractions.den, fractionLabel: `${fractions.num}/${fractions.den}` },
        questionText: qText,
        ...opts,
        explanation: `Al subdividir el intervalo unitario [0, 1] en ${fractions.den} partes congruentes, cada marca corresponde a 1/${fractions.den}. La marca ${fractions.num} representa ${fractions.num}/${fractions.den}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 85: Movimientos y números enteros en la recta numérica
    // ------------------------------------------------------------------------
    case 85: {
      const right = 4 + v;
      const left = right + (v + 1);
      const ans = -(v + 1);
      const qText = `Sobre una recta numérica graduada en enteros (prueba ${v + 1}), un objeto inicia en el punto 0, se desplaza <b>${right} unidades a la derecha</b> y después retrocede <b>${left} unidades a la izquierda</b>. ¿En qué coordenada final se ubica?`;
      const opts = formatOptions(`${ans}`, [`${ans + 3}`, `${ans - 2}`, `${Math.abs(ans)}`]);
      return {
        id: 85,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Recta numérica',
        questionText: qText,
        ...opts,
        explanation: `Operamos con números con signo: 0 + (${right}) - (${left}) = ${ans}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 86: Simplificación exacta de expresiones radicales
    // ------------------------------------------------------------------------
    case 86: {
      const radicals = [
        { rad: '√108', c: '6√3', dis: ['3√6', '12√3', '4√27'], exp: '√108 = √(36 × 3) = 6√3.' },
        { rad: '√75', c: '5√3', dis: ['3√5', '25√3', '15√5'], exp: '√75 = √(25 × 3) = 5√3.' },
        { rad: '√72', c: '6√2', dis: ['2√6', '8√3', '9√2'], exp: '√72 = √(36 × 2) = 6√2.' },
        { rad: '√98', c: '7√2', dis: ['2√7', '14√2', '49√2'], exp: '√98 = √(49 × 2) = 7√2.' },
        { rad: '√80', c: '4√5', dis: ['5√4', '16√5', '2√20'], exp: '√80 = √(16 × 5) = 4√5.' },
        { rad: '√128', c: '8√2', dis: ['4√8', '16√2', '2√32'], exp: '√128 = √(64 × 2) = 8√2.' },
        { rad: '√45', c: '3√5', dis: ['5√3', '9√5', '15√3'], exp: '√45 = √(9 × 5) = 3√5.' },
        { rad: '√54', c: '3√6', dis: ['6√3', '9√6', '2√27'], exp: '√54 = √(9 × 6) = 3√6.' },
        { rad: '√147', c: '7√3', dis: ['3√7', '21√3', '49√3'], exp: '√147 = √(49 × 3) = 7√3.' },
        { rad: '√112', c: '4√7', dis: ['7√4', '16√7', '2√28'], exp: '√112 = √(16 × 7) = 4√7.' },
        { rad: '√150', c: '5√6', dis: ['6√5', '25√6', '15√10'], exp: '√150 = √(25 × 6) = 5√6.' },
        { rad: '√180', c: '6√5', dis: ['5√6', '36√5', '10√18'], exp: '√180 = √(36 × 5) = 6√5.' },
        { rad: '√200', c: '10√2', dis: ['2√10', '20√2', '5√8'], exp: '√200 = √(100 × 2) = 10√2.' },
        { rad: '√288', c: '12√2', dis: ['6√8', '144√2', '8√6'], exp: '√288 = √(144 × 2) = 12√2.' },
        { rad: '√300', c: '10√3', dis: ['3√10', '30√3', '5√12'], exp: '√300 = √(100 × 3) = 10√3.' },
        { rad: '√245', c: '7√5', dis: ['5√7', '49√5', '35√7'], exp: '√245 = √(49 × 5) = 7√5.' },
        { rad: '√192', c: '8√3', dis: ['6√4', '16√3', '4√12'], exp: '√192 = √(64 × 3) = 8√3.' },
        { rad: '√242', c: '11√2', dis: ['2√11', '121√2', '22√2'], exp: '√242 = √(121 × 2) = 11√2.' },
        { rad: '√363', c: '11√3', dis: ['3√11', '121√3', '33√3'], exp: '√363 = √(121 × 3) = 11√3.' },
        { rad: '√500', c: '10√5', dis: ['5√10', '100√5', '50√5'], exp: '√500 = √(100 × 5) = 10√5.' },
      ][v];
      const qText = `¿Cuál es la forma canónica simplificada del radical <b>${radicals.rad}</b> (reactivo ${v + 1})?`;
      const opts = formatOptions(radicals.c, radicals.dis);
      return {
        id: 86,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Radicales',
        questionText: qText,
        ...opts,
        explanation: radicals.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 87: Modelación mediante funciones lineales de costo
    // ------------------------------------------------------------------------
    case 87: {
      const fixed = 35 + v * 5; // 35, 40, ..., 130
      const rate = 6 + (v % 5) * 2; // 6, 8, 10, 12, 14
      const distance = 8 + (v % 7); // 8, 9, 10, ...
      const total = fixed + rate * distance;
      const qText = `Una empresa de logística cobra una cuota fija de apertura de <b>$${fixed}</b> más <b>$${rate}</b> por cada kilómetro transportado. Si en el envío ${v + 1} se cubrieron <b>${distance} km</b>, ¿cuál fue el monto total facturado?`;
      const opts = formatOptions(`$${total}`, [`$${total - 12}`, `$${total + 18}`, `$${total - 24}`]);
      return {
        id: 87,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Álgebra de funciones',
        questionText: qText,
        ...opts,
        explanation: `Aplicamos la función afín: C(x) = ${fixed} + (${rate} × ${distance}) = $${total}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 88: Crecimiento exponencial y potencias
    // ------------------------------------------------------------------------
    case 88: {
      const items = [
        { base: 2, exp: 5, ans: 32, label: 'duplica', period: '5 horas' },
        { base: 2, exp: 6, ans: 64, label: 'duplica', period: '6 horas' },
        { base: 3, exp: 3, ans: 27, label: 'triplica', period: '3 horas' },
        { base: 2, exp: 7, ans: 128, label: 'duplica', period: '7 horas' },
        { base: 3, exp: 4, ans: 81, label: 'triplica', period: '4 horas' },
        { base: 4, exp: 3, ans: 64, label: 'cuadruplica', period: '3 horas' },
        { base: 2, exp: 8, ans: 256, label: 'duplica', period: '8 horas' },
        { base: 5, exp: 3, ans: 125, label: 'quintuplica', period: '3 horas' },
        { base: 3, exp: 5, ans: 243, label: 'triplica', period: '5 horas' },
        { base: 2, exp: 9, ans: 512, label: 'duplica', period: '9 horas' },
        { base: 4, exp: 4, ans: 256, label: 'cuadruplica', period: '4 horas' },
        { base: 2, exp: 4, ans: 16, label: 'duplica', period: '4 horas' },
        { base: 6, exp: 3, ans: 216, label: 'sextuplica', period: '3 horas' },
        { base: 2, exp: 10, ans: 1024, label: 'duplica', period: '10 horas' },
        { base: 3, exp: 2, ans: 9, label: 'triplica', period: '2 horas' },
        { base: 5, exp: 4, ans: 625, label: 'quintuplica', period: '4 horas' },
        { base: 7, exp: 3, ans: 343, label: 'septuplica', period: '3 horas' },
        { base: 2, exp: 11, ans: 2048, label: 'duplica', period: '11 horas' },
        { base: 4, exp: 5, ans: 1024, label: 'cuadruplica', period: '5 horas' },
        { base: 3, exp: 6, ans: 729, label: 'triplica', period: '6 horas' },
      ][v];
      const qText = `Un cultivo microbiológico se <b>${items.label}</b> cada intervalo regular. Si se inicia la observación con 1 microorganismo (ensayo ${v + 1}), ¿cuántos habrá exactamente tras <b>${items.period}</b>?`;
      const opts = formatOptions(`${items.ans}`, [`${Math.round(items.ans / items.base)}`, `${items.ans * items.base}`, `${items.base * items.exp}`]);
      return {
        id: 88,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Crecimiento exponencial',
        questionText: qText,
        ...opts,
        explanation: `Crecimiento exponencial modelado por ${items.base}^${items.exp} = ${items.ans} unidades.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 89: Razonamiento de conteo posicional e intervalos discretos
    // ------------------------------------------------------------------------
    case 89: {
      const p1 = 4 + v; // 4 a 23
      const count = 5 + v; // 5 a 24 (100% único)
      const p2 = p1 + count + 1;
      const names = [
        ['Sofía', 'Daniel'], ['Valentina', 'Mateo'], ['Camila', 'Santiago'], ['Lucía', 'Sebastián'],
        ['Mariana', 'Alejandro'], ['Elena', 'Leonardo'], ['Valeria', 'Emiliano'], ['Renata', 'Diego'],
        ['Natalia', 'Bruno'], ['Regina', 'Joaquín'], ['Ximena', 'Nicolás'], ['Paula', 'Gabriel'],
        ['Sara', 'Samuel'], ['Victoria', 'Julián'], ['Andrea', 'Tomás'], ['Daniela', 'Adrián'],
        ['Fernanda', 'Rodrigo'], ['Gabriela', 'Mauricio'], ['Isabella', 'Emilio'], ['Carmen', 'Javier'],
      ][v];
      const qText = `En una fila de atención para el trámite ${v + 1}, ${names[0]} tiene el turno número <b>${p1}</b> y ${names[1]} tiene el turno número <b>${p2}</b>. ¿Cuántas personas están formadas exactamente <b>ENTRE</b> ambos?`;
      const opts = formatOptions(`${count}`, [`${count + 1}`, `${count - 1}`, `${p2 - p1}`]);
      return {
        id: 89,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Conteo posicional',
        questionText: qText,
        ...opts,
        explanation: `Para contar los elementos estrictamente intermedios se restan los extremos y se resta 1: (${p2} - ${p1}) - 1 = ${count}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 90: Leyes de los exponentes en igual base
    // ------------------------------------------------------------------------
    case 90: {
      const base = 2 + (v % 4); // 2, 3, 4, 5
      const fixedExp = 2 + ((v * 2) % 5); // 2, 3, 4, 5, 6
      const xVal = 3 + v; // 3 a 22 (100% único!)
      const targetExp = xVal + fixedExp;
      const qText = `¿Qué valor debe tener <i>x</i> para satisfacer la identidad exponencial: <b>${base}<sup>x</sup> · ${base}<sup>${fixedExp}</sup> = ${base}<sup>${targetExp}</sup></b> (caso ${v + 1})?`;
      const opts = formatOptions(`${xVal}`, [`${xVal + 2}`, `${xVal - 1}`, `${targetExp}`]);
      return {
        id: 90,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Exponentes y potencias',
        questionText: qText,
        ...opts,
        explanation: `Por la ley del producto de potencias con base común: x + ${fixedExp} = ${targetExp} ➔ x = ${xVal}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 91: Intersección de rectas en el plano cartesiano
    // ------------------------------------------------------------------------
    case 91: {
      const x0 = 1 + v; // 1 a 20 (coordenadas x únicas)
      const y0 = 2 + ((v * 3) % 9);
      const m1 = 2;
      const m2 = -1;
      const c1 = y0 - m1 * x0;
      const c2 = y0 - m2 * x0;
      const qText = `¿En qué punto de coordenadas (<i>x</i>, <i>y</i>) se cortan las rectas <b>y = ${m1}x ${c1 >= 0 ? '+' : ''}${c1}</b> e <b>y = -x ${c2 >= 0 ? '+' : ''}${c2}</b> (sistema ${v + 1})?`;
      const opts = formatOptions(`(${x0}, ${y0})`, [
        `(${x0 + 1}, ${y0 - 1})`,
        `(${x0 - 1}, ${y0 + 2})`,
        `(${y0}, ${x0})`,
      ]);
      return {
        id: 91,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Geometría analítica',
        questionText: qText,
        ...opts,
        explanation: `Igualando ecuaciones: ${m1}x ${c1 >= 0 ? '+' : ''}${c1} = -x ${c2 >= 0 ? '+' : ''}${c2} ➔ 3x = ${c2 - c1} ➔ x = ${x0}. Sustituyendo: y = ${y0}. Punto: (${x0}, ${y0}).`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 92: Reducción de términos semejantes con variables algebraicas
    // ------------------------------------------------------------------------
    case 92: {
      const c1 = 4 + v; // 4 a 23
      const c2 = 7 + ((v * 2) % 11);
      const sumCoeff = c1 + c2;
      const qText = `Al simplificar la suma algebraica de términos semejantes <b>${c1}x²y + ${c2}x²y</b> (ejercicio ${v + 1}), se obtiene:`;
      const opts = formatOptions(`${sumCoeff}x²y`, [
        `${sumCoeff}x⁴y²`,
        `${c1 * c2}x²y`,
        `${sumCoeff}xy`,
      ]);
      return {
        id: 92,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Operaciones con polinomios',
        questionText: qText,
        ...opts,
        explanation: `Sumamos los coeficientes numéricos conservando intacta la parte literal común: (${c1} + ${c2})x²y = ${sumCoeff}x²y.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 93: Evaluación de valor numérico en polinomios de segundo grado
    // ------------------------------------------------------------------------
    case 93: {
      const val = 2 + v; // 2 a 21 (100% único!)
      const ans = 2 * val * val - 3 * val + 4;
      const qText = `Si la variable toma el valor <i>x</i> = <b>${val}</b>, determine el valor numérico de la función cuadrática: <b>2x² - 3x + 4</b> (prueba ${v + 1}):`;
      const opts = formatOptions(`${ans}`, [`${ans + 6}`, `${ans - 8}`, `${ans + 12}`]);
      return {
        id: 93,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Valor numérico algebraico',
        questionText: qText,
        ...opts,
        explanation: `Sustituimos x = ${val}: 2(${val})² - 3(${val}) + 4 = 2(${val * val}) - ${3 * val} + 4 = ${ans}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 94: Factorización de trinomios cuadrados de la forma x² + bx + c
    // ------------------------------------------------------------------------
    case 94: {
      const a = 2 + v; // 2 a 21
      const b = 3 + ((v * 3) % 7);
      const sum = a + b;
      const prod = a * b;
      const qText = `¿Cuál es la factorización completa del trinomio cuadrático: <b>x² + ${sum}x + ${prod}</b> (reactivo ${v + 1})?`;
      const opts = formatOptions(`(x + ${a})(x + ${b})`, [
        `(x - ${a})(x - ${b})`,
        `(x + ${sum})(x + 1)`,
        `(x + ${prod})(x + 1)`,
      ]);
      return {
        id: 94,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Factorización',
        questionText: qText,
        ...opts,
        explanation: `Se buscan dos enteros que sumen ${sum} y cuyo producto sea ${prod}: son ${a} y ${b}. La expresión es (x + ${a})(x + ${b}).`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 95: Producto notable de binomios conjugados (diferencia de cuadrados)
    // ------------------------------------------------------------------------
    case 95: {
      const k = 4 + v; // 4 a 23 (100% único!)
      const k2 = k * k;
      const qText = `Determine el término constante que completa el producto notable: <b>(x + ${k})(x - ${k}) = x² - ■</b> (ejercicio ${v + 1}):`;
      const opts = formatOptions(`${k2}`, [`${k * 2}`, `${k}`, `${k2 + 10}`]);
      return {
        id: 95,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Productos notables',
        questionText: qText,
        ...opts,
        explanation: `Por la regla de binomios conjugados: (a + b)(a - b) = a² - b². Por ende el recuadro es ${k}² = ${k2}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 96: Resolución de desigualdades lineales de una variable
    // ------------------------------------------------------------------------
    case 96: {
      const a = 2 + (v % 4); // 2, 3, 4, 5
      const bound = 3 + v; // 3 a 22 (cota única!)
      const b = 5 + ((v * 2) % 7);
      const c = a * bound + b;
      const qText = `¿Cuál es el conjunto solución de la inecuación lineal: <b>${a}x + ${b} > ${c}</b> (variante ${v + 1})?`;
      const opts = formatOptions(`x > ${bound}`, [
        `x < ${bound}`,
        `x ≥ ${bound + 1}`,
        `x ≤ ${bound - 1}`,
      ]);
      return {
        id: 96,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Desigualdades lineales',
        questionText: qText,
        ...opts,
        explanation: `Despejamos x: ${a}x > ${c} - ${b} ➔ ${a}x > ${c - b} ➔ x > ${bound}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 97: Jerarquía de operaciones aritméticas combinadas
    // ------------------------------------------------------------------------
    case 97: {
      const n1 = 30 + v * 12;
      const n2 = 2 + (v % 3);
      const n3 = 5 + (v % 4);
      const ans = n1 - 2 * n2 + 3 * n3;
      const qText = `Calcule el valor numérico exacto de la expresión aritmética: <b>${n1} - 2(${n2}) + 3(${n3})</b> (reactivo ${v + 1}):`;
      const opts = formatOptions(`${ans}`, [`${ans + 7}`, `${ans - 5}`, `${ans + 12}`]);
      return {
        id: 97,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Operaciones combinadas',
        questionText: qText,
        ...opts,
        explanation: `Por jerarquía de operaciones, resolvemos las multiplicaciones antes que sumas y restas: ${n1} - ${2 * n2} + ${3 * n3} = ${ans}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 98: Modelación algebraica de perímetros geométricos
    // ------------------------------------------------------------------------
    case 98: {
      const a = 2 + v; // 2 a 21
      const b = 3 + ((v * 2) % 7);
      const simplified = `${2 * a + 2}x + ${2 * b}`;
      const qText = `Un terreno rectangular tiene una base de longitud <b>${a}x + ${b}</b> y una altura de <b>x</b>. ¿Qué expresión algebraica simplificada define su <b>perímetro</b> total (caso ${v + 1})?`;
      const opts = formatOptions(simplified, [
        `${a + 1}x + ${b}`,
        `${a}x² + ${b}x`,
        `${2 * a}x + ${b}`,
      ]);
      return {
        id: 98,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Perímetro algebraico',
        questionText: qText,
        ...opts,
        explanation: `Perímetro = 2(base) + 2(altura) = 2(${a}x + ${b}) + 2x = ${2 * a}x + ${2 * b} + 2x = ${simplified}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 99: Sistemas de dos ecuaciones lineales simultáneas
    // ------------------------------------------------------------------------
    case 99: {
      const xSol = 4 + v; // 4 a 23
      const ySol = 2 + ((v * 3) % 8);
      const sum = xSol + ySol;
      const diff = xSol - ySol;
      const qText = `¿Cuál es la solución simultánea del sistema lineal:<br><br><b>x + y = ${sum}</b><br><b>x - y = ${diff}</b> (sistema ${v + 1})?`;
      const opts = formatOptions(`x = ${xSol}, y = ${ySol}`, [
        `x = ${xSol + 1}, y = ${ySol - 1}`,
        `x = ${ySol}, y = ${xSol}`,
        `x = ${xSol - 1}, y = ${ySol + 1}`,
      ]);
      return {
        id: 99,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Sistemas de ecuaciones',
        questionText: qText,
        ...opts,
        explanation: `Sumando miembro a miembro las ecuaciones: 2x = ${sum + diff} ➔ x = ${xSol}; restando: 2y = ${sum - diff} ➔ y = ${ySol}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 100: Coeficientes en multiplicación de binomios
    // ------------------------------------------------------------------------
    case 100: {
      const c1 = 3 + v; // 3 a 22
      const c2 = 5 + ((v * 2) % 9);
      const linearCoeff = c1 - c2;
      const qText = `Al desarrollar el producto de binomios con término común <b>(x + ${c1})(x - ${c2})</b>, ¿cuál es el término lineal resultante en <i>x</i> (prueba ${v + 1})?`;
      const opts = formatOptions(`${linearCoeff}x`, [
        `${c1 + c2}x`,
        `${c1 * c2}x`,
        `${-(c1 + c2)}x`,
      ]);
      return {
        id: 100,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Operaciones algebraicas',
        questionText: qText,
        ...opts,
        explanation: `Desarrollo: x² - ${c2}x + ${c1}x - ${c1 * c2} = x² + (${linearCoeff})x - ${c1 * c2}. El término lineal en x es ${linearCoeff}x.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 101: Simplificación de expresiones monómicas
    // ------------------------------------------------------------------------
    case 101: {
      const k = 3 + v; // 3 a 22 (100% único!)
      const ans = `${k * 3}n`;
      const qText = `Al reducir los términos algebraicos semejantes con variable <i>n</i>: <b>${k}n + ${k * 2}n</b> (reactivo ${v + 1}), se obtiene:`;
      const opts = formatOptions(ans, [`${k * k}n`, `${k * 3}n²`, `${k}n`]);
      return {
        id: 101,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Álgebra de polinomios',
        questionText: qText,
        ...opts,
        explanation: `Sumamos directamente los coeficientes de la misma variable de grado uno: (${k} + ${k * 2})n = ${k * 3}n.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 102: Clasificación de triángulos según sus lados y propiedades
    // ------------------------------------------------------------------------
    case 102: {
      const triangles = [
        { s1: 7, s2: 7, s3: 7, c: 'Equilátero', dis: ['Isósceles', 'Escaleno', 'Rectángulo'], exp: 'Tiene sus 3 lados exactamente iguales: triángulo equilátero.' },
        { s1: 8, s2: 8, s3: 11, c: 'Isósceles', dis: ['Equilátero', 'Escaleno', 'Acutángulo regular'], exp: 'Tiene 2 lados de igual longitud y uno desigual: triángulo isósceles.' },
        { s1: 5, s2: 9, s3: 12, c: 'Escaleno', dis: ['Equilátero', 'Isósceles', 'Rectángulo'], exp: 'Tiene sus 3 lados de longitudes distintas: triángulo escaleno.' },
        { s1: 10, s2: 10, s3: 10, c: 'Equilátero', dis: ['Isósceles', 'Escaleno', 'Obtusángulo'], exp: 'Sus tres longitudes son congruentes: equilátero.' },
        { s1: 9, s2: 9, s3: 14, c: 'Isósceles', dis: ['Equilátero', 'Escaleno', 'Equiángulo'], exp: 'Posee dos lados iguales y una base diferente: isósceles.' },
        { s1: 6, s2: 11, s3: 15, c: 'Escaleno', dis: ['Equilátero', 'Isósceles', 'Rectángulo'], exp: 'Posee tres medidas diferentes: escaleno.' },
        { s1: 12, s2: 12, s3: 12, c: 'Equilátero', dis: ['Isósceles', 'Escaleno', 'Acutángulo desigual'], exp: 'Los tres lados miden 12 cm: equilátero.' },
        { s1: 11, s2: 11, s3: 16, c: 'Isósceles', dis: ['Equilátero', 'Escaleno', 'Rectángulo'], exp: 'Dos lados miden 11 cm y el tercero 16 cm: isósceles.' },
        { s1: 7, s2: 13, s3: 17, c: 'Escaleno', dis: ['Equilátero', 'Isósceles', 'Equilátero regular'], exp: 'Tres lados desiguales: escaleno.' },
        { s1: 15, s2: 15, s3: 15, c: 'Equilátero', dis: ['Isósceles', 'Escaleno', 'Oblicuángulo'], exp: 'Triángulo equilátero por igualdad en sus tres segmentos.' },
        { s1: 13, s2: 13, s3: 19, c: 'Isósceles', dis: ['Equilátero', 'Escaleno', 'Triángulo rectángulo'], exp: 'Dos lados congruentes de 13 cm: isósceles.' },
        { s1: 8, s2: 14, s3: 18, c: 'Escaleno', dis: ['Equilátero', 'Isósceles', 'Rectángulo'], exp: 'Lados de 8, 14 y 18 cm: escaleno.' },
        { s1: 16, s2: 16, s3: 16, c: 'Equilátero', dis: ['Isósceles', 'Escaleno', 'Isósceles recto'], exp: 'Tres lados de 16 cm: equilátero.' },
        { s1: 14, s2: 14, s3: 20, c: 'Isósceles', dis: ['Equilátero', 'Escaleno', 'Equilátero'], exp: 'Dos lados de 14 cm: isósceles.' },
        { s1: 9, s2: 15, s3: 21, c: 'Escaleno', dis: ['Equilátero', 'Isósceles', 'Rectángulo'], exp: 'Tres longitudes distintas: escaleno.' },
        { s1: 18, s2: 18, s3: 18, c: 'Equilátero', dis: ['Isósceles', 'Escaleno', 'Triángulo recto'], exp: 'Equilátero por tres lados de 18 cm.' },
        { s1: 17, s2: 17, s3: 24, c: 'Isósceles', dis: ['Equilátero', 'Escaleno', 'Acutángulo'], exp: 'Isósceles con lados 17, 17 y 24 cm.' },
        { s1: 10, s2: 16, s3: 22, c: 'Escaleno', dis: ['Equilátero', 'Isósceles', 'Equilátero'], exp: 'Escaleno con medidas 10, 16 y 22 cm.' },
        { s1: 20, s2: 20, s3: 20, c: 'Equilátero', dis: ['Isósceles', 'Escaleno', 'Obtusángulo'], exp: 'Equilátero de 20 cm por lado.' },
        { s1: 19, s2: 19, s3: 26, c: 'Isósceles', dis: ['Equilátero', 'Escaleno', 'Rectángulo'], exp: 'Isósceles con lados 19, 19 y 26 cm.' },
      ][v];
      const qText = `Un polígono triangular (figura ${v + 1}) tiene lados de <b>${triangles.s1} cm</b>, <b>${triangles.s2} cm</b> y <b>${triangles.s3} cm</b>. ¿Cuál opción clasifica correctamente el triángulo y sus dimensiones?`;
      const correctOpt = `Es un triángulo ${triangles.c.toLowerCase()} (medidas ${triangles.s1}, ${triangles.s2} y ${triangles.s3} cm)`;
      const dist1 = `Es un triángulo ${triangles.dis[0].toLowerCase()} (medidas ${triangles.s1}, ${triangles.s2} y ${triangles.s3} cm)`;
      const dist2 = `Es un triángulo ${triangles.dis[1].toLowerCase()} (medidas ${triangles.s1}, ${triangles.s2} y ${triangles.s3} cm)`;
      const dist3 = `Es un triángulo ${triangles.dis[2].toLowerCase()} (medidas ${triangles.s1}, ${triangles.s2} y ${triangles.s3} cm)`;
      const opts = formatOptions(correctOpt, [dist1, dist2, dist3]);
      return {
        id: 102,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Clasificación de triángulos',
        questionText: qText,
        ...opts,
        explanation: triangles.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 103: Teorema de Pitágoras en triángulos rectángulos
    // ------------------------------------------------------------------------
    case 103: {
      const triplets = [
        { a: 3, b: 4, c: 5 }, { a: 6, b: 8, c: 10 }, { a: 5, b: 12, c: 13 }, { a: 8, b: 15, c: 17 },
        { a: 9, b: 12, c: 15 }, { a: 7, b: 24, c: 25 }, { a: 12, b: 16, c: 20 }, { a: 10, b: 24, c: 26 },
        { a: 15, b: 20, c: 25 }, { a: 20, b: 21, c: 29 }, { a: 18, b: 24, c: 30 }, { a: 9, b: 40, c: 41 },
        { a: 16, b: 30, c: 34 }, { a: 21, b: 28, c: 35 }, { a: 12, b: 35, c: 37 }, { a: 24, b: 32, c: 40 },
        { a: 15, b: 36, c: 39 }, { a: 27, b: 36, c: 45 }, { a: 30, b: 40, c: 50 }, { a: 33, b: 44, c: 55 },
      ][v];
      const qText = `En un triángulo rectángulo correspondiente al ejercicio ${v + 1}, las longitudes de los catetos son <b>${triplets.a} cm</b> y <b>${triplets.b} cm</b>. Aplicando el Teorema de Pitágoras, ¿cuál es la medida exacta de la hipotenusa?`;
      const opts = formatOptions(`${triplets.c} cm`, [
        `${triplets.c + 2} cm`,
        `${triplets.a + triplets.b} cm`,
        `${triplets.c - 1} cm`,
      ]);
      return {
        id: 103,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Teorema de Pitágoras',
        questionText: qText,
        ...opts,
        explanation: `c = √(${triplets.a}² + ${triplets.b}²) = √(${triplets.a * triplets.a} + ${triplets.b * triplets.b}) = √(${triplets.c * triplets.c}) = ${triplets.c} cm.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 104: Suma de ángulos interiores en triángulos (180°)
    // ------------------------------------------------------------------------
    case 104: {
      const a1 = 35 + v * 2; // 35 a 73
      const a2 = 50 + ((v * 3) % 15);
      const a3 = 180 - a1 - a2;
      const qText = `En un triángulo plano (caso ${v + 1}), dos de sus ángulos interiores miden exactamente <b>${a1}°</b> y <b>${a2}°</b>. Sabiendo que los tres ángulos interiores suman 180°, ¿cuánto mide el tercer ángulo?`;
      const opts = formatOptions(`${a3}°`, [`${a3 + 10}°`, `${a3 - 15}°`, `${180 - a1}°`]);
      return {
        id: 104,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Ángulos en triángulos',
        diagramType: 'triangle_angles',
        diagramData: { a: a1, b: a2, c: a3 },
        questionText: qText,
        ...opts,
        explanation: `El tercer ángulo suplementario interior es: 180° - (${a1}° + ${a2}°) = ${a3}°.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 105: Probabilidad clásica de Laplace en eventos equiprobables
    // ------------------------------------------------------------------------
    case 105: {
      const urns = [
        { total: 20, divisor: 4, fav: 5, label: 'múltiplo de 4' },
        { total: 24, divisor: 3, fav: 8, label: 'múltiplo de 3' },
        { total: 25, divisor: 5, fav: 5, label: 'múltiplo de 5' },
        { total: 30, divisor: 6, fav: 5, label: 'múltiplo de 6' },
        { total: 18, divisor: 2, fav: 9, label: 'número par' },
        { total: 28, divisor: 7, fav: 4, label: 'múltiplo de 7' },
        { total: 32, divisor: 8, fav: 4, label: 'múltiplo de 8' },
        { total: 27, divisor: 9, fav: 3, label: 'múltiplo de 9' },
        { total: 22, divisor: 2, fav: 11, label: 'número par' },
        { total: 35, divisor: 5, fav: 7, label: 'múltiplo de 5' },
        { total: 36, divisor: 6, fav: 6, label: 'múltiplo de 6' },
        { total: 40, divisor: 8, fav: 5, label: 'múltiplo de 8' },
        { total: 21, divisor: 3, fav: 7, label: 'múltiplo de 3' },
        { total: 26, divisor: 2, fav: 13, label: 'número par' },
        { total: 42, divisor: 7, fav: 6, label: 'múltiplo de 7' },
        { total: 45, divisor: 9, fav: 5, label: 'múltiplo de 9' },
        { total: 48, divisor: 12, fav: 4, label: 'múltiplo de 12' },
        { total: 50, divisor: 10, fav: 5, label: 'múltiplo de 10' },
        { total: 33, divisor: 11, fav: 3, label: 'múltiplo de 11' },
        { total: 60, divisor: 15, fav: 4, label: 'múltiplo de 15' },
      ][v];
      const qText = `En una urna hay <b>${urns.total}</b> tarjetas numeradas del 1 al ${urns.total} (experimento ${v + 1}). Al extraer una tarjeta al azar, ¿cuál es la probabilidad de que resulte ser un <b>${urns.label}</b>?`;
      const opts = formatOptions(`${urns.fav}/${urns.total}`, [
        `${urns.fav + 2}/${urns.total}`,
        `1/${urns.fav}`,
        `${urns.fav - 2 > 0 ? urns.fav - 2 : 1}/${urns.total}`,
      ]);
      return {
        id: 105,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Probabilidad clásica',
        questionText: qText,
        ...opts,
        explanation: `Hay ${urns.fav} casos favorables entre ${urns.total} casos totales: P = ${urns.fav}/${urns.total}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 106: Ángulo central e inscrito en la circunferencia
    // ------------------------------------------------------------------------
    case 106: {
      const central = 40 + v * 4; // 40, 44, 48, ..., 116 (100% único!)
      const inscrito = central / 2;
      const qText = `En una circunferencia correspondiente a la figura ${v + 1}, un ángulo central mide <b>${central}°</b> y abarca el mismo arco que un ángulo inscrito. ¿Cuál es la medida del ángulo inscrito?`;
      const opts = formatOptions(`${inscrito}°`, [`${central}°`, `${central * 2}°`, `${180 - central}°`]);
      return {
        id: 106,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Ángulos en la circunferencia',
        diagramType: 'circle_angles',
        diagramData: { central, inscribed: inscrito },
        questionText: qText,
        ...opts,
        explanation: `El teorema del ángulo inscrito establece que este mide exactamente la mitad del ángulo central correspondiente: ${central}° / 2 = ${inscrito}°.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 107: Semejanza de triángulos y razón de proporcionalidad
    // ------------------------------------------------------------------------
    case 107: {
      const factor = 2 + (v % 4); // 2, 3, 4, 5
      const l1 = 4 + v; // 4 a 23 (100% único!)
      const l2 = l1 * factor;
      const qText = `Dos triángulos geométricos son semejantes con razón de escala lineal <b>1 : ${factor}</b> (pareja ${v + 1}). Si un lado homólogo menor mide <b>${l1} cm</b>, ¿cuánto mide el lado respectivo en el triángulo mayor?`;
      const opts = formatOptions(`${l2} cm`, [`${l1 + factor} cm`, `${l2 + 4} cm`, `${l1} cm`]);
      return {
        id: 107,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Semejanza de triángulos',
        diagramType: 'similar_triangles',
        diagramData: { scale: factor, sideA: l1, sideB: l2 },
        questionText: qText,
        ...opts,
        explanation: `Multiplicamos la longitud homóloga por la razón de escala geométrica: ${l1} cm × ${factor} = ${l2} cm.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 108: Estadística descriptiva - Medida de tendencia central (Moda)
    // ------------------------------------------------------------------------
    case 108: {
      const dataSets = [
        { arr: [4, 5, 5, 5, 7, 8, 9], moda: 5 },
        { arr: [2, 3, 4, 4, 4, 6, 8], moda: 4 },
        { arr: [10, 12, 12, 12, 14, 15, 16], moda: 12 },
        { arr: [7, 8, 8, 8, 9, 10, 11], moda: 8 },
        { arr: [3, 6, 6, 6, 9, 12, 15], moda: 6 },
        { arr: [11, 13, 14, 14, 14, 17, 19], moda: 14 },
        { arr: [5, 7, 9, 9, 9, 11, 13], moda: 9 },
        { arr: [15, 18, 18, 18, 20, 22, 25], moda: 18 },
        { arr: [1, 2, 3, 3, 3, 5, 7], moda: 3 },
        { arr: [8, 10, 11, 11, 11, 14, 16], moda: 11 },
        { arr: [20, 22, 25, 25, 25, 28, 30], moda: 25 },
        { arr: [6, 7, 7, 7, 8, 10, 12], moda: 7 },
        { arr: [12, 15, 16, 16, 16, 19, 21], moda: 16 },
        { arr: [4, 8, 10, 10, 10, 12, 14], moda: 10 },
        { arr: [13, 17, 17, 17, 19, 21, 23], moda: 17 },
        { arr: [9, 12, 15, 15, 15, 18, 20], moda: 15 },
        { arr: [21, 24, 24, 24, 27, 29, 31], moda: 24 },
        { arr: [14, 16, 19, 19, 19, 22, 25], moda: 19 },
        { arr: [2, 5, 8, 8, 8, 11, 14], moda: 8 },
        { arr: [18, 20, 21, 21, 21, 23, 26], moda: 21 },
      ][v];
      const qText = `En la siguiente muestra de observaciones estadísticas: <b>[ ${dataSets.arr.join(', ')} ]</b> (muestra ${v + 1}), ¿cuál es el valor correspondiente a la <b>MODA</b>?`;
      const opts = formatOptions(`${dataSets.moda}`, [
        `${dataSets.moda + 1}`,
        `${dataSets.moda - 1}`,
        `${dataSets.arr[0]}`,
      ]);
      return {
        id: 108,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Estadística - Moda',
        diagramType: 'bar_chart',
        diagramData: { labels: ['A', 'B', 'C', 'D'], values: [3, 7, 4, 2] },
        questionText: qText,
        ...opts,
        explanation: `La moda es el valor con la frecuencia de aparición más alta en la serie de datos: ${dataSets.moda}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 109: Ángulos suplementarios (suma = 180°)
    // ------------------------------------------------------------------------
    case 109: {
      const a1 = 55 + v * 4; // 55, 59, 63, ..., 131 (100% único!)
      const a2 = 180 - a1;
      const qText = `Dos ángulos geométricos adyacentes son <b>suplementarios</b> y totalizan 180°. Si uno de los ángulos mide <b>${a1}°</b> (figura ${v + 1}), ¿cuánto mide el suplemento?`;
      const opts = formatOptions(`${a2}°`, [`${a2 + 10}°`, `${a2 - 15}°`, `${90 - (a1 % 40)}°`]);
      return {
        id: 109,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Ángulos suplementarios',
        diagramType: 'supplementary_angles',
        diagramData: { angle1: a1, angle2: a2 },
        questionText: qText,
        ...opts,
        explanation: `Dos ángulos suplementarios suman 180°: 180° - ${a1}° = ${a2}°.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 110: Ángulos complementarios (suma = 90°)
    // ------------------------------------------------------------------------
    case 110: {
      const a = 20 + v * 3; // 20, 23, 26, ..., 77 (100% único!)
      const comp = 90 - a;
      const qText = `Dos ángulos agudos son <b>complementarios</b> cuando su suma equivale a 90°. Si el ángulo beta mide <b>${a}°</b> (caso ${v + 1}), ¿cuál es el valor de su ángulo complementario?`;
      const opts = formatOptions(`${comp}°`, [`${180 - a}°`, `${comp + 15}°`, `${comp - 10 > 0 ? comp - 10 : comp + 20}°`]);
      return {
        id: 110,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Geometría de ángulos',
        questionText: qText,
        ...opts,
        explanation: `Por la definición de ángulos complementarios: 90° - ${a}° = ${comp}°.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 111: Interpretación de tablas y cálculo de porcentajes
    // ------------------------------------------------------------------------
    case 111: {
      const pct = 15 + v * 3; // 15, 18, 21, ..., 72
      const totalStudents = 150 + v * 10; // 150 a 340 (100% único!)
      const count = Math.round((pct / 100) * totalStudents);
      const clubs = [
        'Ajedrez y Lógica', 'Robótica Educativa', 'Debate Filosófico', 'Club de Astronomía',
        'Banda Sinfónica', 'Taller Literario', 'Brigada Ecológica', 'Teatro Clásico',
        'Modelado 3D', 'Programación Web', 'Danza Folclórica', 'Fotografía Digital',
        'Matemáticas Olímpicas', 'Artes Plásticas', 'Periodismo Escolar', 'Voleibol Formativo',
        'Básquetbol Juvenil', 'Diseño Gráfico', 'Música Tradicional', 'Sociedad de Ciencias',
      ][v];
      const qText = `En una preparatoria con matrícula de <b>${totalStudents}</b> alumnos (plantel ${v + 1}), el <b>${pct}%</b> de los estudiantes participa en el taller de <b>${clubs}</b>. ¿Cuántos alumnos asisten a dicho taller?`;
      const opts = formatOptions(`${count}`, [`${count - 8}`, `${count + 12}`, `${count - 15}`]);
      return {
        id: 111,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Porcentajes y tablas',
        diagramType: 'table',
        diagramData: { headers: ['Actividad', 'Porcentaje'], rows: [[clubs, `${pct}%`], ['Otras actividades', `${100 - pct}%`]] },
        questionText: qText,
        ...opts,
        explanation: `Multiplicamos el total de alumnos por la proporción porcentual: (${pct} / 100) × ${totalStudents} = ${count} estudiantes.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 112: Probabilidad geométrica en tableros circulares
    // ------------------------------------------------------------------------
    case 112: {
      const sectors = 6 + v; // 6 a 25 sectores (100% único!)
      const targetSector = 2 + (v % 4);
      const qText = `Una ruleta circular está dividida en <b>${sectors}</b> sectores circulares idénticos numerados del 1 al ${sectors} (diseño ${v + 1}). Si la aguja se detiene al azar, ¿cuál es la probabilidad de que apunte al sector número ${targetSector}?`;
      const opts = formatOptions(`1/${sectors}`, [
        `${targetSector}/${sectors}`,
        `1/${Math.floor(sectors / 2)}`,
        `2/${sectors}`,
      ]);
      return {
        id: 112,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Probabilidad geométrica',
        diagramType: 'dartboard',
        diagramData: { totalSectors: sectors },
        questionText: qText,
        ...opts,
        explanation: `Al haber un único sector favorable número ${targetSector} entre ${sectors} subdivisiones congruentes: P = 1/${sectors}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 113: Probabilidad del evento complemento en urnas
    // ------------------------------------------------------------------------
    case 113: {
      const rojas = 4 + v; // 4 a 23
      const verdes = 3 + ((v * 2) % 7);
      const azules = 5 + ((v * 3) % 8);
      const total = rojas + verdes + azules;
      const noVerdes = rojas + azules;
      const qText = `Una urna contiene esferas de colores: <b>${rojas} rojas</b>, <b>${verdes} verdes</b> y <b>${azules} azules</b> (urna experimental ${v + 1}). Al extraer una esfera sin mirar, ¿cuál es la probabilidad de que <b>NO SEA VERDE</b>?`;
      const opts = formatOptions(`${noVerdes}/${total}`, [
        `${verdes}/${total}`,
        `${rojas}/${total}`,
        `${azules}/${total}`,
      ]);
      return {
        id: 113,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Probabilidad en urnas',
        questionText: qText,
        ...opts,
        explanation: `El espacio muestral contiene ${total} esferas. Las no verdes son las rojas y azules (${rojas} + ${azules} = ${noVerdes}). Por tanto, P(no verde) = ${noVerdes}/${total}.`,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 114: Área de regiones sombreadas y figuras compuestas
    // ------------------------------------------------------------------------
    case 114: {
      const lado = 6 + v * 2; // 6, 8, 10, ..., 44 (100% único!)
      const radio = lado / 2;
      const areaCuadrado = lado * lado;
      const areaCirculoStr = `${radio * radio}π`;
      const correctStr = `${areaCuadrado} - ${areaCirculoStr} cm²`;
      const qText = `Un marco cuadrado de lado <b>${lado} cm</b> encierra un círculo inscrito de radio <b>${radio} cm</b> (diseño ornamental ${v + 1}). ¿Qué expresión matemática determina el <b>área de las esquinas exteriores</b> que quedan fuera del círculo?`;
      const opts = formatOptions(correctStr, [
        `${areaCuadrado} - ${lado}π cm²`,
        `${areaCuadrado / 2} - ${areaCirculoStr} cm²`,
        `${lado * 4} - ${radio}π cm²`,
      ]);
      return {
        id: 114,
        section: 'matematicas',
        sectionTitle: 'Parte 3 - Matemáticas',
        category: 'Áreas de figuras compuestas',
        questionText: qText,
        ...opts,
        explanation: `Área del cuadrado = ${lado}² = ${areaCuadrado} cm². Área del círculo inscrito = π(${radio}²) = ${areaCirculoStr} cm². Área restante en las esquinas = ${correctStr}.`,
      };
    }

    default:
      throw new Error(`Slot no válido para Matemáticas: ${slotIndex}`);
  }
}
