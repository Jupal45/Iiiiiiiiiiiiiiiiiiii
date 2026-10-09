import { Question } from '../types';
import { formatOptions } from './generatorEngine';

// ============================================================================
// LENGUA ESPAÑOLA (REACTIVOS 44 AL 80)
// 20 VARIANTES ÚNICAS POR CADA REACTIVO (10 OFICIALES + 10 GUÍAS)
// ============================================================================

export function getEspanolQuestion(slotIndex: number, variant: number): Question {
  const v = variant % 20;

  switch (slotIndex) {
    // ------------------------------------------------------------------------
    // Reactivo 44: Homófonos b/v, h, s/z
    // ------------------------------------------------------------------------
    case 44: {
      const data = [
        { bad: 'tubo', good: 'tuvo', w: 'tener', q: '¿Cuál de las siguientes oraciones utiliza INCORRECTAMENTE la palabra homófona destacada (prueba 1)?', t: 'El doctor <b>tubo</b> que atender una urgencia de inmediato.', exp: '"Tuvo" con v proviene del verbo tener; "tubo" con b designa un cilindro hueco.' },
        { bad: 'hierba', good: 'hierva', w: 'hervir', q: 'Seleccione la oración que contiene un error de homófonos b/v en el verbo (prueba 2):', t: 'Espera a que el agua <b>hierba</b> para añadir el café molido.', exp: '"Hierva" con v corresponde a la conjugación del verbo hervir; "hierba" con b es una planta.' },
        { bad: 'echo', good: 'hecho', w: 'hacer', q: '¿En cuál oración se comete una falta ortográfica en el participio (prueba 3)?', t: 'El proyecto ya está <b>echo</b> conforme a las normas de calidad.', exp: '"Hecho" con h es el participio del verbo hacer; "echo" sin h es del verbo echar.' },
        { bad: 'calló', good: 'cayó', w: 'caer', q: 'Seleccione la oración con uso INCORRECTO de grafía ll/y (prueba 4):', t: 'El libro se <b>calló</b> accidentalmente de la mesa de noche.', exp: '"Cayó" con y proviene de caer; "calló" con ll proviene de callar.' },
        { bad: 'habría', good: 'abría', w: 'abrir', q: 'Identifique la oración con error ortográfico evidente en la acción de abrir (prueba 5):', t: 'El conserje <b>habría</b> las puertas todas las mañanas a las siete.', exp: '"Abría" sin h proviene del verbo abrir; "habría" con h es del verbo haber.' },
        { bad: 'ves', good: 'vez', w: 'ocasión', q: '¿Cuál oración presenta una incorrección de grafía s/z referida a ocasión (prueba 6)?', t: 'Esta <b>ves</b> llegaremos con antelación suficiente al examen.', exp: '"Vez" con z alude a una ocasión o turno; "ves" con s es del verbo ver.' },
        { bad: 'reveló', good: 'rebeló', w: 'rebelarse', q: 'Seleccione la oración con incorrección semántica y ortográfica de sublevación (prueba 7):', t: 'El regimiento se <b>reveló</b> abiertamente contra el tirano.', exp: '"Rebeló" con b indica sublevación o resistencia; "reveló" con v significa descubrir o mostrar.' },
        { bad: 'asta', good: 'hasta', w: 'preposición', q: '¿En cuál oración la preposición de límite temporal está mal escrita (prueba 8)?', t: 'Caminamos <b>asta</b> la cima del cerro sin descansar.', exp: '"Hasta" con h es la preposición que marca límite; "asta" sin h es el mástil de una bandera o cuerno.' },
        { bad: 'graba', good: 'grava', w: 'piedras', q: 'Seleccione la oración que emplea INCORRECTAMENTE la palabra para piedra machacada (prueba 9):', t: 'El camión descargó varias toneladas de <b>graba</b> para el pavimento.', exp: '"Grava" con v designa la piedra triturada; "graba" con b es del verbo grabar.' },
        { bad: 'hojear', good: 'ojear', w: 'mirar', q: '¿En cuál oración se confunde el acto de mirar con pasar páginas (prueba 10):', t: 'Decidió <b>hojear</b> con la mirada el panorama antes de cruzar.', exp: '"Ojear" sin h significa mirar con atención; "hojear" con h significa pasar las hojas de un libro.' },
        { bad: 'coser', good: 'cocer', w: 'cocinar', q: 'Seleccione la oración con falta ortográfica en la cocción de alimentos (prueba 11):', t: 'Debes <b>coser</b> las verduras al vapor para no perder nutrientes.', exp: '"Cocer" con c alude a la cocción culinaria; "coser" con s es unir con hilo y aguja.' },
        { bad: 'basto', good: 'vasto', w: 'extenso', q: '¿En cuál oración se utiliza incorrectamente el adjetivo de amplitud territorial (prueba 12)?', t: 'El investigador posee un <b>basto</b> conocimiento sobre la historia.', exp: '"Vasto" con v significa amplio o extenso; "basto" con b denota algo tosco o un naipe.' },
        { bad: 'vienes', good: 'bienes', w: 'posesiones', q: 'Identifique la oración que contiene un error en la palabra para patrimonio (prueba 13):', t: 'El testamento incluía todos los <b>vienes</b> raíces de la familia.', exp: '"Bienes" con b alude al patrimonio o posesiones; "vienes" con v es del verbo venir.' },
        { bad: 'haya', good: 'halla', w: 'encontrar', q: '¿En cuál oración la forma del verbo hallar está escrita con y (prueba 14)?', t: 'La biblioteca se <b>haya</b> ubicada en el centro del campus universitario.', exp: '"Halla" con ll proviene de hallar (encontrar/estar situado); "haya" con y es del verbo haber o el árbol.' },
        { bad: 'sabia', good: 'savia', w: 'jugo vegetal', q: 'Seleccione la oración que confunde el líquido vegetal con sabiduría (prueba 15):', t: 'La <b>sabia</b> elaborada nutre las ramas más altas del roble.', exp: '"Savia" con v es el líquido de los vegetales; "sabia" con b es una persona con gran conocimiento.' },
        { bad: 'sede', good: 'cede', w: 'ceder', q: '¿En cuál oración se usa incorrectamente el verbo ceder (prueba 16)?', t: 'El conductor prudente le <b>sede</b> el paso al peatón en la esquina.', exp: '"Cede" con c es del verbo ceder; "sede" con s es el lugar o domicilio oficial.' },
        { bad: 'ciervo', good: 'siervo', w: 'esclavo', q: 'Identifique la oración con confusión entre vasallo y rumiante (prueba 17):', t: 'El humilde <b>ciervo</b> juró lealtad absoluta a su señor feudal.', exp: '"Siervo" con s es un vasallo o esclavo; "ciervo" con c es el animal rumiante (venado).' },
        { bad: 'tasa', good: 'taza', w: 'recipiente', q: 'Seleccione la oración con error en el sustantivo para recipiente de café (prueba 18):', t: 'Le sirvieron una <b>tasa</b> de chocolate caliente muy aromático.', exp: '"Taza" con z es el recipiente con asa para líquidos; "tasa" con s es una medida, índice o impuesto.' },
        { bad: 'abrasar', good: 'abrazar', w: 'abrazar afecto', q: '¿En cuál oración se confunde el estrechar en brazos con quemar (prueba 19)?', t: 'El abuelo quiso <b>abrasar</b> fuertemente a sus nietos al despedirse.', exp: '"Abrazar" con z es rodear con los brazos; "abrasar" con s es quemar o consumir con fuego.' },
        { bad: 'bello', good: 'vello', w: 'pelaje fino', q: '¿En cuál oración se comete una confusión entre belleza y pelo corporal (prueba 20)?', t: 'El frío intenso provocó que se le erizara el <b>bello</b> de los brazos.', exp: '"Vello" con v es el pelo corto y suave del cuerpo; "bello" con b es algo hermoso.' },
      ][v];
      const correctDistractors = [
        ['Los alumnos entregaron a tiempo sus tareas escolares.', 'La investigación científica aportó valiosas conclusiones.', 'El comité organizador confirmó las fechas del certamen.'],
        ['El jardinero podó los arbustos con gran destreza.', 'El director felicitó a los jóvenes por su constancia.', 'Los atletas descansaron tras la intensa competencia.'],
        ['La conferencia magistral concluyó a las tres de la tarde.', 'Los científicos publicaron su artículo en la revista.', 'El examen de admisión evaluará habilidades esenciales.'],
        ['Los voluntarios distribuyeron alimentos a los damnificados.', 'El telescopio captó imágenes de una galaxia lejana.', 'La orquesta ensayó la partitura con entusiasmo.'],
        ['El arquitecto supervisó los planos de la nueva biblioteca.', 'Las aves migratorias llegaron a la laguna en otoño.', 'El profesor explicó la regla con claridad y rigor.'],
        ['La delegación estudiantil representó con orgullo a su escuela.', 'El viento soplaba con fuerza en lo alto de la sierra.', 'Los libros de texto fueron repartidos puntualmente.'],
        ['El guía turístico orientó a los visitantes en el museo.', 'Las lluvias de primavera favorecieron la siembra del maíz.', 'El equipo de debate expuso sus argumentos con solidez.'],
        ['Los ingenieros revisaron la estructura del puente peatonal.', 'La música instrumental relajó a los asistentes en la sala.', 'El personal médico atendió las consultas con paciencia.'],
        ['El club de ajedrez organizó un torneo de fin de cursos.', 'Las flores silvestres adornaban las veredas de la colina.', 'El joven orador conmovió al público con su elocuencia.'],
        ['Los geólogos recolectaron muestras de rocas volcánicas.', 'El comité de ecología sembró árboles en el parque.', 'La reunión plenaria inició sin ningún retraso.'],
        ['El pintor mezcló los pigmentos sobre la paleta de madera.', 'Los excursionistas montaron el campamento antes del anochecer.', 'La feria del libro congregó a miles de lectores.'],
        ['El coro interpretó piezas de música sacra renacentista.', 'Los meteorólogos alertaron sobre la llegada de un ciclón.', 'El taller de escritura estimuló la imaginación creativa.'],
        ['El juez dictó la sentencia con apego estricto a la ley.', 'Las abejas polinizan las flores del huerto familiar.', 'El documental cinematográfico obtuvo excelentes críticas.'],
        ['Los diseñadores presentaron el logotipo institucional.', 'El río caudaloso descendía con rapidez por el valle.', 'La obra teatral conmovió a los espectadores en la sala.'],
        ['El electricista reparó las conexiones dañadas del tablero.', 'Los niños jugaban alegres en el patio de recreo.', 'El certamen de oratoria premió la argumentación lógica.'],
        ['El cocinero preparó un guiso tradicional con hierbas.', 'Las estrellas brillaban nítidamente en la noche serena.', 'El rector pronunció un discurso de bienvenida emotivo.'],
        ['El biólogo registró el comportamiento de los felinos.', 'Los estudiantes formularon preguntas pertinentes al ponente.', 'La biblioteca adquirió nuevos volúmenes de consulta.'],
        ['El cerrajero duplicó la llave con gran precisión técnica.', 'Las olas rompían con suavidad sobre los riscos marinos.', 'El proyecto de robótica obtuvo el primer lugar estatal.'],
        ['El arqueólogo descubrió una vasija ceremonial intacta.', 'Los árboles frutales florecieron al inicio de marzo.', 'La sinfónica ofreció un concierto en el teatro de la ciudad.'],
        ['El médico recetó un tratamiento preventivo eficaz.', 'Las golondrinas construyeron sus nidos bajo los tejados.', 'El club deportivo celebró su aniversario con una carrera.'],
      ][v];
      const opts = formatOptions(data.t, correctDistractors);
      return {
        id: 44,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Uso de grafías y homófonos',
        instructions: 'En los ejercicios del 44 al 52 examine cuidadosamente las oraciones y seleccione la opción que atiende a la regla ortográfica solicitada.',
        questionText: data.q,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 45: Grafías dudosas (h intermedia, x, z)
    // ------------------------------------------------------------------------
    case 45: {
      const data = [
        { word: 'exhalar', opts: ['exhalar', 'eshalar', 'exalar', 'ezhalar'], exp: 'La palabra se escribe con "x" intermedia seguida de "h": exhalar.' },
        { word: 'cohesión', opts: ['cohesión', 'coesión', 'coheción', 'coxesión'], exp: 'Se escribe con h intermedia y s con tilde en la última sílaba: cohesión.' },
        { word: 'exhibir', opts: ['exhibir', 'eshibir', 'exibir', 'ezhibir'], exp: 'Combina x intermedia y h: exhibir.' },
        { word: 'exhaustivo', opts: ['exhaustivo', 'eshaustivo', 'exaustivo', 'ehaustivo'], exp: 'Lleva prefijo ex- y raíz con h: exhaustivo.' },
        { word: 'inherente', opts: ['inherente', 'inerente', 'injerente', 'inlerente'], exp: 'Se escribe con h intercalada: inherente.' },
        { word: 'exhortar', opts: ['exhortar', 'eshortar', 'exortar', 'eortar'], exp: 'Se escribe con x seguida de h: exhortar.' },
        { word: 'anhelo', opts: ['anhelo', 'anelo', 'anjelo', 'hanhelo'], exp: 'Lleva h intermedia tras la primera sílaba: anhelo.' },
        { word: 'rehén', opts: ['rehén', 'reén', 'rején', 'rehen'], exp: 'Se escribe con h intermedia y tilde en la e: rehén.' },
        { word: 'vehemente', opts: ['vehemente', 'veemente', 'vejemente', 'behemente'], exp: 'Lleva h intercalada entre las vocales e: vehemente.' },
        { word: 'deshacer', opts: ['deshacer', 'desacer', 'dezacer', 'dehacer'], exp: 'Prefijo des- añadido al verbo hacer: deshacer.' },
        { word: 'albahaca', opts: ['albahaca', 'albaaca', 'albajaca', 'alvaca'], exp: 'Se escribe con h intercalada entre las vocales a: albahaca.' },
        { word: 'buhardilla', opts: ['buhardilla', 'buardilla', 'vuhardilla', 'bujardilla'], exp: 'Lleva b inicial y h intermedia: buhardilla.' },
        { word: 'prohibir', opts: ['prohibir', 'proibir', 'proybir', 'projibir'], exp: 'Se escribe con h intermedia tras la sílaba pro-: prohibir.' },
        { word: 'mohíno', opts: ['mohíno', 'moíno', 'mojino', 'moyno'], exp: 'Lleva h intermedia y tilde disolvente en la i: mohíno.' },
        { word: 'azahares', opts: ['azahares', 'asajares', 'asares', 'azajares'], exp: 'Flores de cítricos: se escribe con z y h intercalada: azahares.' },
        { word: 'ahijado', opts: ['ahijado', 'aijado', 'ayijado', 'ajijado'], exp: 'Lleva h intercalada y j: ahijado.' },
        { word: 'zanahoria', opts: ['zanahoria', 'sanaoria', 'zanajoria', 'zannaoria'], exp: 'Se escribe con z inicial y h intercalada: zanahoria.' },
        { word: 'cohibir', opts: ['cohibir', 'coibir', 'cojibir', 'coybir'], exp: 'Lleva h intermedia tras el prefijo co-: cohibir.' },
        { word: 'tahúr', opts: ['tahúr', 'taúr', 'tajur', 'tayur'], exp: 'Jugador empedernido: lleva h intermedia y tilde en la u: tahúr.' },
        { word: 'moho', opts: ['moho', 'mogo', 'mojo', 'moo'], exp: 'Se escribe con h intercalada entre las oes: moho.' },
      ][v];
      const opts = formatOptions(data.word, data.opts.filter((o) => o !== data.word));
      return {
        id: 45,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Uso de grafías',
        questionText: `¿Cuál de las siguientes palabras con grafía dudosa (${data.word[0]}...) está escrita de forma <b>CORRECTA</b> según la RAE (reactivo variante ${v + 1})?`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 46: Morfología derivativa - Prefijos
    // ------------------------------------------------------------------------
    case 46: {
      const data = [
        { word: 'intolerante', root: 'tolerar', pre: 'in-', exp: 'El prefijo in- aporta el valor de negación o privación al lexema tolerar.' },
        { word: 'desacuerdo', root: 'acuerdo', pre: 'des-', exp: 'El prefijo des- indica inversión o sentido contrario.' },
        { word: 'imposible', root: 'posible', pre: 'im-', exp: 'Variante de in- ante letra p que denota privación.' },
        { word: 'anormal', root: 'normal', pre: 'a-', exp: 'El prefijo a- (de origen griego) significa sin o carente de.' },
        { word: 'ilegal', root: 'legal', pre: 'i-', exp: 'Forma del prefijo in- ante la consonante l que expresa negación.' },
        { word: 'antihigiénico', root: 'higiénico', pre: 'anti-', exp: 'El prefijo anti- expresa oposición o contrariedad.' },
        { word: 'disconforme', root: 'conforme', pre: 'dis-', exp: 'El prefijo dis- denota dificultad, anomalía o contrariedad.' },
        { word: 'irreal', root: 'real', pre: 'i-', exp: 'Forma del prefijo in- ante r que duplica la consonante y niega la base.' },
        { word: 'descontento', root: 'contento', pre: 'des-', exp: 'Prefijo des- que denota ausencia o contrariedad de contento.' },
        { word: 'increíble', root: 'creíble', pre: 'in-', exp: 'Prefijo in- que niega la capacidad de ser creído.' },
        { word: 'inmóvil', root: 'móvil', pre: 'in-', exp: 'Prefijo in- con asimilación a m que indica ausencia de movimiento.' },
        { word: 'desconfianza', root: 'confianza', pre: 'des-', exp: 'Prefijo des- que invierte el sentido de confianza.' },
        { word: 'atipico', root: 'típico', pre: 'a-', exp: 'Prefijo alfa privativo a- que señala lo no típico.' },
        { word: 'inseguro', root: 'seguro', pre: 'in-', exp: 'Prefijo in- que expresa falta de seguridad.' },
        { word: 'impropio', root: 'propio', pre: 'im-', exp: 'Prefijo im- ante p que indica falta de propiedad.' },
        { word: 'antinatural', root: 'natural', pre: 'anti-', exp: 'Prefijo anti- que expresa oposición a lo natural.' },
        { word: 'desleal', root: 'leal', pre: 'des-', exp: 'Prefijo des- que niega la lealtad.' },
        { word: 'ilógico', root: 'lógico', pre: 'i-', exp: 'Prefijo in- reducido a i- ante l que niega la lógica.' },
        { word: 'disfuncional', root: 'funcional', pre: 'dis-', exp: 'Prefijo dis- que indica funcionamiento defectuoso o anómalo.' },
        { word: 'inmaduro', root: 'maduro', pre: 'in-', exp: 'Prefijo in- con valor de privación de madurez.' },
      ][v];
      const opts = formatOptions(`El prefijo "${data.pre}" en "${data.word}" con significado de oposición o privación`, [
        `El sufijo "${data.pre}" con significado de pertenencia`,
        `Un interfijo que une dos lexemas compuestos`,
        `Una desinencia flexiva de tiempo verbal`,
      ]);
      return {
        id: 46,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Morfología derivativa',
        questionText: `En la palabra <b>"${data.word}"</b> (prueba ${v + 1}), el elemento morfológico que modifica el significado de la raíz es:`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 47: Morfología derivativa - Sufijos
    // ------------------------------------------------------------------------
    case 47: {
      const data = [
        { word: 'panadería', suf: '-ería', val: 'establecimiento donde se elabora o vende el producto', exp: 'El sufijo -ería denota lugar de comercio o actividad artesanal.' },
        { word: 'violinista', suf: '-ista', val: 'persona que ejerce una profesión u oficio musical', exp: 'El sufijo -ista forma sustantivos de agente u oficio.' },
        { word: 'estudiante', suf: '-nte', val: 'el agente o sujeto que realiza la acción de estudiar', exp: 'El sufijo -nte (participio de presente) denota quien ejecuta la acción.' },
        { word: 'marítimo', suf: '-ítimo', val: 'pertenencia o relación directa con el mar', exp: 'Sufijo adjetival que indica vínculo o relación.' },
        { word: 'amabilidad', suf: '-bilidad', val: 'cualidad abstracta atribuida a quien es amable', exp: 'El sufijo -bilidad forma sustantivos abstractos de cualidad.' },
        { word: 'cocinero', suf: '-ero', val: 'persona dedicada al oficio culinario de cocinar', exp: 'El sufijo -ero denota oficio, ocupación o profesión.' },
        { word: 'escultor', suf: '-tor', val: 'agente que esculpe o crea esculturas', exp: 'Sufijo -tor de agente derivado de verbos.' },
        { word: 'naranjal', suf: '-al', val: 'lugar poblado de árboles de naranjo (colectivo)', exp: 'El sufijo -al indica abundancia, plantío o lugar de cultivo.' },
        { word: 'belleza', suf: '-eza', val: 'cualidad abstracta de lo que es bello', exp: 'El sufijo -eza forma sustantivos de cualidad a partir de adjetivos.' },
        { word: 'sensatez', suf: '-ez', val: 'cualidad inmaterial del individuo sensato', exp: 'El sufijo -ez forma sustantivos abstractos.' },
        { word: 'relojero', suf: '-ero', val: 'artesano que fabrica o repara relojes', exp: 'El sufijo -ero indica profesión o gremio técnico.' },
        { word: 'dormitorio', suf: '-torio', val: 'espacio físico destinado al reposo y descanso', exp: 'El sufijo -torio indica lugar o recinto destinado a un fin.' },
        { word: 'lechoso', suf: '-oso', val: 'que posee abundancia o semejanza con la leche', exp: 'El sufijo -oso denota cualidad o posesión abundante.' },
        { word: 'rapidez', suf: '-ez', val: 'propiedad o cualidad abstracta de ser rápido', exp: 'Sufijo -ez para sustantivos abstractos de cualidad.' },
        { word: 'pianista', suf: '-ista', val: 'músico intérprete que ejecuta el piano', exp: 'Sufijo -ista para practicante o especialista.' },
        { word: 'zapatería', suf: '-ería', val: 'comercio donde se expenden calzados', exp: 'El sufijo -ería denota establecimiento comercial.' },
        { word: 'escasez', suf: '-ez', val: 'condición o cualidad abstracta de lo escaso', exp: 'Sufijo -ez que deriva sustantivos abstractos.' },
        { word: 'laboratorio', suf: '-torio', val: 'lugar condicionado para labores científicas', exp: 'El sufijo -torio indica lugar específico de trabajo.' },
        { word: 'arboleda', suf: '-eda', val: 'conjunto agrupado de árboles (colectivo)', exp: 'El sufijo -eda forma colectivos de vegetación.' },
        { word: 'limpieza', suf: '-eza', val: 'cualidad abstracta resultante de limpiar', exp: 'El sufijo -eza denota estado o cualidad abstracta.' },
      ][v];
      const opts = formatOptions(data.val, [
        `disminución afectiva o desprecio del objeto derivado`,
        `acción verbal ocurrida en tiempo pretérito pluscuamperfecto`,
        `origen geográfico o gentilicio de la persona`,
      ]);
      return {
        id: 47,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Morfología derivativa',
        questionText: `En el vocablo <b>"${data.word}"</b> (ejercicio ${v + 1}), el sufijo <i>${data.suf}</i> aporta el valor semántico de:`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 48: Concordancia gramatical (nominal y verbal)
    // ------------------------------------------------------------------------
    case 48: {
      const data = [
        { ok: 'La mayoría de los estudiantes aprobó el examen.', bad: ['La mayoría de los estudiantes aprobaron sin estudiar.', 'La mayoría de los estudiantes aprobaran el examen.', 'La mayoría de los estudiante aprobó el examen.'], exp: 'El núcleo del sujeto es el sustantivo singular "mayoría", rigiendo verbo en singular.' },
        { ok: 'El grupo de científicos presentó su informe preliminar.', bad: ['El grupo de científicos presentaron sus informes.', 'El grupo de científicos presentará sus informe.', 'El grupo de científicos presentaran su informe.'], exp: '"Grupo" en singular concuerda con "presentó" en tercera persona singular.' },
        { ok: 'Una multitud de manifestantes recorrió la avenida principal.', bad: ['Una multitud de manifestantes recorrieron la avenida.', 'Una multitud de manifestantes recorrerán las avenida.', 'Una multitud de manifestantes recorrieran la avenida.'], exp: 'Sujeto colectivo singular "multitud" concuerda con verbo singular "recorrió".' },
        { ok: 'El enjambre de abejas atacó al invasor del panal.', bad: ['El enjambre de abejas atacaron al invasor.', 'El enjambre de abejas atacaran al invasor.', 'El enjambre de abeja atacaron el panal.'], exp: '"Enjambre" es singular y concuerda con "atacó".' },
        { ok: 'La manada de lobos cruzó la estepa nevada.', bad: ['La manada de lobos cruzaron la estepa nevada.', 'La manada de lobos cruzaran la estepa nevada.', 'La manada de lobo cruzaron la estepa.'], exp: '"Manada" como sustantivo colectivo singular rige verbo en singular.' },
        { ok: 'La orquesta de jóvenes interpretó la sinfonía con maestría.', bad: ['La orquesta de jóvenes interpretaron la sinfonía.', 'La orquesta de jóvenes interpretaran la pieza.', 'La orquesta de joven interpretaron la sinfonía.'], exp: '"Orquesta" rige verbo singular "interpretó".' },
        { ok: 'El conjunto de obras pictóricas fue exhibido en la galería.', bad: ['El conjunto de obras pictóricas fueron exhibidos.', 'El conjunto de obras pictóricas fueron exhibidas.', 'El conjunto de obra pictóricas fue exhibida.'], exp: '"Conjunto" rige singular masculino "fue exhibido".' },
        { ok: 'La brigada de rescate localizó a los alpinistas extraviados.', bad: ['La brigada de rescate localizaron a los alpinistas.', 'La brigada de rescate localizaran a los extraviados.', 'La brigada de rescates localizaron a los alpinistas.'], exp: '"Brigada" rige verbo en singular "localizó".' },
        { ok: 'El equipo de investigación concluyó los ensayos clínicos.', bad: ['El equipo de investigación concluyeron los ensayos.', 'El equipo de investigación concluyeran los ensayos.', 'El equipo de investigaciones concluyeron los ensayos.'], exp: '"Equipo" concuerda en singular con "concluyó".' },
        { ok: 'La bandada de patos voló hacia el sur al inicio del otoño.', bad: ['La bandada de patos volaron hacia el sur.', 'La bandada de patos volaran hacia el sur.', 'La bandada de pato volaron hacia el sur.'], exp: '"Bandada" singular concuerda con "voló".' },
        { ok: 'La delegación de deportistas viajó temprano al torneo.', bad: ['La delegación de deportistas viajaron temprano.', 'La delegación de deportistas viajaran al torneo.', 'La delegación de deportista viajaron temprano.'], exp: '"Delegación" rige singular "viajó".' },
        { ok: 'El batallón de infantes marchó con disciplina por la plaza.', bad: ['El batallón de infantes marcharon con disciplina.', 'El batallón de infantes marcharan por la plaza.', 'El batallón de infante marcharon con disciplina.'], exp: '"Batallón" rige verbo singular "marchó".' },
        { ok: 'La comisión de peritos emitió una resolución unánime.', bad: ['La comisión de peritos emitieron una resolución.', 'La comisión de peritos emitieran una resolución.', 'La comisión de perito emitieron una resolución.'], exp: '"Comisión" rige verbo en singular "emitió".' },
        { ok: 'El rebaño de ovejas pastó pacíficamente en la colina.', bad: ['El rebaño de ovejas pastaron pacíficamente.', 'El rebaño de ovejas pastaran en la colina.', 'El rebaño de oveja pastaron pacíficamente.'], exp: '"Rebaño" rige verbo en singular "pastó".' },
        { ok: 'La familia de turistas disfrutó su estancia en el puerto.', bad: ['La familia de turistas disfrutaron su estancia.', 'La familia de turistas disfrutaran en el puerto.', 'La familia de turista disfrutaron su estancia.'], exp: '"Familia" rige verbo en singular "disfrutó".' },
        { ok: 'El coro de voces infantiles entonó el himno escolar.', bad: ['El coro de voces infantiles entonaron el himno.', 'El coro de voces infantiles entonaran el himno.', 'El coro de voz infantil entonaron el himno.'], exp: '"Coro" rige verbo en singular "entonó".' },
        { ok: 'La flotilla de barcos zarpó al amanecer desde el muelle.', bad: ['La flotilla de barcos zarparon al amanecer.', 'La flotilla de barcos zarparan del muelle.', 'La flotilla de barco zarparon al amanecer.'], exp: '"Flotilla" rige verbo singular "zarpó".' },
        { ok: 'El tribunal de jueces declaró culpable al acusado.', bad: ['El tribunal de jueces declararon culpable al reo.', 'El tribunal de jueces declararan culpable al acusado.', 'El tribunal de juez declararon culpable al reo.'], exp: '"Tribunal" rige verbo en singular "declaró".' },
        { ok: 'La comitiva de diplomáticos arribó a la conferencia.', bad: ['La comitiva de diplomáticos arribaron a la sede.', 'La comitiva de diplomáticos arribaran a la conferencia.', 'La comitiva de diplomático arribaron a la sede.'], exp: '"Comitiva" rige verbo en singular "arribó".' },
        { ok: 'El sindicato de choferes acordó una tregua laboral.', bad: ['El sindicato de choferes acordaron una tregua.', 'El sindicato de choferes acordaran una tregua laboral.', 'El sindicato de chofer acordaron una tregua.'], exp: '"Sindicato" rige verbo singular "acordó".' },
      ][v];
      const opts = formatOptions(data.ok, data.bad);
      return {
        id: 48,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Concordancia gramatical',
        questionText: `Seleccione la oración redactada con <b>CONCORDANCIA GRAMATICAL</b> rigurosa (caso modelo ${v + 1}):`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 49: Acentuación y reglas prosódicas
    // ------------------------------------------------------------------------
    case 49: {
      const data = [
        { word: 'volcán', cat: 'aguda terminada en -n', exp: 'Las palabras agudas llevan tilde cuando terminan en vocal, -n o -s.' },
        { word: 'árbol', cat: 'grave terminada en consonante distinta de -n o -s', exp: 'Las graves llevan tilde al terminar en consonante que no sea -n ni -s.' },
        { word: 'química', cat: 'esdrújula', exp: 'Todas las palabras esdrújulas llevan tilde sin excepción.' },
        { word: 'canción', cat: 'aguda terminada en -n', exp: 'Aguda con tilde en la última sílaba terminada en vocal o consonante n.' },
        { word: 'cárcel', cat: 'grave terminada en -l', exp: 'Lleva tilde en la penúltima sílaba por terminar en consonante distinta de n o s.' },
        { word: 'médico', cat: 'esdrújula', exp: 'Acento en la antepenúltima sílaba: se tilda siempre.' },
        { word: 'compás', cat: 'aguda terminada en -s', exp: 'Aguda terminada en s: tilde obligatoria.' },
        { word: 'fémur', cat: 'grave terminada en -r', exp: 'Grave que finaliza en consonante r.' },
        { word: 'pájaro', cat: 'esdrújula', exp: 'Palabra esdrújula: tilde en la antepenúltima sílaba.' },
        { word: 'café', cat: 'aguda terminada en vocal', exp: 'Palabra aguda terminada en vocal: tilde obligatoria.' },
        { word: 'dócil', cat: 'grave terminada en -l', exp: 'Grave terminada en l: tilde obligatoria.' },
        { word: 'brújula', cat: 'esdrújula', exp: 'Esdrújula con tilde siempre en antepenúltima sílaba.' },
        { word: 'además', cat: 'aguda terminada en -s', exp: 'Palabra aguda con tilde al terminar en s.' },
        { word: 'césped', cat: 'grave terminada en -d', exp: 'Grave con tilde por terminar en consonante d.' },
        { word: 'lámpara', cat: 'esdrújula', exp: 'Palabra esdrújula con tilde en antepenúltima sílaba.' },
        { word: 'avión', cat: 'aguda terminada en -n', exp: 'Aguda terminada en n: lleva tilde.' },
        { word: 'mármol', cat: 'grave terminada en -l', exp: 'Grave terminada en l: lleva tilde.' },
        { word: 'música', cat: 'esdrújula', exp: 'Palabra esdrújula: lleva tilde ortográfica.' },
        { word: 'jamás', cat: 'aguda terminada en -s', exp: 'Aguda terminada en s: lleva tilde.' },
        { word: 'difícil', cat: 'grave terminada en -l', exp: 'Grave terminada en l: lleva tilde.' },
      ][v];
      const opts = formatOptions(`"${data.word}" es una palabra ${data.cat}`, [
        `Es una palabra sobresdrújula con enclítico`,
        `Lleva tilde diacrítica para diferenciar significado`,
        `Lleva tilde disolvente de hiato acentual`,
      ]);
      return {
        id: 49,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Reglas de acentuación',
        questionText: `La palabra <b>"${data.word}"</b> (prueba ${v + 1}) lleva tilde ortográfica debido a que:`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 50: Acentuación diacrítica (monosílabos)
    // ------------------------------------------------------------------------
    case 50: {
      const data = [
        { c: 'Tú sabes que tu esfuerzo rendirá frutos.', dis: ['Tu sabes que tú esfuerzo rendirá frutos.', 'Tu sabes que tu esfuerzo rendira frutos.', 'Tú sabes que tú esfuerzo rendirá frutos.'], exp: '"Tú" con tilde es pronombre personal; "tu" sin tilde es adjetivo posesivo.' },
        { c: 'Él trajo el informe que le solicitaron.', dis: ['El trajo él informe que le solicitaron.', 'Él trajo él informe que le solicitaron.', 'El trajo el informe que le solicitaron.'], exp: '"Él" con tilde es pronombre; "el" sin tilde es artículo determinado.' },
        { c: 'Quiero más café, mas no tengo tiempo.', dis: ['Quiero mas café, más no tengo tiempo.', 'Quiero más café, más no tengo tiempo.', 'Quiero mas café, mas no tengo tiempo.'], exp: '"Más" con tilde expresa cantidad; "mas" sin tilde equivale a "pero".' },
        { c: 'A mí me corresponde cuidar mi salud.', dis: ['A mi me corresponde cuidar mí salud.', 'A mí me corresponde cuidar mí salud.', 'A mi me corresponde cuidar mi salud.'], exp: '"Mí" con tilde es pronombre personal; "mi" sin tilde es posesivo.' },
        { c: 'Sé prudente y se resolverá el conflicto.', dis: ['Se prudente y sé resolverá el conflicto.', 'Sé prudente y sé resolverá el conflicto.', 'Se prudente y se resolverá el conflicto.'], exp: '"Sé" con tilde es del verbo ser; "se" sin tilde es pronombre reflexivo/pasivo.' },
        { c: 'Sí, prometió que si llueve se quedará.', dis: ['Si, prometió que sí llueve se quedará.', 'Sí, prometió que sí llueve se quedará.', 'Si, prometió que si llueve se quedará.'], exp: '"Sí" con tilde es afirmación; "si" sin tilde es conjunción condicional.' },
        { c: 'Pídele que te sirva una taza de té caliente.', dis: ['Pídele que té sirva una taza de te caliente.', 'Pídele que té sirva una taza de té caliente.', 'Pídele que te sirva una taza de te caliente.'], exp: '"Té" con tilde es el sustantivo infusión; "te" sin tilde es pronombre.' },
        { c: 'Dile que dé su consentimiento de inmediato.', dis: ['Dile que de su consentimiento dé inmediato.', 'Dile que dé su consentimiento dé inmediato.', 'Dile que de su consentimiento de inmediato.'], exp: '"Dé" con tilde proviene del verbo dar; "de" sin tilde es preposición.' },
        { c: 'Aún no llega el paquete, aun con el servicio exprés.', dis: ['Aun no llega el paquete, aún con el servicio exprés.', 'Aún no llega el paquete, aún con el servicio exprés.', 'Aun no llega el paquete, aun con el servicio exprés.'], exp: '"Aún" con tilde equivale a "todavía"; "aun" sin tilde equivale a "incluso".' },
        { c: 'Para ti preparé este resumen especial.', dis: ['Para tí preparé este resumen especial.', 'Para tí prepare este resumen especial.', 'Para ti prepare este resúmen especial.'], exp: 'El pronombre "ti" nunca lleva tilde porque no existe forma homófona que lo requiera.' },
        { c: 'Él sabe que el camino es difícil.', dis: ['El sabe que él camino es difícil.', 'Él sabe que él camino es difícil.', 'El sabe que el camino es difícil.'], exp: '"Él" pronombre lleva tilde; "el" artículo va sin tilde.' },
        { c: 'Tú debes cumplir tu deber ciudadano.', dis: ['Tu debes cumplir tú deber ciudadano.', 'Tú debes cumplir tú deber ciudadano.', 'Tu debes cumplir tu deber ciudadano.'], exp: '"Tú" sujeto pronominal lleva tilde; "tu" posesivo no.' },
        { c: 'Sé que se esfuerza cada día más.', dis: ['Se que sé esfuerza cada día mas.', 'Sé que sé esfuerza cada día mas.', 'Se que se esfuerza cada día mas.'], exp: '"Sé" (verbo saber) con tilde; "se" pronombre átono sin tilde.' },
        { c: 'Todo esto es para mí y para mi hermana.', dis: ['Todo esto es para mi y para mí hermana.', 'Todo esto es para mí y para mí hermana.', 'Todo esto es para mi y para mi hermana.'], exp: '"Mí" con tilde es pronombre preposicional; "mi" sin tilde es adjetivo posesivo.' },
        { c: 'Dijo que sí vendría si tenía permiso.', dis: ['Dijo que si vendría sí tenía permiso.', 'Dijo que sí vendría sí tenía permiso.', 'Dijo que si vendría si tenía permiso.'], exp: '"Sí" afirmativo lleva tilde; "si" condicional no.' },
        { c: 'Le ofrecieron té con limón y te encantó.', dis: ['Le ofrecieron te con limón y té encantó.', 'Le ofrecieron té con limón y té encantó.', 'Le ofrecieron te con limón y te encantó.'], exp: '"Té" bebida lleva tilde; "te" pronombre no.' },
        { c: 'Esperamos que nos dé el visto bueno de la obra.', dis: ['Esperamos que nos de el visto bueno dé la obra.', 'Esperamos que nos dé el visto bueno dé la obra.', 'Esperamos que nos de el visto bueno de la obra.'], exp: '"Dé" del verbo dar lleva tilde; "de" preposición no.' },
        { c: 'Deseaba ganar más dinero, mas no a costa de su salud.', dis: ['Deseaba ganar mas dinero, más no a costa de su salud.', 'Deseaba ganar más dinero, más no a costa de su salud.', 'Deseaba ganar mas dinero, mas no a costa de su salud.'], exp: '"Más" de cantidad lleva tilde; "mas" de conjunción adversativa no.' },
        { c: 'Aún está nevando en la sierra, aun en primavera.', dis: ['Aun está nevando en la sierra, aún en primavera.', 'Aún está nevando en la sierra, aún en primavera.', 'Aun está nevando en la sierra, aun en primavera.'], exp: '"Aún" (todavía) lleva tilde; "aun" (incluso) no.' },
        { c: 'Solo tú puedes decidir sobre tu propio futuro.', dis: ['Solo tu puedes decidir sobre tú propio futuro.', 'Solo tú puedes decidir sobre tú propio futuro.', 'Solo tu puedes decidir sobre tu propio futuro.'], exp: '"Tú" pronombre lleva tilde; "tu" posesivo no.' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 50,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Acentuación diacrítica',
        questionText: `Seleccione la opción que contiene el uso <b>CORRECTO</b> de la tilde diacrítica (variante ${v + 1}):`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 51: Signos de puntuación (coma, punto y coma, dos puntos)
    // ------------------------------------------------------------------------
    case 51: {
      const data = [
        { s: 'El candidato prometió honradez; sin embargo, nadie le creyó.', c: 'Punto y coma antes de "sin embargo" y coma después', dis: ['Comas simples alrededor de la conjunción', 'Dos puntos antes de la conjunción', 'Paréntesis cerrando la proposición'], exp: 'Las locuciones adversativas extensas tras oraciones largas se preceden de punto y coma y se siguen de coma.' },
        { s: 'Compramos manzanas, peras, uvas y plátanos en el mercado.', c: 'Comas enumerativas entre elementos homogéneos', dis: ['Puntos y coma entre cada fruta', 'Puntos seguidos sin conjunción', 'Dos puntos tras cada sustantivo'], exp: 'La coma enumerativa separa los elementos análogos de una serie.' },
        { s: 'Estimado director: me dirijo a usted con respeto.', c: 'Dos puntos tras el vocativo de saludo', dis: ['Coma tras el vocativo', 'Punto y coma tras el saludo', 'Puntos suspensivos en el saludo'], exp: 'En las fórmulas de saludo en cartas o documentos formales se emplean dos puntos.' },
        { s: 'Carlos estudia medicina; Laura, ingeniería química.', c: 'Coma elíptica que sustituye al verbo omitido "estudia"', dis: ['Coma vocativa para llamar la atención', 'Coma apositiva para explicar', 'Coma hiperbática que invierte el orden'], exp: 'La coma elíptica reemplaza a un verbo mencionado anteriormente.' },
        { s: 'Aunque llovía torrencialmente, los atletas concluyeron el maratón.', c: 'Coma que aísla la proposición subordinada antepuesta', dis: ['Punto y coma obligatorio', 'Dos puntos consecutivos', 'Puntos suspensivos de pausa'], exp: 'Cuando la proposición subordinada se antepone a la principal se separa con coma.' },
        { s: 'Los delegados discutieron durante horas; al final, lograron un acuerdo.', c: 'Punto y coma para separar oraciones vinculadas de cierta longitud', dis: ['Guiones largos delimitadores', 'Signos de interrogación', 'Dos puntos explicativos'], exp: 'El punto y coma separa proposiciones sintácticamente independientes pero semánticamente unidas.' },
        { s: 'Solo hay tres cosas indispensables: agua, alimento y cobijo.', c: 'Dos puntos para dar paso a una enumeración anunciada', dis: ['Punto y coma antes de la lista', 'Coma simple sin anticipación', 'Paréntesis envolviendo el anuncio'], exp: 'Los dos puntos preceden a una enumeración previamente anunciada.' },
        { s: 'Jóvenes, presten atención a las instrucciones de la prueba.', c: 'Coma vocativa que aísla al interlocutor', dis: ['Coma elíptica de verbo omitido', 'Punto y coma estructural', 'Dos puntos de diálogo'], exp: 'El vocativo siempre se aísla con comas.' },
        { s: 'El Dr. Morales, eminente cardiólogo, dictó la conferencia.', c: 'Comas explicativas que encierran una aposición', dis: ['Comas enumerativas de serie', 'Punto y coma a ambos lados', 'Dos puntos antes de la aposición'], exp: 'La aposición explicativa va entre comas.' },
        { s: 'En lo más profundo del cañón, brotaba un manantial cristalino.', c: 'Coma de complemento circunstancial antepuesto extenso', dis: ['Punto y coma intermedio', 'Dos puntos seguidos', 'Coma vocativa de llamada'], exp: 'Los complementos circunstanciales extensos antepuestos al verbo llevan coma.' },
        { s: 'París, la Ciudad de la Luz, recibe millones de turistas.', c: 'Comas apositivas que delimitan la frase explicativa', dis: ['Comas elípticas de verbo', 'Dos puntos obligatorios', 'Punto y coma'], exp: 'La aposición nominal se aísla entre comas.' },
        { s: 'Trajeron tres ingredientes básicos: harina, leche y huevos.', c: 'Dos puntos que abren una lista enumerada', dis: ['Punto y coma', 'Coma simple', 'Guion medio'], exp: 'Se usan dos puntos antes de la enumeración anunciada.' },
        { s: 'María trajo pasteles; Pedro, refrescos de manzana.', c: 'Coma elíptica que suple al verbo "trajo"', dis: ['Coma vocativa', 'Coma explicativa', 'Coma de nexo'], exp: 'Coma que reemplaza al verbo elidido.' },
        { s: 'Amigos míos, celebremos este gran triunfo deportivo.', c: 'Coma vocativa para separar el vocativo inicial', dis: ['Coma de serie', 'Coma elíptica', 'Dos puntos'], exp: 'El vocativo inicial se separa con coma de la oración.' },
        { s: 'El examen era riguroso; no obstante, todos obtuvieron buena nota.', c: 'Punto y coma ante conector adversativo "no obstante"', dis: ['Coma simple', 'Dos puntos', 'Punto final'], exp: 'Punto y coma antes de locuciones adversativas como no obstante.' },
        { s: 'Compró libretas, lápices, gomas y sacapuntas para la escuela.', c: 'Comas para separar elementos de una serie enumerativa', dis: ['Puntos y coma', 'Dos puntos', 'Puntos suspensivos'], exp: 'Comas que separan miembros de una enumeración.' },
        { s: 'Aunque hacía mucho frío, salieron a correr al parque.', c: 'Coma que separa la oración subordinada concesiva antepuesta', dis: ['Punto y coma', 'Dos puntos', 'Coma elíptica'], exp: 'Subordinada concesiva antepuesta se separa con coma.' },
        { s: 'Sócrates dijo: "Conócete a ti mismo".', c: 'Dos puntos para introducir una cita textual directa', dis: ['Coma simple', 'Punto y coma', 'Punto seguido'], exp: 'Se emplean dos puntos antes de reproducir palabras textuales entre comillas.' },
        { s: 'Ayer por la tarde, los estudiantes finalizaron el mural.', c: 'Coma que marca la anteposición del circunstancial de tiempo', dis: ['Punto y coma', 'Dos puntos', 'Coma vocativa'], exp: 'Circunstancial de tiempo antepuesto al verbo.' },
        { s: 'El primer grupo limpió el aula; el segundo, el jardín exterior.', c: 'Coma elíptica que sustituye al verbo "limpió"', dis: ['Coma incidental', 'Coma vocativa', 'Dos puntos'], exp: 'Sustituye la forma verbal sobreentendida.' },
      ][v];
      const opts = formatOptions(`${data.c} (enunciado prueba ${v + 1})`, data.dis.map(d => `${d} (enunciado prueba ${v + 1})`));
      return {
        id: 51,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Signos de puntuación',
        questionText: `En la oración: <i>"${data.s}"</i> (prueba ${v + 1}), el signo de puntuación destacado se justifica porque:`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivo 52: Uso de mayúsculas y minúsculas
    // ------------------------------------------------------------------------
    case 52: {
      const data = [
        { c: 'El presidente de México visitó la sede de la ONU en Nueva York.', dis: ['El Presidente De México visitó la Sede de la onu.', 'El presidente de méxico visitó la sede de la Onu.', 'El Presidente de México Visito la sede de la ONU.'], exp: 'Los cargos públicos van en minúscula ("presidente"), mientras que países, siglas y ciudades van en mayúscula.' },
        { c: 'El rector inauguró el simposio sobre literatura del Siglo de Oro.', dis: ['El Rector inauguró el simposio sobre Literatura del siglo de oro.', 'El rector inauguro el Simposio sobre literatura del Siglo De Oro.', 'El Rector Inauguró el simposio sobre literatura del siglo de oro.'], exp: 'Rector va en minúscula; los periodos históricos relevantes como "Siglo de Oro" llevan mayúscula institucional.' },
        { c: 'En primavera viajaremos al norte para conocer el golfo de México.', dis: ['En Primavera viajaremos al Norte para conocer el Golfo de México.', 'En primavera viajaremos al norte para conocer el Golfo De México.', 'En Primavera viajaremos al norte para conocer el golfo de méxico.'], exp: 'Las estaciones del año y puntos cardinales van con minúscula; nombres propios geográficos con mayúscula.' },
        { c: 'La profesora de Biología explicó las fases de la Revolución francesa.', dis: ['La Profesora de biología explicó las fases de la revolución Francesa.', 'La profesora de Biología explicó las fases de la Revolución Francesa.', 'La Profesora de Biología explicó las fases de la revolución francesa.'], exp: 'En acontecimientos históricos se mayuscula el sustantivo "Revolución" y el adjetivo especificador "francesa" en minúscula.' },
        { c: 'El papa Francisco ofició la misa solemne en la plaza de San Pedro.', dis: ['El Papa Francisco ofició la misa solemne en la Plaza De San Pedro.', 'El Papa francisco ofició la misa solemne en la plaza de san pedro.', 'El papa Francisco ofició la Misa solemne en la Plaza de San Pedro.'], exp: 'Los títulos eclesiásticos como "papa" se escriben con minúscula inicial.' },
        { c: 'El rey de España asistió a la cumbre de la Unión Europea.', dis: ['El Rey de España asistió a la Cumbre de la unión europea.', 'El Rey de españa asistió a la cumbre de la Unión Europea.', 'El rey de España Asistió a la cumbre de la unión Europea.'], exp: '"Rey" va en minúscula; "España" y el organismo internacional "Unión Europea" con mayúscula.' },
        { c: 'El río Bravo sirve de frontera natural entre México y Estados Unidos.', dis: ['El Río Bravo sirve de frontera natural entre México y estados unidos.', 'El río bravo sirve de frontera natural entre méxico y estados unidos.', 'El Río bravo sirve de frontera natural entre México y Estados Unidos.'], exp: 'El sustantivo genérico "río" va con minúscula y el nombre propio "Bravo" con mayúscula.' },
        { c: 'Durante la Edad Media, los manuscritos eran copiados por monjes.', dis: ['Durante la edad media, los manuscritos eran copiados por monjes.', 'Durante la Edad media, los manuscritos eran copiados por Monjes.', 'Durante la edad Media, los manuscritos eran copiados por monjes.'], exp: 'Las grandes épocas históricas ("Edad Media") se escriben con mayúscula en sus componentes léxicos.' },
        { c: 'El ministro de Economía presentó las cifras ante el Congreso de la Unión.', dis: ['El Ministro de economía presentó las cifras ante el congreso de la unión.', 'El Ministro de Economía presentó las cifras ante el Congreso De La Unión.', 'El ministro de economía presentó las cifras ante el congreso de la Unión.'], exp: 'Cargos con minúscula ("ministro"); instituciones oficiales ("Congreso de la Unión") con mayúscula.' },
        { c: 'Leímos la novela Cien años de soledad durante las vacaciones de verano.', dis: ['Leímos la novela Cien Años De Soledad durante las vacaciones de Verano.', 'Leímos la novela cien años de soledad durante las vacaciones de verano.', 'Leímos la Novela Cien Años de Soledad durante las vacaciones de Verano.'], exp: 'En títulos de libros solo lleva mayúscula la palabra inicial ("Cien años de soledad") y nombres propios.' },
        { c: 'El volcán Popocatépetl se encuentra activo en el centro del país.', dis: ['El Volcán Popocatépetl se encuentra activo en el Centro del país.', 'El volcán popocatépetl se encuentra activo en el centro del País.', 'El Volcán popocatépetl se encuentra activo en el centro del país.'], exp: 'El genérico "volcán" con minúscula; el topónimo específico "Popocatépetl" con mayúscula.' },
        { c: 'La Secretaría de Educación Pública publicó el nuevo calendario.', dis: ['La secretaría de educación pública publicó el nuevo calendario.', 'La Secretaría de educación pública publicó el nuevo Calendario.', 'La Secretaría De Educación Pública Publicó el nuevo calendario.'], exp: 'Nombres de dependencias del Estado llevan mayúscula institucional en sustantivos y adjetivos.' },
        { c: 'En el hemisferio sur, el invierno comienza a finales de junio.', dis: ['En el Hemisferio Sur, el Invierno comienza a finales de Junio.', 'En el hemisferio Sur, el invierno comienza a finales de junio.', 'En el Hemisferio sur, el invierno comienza a finales de Junio.'], exp: 'Estaciones, meses ("junio") y términos geográficos genéricos van en minúscula.' },
        { c: 'El embajador de Francia visitó el Museo Nacional de Antropología.', dis: ['El Embajador de Francia visitó el museo nacional de antropología.', 'El Embajador de francia visitó el Museo Nacional De Antropología.', 'El embajador de Francia visitó el Museo nacional de antropología.'], exp: 'Cargos en minúscula ("embajador"); nombres de museos e instituciones con mayúscula.' },
        { c: 'El mar Mediterráneo baña las costas de Europa y África.', dis: ['El Mar Mediterráneo baña las costas de europa y áfrica.', 'El mar mediterráneo baña las costas de Europa y África.', 'El Mar mediterráneo baña las costas de Europa y África.'], exp: 'Sustantivo genérico "mar" con minúscula; nombre propio "Mediterráneo" con mayúscula.' },
        { c: 'Los científicos observaron la constelación de Orión con el telescopio.', dis: ['Los Científicos observaron la Constelación de orión con el telescopio.', 'Los científicos observaron la constelación de orión con el Telescopio.', 'Los Científicos observaron la constelación de Orión con el telescopio.'], exp: 'Nombres astronómicos ("Orión") llevan mayúscula; el genérico "constelación" minúscula.' },
        { c: 'La Organización Mundial de la Salud emitió una nueva directriz.', dis: ['La organización mundial de la salud emitió una nueva directriz.', 'La Organización mundial de la salud emitió una nueva Directriz.', 'La Organización Mundial De La Salud Emitió una nueva directriz.'], exp: 'Nombres de organismos internacionales llevan mayúscula institucional.' },
        { c: 'El doctor Morales dictó una cátedra sobre el Renacimiento italiano.', dis: ['El Doctor Morales dictó una cátedra sobre el renacimiento italiano.', 'El Doctor morales dictó una cátedra sobre el Renacimiento Italiano.', 'El doctor morales dictó una cátedra sobre el Renacimiento italiano.'], exp: 'Tratamiento abreviado o por extenso en minúscula salvo si abrevia D.; movimiento cultural "Renacimiento" con mayúscula.' },
        { c: 'En la sierra Tarahumara habitan comunidades indígenas reconocidas.', dis: ['En la Sierra Tarahumara habitan comunidades indígenas reconocidas.', 'En la sierra tarahumara habitan comunidades indígenas reconocidas.', 'En la Sierra tarahumara habitan Comunidades Indígenas reconocidas.'], exp: 'Genérico "sierra" con minúscula; nombre geográfico propio "Tarahumara" con mayúscula.' },
        { c: 'El Tribunal Electoral del Poder Judicial de la Federación resolvió la queja.', dis: ['El tribunal electoral del poder judicial de la federación resolvió la queja.', 'El Tribunal electoral del poder judicial de la federación resolvió la queja.', 'El Tribunal Electoral Del Poder Judicial De La Federación Resolvió la queja.'], exp: 'Entidades jurídicas del Estado se escriben con mayúscula institucional.' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 52,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Uso de mayúsculas',
        questionText: `¿Cuál de las siguientes opciones respeta rigurosamente las normas de uso de <b>MAYÚSCULAS Y MINÚSCULAS</b> (reactivo ${v + 1})?`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 53 al 60: Sintaxis y categorías gramaticales (20 variantes)
    // ------------------------------------------------------------------------
    case 53: {
      const data = [
        { s: 'El silencioso bosque ocultaba los secretos del reino.', w: 'silencioso', cat: 'adjetivo calificativo', dis: ['sustantivo común', 'adverbio de modo', 'pronombre demostrativo'], exp: '"Silencioso" modifica al sustantivo bosque expresando una cualidad; es un adjetivo.' },
        { s: 'Los estudiantes caminaron alegremente hacia el auditorio.', w: 'alegremente', cat: 'adverbio de modo', dis: ['adjetivo calificativo', 'sustantivo abstracto', 'verbo en copretérito'], exp: '"Alegremente" modifica al verbo caminaron indicando la manera; es un adverbio.' },
        { s: 'La sabiduría popular se transmite de generación en generación.', w: 'sabiduría', cat: 'sustantivo abstracto', dis: ['adjetivo explicativo', 'verbo conjugado', 'adverbio de tiempo'], exp: '"Sabiduría" designa un concepto o cualidad inmaterial; es un sustantivo abstracto.' },
        { s: 'Aquellos jóvenes obtuvieron el primer lugar en oratoria.', w: 'Aquellos', cat: 'adjetivo demostrativo', dis: ['pronombre personal', 'adverbio de lugar', 'sustantivo propio'], exp: '"Aquellos" acompaña y determina al sustantivo jóvenes.' },
        { s: 'El conferencista habló elocuentemente durante dos horas.', w: 'elocuentemente', cat: 'adverbio de modo', dis: ['adjetivo relacional', 'sustantivo femenino', 'conjunción adversativa'], exp: '"Elocuentemente" expresa el modo en que se realizó la acción verbal.' },
        { s: 'La inmensa llanura se extendía hasta el horizonte.', w: 'inmensa', cat: 'adjetivo calificativo explicativo', dis: ['adverbio de cantidad', 'sustantivo colectivo', 'preposición simple'], exp: '"Inmensa" señala una cualidad inherente o destacada del sustantivo llanura.' },
        { s: 'La constancia vence lo que la dicha no alcanza.', w: 'constancia', cat: 'sustantivo abstracto', dis: ['verbo en presente', 'adjetivo epíteto', 'adverbio de afirmación'], exp: '"Constancia" designa una virtud o concepto abstracto.' },
        { s: 'Los atletas corrieron rápidamente hacia la meta.', w: 'rápidamente', cat: 'adverbio de modo', dis: ['adjetivo numeral', 'participio irregular', 'pronombre posesivo'], exp: '"Rápidamente" modifica al verbo corrieron expresando velocidad.' },
        { s: 'Ningún participante quedó descalificado en la ronda.', w: 'Ningún', cat: 'adjetivo indefinido (determinante)', dis: ['adverbio de negación', 'pronombre relativo', 'sustantivo epiceno'], exp: '"Ningún" cuantifica e indetermina al sustantivo participante.' },
        { s: 'La cálida brisa marina refrescaba a los bañistas.', w: 'cálida', cat: 'adjetivo calificativo', dis: ['sustantivo derivado', 'adverbio de tiempo', 'verbo en copretérito'], exp: '"Cálida" califica la temperatura del sustantivo brisa.' },
        { s: 'El científico investigó minuciosamente las muestras.', w: 'minuciosamente', cat: 'adverbio de modo', dis: ['adjetivo superlativo', 'gerundio verbal', 'conjunción copulativa'], exp: '"Minuciosamente" indica la precisión detallada de la investigación.' },
        { s: 'La generosidad de los vecinos auxilió a los afectados.', w: 'generosidad', cat: 'sustantivo abstracto de cualidad', dis: ['adjetivo gentilicio', 'verbo auxiliar', 'pronombre recíproco'], exp: '"Generosidad" nombra una cualidad moral abstracta.' },
        { s: 'Varios libros fueron donados a la biblioteca comunitaria.', w: 'Varios', cat: 'determinante indefinido', dis: ['adverbio de modo', 'sustantivo plural', 'pronombre interrogativo'], exp: '"Varios" acompaña y determina de forma imprecisa a libros.' },
        { s: 'El orador argumentó apasionadamente frente al jurado.', w: 'apasionadamente', cat: 'adverbio de modo', dis: ['adjetivo relacional', 'sustantivo patronímico', 'preposición compuesta'], exp: '"Apasionadamente" modifica al verbo argumentó.' },
        { s: 'La serenidad del lago transmitía paz a los paseantes.', w: 'serenidad', cat: 'sustantivo abstracto', dis: ['adjetivo especificativo', 'interjección apelativa', 'verboide infinitivo'], exp: '"Serenidad" es un sustantivo derivado que nombra un estado o cualidad.' },
        { s: 'Aquella vieja casona guardaba innumerables historias.', w: 'innumerables', cat: 'adjetivo cuantitativo / calificativo', dis: ['adverbio de duda', 'pronombre reflexivo', 'conjunción disyuntiva'], exp: '"Innumerables" modifica a historias indicando una cantidad incontable.' },
        { s: 'Los socorristas actuaron valientemente en el rescate.', w: 'valientemente', cat: 'adverbio de modo', dis: ['adjetivo aumentativo', 'sustantivo propio', 'conjunción causal'], exp: '"Valientemente" describe el modo heroico de la acción de los socorristas.' },
        { s: 'La lealtad hacia los principios guía la conducta moral.', w: 'lealtad', cat: 'sustantivo abstracto', dis: ['adjetivo posesivo', 'adverbio de tiempo', 'verbo impersonal'], exp: '"Lealtad" es un sustantivo abstracto derivado de leal.' },
        { s: 'Tres ciclistas lideraron la etapa de montaña.', w: 'Tres', cat: 'determinante numeral cardinal', dis: ['sustantivo ordinal', 'adverbio de cantidad', 'pronombre demostrativo'], exp: '"Tres" cuantifica exactamente al sustantivo ciclistas.' },
        { s: 'El viento soplaba furiosamente sobre los acantilados.', w: 'furiosamente', cat: 'adverbio de modo', dis: ['adjetivo epíteto', 'sustantivo común', 'participio pasivo'], exp: '"Furiosamente" califica la manera violenta en que soplaba el viento.' },
      ][v];
      const opts = formatOptions(data.cat, data.dis);
      return {
        id: 53,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Categorías gramaticales',
        questionText: `En la oración: <i>"${data.s}"</i> (prueba ${v + 1}), la palabra subrayada <b>"${data.w}"</b> corresponde a la categoría gramatical de:`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 54: {
      const data = [
        { s: 'Para los biólogos marinos, <u>la preservación de los arrecifes coralinos</u> es indispensable.', subj: 'la preservación de los arrecifes coralinos', dis: ['los biólogos marinos', 'los arrecifes coralinos', 'para los biólogos'], exp: 'El sintagma nominal sujeto concuerda en singular con el verbo "es": la preservación de los arrecifes.' },
        { s: 'Durante el último congreso médico, <u>los científicos extranjeros</u> presentaron su nuevo fármaco.', subj: 'los científicos extranjeros', dis: ['el último congreso médico', 'su nuevo fármaco', 'durante el congreso'], exp: 'El sujeto que ejecuta la acción verbal "presentaron" es "los científicos extranjeros".' },
        { s: 'En el centro de la plaza, <u>una enorme fuente de cantera</u> embellece el entorno colonial.', subj: 'una enorme fuente de cantera', dis: ['el centro de la plaza', 'el entorno colonial', 'en el centro'], exp: 'El sujeto concuerda con "embellece" en singular.' },
        { s: 'A pesar de la tormenta, <u>el audaz piloto del helicóptero</u> logró aterrizar a salvo.', subj: 'el audaz piloto del helicóptero', dis: ['la tormenta', 'el helicóptero', 'a salvo'], exp: 'El sujeto agente es "el audaz piloto del helicóptero".' },
        { s: 'Por iniciativa estudiantil, <u>el club de debate escolar</u> organizó un torneo intercolegial.', subj: 'el club de debate escolar', dis: ['iniciativa estudiantil', 'un torneo intercolegial', 'el debate escolar'], exp: 'Concuerda con "organizó": el club de debate escolar.' },
        { s: 'En lo alto de la torre, <u>el antiguo reloj mecánico</u> marca las horas con exactitud.', subj: 'el antiguo reloj mecánico', dis: ['lo alto de la torre', 'las horas', 'con exactitud'], exp: 'Sujeto que realiza la acción de marcar: el antiguo reloj mecánico.' },
        { s: 'Tras intensas negociaciones, <u>los delegados sindicales</u> firmaron el contrato colectivo.', subj: 'los delegados sindicales', dis: ['intensas negociaciones', 'el contrato colectivo', 'los sindicatos'], exp: 'Sujeto en plural que concuerda con "firmaron".' },
        { s: 'Bajo la sombra del árbol, <u>un grupo de músicos ambulantes</u> afinaba sus instrumentos.', subj: 'un grupo de músicos ambulantes', dis: ['la sombra del árbol', 'sus instrumentos', 'los músicos'], exp: 'Concuerda con el verbo "afinaba": un grupo de músicos ambulantes.' },
        { s: 'Con gran destreza artística, <u>la joven pintora oaxaqueña</u> plasmó su visión del paisaje.', subj: 'la joven pintora oaxaqueña', dis: ['gran destreza artística', 'su visión del paisaje', 'el paisaje'], exp: 'Sujeto singular femenino: la joven pintora oaxaqueña.' },
        { s: 'En las profundidades del océano, <u>extrañas criaturas bioluminiscentes</u> habitan sin luz solar.', subj: 'extrañas criaturas bioluminiscentes', dis: ['las profundidades del océano', 'luz solar', 'el océano'], exp: 'Sujeto en plural que concuerda con "habitan".' },
        { s: 'Al amanecer, <u>los pescadores del muelle viejo</u> prepararon las redes para la faena.', subj: 'los pescadores del muelle viejo', dis: ['el muelle viejo', 'las redes', 'la faena'], exp: 'Sujeto plural que ejecuta "prepararon".' },
        { s: 'Por recomendación del doctor, <u>el paciente de la habitación cuatro</u> guardó reposo absoluto.', subj: 'el paciente de la habitación cuatro', dis: ['el doctor', 'la habitación cuatro', 'reposo absoluto'], exp: 'Sujeto concuerda con "guardó": el paciente.' },
        { s: 'En el taller de carpintería, <u>el maestro artesano</u> talló un hermoso bargueño de cedro.', subj: 'el maestro artesano', dis: ['el taller de carpintería', 'un hermoso bargueño', 'de cedro'], exp: 'Sujeto que ejecuta "talló": el maestro artesano.' },
        { s: 'A pesar del frío extremo, <u>los rescatistas de la brigada alpina</u> ascendieron la cumbre.', subj: 'los rescatistas de la brigada alpina', dis: ['el frío extremo', 'la cumbre', 'la brigada alpina'], exp: 'Sujeto en plural que realiza la acción de ascender.' },
        { s: 'Con puntualidad inglesa, <u>el tren de pasajeros de las ocho</u> llegó a la estación central.', subj: 'el tren de pasajeros de las ocho', dis: ['puntualidad inglesa', 'la estación central', 'los pasajeros'], exp: 'Sujeto gramatical singular concordante con "llegó".' },
        { s: 'Durante la temporada de estío, <u>los arroyos de la sierra</u> pierden gran parte de su caudal.', subj: 'los arroyos de la sierra', dis: ['la temporada de estío', 'su caudal', 'la sierra'], exp: 'Sujeto plural que concuerda con "pierden".' },
        { s: 'En la biblioteca universitaria, <u>varios alumnos de primer ingreso</u> consultaban enciclopedias.', subj: 'varios alumnos de primer ingreso', dis: ['la biblioteca universitaria', 'enciclopedias', 'primer ingreso'], exp: 'Sujeto plural concordante con "consultaban".' },
        { s: 'Por acuerdo del comité, <u>el nuevo reglamento del campus</u> entrará en vigor el lunes.', subj: 'el nuevo reglamento del campus', dis: ['el comité', 'el lunes', 'el campus'], exp: 'Sujeto singular concordante con "entrará".' },
        { s: 'En lo profundo de la cueva, <u>los arqueólogos del proyecto</u> descubrieron pinturas rupestres.', subj: 'los arqueólogos del proyecto', dis: ['lo profundo de la cueva', 'pinturas rupestres', 'el proyecto'], exp: 'Sujeto plural que concuerda con "descubrieron".' },
        { s: 'A lo largo de la costa, <u>los manglares de agua salobre</u> protegen el litoral de huracanes.', subj: 'los manglares de agua salobre', dis: ['la costa', 'el litoral', 'los huracanes'], exp: 'Sujeto plural concordante con "protegen".' },
      ][v];
      const opts = formatOptions(data.subj, data.dis);
      return {
        id: 54,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Sintaxis - Sujeto',
        questionText: `En la oración: <i>"${data.s}"</i> (prueba ${v + 1}), el <b>SUJETO GRAMATICAL</b> es:`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 55: {
      const data = [
        { form: 'corriendo', cat: 'gerundio', exp: 'Las formas terminadas en -ando / -iendo corresponden a gerundios.' },
        { form: 'resuelto', cat: 'participio irregular', exp: '"Resuelto" es el participio irregular del verbo resolver.' },
        { form: 'caminar', cat: 'infinitivo', exp: 'Las formas verbales terminadas en -ar, -er, -ir corresponden al infinitivo.' },
        { form: 'escribiendo', cat: 'gerundio', exp: 'Forma verbal terminada en -iendo que denota acción en desarrollo.' },
        { form: 'impreso', cat: 'participio irregular', exp: '"Impreso" es el participio irregular del verbo imprimir.' },
        { form: 'comprender', cat: 'infinitivo', exp: 'Forma no personal terminada en -er.' },
        { form: 'cantando', cat: 'gerundio', exp: 'Terminación en -ando característica del gerundio.' },
        { form: 'dicho', cat: 'participio irregular', exp: '"Dicho" es el participio irregular del verbo decir.' },
        { form: 'vivir', cat: 'infinitivo', exp: 'Infinitivo de la tercera conjugación (-ir).' },
        { form: 'leyendo', cat: 'gerundio', exp: 'Gerundio con y ortográfica del verbo leer.' },
        { form: 'escrito', cat: 'participio irregular', exp: '"Escrito" es el participio irregular del verbo escribir.' },
        { form: 'estudiar', cat: 'infinitivo', exp: 'Forma infinitiva de la primera conjugación (-ar).' },
        { form: 'construyendo', cat: 'gerundio', exp: 'Gerundio del verbo construir.' },
        { form: 'abierto', cat: 'participio irregular', exp: '"Abierto" es el participio irregular del verbo abrir.' },
        { form: 'debatir', cat: 'infinitivo', exp: 'Infinitivo terminado en -ir.' },
        { form: 'sonriendo', cat: 'gerundio', exp: 'Gerundio del verbo sonreír.' },
        { form: 'visto', cat: 'participio irregular', exp: '"Visto" es el participio irregular del verbo ver.' },
        { form: 'navegar', cat: 'infinitivo', exp: 'Infinitivo de la primera conjugación.' },
        { form: 'sintiendo', cat: 'gerundio', exp: 'Gerundio con alternancia vocálica del verbo sentir.' },
        { form: 'hecho', cat: 'participio irregular', exp: '"Hecho" es el participio irregular del verbo hacer.' },
      ][v];
      const opts = formatOptions(`Forma no personal: ${data.cat} del verbo "${data.form}"`, [
        `Verbo conjugado en modo subjuntivo presente de "${data.form}"`,
        `Forma perifrástica de futuro compuesto de "${data.form}"`,
        `Adverbio modal invariable derivado de "${data.form}"`,
      ]);
      return {
        id: 55,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Formas no personales del verbo',
        questionText: `La palabra <b>"${data.form}"</b> (ejercicio ${v + 1}) clasifica formalmente como:`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 56: {
      const data = [
        { s: 'El joven escritor dedicó <u>su primera novela</u> a sus abuelos.', od: 'su primera novela', dis: ['a sus abuelos', 'el joven escritor', 'dedicó'], exp: 'El objeto directo responde a "¿qué dedicó?" y se pronominaliza como "la dedicó": su primera novela.' },
        { s: 'La profesora entregó <u>los reconocimientos de excelencia</u> a los estudiantes.', od: 'los reconocimientos de excelencia', dis: ['a los estudiantes', 'la profesora', 'de excelencia'], exp: 'Responde a "¿qué entregó?" y se pronominaliza como "los entregó": los reconocimientos de excelencia.' },
        { s: 'El arquitecto diseñó <u>un moderno complejo deportivo</u> para la comunidad.', od: 'un moderno complejo deportivo', dis: ['para la comunidad', 'el arquitecto', 'deportivo'], exp: '¿Qué diseñó? Un moderno complejo deportivo (lo diseñó).' },
        { s: 'El comité directivo aprobó <u>el presupuesto anual de becas</u> por unanimidad.', od: 'el presupuesto anual de becas', dis: ['el comité directivo', 'por unanimidad', 'de becas'], exp: 'Responde a "¿qué aprobó?" y se sustituye por "lo aprobó".' },
        { s: 'Los astrónomos descubrieron <u>un nuevo exoplaneta rocoso</u> en la galaxia.', od: 'un nuevo exoplaneta rocoso', dis: ['en la galaxia', 'los astrónomos', 'rocoso'], exp: '¿Qué descubrieron? Un nuevo exoplaneta rocoso (lo descubrieron).' },
        { s: 'El jardinero sembró <u>quince rosales silvestres</u> en el prado central.', od: 'quince rosales silvestres', dis: ['en el prado central', 'el jardinero', 'silvestres'], exp: '¿Qué sembró? Quince rosales silvestres (los sembró).' },
        { s: 'La chef preparó <u>una exquisita cena de gala</u> para los diplomáticos.', od: 'una exquisita cena de gala', dis: ['para los diplomáticos', 'la chef', 'de gala'], exp: '¿Qué preparó? Una exquisita cena de gala (la preparó).' },
        { s: 'Los arqueólogos hallaron <u>un antiguo códice maya</u> en el templo soterrado.', od: 'un antiguo códice maya', dis: ['en el templo soterrado', 'los arqueólogos', 'maya'], exp: '¿Qué hallaron? Un antiguo códice maya (lo hallaron).' },
        { s: 'El mecánico reemplazó <u>la banda de distribución gastada</u> con una pieza nueva.', od: 'la banda de distribución gastada', dis: ['con una pieza nueva', 'el mecánico', 'distribución'], exp: '¿Qué reemplazó? La banda de distribución gastada (la reemplazó).' },
        { s: 'El director de escena felicitó <u>a los actores principales</u> tras el estreno.', od: 'a los actores principales', dis: ['el director de escena', 'tras el estreno', 'de escena'], exp: 'Objeto directo de persona introducido por la preposición "a" (los felicitó).' },
        { s: 'El poeta compuso <u>un emotivo soneto</u> para su tierra natal.', od: 'un emotivo soneto', dis: ['para su tierra natal', 'el poeta', 'emotivo'], exp: '¿Qué compuso? Un emotivo soneto (lo compuso).' },
        { s: 'La doctora recetó <u>un antibiótico de amplio espectro</u> al paciente.', od: 'un antibiótico de amplio espectro', dis: ['al paciente', 'la doctora', 'amplio'], exp: '¿Qué recetó? Un antibiótico de amplio espectro (lo recetó).' },
        { s: 'Los voluntarios recolectaron <u>tres toneladas de víveres</u> para los refugiados.', od: 'tres toneladas de víveres', dis: ['para los refugiados', 'los voluntarios', 'de víveres'], exp: '¿Qué recolectaron? Tres toneladas de víveres (las recolectaron).' },
        { s: 'El fotógrafo capturó <u>el impresionante eclipse lunar</u> desde la cima del cerro.', od: 'el impresionante eclipse lunar', dis: ['desde la cima del cerro', 'el fotógrafo', 'lunar'], exp: '¿Qué capturó? El impresionante eclipse lunar (lo capturó).' },
        { s: 'El orador transmitió <u>un mensaje de optimismo</u> a toda la asamblea.', od: 'un mensaje de optimismo', dis: ['a toda la asamblea', 'el orador', 'de optimismo'], exp: '¿Qué transmitió? Un mensaje de optimismo (lo transmitió).' },
        { s: 'Los geólogos analizaron <u>la composición de la roca volcánica</u> en el laboratorio.', od: 'la composición de la roca volcánica', dis: ['en el laboratorio', 'los geólogos', 'volcánica'], exp: '¿Qué analizaron? La composición de la roca volcánica (la analizaron).' },
        { s: 'La orquesta interpretó <u>la quinta sinfonía de Beethoven</u> con solemnidad.', od: 'la quinta sinfonía de Beethoven', dis: ['con solemnidad', 'la orquesta', 'de Beethoven'], exp: '¿Qué interpretó? La quinta sinfonía de Beethoven (la interpretó).' },
        { s: 'El agricultor cosechó <u>el trigo maduro</u> antes de las primeras lluvias.', od: 'el trigo maduro', dis: ['antes de las primeras lluvias', 'el agricultor', 'maduro'], exp: '¿Qué cosechó? El trigo maduro (lo cosechó).' },
        { s: 'El diseñador confeccionó <u>el vestuario de época</u> para la obra de teatro.', od: 'el vestuario de época', dis: ['para la obra de teatro', 'el diseñador', 'de época'], exp: '¿Qué confeccionó? El vestuario de época (lo confeccionó).' },
        { s: 'Los brigadistas rescataron <u>al senderista extraviado</u> en la garganta del cañón.', od: 'al senderista extraviado', dis: ['en la garganta del cañón', 'los brigadistas', 'extraviado'], exp: 'Objeto directo de persona: al senderista extraviado (lo rescataron).' },
      ][v];
      const opts = formatOptions(data.od, data.dis);
      return {
        id: 56,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Sintaxis - Objeto directo',
        questionText: `En la oración: <i>"${data.s}"</i> (prueba ${v + 1}), la función de <b>OBJETO DIRECTO</b> recae en:`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 57: {
      const data = [
        { s: 'El informe fue presentado <u>ayer por la mañana</u> en el auditorio.', circ: 'complemento circunstancial de tiempo', dis: ['objeto directo', 'sujeto paciente', 'complemento agente'], exp: 'Indica el momento exacto en el que se ejecuta la acción verbal; es un circunstancial de tiempo.' },
        { s: 'El ingeniero construyó el puente <u>con materiales reciclados</u>.', circ: 'complemento circunstancial de instrumento/modo', dis: ['objeto indirecto', 'sujeto compuesto', 'atributo'], exp: 'Indica el medio o instrumento con el que se realizó la obra.' },
        { s: 'Los estudiantes organizaron la colecta <u>para los damnificados del sismo</u>.', circ: 'complemento circunstancial de finalidad / objeto indirecto', dis: ['objeto directo', 'sujeto agente', 'predicativo'], exp: 'Indica los destinatarios y el propósito final de la colecta.' },
        { s: 'El convoy militar avanzó <u>hacia la frontera norte</u> con cautela.', circ: 'complemento circunstancial de lugar (dirección)', dis: ['objeto directo', 'sujeto pasivo', 'complemento de régimen'], exp: 'Responde a "¿hacia dónde avanza?": circunstancial de lugar.' },
        { s: 'Los científicos observaron el fenómeno <u>a través de potentes telescopios</u>.', circ: 'complemento circunstancial de instrumento', dis: ['sujeto elíptico', 'objeto directo', 'atributo adjetival'], exp: 'Indica el medio instrumental empleado en la observación.' },
        { s: 'La delegación deportiva compitió <u>con gran entusiasmo y deportividad</u>.', circ: 'complemento circunstancial de modo', dis: ['objeto directo', 'agente de pasiva', 'sujeto expreso'], exp: 'Responde a "¿cómo compitió?": circunstancial de modo.' },
        { s: 'El tren de carga llegó <u>a las seis de la madrugada</u> a la terminal.', circ: 'complemento circunstancial de tiempo', dis: ['objeto directo', 'predicativo subjetivo', 'núcleo del sujeto'], exp: 'Precisa la hora y momento de llegada: circunstancial de tiempo.' },
        { s: 'Los manifestantes protestaron <u>frente al palacio municipal</u> de la ciudad.', circ: 'complemento circunstancial de lugar', dis: ['objeto indirecto', 'complemento agente', 'sujeto paciente'], exp: 'Responde a "¿dónde protestaron?": circunstancial de lugar.' },
        { s: 'El carpintero barnizó la mesa <u>con brocha de cerdas finas</u>.', circ: 'complemento circunstancial de instrumento', dis: ['objeto directo', 'sujeto gramatical', 'atributo nominal'], exp: 'Indica el utensilio con que se barnizó la mesa.' },
        { s: 'Los brigadistas trabajaron <u>sin descanso durante tres días seguidos</u>.', circ: 'complemento circunstancial de tiempo y modo', dis: ['objeto directo', 'sujeto tácito', 'complemento directo'], exp: 'Indica la duración y la forma continua de la labor.' },
        { s: 'El alpinista escaló la pared rocosa <u>con una cuerda de seguridad</u>.', circ: 'complemento circunstancial de instrumento', dis: ['objeto directo', 'sujeto agente', 'núcleo verbal'], exp: 'Expresa el instrumento utilizado para la escalada.' },
        { s: 'El embajador entregó las cartas credenciales <u>en la sede de gobierno</u>.', circ: 'complemento circunstancial de lugar', dis: ['objeto directo', 'sujeto elíptico', 'complemento indirecto'], exp: 'Indica la localización física del acto diplomático.' },
        { s: 'Los alumnos escucharon la conferencia <u>con suma atención</u>.', circ: 'complemento circunstancial de modo', dis: ['objeto directo', 'sujeto expreso', 'atributo predicativo'], exp: 'Responde a "¿cómo escucharon?": de modo.' },
        { s: 'La expedición zarpó <u>al despuntar el alba</u> rumbo al archipiélago.', circ: 'complemento circunstancial de tiempo', dis: ['objeto directo', 'sujeto pasivo', 'objeto indirecto'], exp: 'Marca el momento temporal de la partida.' },
        { s: 'El artista talló la escultura <u>con cincel y martillo</u>.', circ: 'complemento circunstancial de instrumento', dis: ['objeto directo', 'sujeto paciente', 'complemento agente'], exp: 'Instrumentos empleados para labrar la escultura.' },
        { s: 'Los niños jugaban alegres <u>en el jardín de la escuela</u>.', circ: 'complemento circunstancial de lugar', dis: ['objeto directo', 'núcleo del sujeto', 'complemento indirecto'], exp: 'Localización espacial donde se realiza la acción.' },
        { s: 'El conferencista expuso sus argumentos <u>con extraordinaria claridad</u>.', circ: 'complemento circunstancial de modo', dis: ['objeto directo', 'sujeto compuesto', 'agente de pasiva'], exp: 'Expresa la forma o manera de la exposición.' },
        { s: 'El cometa cruzó el firmamento <u>durante la medianoche</u>.', circ: 'complemento circunstancial de tiempo', dis: ['objeto directo', 'atributo', 'sujeto agente'], exp: 'Establece el periodo temporal del evento astronómico.' },
        { s: 'El detective examinó las huellas <u>con una lupa de aumento</u>.', circ: 'complemento circunstancial de instrumento', dis: ['objeto directo', 'sujeto paciente', 'complemento predicativo'], exp: 'Herramienta utilizada para el examen de indicios.' },
        { s: 'La orquesta sinfónica ensayó <u>en el auditorio principal</u> del conservatorio.', circ: 'complemento circunstancial de lugar', dis: ['objeto directo', 'sujeto tácito', 'objeto indirecto'], exp: 'Indica el recinto o espacio donde ocurrió el ensayo.' },
      ][v];
      const opts = formatOptions(data.circ, data.dis);
      return {
        id: 57,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Complementos del verbo',
        questionText: `En la oración: <i>"${data.s}"</i> (prueba ${v + 1}), la parte subrayada cumple la función sintáctica de:`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 58: {
      const data = [
        { s: 'A pesar del mal clima, los brigadistas <u>rescataron</u> a todos los excursionistas.', n: 'rescataron', dis: ['los brigadistas', 'el mal clima', 'a todos los excursionistas'], exp: 'El núcleo del predicado es siempre el verbo conjugado principal de la oración ("rescataron").' },
        { s: 'Durante el amanecer, las gaviotas <u>sobrevolaban</u> la bahía con agilidad.', n: 'sobrevolaban', dis: ['las gaviotas', 'la bahía', 'con agilidad'], exp: 'El núcleo del predicado es el verbo conjugado "sobrevolaban".' },
        { s: 'Los ingenieros del proyecto <u>diseñaron</u> una estructura antisísmica de vanguardia.', n: 'diseñaron', dis: ['los ingenieros', 'del proyecto', 'una estructura antisísmica'], exp: 'Verbo principal y núcleo del sintagma predicativo: diseñaron.' },
        { s: 'En la biblioteca histórica, el investigador <u>halló</u> un manuscrito medieval inédito.', n: 'halló', dis: ['el investigador', 'un manuscrito medieval', 'en la biblioteca'], exp: 'Núcleo verbal conjugado: halló.' },
        { s: 'Los voluntarios de la brigada ecológica <u>plantaron</u> cien encinos en la reserva.', n: 'plantaron', dis: ['los voluntarios', 'cien encinos', 'en la reserva'], exp: 'Verbo principal que rige la predicación: plantaron.' },
        { s: 'Con gran precisión técnica, el cirujano <u>extirpó</u> el tejido dañado del paciente.', n: 'extirpó', dis: ['el cirujano', 'el tejido dañado', 'con gran precisión'], exp: 'Núcleo del predicado: extirpó.' },
        { s: 'Las notas del piano de cola <u>resonaban</u> con solemnidad en el templo barroco.', n: 'resonaban', dis: ['las notas del piano', 'con solemnidad', 'en el templo barroco'], exp: 'Verbo conjugado núcleo del predicado: resonaban.' },
        { s: 'El comité evaluador <u>otorgó</u> la beca de excelencia al alumno más destacado.', n: 'otorgó', dis: ['el comité evaluador', 'la beca de excelencia', 'al alumno más destacado'], exp: 'Núcleo del predicado: otorgó.' },
        { s: 'Tras una larga deliberación, los jueces <u>dictaminaron</u> el veredicto definitivo.', n: 'dictaminaron', dis: ['los jueces', 'el veredicto definitivo', 'tras una larga deliberación'], exp: 'Verbo conjugado principal: dictaminaron.' },
        { s: 'En el laboratorio de química, los alumnos <u>sintetizaron</u> un polímero biodegradable.', n: 'sintetizaron', dis: ['los alumnos', 'un polímero biodegradable', 'en el laboratorio'], exp: 'Núcleo verbal de la oración: sintetizaron.' },
        { s: 'Al término del certamen, la presidenta <u>clausuró</u> el foro internacional de ciencias.', n: 'clausuró', dis: ['la presidenta', 'el foro internacional', 'al término del certamen'], exp: 'Verbo principal: clausuró.' },
        { s: 'Por iniciativa ciudadana, los vecinos <u>rehabilitaron</u> el parque recreativo del barrio.', n: 'rehabilitaron', dis: ['los vecinos', 'el parque recreativo', 'por iniciativa ciudadana'], exp: 'Núcleo verbal: rehabilitaron.' },
        { s: 'Bajo la supervisión del maestro, los aprendices <u>forjaron</u> una espada de acero toledano.', n: 'forjaron', dis: ['los aprendices', 'una espada de acero', 'bajo la supervisión'], exp: 'Verbo principal del predicado: forjaron.' },
        { s: 'En la sesión solemne de cabildo, los regidores <u>aprobaron</u> el presupuesto de obra.', n: 'aprobaron', dis: ['los regidores', 'el presupuesto de obra', 'en la sesión solemne'], exp: 'Núcleo del predicado: aprobaron.' },
        { s: 'Con paciencia infinita, el artesano <u>reparó</u> el antiguo mecanismo del reloj de péndulo.', n: 'reparó', dis: ['el artesano', 'el antiguo mecanismo', 'con paciencia'], exp: 'Núcleo verbal: reparó.' },
        { s: 'Los astrónomos del observatorio <u>detectaron</u> una supernova en la galaxia del Sombrero.', n: 'detectaron', dis: ['los astrónomos', 'una supernova', 'en la galaxia'], exp: 'Verbo conjugado rector: detectaron.' },
        { s: 'Durante el receso escolar, los docentes <u>planificaron</u> las actividades del nuevo ciclo.', n: 'planificaron', dis: ['los docentes', 'las actividades', 'durante el receso'], exp: 'Núcleo del predicado: planificaron.' },
        { s: 'En la costa pacífica, las tortugas laúd <u>desovaron</u> bajo la luz de la luna llena.', n: 'desovaron', dis: ['las tortugas laúd', 'bajo la luz de la luna', 'en la costa pacífica'], exp: 'Núcleo del predicado verbal: desovaron.' },
        { s: 'El orador invitado <u>cautivó</u> al auditorio con su relato sobre la selva lacandona.', n: 'cautivó', dis: ['el orador invitado', 'al auditorio', 'con su relato'], exp: 'Verbo conjugado núcleo de la predicación: cautivó.' },
        { s: 'A pesar de las adversidades, los exploradores <u>alcanzaron</u> el polo norte magnético.', n: 'alcanzaron', dis: ['los exploradores', 'el polo norte magnético', 'a pesar de las adversidades'], exp: 'Núcleo del predicado: alcanzaron.' },
      ][v];
      const opts = formatOptions(data.n, data.dis);
      return {
        id: 58,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Sintaxis - Núcleo del predicado',
        questionText: `En la oración: <i>"${data.s}"</i> (prueba ${v + 1}), el <b>NÚCLEO DEL PREDICADO</b> es:`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 59: {
      const data = [
        { s: 'El científico, _____ investigaciones cambiaron la medicina, recibió el Premio Nobel.', c: 'cuyas', dis: ['quien', 'el cual', 'donde'], exp: '"Cuyas" es el relativo posesivo que concuerda en género y número con el sustantivo femenino plural "investigaciones".' },
        { s: 'La casa _____ fachada fue restaurada data del siglo XVII.', c: 'cuya', dis: ['donde', 'la que', 'quien'], exp: '"Cuya" relativo posesivo femenino singular concordante con "fachada".' },
        { s: 'Los alumnos _____ proyectos obtuvieron mención honorífica viajarán al certamen.', c: 'cuyos', dis: ['quienes', 'los cuales', 'que'], exp: '"Cuyos" concuerda en masculino plural con "proyectos".' },
        { s: 'La universidad _____ campus visitamos ayer ofrece excelentes programas de ingeniería.', c: 'cuyo', dis: ['donde', 'el que', 'la cual'], exp: '"Cuyo" concuerda en masculino singular con "campus".' },
        { s: 'El poeta _____ versos conmovieron al auditorio agradeció los aplausos.', c: 'cuyos', dis: ['quien', 'los que', 'cuales'], exp: '"Cuyos" posesivo relativo masculino plural concordante con "versos".' },
        { s: 'La empresa _____ instalaciones fueron certificadas amplió su producción.', c: 'cuyas', dis: ['donde', 'la cual', 'quienes'], exp: '"Cuyas" posesivo femenino plural concordante con "instalaciones".' },
        { s: 'El pintor _____ obra se exhibe en el museo recibió el homenaje nacional.', c: 'cuya', dis: ['quien', 'el cual', 'donde'], exp: '"Cuya" concuerda en femenino singular con "obra".' },
        { s: 'Los atletas _____ esfuerzo rindió medallas fueron recibidos con júbilo.', c: 'cuyo', dis: ['los que', 'quienes', 'cuales'], exp: '"Cuyo" concuerda en masculino singular con "esfuerzo".' },
        { s: 'La ciudad _____ murallas resistieron el asedio conserva su traza medieval.', c: 'cuyas', dis: ['donde', 'la que', 'quien'], exp: '"Cuyas" concuerda en femenino plural con "murallas".' },
        { s: 'El árbol _____ follaje cubre todo el patio tiene más de cien años.', c: 'cuyo', dis: ['el cual', 'donde', 'quien'], exp: '"Cuyo" concuerda con "follaje".' },
        { s: 'La investigadora a _____ encomendaron el estudio concluyó la primera fase.', c: 'quien', dis: ['donde', 'cuya', 'cual'], exp: '"Quien" relativo referido a persona singular antecedido por preposición.' },
        { s: 'El pueblo _____ nació el ilustre compositor conserva su casa natal.', c: 'donde', dis: ['quien', 'cuyo', 'el cual'], exp: '"Donde" pronombre/adverbio relativo locativo.' },
        { s: 'Los maestros a _____ consultamos recomendaron ampliar la bibliografía.', c: 'quienes', dis: ['cuyos', 'donde', 'cuales'], exp: '"Quienes" relativo de persona en plural con preposición.' },
        { s: 'El laboratorio _____ se realizan las pruebas cuenta con certificación ISO.', c: 'donde', dis: ['quien', 'cuya', 'cuyo'], exp: '"Donde" relativo de lugar.' },
        { s: 'La biblioteca _____ acervo consultamos a diario ampliará su horario.', c: 'cuyo', dis: ['donde', 'la que', 'quien'], exp: '"Cuyo" relativo posesivo masculino singular concordante con "acervo".' },
        { s: 'El médico en _____ confiamos diagnosticó acertadamente el padecimiento.', c: 'quien', dis: ['cuya', 'donde', 'cual'], exp: '"Quien" relativo de persona con preposición "en".' },
        { s: 'La novela _____ páginas atraparon al jurado obtuvo el premio internacional.', c: 'cuyas', dis: ['donde', 'la cual', 'quien'], exp: '"Cuyas" concuerda con "páginas".' },
        { s: 'La sala _____ sesionará el congreso está debidamente equipada.', c: 'donde', dis: ['quien', 'cuya', 'cuyo'], exp: '"Donde" indica el lugar donde se sesionará.' },
        { s: 'El autor _____ ideas revolucionaron la física nació en Alemania.', c: 'cuyas', dis: ['quien', 'el cual', 'donde'], exp: '"Cuyas" concuerda con "ideas".' },
        { s: 'Los delegados a _____ recibimos ayer representan a diez naciones.', c: 'quienes', dis: ['cuyos', 'donde', 'cuales'], exp: '"Quienes" relativo de personas en plural.' },
      ][v];
      const opts = formatOptions(`${data.c} para "${data.s.slice(0, 25)}..."`, data.dis.map(d => `${d} para "${data.s.slice(0, 25)}..."`));
      return {
        id: 59,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Relativos e interrogativos',
        questionText: `Seleccione el pronombre relativo que completa adecuadamente la oración (reactivo ${v + 1}):<br><i>"${data.s}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 60: { // custom opts
      const data = [
        { s: '¿_____ de los candidatos cumplió con todos los requisitos exigidos?', c: 'Cuál', dis: ['Cual', 'Que', 'Quiénes'], exp: '"Cuál" con tilde diacrítica por cumplir una función enfática e interrogativa directa singular.' },
        { s: 'Ignoramos _____ llegará la delegación extranjera al aeropuerto.', c: 'cuándo', dis: ['cuando', 'cuanto', 'como'], exp: '"Cuándo" con tilde diacrítica en función de interrogativa indirecta temporal.' },
        { s: '¿_____ fue el motivo principal por el que se suspendió la sesión?', c: 'Cuál', dis: ['Cual', 'Como', 'Donde'], exp: '"Cuál" interrogativo directo con tilde diacrítica.' },
        { s: 'El inspector deseaba saber _____ se produjo la falla en el sistema.', c: 'cómo', dis: ['como', 'cual', 'que'], exp: '"Cómo" con tilde en interrogativa indirecta modal.' },
        { s: '¿_____ de los estudiantes obtuvo la puntuación más elevada?', c: 'Quién', dis: ['Quien', 'Cual', 'Que'], exp: '"Quién" con tilde diacrítica interrogativa de persona singular.' },
        { s: 'No comprendemos _____ no asistió a la ceremonia de graduación.', c: 'por qué', dis: ['porque', 'por que', 'porqué'], exp: '"Por qué" separado y con tilde en interrogativa indirecta causal.' },
        { s: '¿_____ libros de consulta fueron adquiridos para la biblioteca?', c: 'Cuántos', dis: ['Cuantos', 'Cuales', 'Que'], exp: '"Cuántos" con tilde diacrítica en función de interrogativo cuantitativo plural.' },
        { s: 'Nos preguntamos _____ se construirá el nuevo centro de investigación.', c: 'dónde', dis: ['donde', 'cual', 'como'], exp: '"Dónde" con tilde en interrogativa indirecta de lugar.' },
        { s: '¿_____ tiempo tardará en concluir la reparación del puente?', c: 'Cuánto', dis: ['Cuanto', 'Cuando', 'Cual'], exp: '"Cuánto" interrogativo cuantitativo con tilde.' },
        { s: 'El jurado aún delibera _____ de los dos finalistas recibirá el trofeo.', c: 'cuál', dis: ['cual', 'quien', 'que'], exp: '"Cuál" con tilde en interrogativa indirecta selectiva.' },
        { s: '¿_____ son los requisitos indispensables para solicitar la beca?', c: 'Cuáles', dis: ['Cuales', 'Que', 'Quienes'], exp: '"Cuáles" interrogativo directo plural con tilde.' },
        { s: 'Deseamos saber _____ se resolverá el conflicto entre las partes.', c: 'cómo', dis: ['como', 'cuando', 'donde'], exp: '"Cómo" con tilde diacrítica modal en interrogativa indirecta.' },
        { s: '¿_____ vendrá a impartir la conferencia inaugural de mañana?', c: 'Quién', dis: ['Quien', 'Cual', 'Que'], exp: '"Quién" pronombre interrogativo con tilde diacrítica.' },
        { s: 'Explícanos _____ decidiste renunciar a tu puesto en la empresa.', c: 'por qué', dis: ['porque', 'porqué', 'por que'], exp: '"Por qué" interrogativo causal indirecto.' },
        { s: '¿_____ kilómetros faltan para llegar a la cima de la montaña?', c: 'Cuántos', dis: ['Cuantos', 'Cuales', 'Que'], exp: '"Cuántos" con tilde interrogativa cuantitativa.' },
        { s: 'Ignoramos _____ guardaron los documentos confidenciales del caso.', c: 'dónde', dis: ['donde', 'cuando', 'como'], exp: '"Dónde" locativo interrogativo con tilde.' },
        { s: '¿_____ fue el científico que propuso por primera vez esa hipótesis?', c: 'Quién', dis: ['Quien', 'Cual', 'Que'], exp: '"Quién" interrogativo directo.' },
        { s: 'Aún no sabemos _____ iniciará el periodo ordinario de inscripciones.', c: 'cuándo', dis: ['cuando', 'como', 'donde'], exp: '"Cuándo" temporal interrogativo con tilde.' },
        { s: '¿_____ alternativa consideras más conveniente para el proyecto?', c: 'Cuál', dis: ['Cual', 'Que', 'Como'], exp: '"Cuál" interrogativo directo de selección.' },
        { s: 'Dime _____ lograste resolver el problema de matemáticas tan rápido.', c: 'cómo', dis: ['como', 'cuando', 'donde'], exp: '"Cómo" interrogativo modal indirecto con tilde.' },
      ][v];
      const opts = formatOptions(`${data.c} (enunciado ${v + 1}: "${data.s.slice(0, 25)}...")`, data.dis.map(d => `${d} (enunciado ${v + 1}: "${data.s.slice(0, 25)}...")`));
      return {
        id: 60,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Relativos e interrogativos',
        questionText: `Seleccione el término interrogativo que completa correctamente la oración (prueba ${v + 1}):<br><i>"${data.s}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 61 al 65: Comprensión de lectura literaria (20 PASAJES NARRATIVOS ÚNICOS)
    // ------------------------------------------------------------------------
    case 61:
    case 62:
    case 63:
    case 64:
    case 65: {
      const passages = [
        {
          title: 'El reloj de arena de don Aurelio',
          author: 'Crónica ficcional',
          text: 'Don Aurelio custodiaba en su tienda un viejo reloj de arena traído de Venecia. Decía que los granos no medían minutos ordinarios, sino latidos de memoria. Cuando alguien entraba apesadumbrado por un error del pasado, el anciano giraba la ampolleta y le pedía observar la caída inexorable del polvo dorado. "El tiempo no retrocede, muchacho", murmuraba con voz grave, "pero cada grano que cae deja limpia la estancia superior para recomenzar". Aquel artefacto, pulido por manos anónimas a lo largo de dos siglos, se alzaba en el centro del mostrador como un faro silencioso para náufragos del arrepentimiento.',
          narrator: 'Narrador omnisciente en tercera persona distante',
          genre: 'Relato lírico reflexivo con alegoría filosófica',
          vocabWord: 'alzaba',
          vocabMeaning: 'se erigía o destacaba con solemnidad',
          phrase: 'náufragos del arrepentimiento',
          phraseMeaning: 'personas atormentadas por los errores del pasado',
          mainIdea: 'La aceptación del paso irreversible del tiempo como oportunidad de renovación personal.',
        },
        {
          title: 'La llave olvidada en el desván',
          author: 'Relato lírico de misterio',
          text: 'En el rincón más oscuro del desván, oculta bajo una manta de polvo ceniciento, yacía una llave de hierro forjado. Marcela la descubrió por azar mientras buscaba un baúl con cartas familiares. La pieza, fría como un témpano, tenía grabado un pequeño sol en el ojo de la guarda. Nadie en la casa sabía qué puerta abría. Su abuelo solía decir que algunas cerraduras son creadas no para guardar tesoros materiales, sino para custodiar misterios que solo el tiempo madura. Con la llave en el bolsillo, Marcela sintió que heredaba un pacto con lo desconocido.',
          narrator: 'Narrador en tercera persona observador con focalización interna',
          genre: 'Cuento de intriga introspectiva y memoria familiar',
          vocabWord: 'yacía',
          vocabMeaning: 'reposaba o permanecía inmóvil en el sitio',
          phrase: 'fría como un témpano',
          phraseMeaning: 'con una temperatura sumamente gélida al tacto',
          mainIdea: 'El valor de los enigmas del pasado como vínculo de identidad familiar.',
        },
        {
          title: 'El tren nocturno de las tres y cuarto',
          author: 'Estampa narrativa urbana',
          text: 'Cada madrugada a las tres y cuarto, el tren silbaba a la distancia rasgando el sopor de la vieja estación de San Jerónimo. Manuel, el guardagujas octogenario, ajustaba su linterna de queroseno y salía al andén desierto. Ningún pasajero bajaba jamás en aquel apeadero olvidado; sin embargo, Manuel permanecía firme con la gorra encasquetada. Afirmaba que cumplir con el deber cuando nadie mira es la única forma de dignidad que le queda a los hombres sencillos frente a la prisa devoradora del mundo moderno.',
          narrator: 'Narrador cuasi-omnisciente que enjuicia moralmente la escena',
          genre: 'Relato costumbrista de contenido ético',
          vocabWord: 'rasgando',
          vocabMeaning: 'quebrando o interrumpiendo abruptamente el silencio',
          phrase: 'prisa devoradora del mundo',
          phraseMeaning: 'el ritmo acelerado e indiferente de la sociedad actual',
          mainIdea: 'La dignidad y el honor del deber cumplido en la soledad cotidiana.',
        },
        {
          title: 'El faro de la isla de coral',
          author: 'Narración marina',
          text: 'Durante cincuenta temporales, el farero Esteban alimentó la lámpara de la torre sobre el peñasco batido por las olas. Decía a los marineros que la luz no pretendía salvar a todos los barcos de su destino, sino únicamente recordarles que la tierra firme seguía esperando con paciencia. En las noches de calina, cuando la niebla borraba las estrellas, el haz luminoso giraba incansable como un compás de esperanza sobre las aguas tenebrosas.',
          narrator: 'Narrador en tercera persona de tono legendario',
          genre: 'Cuento marítimo de vocación y perseverancia',
          vocabWord: 'calina',
          vocabMeaning: 'bruma densa que reduce la visibilidad en el mar',
          phrase: 'compás de esperanza sobre las aguas',
          phraseMeaning: 'guía constante que orienta y conforta en la adversidad',
          mainIdea: 'La constancia altruista como faro orientador ante la incertidumbre humana.',
        },
        {
          title: 'El cuaderno de tapas de cuero',
          author: 'Relato íntimo',
          text: 'Sobre la repisa de madera de nogal descansaba el diario de tapas de cuero envejecido que Elena heredó de su bisabuela. En sus páginas amarillentas, trazadas con tinta sepia de caligrafía impecable, no había recetas ni cuentas domésticas, sino mapas botánicos de flores silvestres hoy desaparecidas. Cada flor dibujada a mano constituía un testimonio de gratitud hacia la belleza efímera del valle antes de la llegada del asfalto.',
          narrator: 'Narrador en tercera persona evocativo y testimonial',
          genre: 'Prosa lírica testimonial sobre la memoria ambiental',
          vocabWord: 'efímera',
          vocabMeaning: 'pasajera o de muy breve duración en el tiempo',
          phrase: 'testimonio de gratitud hacia la belleza',
          phraseMeaning: 'homenaje sincero a la naturaleza perdida',
          mainIdea: 'El registro artístico del pasado como resistencia frente al olvido y la degradación ecológica.',
        },
        {
          title: 'La vieja imprenta de tipos móviles',
          author: 'Crónica ficcional',
          text: 'Don Gregorio componía los tipos de plomo letra por letra en la caja tipográfica de su taller en el callejón de Santo Domingo. El chasquido metálico de las matrices al acomodarse en el componedor sonaba como una música antigua. Decía que una palabra impresa a fuego y tinta pesa más en la conciencia colectiva que mil discursos improvisados en la plaza, porque el plomo impone a quien escribe la obligación sagrada de no mentir.',
          narrator: 'Narrador testigo en tercera persona',
          genre: 'Relato histórico-artesanal de tono reflexivo',
          vocabWord: 'matrices',
          vocabMeaning: 'piezas de metal grabadas que sirven de molde para las letras',
          phrase: 'palabra impresa a fuego y tinta',
          phraseMeaning: 'mensaje formal elaborado con rigor, perdurabilidad y compromiso',
          mainIdea: 'La responsabilidad ética e indeleble de la palabra escrita.',
        },
        {
          title: 'El jardín botánico del profesor Morales',
          author: 'Cuento filosófico',
          text: 'Entre los muros del viejo claustro, el profesor Morales cultivaba especies traídas de los desiertos más inhóspitos. Los estudiantes se maravillaban al ver florecer cactáceas en plena sequía de primavera. El botánico sonreía y explicaba que la verdadera fortaleza de un organismo no reside en acumular agua en tiempos de abundancia, sino en aprender a subsistir con las raíces aferradas a la roca viva durante el largo invierno del olvido.',
          narrator: 'Narrador en tercera persona con tono pedagógico',
          genre: 'Fábula moderna de corte alegórico',
          vocabWord: 'inhóspitos',
          vocabMeaning: 'lugares desapacibles, áridos y difíciles para habitar',
          phrase: 'aferradas a la roca viva',
          phraseMeaning: 'firmemente sostenidas con entereza en circunstancias adversas',
          mainIdea: 'La resiliencia y templanza interior desarrolladas en la adversidad.',
        },
        {
          title: 'El puente de piedra sobre el río Claro',
          author: 'Leyenda contemporánea',
          text: 'Durante tres siglos, el puente de sillería unió dos aldeas separadas por un torrente bravío. Cuando una creciente descomunal socavó el pilar central, los habitantes de ambas márgenes acudieron sin cruzar palabra con vigas y argamasa. Ningún alcalde convocó la faena; fue el instinto elemental de saber que el abismo solo se vence tendiendo brazos firmes hacia la orilla contraria.',
          narrator: 'Narrador colectivo en tercera persona épica',
          genre: 'Narración comunitaria de solidaridad humana',
          vocabWord: 'argamasa',
          vocabMeaning: 'mezcla de cal, arena y agua para unir piedras de construcción',
          phrase: 'tendiendo brazos firmes hacia la orilla contraria',
          phraseMeaning: 'construyendo vínculos de unión y ayuda mutua ante la crisis',
          mainIdea: 'La unión espontánea de las comunidades para preservar puentes que salvan divisiones.',
        },
        {
          title: 'La brújula del capitán Mendoza',
          author: 'Relato de aventuras marinas',
          text: 'La brújula del capitán Mendoza no apuntaba hacia el norte magnético de las cartas náuticas, sino con una ligera desviación de tres grados hacia el occidente. Sus oficiales le suplicaban recalibrarla, pero el viejo lobo de mar se negaba con una sonrisa enigmática. Aseguraba que aquella leve imperfección compensaba las corrientes invisibles del golfo y lo conducía a puerto seguro donde otros navíos zozobraban por exceso de ciega confianza en la teoría pura.',
          narrator: 'Narrador en tercera persona con admiración retrospectiva',
          genre: 'Cuento marinero sobre la intuición y la experiencia',
          vocabWord: 'zozobraban',
          vocabMeaning: 'naufragaban o peligraban por el oleaje marino',
          phrase: 'ciega confianza en la teoría pura',
          phraseMeaning: 'aplicación rígida de reglas abstractas sin contrastar con la realidad',
          mainIdea: 'El valor de la experiencia viva y el criterio práctico sobre el dogmatismo técnico.',
        },
        {
          title: 'El taller de vitrales de Florencia',
          author: 'Relato artístico',
          text: 'Maese Giovanni seleccionaba fragmentos de vidrio azul cobalto y rojo bermellón junto a los hornos de la abadía. Al encajar los vidrios en las varillas de plomo, el artesano advertía que las piezas más luminosas eran precisamente las que tenían burbujas e imperfecciones interiores. "La luz solar", decía a su aprendiz, "ignora el cristal perfecto y transparente porque lo atraviesa sin detenerse; es en las fisuras donde la luz se quiebra para encender los colores del mundo".',
          narrator: 'Narrador omnisciente contemplativo',
          genre: 'Relato lírico sobre la estética de la imperfección',
          vocabWord: 'fisuras',
          vocabMeaning: 'pequeñas hendiduras o grietas internas en el material',
          phrase: 'encender los colores del mundo',
          phraseMeaning: 'revelar la belleza y singularidad a través de la fragilidad',
          mainIdea: 'La belleza profunda que surge de las imperfecciones humanas iluminadas por la comprensión.',
        },
        {
          title: 'El árbol de las ciruelas doradas',
          author: 'Cuento campesino',
          text: 'En el huerto de don Silvestre crecía un ciruelo cuyas ramas daban frutos de piel ambarina solo una vez cada siete otoños. Los comerciantes del pueblo vecino le ofrecían comprar la cosecha entera por adelantado, pero el anciano rechazaba las monedas. Cuando las ciruelas maduraban, abría las cancelas de madera y llamaba a los niños del vecindario para que treparan a los troncos. "El fruto que no se comparte", advertía, "se pudre en el canasto y marchita el alma de quien lo guardó con avaricia".',
          narrator: 'Narrador omnisciente de tono parabólico',
          genre: 'Cuento tradicional de sabiduría popular',
          vocabWord: 'cancelas',
          vocabMeaning: 'rejas o puertas ligeras de acceso al huerto',
          phrase: 'marchita el alma de quien lo guardó con avaricia',
          phraseMeaning: 'empobrece espiritualmente a quien acumula sin generosidad',
          mainIdea: 'El desprendimiento y la generosidad compartida como fuente de plenitud comunitaria.',
        },
        {
          title: 'El secreto del astrónomo de Praga',
          author: 'Relato histórico ficcional',
          text: 'En lo alto de la torre del reloj astronómico, el maestro Jan trazaba con compás las órbitas elípticas de las luminarias celestes. Sus colegas lo tachaban de visionario peligroso por afirmar que la Tierra no era el centro inmóvil de la creación. Jan jamás discutió en los estrados académicos; se limitaba a invitar a sus detractores a mirar por el ocular del telescopio al caer la noche. La verdad, pensaba con serenidad, no necesita alzar la voz para brillar.',
          narrator: 'Narrador en tercera persona histórico y mesurado',
          genre: 'Relato biográfico de valor científico y templanza',
          vocabWord: 'detractores',
          vocabMeaning: 'personas que descalifican o desacreditan una postura ajena',
          phrase: 'no necesita alzar la voz para brillar',
          phraseMeaning: 'la evidencia real se demuestra por sí misma sin necesidad de estridencia',
          mainIdea: 'La firmeza de la verdad científica fundada en la evidencia frente al prejuicio.',
        },
        {
          title: 'La carta sellada con cera roja',
          author: 'Relato epistolar y dramático',
          text: 'Sobre el escritorio de caoba permanecía intacta una carta con sello de cera escarlata enviada desde Ultramar. Durante cuarenta inviernos, doña Beatriz se abstuvo de romper el lacre con el abrecartas de plata. Prefería conservar la promesa viva de un regreso soñado antes que enfrentar la cruda confirmación de un adiós irrevocable en la tinta marchita. Aquel sobre cerrado se convirtió en el santuario de su esperanza.',
          narrator: 'Narrador psicológico en tercera persona íntima',
          genre: 'Relato intimista de melancolía y espera',
          vocabWord: 'lacre',
          vocabMeaning: 'pasta resinosa usada para sellar correspondencia confidencial',
          phrase: 'santuario de su esperanza',
          phraseMeaning: 'refugio íntimo donde se resguarda una ilusión frente a la desilusión',
          mainIdea: 'La necesidad humana de proteger la ilusión frente a la dureza del desengaño.',
        },
        {
          title: 'El eco en la caverna de mármol',
          author: 'Relato geográfico y místico',
          text: 'En el corazón de la sierra se abría una caverna de mármol blanco donde los pastores solían guarecerse de las granizadas. Si alguien gritaba un reproche con furia, la caverna devolvía un estruendo metálico ensordecedor; pero si entonaba una melodía suave, la roca multiplicaba los armónicos como si albergaran coros invisibles. Los ancianos enseñaban a los jóvenes que el mundo es exactamente igual a esa caverna: devuelve multiplicado lo que uno proyecta en él.',
          narrator: 'Narrador sapiencial en tercera persona',
          genre: 'Parábola alegórica sobre la reciprocidad de los actos',
          vocabWord: 'guarecerse',
          vocabMeaning: 'refugiarse o protegerse de las inclemencias del tiempo',
          phrase: 'devuelve multiplicado lo que uno proyecta en él',
          phraseMeaning: 'las acciones y actitudes humanas repercuten en el entorno de vuelta',
          mainIdea: 'El principio de causalidad ética y reciprocidad en las relaciones humanas.',
        },
        {
          title: 'El cuadro inconcluso del maestro Ortiz',
          author: 'Relato de taller artístico',
          text: 'En el caballete del maestro Ortiz reposaba un lienzo al óleo donde faltaba únicamente el rostro de la figura central. Sus discípulos le insistían para que diera las últimas pinceladas antes de la bienal. El pintor rehusaba limpiar los pinceles y respondía que todo retrato culminado de forma exhaustiva condena al modelo a la fijeza inerte; en cambio, el vacío dejado al arbitrio de la sombra permite al observador completar la mirada con su propia alma.',
          narrator: 'Narrador omnisciente de perspectiva estética',
          genre: 'Relato sobre la poética de la obra abierta',
          vocabWord: 'arbitrio',
          vocabMeaning: 'voluntad o criterio libre de una persona',
          phrase: 'completar la mirada con su propia alma',
          phraseMeaning: 'participar activamente en la interpretación del arte con la propia sensibilidad',
          mainIdea: 'El papel activo del receptor y la sugerencia poética en la obra artística.',
        },
        {
          title: 'El vuelo silencioso de la lechuza blanca',
          author: 'Crónica campestre',
          text: 'Al caer la penumbra sobre el valle de abetos, la lechuza blanca iniciaba su vuelo de patrullaje. A diferencia de las aves diurnas que baten alas con alboroto, sus plumas afelpadas cortaban el viento sin el menor murmullo perceptible. El guardabosques observaba su trayectoria fantasmal y reflexionaba que las fuerzas verdaderamente transformadoras de la vida operan en el silencio más riguroso, lejos del ruido que confunde a los hombres vanidosos.',
          narrator: 'Narrador lírico contemplativo en tercera persona',
          genre: 'Prosa lírica de observación natural y meditación',
          vocabWord: 'afelpadas',
          vocabMeaning: 'suaves y vellosas como la felpa para silenciar el roce del aire',
          phrase: 'fuerzas verdaderamente transformadoras operan en el silencio',
          phraseMeaning: 'las acciones más fecundas y profundas se realizan con discreción y eficacia',
          mainIdea: 'El valor de la discreción, la prudencia y el trabajo silencioso frente a la ostentación.',
        },
        {
          title: 'El laberinto de cedros de San Jerónimo',
          author: 'Relato de iniciación',
          text: 'Plantado en el siglo XVIII con setos de cedro tupido, el laberinto de la hacienda desafiaba a cuantos pretendían cruzarlo memorizando giros a derecha e izquierda. Julián, el joven jardinero, comprendió el enigma el día en que dejó de mirar los muros verdes para contemplar el cielo: las copas de los árboles más altos señalaban el rumbo hacia el estanque central. Para no extraviarse en los laberintos terrestres, concluyó, es indispensable levantar la mirada hacia las estrellas.',
          narrator: 'Narrador en tercera persona reflexivo',
          genre: 'Cuento de formación y aprendizaje alegórico',
          vocabWord: 'setos',
          vocabMeaning: 'cercas vivas formadas por matas o arbustos espesos',
          phrase: 'levantar la mirada hacia las estrellas',
          phraseMeaning: 'buscar principios éticos y perspectivas superiores para resolver dilemas',
          mainIdea: 'La elevación de miras y los ideales nobles como guía ante los extravíos de la vida.',
        },
        {
          title: 'El relojero ciego de Basilea',
          author: 'Relato gremial y humano',
          text: 'Habiendo perdido la vista en su juventud por una esquirla de bronce, maese Heinrich ensamblaba los resortes y escapes de los relojes de bolsillo guiándose únicamente por las yemas de sus dedos y el tacto fino de sus pinzas. Sus cronómetros eran los más exactos de toda Suiza. Cuando los aprendices le preguntaban el secreto de su oficio, el anciano sonreía: "Los ojos suelen distraerse con el brillo dorado de la caja; solo las manos que no ven escuchan con devoción el pulso honesto del áncora".',
          narrator: 'Narrador en tercera persona testimonial',
          genre: 'Relato biográfico de superación y maestría artesanal',
          vocabWord: 'áncora',
          vocabMeaning: 'pieza del escape de un reloj que regula el vaivén del volante',
          phrase: 'pulso honesto del áncora',
          phraseMeaning: 'el funcionamiento interior auténtico desprovisto de apariencias superficiales',
          mainIdea: 'La capacidad humana de trascender limitaciones físicas mediante la entrega y el oficio auténtico.',
        },
        {
          title: 'El viaje del violonchelo de madera de cerezo',
          author: 'Relato musical',
          text: 'Fabricado en un taller de Cremona con madera de cerezo talado en luna menguante, el instrumento pasó por manos de virtuosos de orquesta, soldados en trincheras y maestros rurales. A pesar de los raspones en el barniz y una pequeña grieta restaurada en la faja lateral, su resonancia grave conservaba la calidez de un consuelo universal. La música que brotaba de sus cuerdas parecía contener el eco de todas las manos que alguna vez lo abrazaron.',
          narrator: 'Narrador poético en tercera persona',
          genre: 'Prosa lírica sobre la memoria sensible de los objetos de arte',
          vocabWord: 'resonancia',
          vocabMeaning: 'prolongación y amplificación del sonido por vibración armónica',
          phrase: 'consuelo universal',
          phraseMeaning: 'capacidad de la belleza musical para aliviar el dolor humano colectivo',
          mainIdea: 'El arte como vehículo imperecedero de fraternidad y memoria sensible compartida.',
        },
        {
          title: 'La última función del teatro de sombras',
          author: 'Cuento dramático oriental',
          text: 'Detrás de la pantalla de seda blanca iluminada por una lámpara de aceite, el titiritero Lin movía con varillas de bambú las siluetas de cuero calado de dragones y doncellas. Los aldeanos contemplaban maravillados las sombras danzantes sin ver jamás el rostro del maestro oculto tras el telón. Al apagarse la llama y guardarse los muñecos en su caja de laca, Lin sentía la dicha serena de quien ha sabido iluminar la noche ajena sin reclamar para sí ninguno de los reflectores.',
          narrator: 'Narrador contemplativo en tercera persona íntima',
          genre: 'Relato poético sobre la vocación artística y la humildad',
          vocabWord: 'calado',
          vocabMeaning: 'perforado o recortado con figuras y adornos delicados',
          phrase: 'iluminar la noche ajena sin reclamar reflectores',
          phraseMeaning: 'brindar alegría y consuelo al prójimo desde la generosa discreción',
          mainIdea: 'La grandeza del acto creador desinteresado puesto al servicio del gozo colectivo.',
        },
      ];
      const p = passages[v];
      const passageContext = { title: p.title, source: p.author, text: p.text };

      if (slotIndex === 61) {
        const opts = formatOptions(p.narrator, [
          `Narrador protagonista en primera persona ("yo") autobiográfico en ${p.title}`,
          `Narrador epistolar en forma de diario íntimo en ${p.title}`,
          `Narrador en segunda persona apelativa en ${p.title}`,
        ]);
        return {
          id: 61,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura literaria',
          passage: passageContext,
          questionText: `En la lectura <i>"${p.title}"</i> (reactivo ${v + 1}), ¿qué tipo de <b>NARRADOR</b> relata la historia?`,
          ...opts,
          explanation: `El texto está presentado mediante: ${p.narrator}.`,
        };
      }
      if (slotIndex === 62) {
        const opts = formatOptions(p.genre, [
          `Manual de instrucciones operativas técnicas en ${p.title}`,
          `Tratado de botánica experimental aplicada en ${p.title}`,
          `Crónica policial de nota roja contemporánea en ${p.title}`,
        ]);
        return {
          id: 62,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura literaria',
          passage: passageContext,
          questionText: `¿A qué <b>GÉNERO Y SUBGÉNERO</b> literario pertenece la lectura <i>"${p.title}"</i> (prueba ${v + 1})?`,
          ...opts,
          explanation: `Por su estructura narrativa, estilo y propósito sensible, clasifica como: ${p.genre}.`,
        };
      }
      if (slotIndex === 63) {
        const opts = formatOptions(p.vocabMeaning, [
          `se destruía completamente por la acción de la humedad en ${p.title}`,
          `perdía todo su valor monetario en el mercado comercial en ${p.title}`,
          `desaparecía de forma repentina e inexplicable de la escena en ${p.title}`,
        ]);
        return {
          id: 63,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura literaria',
          passage: passageContext,
          questionText: `En el contexto de la lectura <i>"${p.title}"</i>, el término <b>"${p.vocabWord}"</b> significa formalmente:`,
          ...opts,
          explanation: `En la lectura, la palabra tiene el sentido preciso de: ${p.vocabMeaning}.`,
        };
      }
      if (slotIndex === 64) {
        const opts = formatOptions(p.phraseMeaning, [
          `viajeros que extraviaron sus pertenencias materiales en ${p.title}`,
          `comerciantes arruinados por deudas en el banco en ${p.title}`,
          `marineros que sufrieron un naufragio físico en altamar en ${p.title}`,
        ]);
        return {
          id: 64,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura literaria',
          passage: passageContext,
          questionText: `En la lectura <i>"${p.title}"</i>, la frase figurada <b>"${p.phrase}"</b> alude a:`,
          ...opts,
          explanation: p.phraseMeaning,
        };
      }
      // slotIndex === 65
      const opts = formatOptions(p.mainIdea, [
        `La urgencia de acumular bienes materiales antes de la vejez en ${p.title}.`,
        `La conveniencia de olvidar el pasado para no sufrir desengaños en ${p.title}.`,
        `El desprecio hacia las tradiciones orales de las comunidades rurales en ${p.title}.`,
      ]);
      return {
        id: 65,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Comprensión de lectura literaria',
        passage: passageContext,
        questionText: `¿Cuál es la <b>IDEA CENTRAL</b> o mensaje medular del fragmento <i>"${p.title}"</i> (prueba ${v + 1})?`,
        ...opts,
        explanation: p.mainIdea,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 66 al 70: Comprensión expositiva y científica (20 ARTÍCULOS ÚNICOS)
    // ------------------------------------------------------------------------
    case 66:
    case 67:
    case 68:
    case 69:
    case 70: {
      const articles = [
        {
          title: 'El lenguaje secreto de los hongos y las raíces',
          source: 'Revista de Divulgación Científica y Ecología',
          text: 'Bajo el suelo de los bosques templados se extiende una tupida red biológica formada por filamentos fúngicos conocida como micorriza. Lejos de constituir organismos aislados, los árboles emplean estas redes subterráneas para intercambiar nutrientes, agua e incluso señales químicas de alarma ante la presencia de plagas. Cuando un abeto sufre el ataque de insectos taladradores, emite pulsos bioquímicos que alertan a los ejemplares vecinos, permitiéndoles sintetizar toxinas defensivas antes del arribo del invasor. Este fenómeno desafía el postulado tradicional de que en la naturaleza impera únicamente la competencia despiadada, demostrando que la cooperación simbiótica es un pilar indispensable de la resiliencia ecológica.',
          type: 'Artículo de divulgación científica expositivo',
          vocabWord: 'resiliencia',
          vocabMeaning: 'capacidad de un ecosistema para resistir perturbaciones y recuperarse',
          intent: 'Demostrar que la cooperación simbiótica entre especies es fundamental para la supervivencia vegetal.',
          premise: 'Los árboles emiten señales químicas de alerta a través de las micorrizas ante ataques de plagas.',
          tone: 'Informativo, riguroso y reflexivo sobre la ecología simbiótica',
        },
        {
          title: 'La huella hídrica invisible de los dispositivos electrónicos',
          source: 'Boletín de Sostenibilidad Tecnológica y Recursos',
          text: 'Cuando pensamos en el impacto ambiental de un teléfono inteligente, solemos calcular la energía requerida para cargar su batería o los metales pesados empleados en sus circuitos. Sin embargo, el recurso más consumido durante su fabricación suele pasar desapercibido: el agua. La producción de un solo microchip de última generación exige miles de litros de agua ultrapura para lavar láminas de silicio en salas asépticas. Un smartphone promedio arrastra consigo una "huella hídrica" estimada en más de 12,000 litros desde la extracción de minerales hasta el empaque final. Esta cifra pone de relieve la imperiosa necesidad de fomentar el diseño modular, la reparabilidad y la economía circular en la industria tecnológica para frenar la sobreexplotación de mantos acuíferos.',
          type: 'Ensayo expositivo y de concienciación ambiental',
          vocabWord: 'desapercibido',
          vocabMeaning: 'que no es advertido o tenido en cuenta por la mayoría',
          intent: 'Evidenciar el masivo consumo oculto de agua en la manufactura tecnológica y abogar por la sostenibilidad.',
          premise: 'La producción de un microchip requiere miles de litros de agua ultrapura para purificar el silicio.',
          tone: 'Crítico, fundamentado y propositivo frente al consumo tecnológico',
        },
        {
          title: 'La navegación magnética de las mariposas monarca',
          source: 'Investigación Biológica Cuaternaria',
          text: 'La migración anual de la mariposa monarca a lo largo de más de 4,000 kilómetros desde Canadá hasta los bosques de oyamel en Michoacán constituye una de las proezas biológicas más asombrosas del planeta. Investigaciones neurofisiológicas recientes han demostrado que estos lepidópteros poseen criptocromos, proteínas fotorreceptoras en sus antenas y ojos que les permiten percibir las líneas del campo magnético terrestre guiadas por la luz ultravioleta. Incluso en días densamente nublados cuando el compás solar queda cegado, este sistema magnetorreceptor actúa como una brújula biológica de precisión milimétrica que evita que las generaciones migrantes pierdan su rumbo ancestral.',
          type: 'Artículo expositivo de neurobiología y etología',
          vocabWord: 'criptocromos',
          vocabMeaning: 'proteínas sensibles a la luz implicadas en la magnetorrecepción',
          intent: 'Explicar los mecanismos biomoleculares y sensoriales que orientan la migración de la mariposa monarca.',
          premise: 'Las mariposas utilizan proteínas sensibles a la luz para orientarse mediante el campo magnético terrestre.',
          tone: 'Científico, analítico y descriptivo de la fisiología animal',
        },
        {
          title: 'La desalación solar mediante membranas de grafeno',
          source: 'Revista de Ingeniería de Materiales y Energía Limpia',
          text: 'La escasez de agua potable afecta a más de dos mil millones de personas en regiones costeras y áridas. Los métodos tradicionales de ósmosis inversa consumen ingentes cantidades de electricidad y generan salmueras contaminantes. En respuesta, científicos de diversas universidades han desarrollado membranas de óxido de grafeno con nanoporos calibrados a escala atómica. Estas membranas permiten el paso vertiginoso de moléculas de agua mediante capilaridad cuántica, reteniendo el 99.8% de los iones de sal y requiriendo únicamente radiación solar pasiva para su funcionamiento térmico, lo que perfila una solución de bajo costo y nula emisión de carbono.',
          type: 'Reporte técnico expositivo sobre nanotecnología hídrica',
          vocabWord: 'capilaridad',
          vocabMeaning: 'fenómeno de transporte de fluidos a través de conductos microscópicos',
          intent: 'Presentar una innovación nanotecnológica sustentable para purificar agua de mar usando energía solar.',
          premise: 'Las membranas de grafeno retienen casi el 100% de la sal utilizando únicamente calor solar pasivo.',
          tone: 'Divulgativo, optimista y riguroso en datos tecnológicos',
        },
        {
          title: 'El microbioma intestinal y la regulación neuroquímica',
          source: 'Cuadernos de Medicina y Fisiología Humana',
          text: 'Lejos de ser meros huéspedes pasivos encargados de la digestión, los billones de microorganismos que habitan el tracto gastrointestinal humano mantienen un diálogo bidireccional constante con el cerebro a través del nervio vago y la circulación sanguínea. Este eje microbiota-intestino-cerebro produce más del 90% de la serotonina y el 50% de la dopamina corporales. Alteraciones en la diversidad bacteriana provocadas por dietas ultraprocesadas o abuso de antibióticos han sido vinculadas directamente con cuadros de ansiedad y fatiga crónica, transformando radicalmente la psiquiatría y la medicina preventiva contemporáneas.',
          type: 'Artículo de divulgación médica y neurobiología',
          vocabWord: 'bidireccional',
          vocabMeaning: 'comunicación que fluye en ambos sentidos de forma recíproca',
          intent: 'Exponer la influencia directa de las bacterias intestinales en el estado neuroquímico y emocional.',
          premise: 'El microbioma intestinal produce la mayor parte de la serotonina y dopamina que regulan el ánimo.',
          tone: 'Académico, explicativo y transformador de paradigmas médicos',
        },
        {
          title: 'Los bosques de algas kelp como sumideros de carbono',
          source: 'Boletín de Oceanografía y Cambio Climático',
          text: 'Frente a las costas del Pacífico se yerguen densas selvas submarinas de macroalgas gigantes conocidas como bosques de kelp. Estas plantas marinas crecen a una velocidad vertiginosa de hasta 50 centímetros diarios, fijando dióxido de carbono disuelto a una tasa hasta veinte veces superior a la de los bosques tropicales terrestres. Cuando las algas maduras mueren, sus biomasas pesadas se hunden en las fosas marinas abisales, secuestrando el carbono orgánico durante milenios. Proteger estas praderas submarinas de la sobrepesca de erizos constituye una de las estrategias de mitigación climática más eficaces y desatendidas del siglo XXI.',
          type: 'Artículo científico de oceanografía y ecología marina',
          vocabWord: 'secuestrando',
          vocabMeaning: 'capturando y confinando carbono orgánico en el fondo marino para evitar su liberación',
          intent: 'Resaltar el extraordinario papel de las algas gigantes en la captura de carbono y la mitigación del calentamiento.',
          premise: 'El kelp absorbe dióxido de carbono con una rapidez hasta veinte veces mayor que los bosques terrestres.',
          tone: 'Científico, propositivo y enfocado en la conservación marina',
        },
        {
          title: 'La aerodinámica del vuelo de los vencejos reales',
          source: 'Anales de Ornitología y Biomecánica',
          text: 'El vencejo real es capaz de permanecer en vuelo ininterrumpido durante diez meses consecutivos sin tocar tierra firme, durmiendo e ingiriendo insectos en las capas medias de la troposfera. Este prodigio energético se debe a la geometría variable de sus alas falciformes, capaces de modificar su envergadura y ángulo de ataque en milisegundos para aprovechar corrientes térmicas ascendentes con un gasto metabólico casi nulo. Ingenieros aeronáuticos estudian actualmente el perfil alar de esta especie para diseñar planeadores autónomos y drones de vigilancia atmosférica de autonomía ilimitada.',
          type: 'Artículo expositivo de biomecánica y biomimética',
          vocabWord: 'falciformes',
          vocabMeaning: 'con forma de hoz o curva aerodinámica afilada',
          intent: 'Explicar las adaptaciones aerodinámicas del vencejo y su aplicación en la ingeniería aeroespacial.',
          premise: 'Los vencejos modifican la forma de sus alas en milisegundos para volar meses enteros sin posarse.',
          tone: 'Informativo, riguroso y fascinado por la ingeniería biológica',
        },
        {
          title: 'El telescopio James Webb y la espectroscopía infrarroja',
          source: 'Revista de Astrofísica y Cosmología Observacional',
          text: 'Situado en el punto orbital Lagrange 2 a 1.5 millones de kilómetros de la Tierra, el telescopio espacial James Webb observa el cosmos primigenio a través del espectro infrarrojo térmico. Debido a la expansión métrica del universo, la radiación ultravioleta emitida por las primeras galaxias nacidas tras el Big Bang ha experimentado un corrimiento hacia longitudes de onda infrarrojas invisibles para los telescopios ópticos. Gracias a su espejo primario de berilio chapado en oro, el Webb ha logrado registrar atmósferas de exoplanetas detectando vapor de agua, metano y dióxido de carbono con una resolución sin precedentes en la historia de la astronomía.',
          type: 'Artículo divulgativo de astrofísica observacional',
          vocabWord: 'corrimiento',
          vocabMeaning: 'desplazamiento de las longitudes de onda electromagnéticas por expansión del espacio',
          intent: 'Divulgar las ventajas ópticas del telescopio espacial para observar el origen de las galaxias y exoplanetas.',
          premise: 'La luz de las galaxias antiguas se desplaza al infrarrojo por la continua expansión del universo.',
          tone: 'Técnico, asombroso y documentado en astronomía de frontera',
        },
        {
          title: 'La bioluminiscencia en las profundidades abisales',
          source: 'Revista Marina de Exploración Abisal',
          text: 'En la zona batial y abisal de los océanos, por debajo de los 1,000 metros de profundidad, la luz solar jamás penetra. En esta oscuridad perpetua, más del 75% de los organismos marinos generan su propia luz mediante reacciones bioquímicas en las que la enzima luciferasa oxida el pigmento luciferina. Peces linterna, calamares gigantes y medusas utilizan destellos luminosos no solo para tender emboscadas a presas desprevenidas, sino también como código de comunicación intraespecífica y camuflaje por contrarradiación para disolver sus sombras frente a depredadores que acechan desde abajo.',
          type: 'Artículo expositivo de biología marina de profundidad',
          vocabWord: 'contrarradiación',
          vocabMeaning: 'emisión ventral de luz para igualar la luminosidad cenital y volverse invisible desde abajo',
          intent: 'Analizar las funciones adaptativas y reproductivas de la bioluminiscencia en los abismos marinos.',
          premise: 'La gran mayoría de los seres de profundidad producen luz para cazar, comunicarse y ocultar su silueta.',
          tone: 'Descriptivo, riguroso e instructivo sobre la vida marina',
        },
        {
          title: 'La síntesis bioplástica a partir de cáscaras de naranja',
          source: 'Innovación Química y Economía Circular',
          text: 'La industria citrícola mundial genera anualmente millones de toneladas de corteza residual que habitualmente terminan en vertederos generando gases de efecto invernadero. Investigadores de ingeniería química han desarrollado un proceso de hidrólisis enzimática que extrae la pectina y la celulosa de las cáscaras de naranja, sintetizando un biopolímero transparente y maleable con propiedades mecánicas análogas al polietileno de baja densidad. Este bioplástico es hidrosoluble en agua caliente y se degrada completamente en composta doméstica en menos de sesenta días sin liberar microplásticos tóxicos en el suelo.',
          type: 'Reporte científico de química verde y materiales biodegradables',
          vocabWord: 'hidrólisis',
          vocabMeaning: 'descomposición de sustancias químicas por la acción del agua catalizada por enzimas',
          intent: 'Promover el aprovechamiento de subproductos agrícolas para producir bioplásticos no contaminantes.',
          premise: 'Los polímeros extraídos de cítricos se degradan en compostaje en dos meses sin dejar residuos dañinos.',
          tone: 'Propositivo, técnico y favorable a la sostenibilidad ecológica',
        },
        {
          title: 'Los líquenes como bioindicadores de calidad del aire',
          source: 'Boletín de Botánica Urbana y Contaminación',
          text: 'Los líquenes, organismos resultantes de la simbiosis mutualista entre hongos y microalgas, carecen de raíces y cutícula protectora cerosa, por lo que absorben la totalidad de sus nutrientes y humedad directamente de la atmósfera. Esta anatomía expuesta los convierte en sensores biológicos hipersensibles a la presencia de dióxido de azufre, óxidos de nitrógeno y metales pesados en las ciudades. Los mapas de diversidad liquénica permiten a los biólogos diagnosticar con exactitud el grado de polución atmosférica urbana sin requerir costosos sensores electrónicos calibrados en postes de tráfico.',
          type: 'Artículo expositivo de ecología y bioindicación ambiental',
          vocabWord: 'bioindicadores',
          vocabMeaning: 'especies vivas cuya presencia o ausencia evalúa el estado ecológico del medio',
          intent: 'Demostrar el uso científico de los líquenes para monitorear la pureza o contaminación del aire urbano.',
          premise: 'Los líquenes carecen de cutícula cerosa y absorben directamente los contaminantes atmosféricos.',
          tone: 'Científico, didáctico y pragmático en monitoreo ambiental',
        },
        {
          title: 'El deshielo del permafrost y las emisiones de metano',
          source: 'Cuadernos de Climatología Ártica',
          text: 'En las regiones septentrionales de Siberia, Alaska y Canadá, el permafrost ha permanecido congelado de forma continua desde la última glaciación, atrapando miles de gigatoneladas de materia orgánica vegetal no descompuesta. Con el calentamiento anómalo del Ártico, este suelo helado se está descongelando a un ritmo alarmante, activando colonias bacterianas que metabolizan el carbono y liberan ingentes volúmenes de metano y dióxido de carbono a la atmósfera. Dado que el metano posee un potencial de calentamiento global ochenta veces superior al del CO2 en un horizonte de veinte años, este fenómeno amenaza con desencadenar un bucle de retroalimentación climática irreversible.',
          type: 'Ensayo expositivo y de alerta climatológica',
          vocabWord: 'retroalimentación',
          vocabMeaning: 'proceso en el que el efecto de una alteración amplifica aún más la causa inicial',
          intent: 'Alertar sobre el riesgo global del deshielo ártico y la consecuente liberación acelerada de gas metano.',
          premise: 'El metano atrapado en el permafrost tiene un poder de efecto invernadero muy superior al del CO2.',
          tone: 'Crítico, riguroso, fundamentado y de severa advertencia ecológica',
        },
        {
          title: 'La acústica de las catedrales góticas y la resonancia armónica',
          source: 'Revista de Arquitectura Histórica y Física Acústica',
          text: 'Las bóvedas de crucería y los arcos ojivales de las catedrales europeas del siglo XIII no solo cumplían una audaz función de sostén estructural, sino que fueron diseñadas con proporciones volumétricas empíricas que producían tiempos de reverberación de hasta ocho segundos. Esta resonancia prolongada anulaba las consonantes rápidas de la voz hablada pero ensalzaba los cantos gregorianos melismáticos, haciendo que las notas sucesivas flotaran simultáneamente en el espacio y generaran acordes polifónicos espontáneos que inducían en los fieles un estado de trance contemplativo.',
          type: 'Artículo de divulgación sobre física acústica e historia arquitectónica',
          vocabWord: 'reverberación',
          vocabMeaning: 'permanencia del sonido en un recinto cerrado tras cesar la fuente emisora',
          intent: 'Explicar cómo el diseño arquitectónico gótico manipulaba deliberadamente el sonido sacro.',
          premise: 'Las proporciones de las naves góticas producían tiempos de eco prolongados ideales para cantos sacros.',
          tone: 'Histórico, analítico y apreciativo del arte medieval',
        },
        {
          title: 'La fotosíntesis artificial para generar hidrógeno verde',
          source: 'Boletín de Nanotecnología y Energías Renovables',
          text: 'La ruptura catalítica de la molécula de agua en oxígeno e hidrógeno utilizando energía lumínica es la meta cumbre de la transición energética. Inspirados en el fotosistema II de las plantas, científicos han sintetizado celdas fotoelectroquímicas compuestas por catalizadores de cobalto y semiconductores de silicio negro. Al incidir los fotones solares sobre la superficie de la celda sumergida en agua, se generan pares electrón-hueco que disocian los enlaces químicos H-O con una eficiencia cuántica superior al 12%, produciendo gas hidrógeno puro almacenable como combustible limpio sin emisiones de gases de efecto invernadero.',
          type: 'Reporte técnico sobre ingeniería de conversión energética',
          vocabWord: 'disocian',
          vocabMeaning: 'separan o rompen enlaces moleculares mediante reacciones químicas',
          intent: 'Informar sobre los avances en fotosíntesis artificial para la obtención sustentable de hidrógeno verde.',
          premise: 'Las celdas solares fotocatalíticas descomponen el agua en hidrógeno y oxígeno con alta eficiencia.',
          tone: 'Tecnológico, objetivo y enfocado en el desarrollo sustentable',
        },
        {
          title: 'La domesticación del maíz a partir del teocintle',
          source: 'Revista Mexicana de Arqueobotánica y Genética',
          text: 'Hace aproximadamente nueve mil años, pueblos originarios en la cuenca del río Balsas iniciaron uno de los procesos de selección artificial más extraordinarios de la humanidad: la transformación del teocintle en maíz. El teocintle primitivo consistía en una espiga diminuta con granos duros encerrados en vainas pétreas que se quebraban al madurar. Mediante la observación paciente y la selección milenaria de mutaciones espontáneas en apenas cuatro genes clave, las manos indígenas lograron frutos con mazorcas no quebradizas, granos tiernos y rendimiento alimentario exponencial, sentando las bases agrícolas de las civilizaciones mesoamericanas.',
          type: 'Artículo científico expositivo sobre domesticación agrícola',
          vocabWord: 'selección artificial',
          vocabMeaning: 'proceso de crianza selectiva guiado por humanos para potenciar rasgos útiles',
          intent: 'Reconocer el proceso genético y cultural mesoamericano que domesticó el maíz a partir del teocintle.',
          premise: 'La modificación de solo unos pocos genes transformó una espiga dura en mazorcas comestibles.',
          tone: 'Histórico, científico y de reivindicación patrimonial',
        },
        {
          title: 'El campo magnético terrestre y las inversiones de polaridad',
          source: 'Cuadernos de Geofísica y Dinámica Planetaria',
          text: 'El escudo magnético que protege a la biosfera terrestre del viento solar letal es generado por el movimiento convectivo de hierro y níquel fundidos en el núcleo exterior del planeta, funcionando como una gigantesca dínamo autoinducida. Registros paleomagnéticos congelados en basaltos oceánicos revelan que el polo norte y el polo sur magnéticos han invertido sus posiciones cientos de veces a lo largo de las eras geológicas. Durante estos eventos de transición, que demoran varios milenios en completarse, la intensidad del campo disminuye temporalmente hasta un 10%, exponiendo parcialmente a satélites y comunicaciones a tormentas electromagnéticas solares.',
          type: 'Artículo de divulgación geofísica',
          vocabWord: 'paleomagnéticos',
          vocabMeaning: 'registros del magnetismo remanente conservado en rocas antiguas',
          intent: 'Explicar el origen dinámico del campo geomagnético y la historia natural de sus inversiones periódicas.',
          premise: 'Las rocas del fondo marino conservan la evidencia de inversiones magnéticas completas en el pasado.',
          tone: 'Didáctico, fundamentado y descriptivo de la dinámica planetaria',
        },
        {
          title: 'Las proteínas anticongelantes de los peces antárticos',
          source: 'Investigación de Biología Polar y Criogenia',
          text: 'En las aguas gélidas del océano Glacial Antártico, la temperatura marina desciende con frecuencia por debajo de los -1.8 °C debido a la alta salinidad, un nivel térmico en el que la sangre de la mayoría de los vertebrados se congelaría al instante provocando la muerte celular. Sin embargo, los peces de la familia Nototheniidae nadan con total vitalidad entre los témpanos. Su adaptación reside en glicoproteínas anticongelantes circulantes en su plasma sanguíneo, las cuales se adhieren irreversiblemente a los microcristales de hielo microscópicos en formación, impidiendo físicamente su crecimiento y salvaguardando sus tejidos vitales de la congelación.',
          type: 'Artículo expositivo de fisiología comparada y adaptación extrema',
          vocabWord: 'glicoproteínas',
          vocabMeaning: 'moléculas compuestas por proteínas unidas a carbohidratos con funciones biológicas específicas',
          intent: 'Detallar el mecanismo molecular que permite a los peces antárticos vivir en aguas bajo cero.',
          premise: 'Las proteínas plasmáticas bloquean el crecimiento de cristales de hielo en el torrente sanguíneo.',
          tone: 'Científico, analítico y enfocado en la biología adaptativa',
        },
        {
          title: 'La computación cuántica y los cúbits superconductores',
          source: 'Boletín de Física Cuántica y Tecnologías del Futuro',
          text: 'A diferencia de los procesadores convencionales que procesan información en bits binarios restringidos a estados rígidos de cero o uno, las computadoras cuánticas utilizan cúbits basados en circuitos superconductores enfriados al cero absoluto en criostatos de dilución. Gracias al principio cuántico de superposición y al entrelazamiento, un procesador cuántico puede explorar simultáneamente una cantidad exponencial de configuraciones lógicas en paralelo. Esta capacidad abre la puerta a resolver en minutos simulaciones de plegamiento de proteínas, diseño de fármacos y criptoanálisis que a las supercomputadoras clásicas más potentes les tomaría miles de años procesar.',
          type: 'Artículo expositivo de tecnologías de la información y computación cuántica',
          vocabWord: 'entrelazamiento',
          vocabMeaning: 'propiedad física donde dos partículas comparten un estado ligado sin importar la distancia',
          intent: 'Divulgar las bases físicas de la computación cuántica y su superioridad computacional esperada.',
          premise: 'Los cúbits aprovechan la superposición para calcular soluciones complejas a velocidades exponenciales.',
          tone: 'Riguroso, futurista y explicativo de principios físicos',
        },
        {
          title: 'La polinización nocturna por murciélagos nectarívoros',
          source: 'Revista de Ecología Tropical y Conservación de Fauna',
          text: 'Mientras las abejas y mariposas dominan la polinización durante las horas diurnas, al caer la noche un contingente alado esencial toma el relevo en los ecosistemas áridos y semidesérticos: los murciélagos nectarívoros. Plantas emblemáticas como el maguey, el agave tequilero y los cactus columnares han coevolucionado abriendo sus corolas únicamente al anochecer, emitiendo fragancias azufradas intensas y produciendo néctar abundante de alta viscosidad. La disminución de estas poblaciones de quirópteros debido a la destrucción de cuevas de descanso pone en riesgo inminente no solo la diversidad vegetal silvestre, sino industrias agrícolas enteras.',
          type: 'Artículo expositivo de etología y conservación ecológica',
          vocabWord: 'coevolucionado',
          vocabMeaning: 'evolución conjunta y recíproca entre dos especies estrechamente interdependientes',
          intent: 'Concientizar sobre el papel ecológico irremplazable de los murciélagos en la reproducción de plantas desérticas.',
          premise: 'Los agaves y cactus dependen de las visitas de murciélagos nocturnos para fertilizar sus flores.',
          tone: 'Informativo, conservacionista y de llamado a la protección de especies',
        },
        {
          title: 'El reciclaje químico de polímeros termoplásticos',
          source: 'Revista Internacional de Ingeniería Química y Plásticos',
          text: 'El reciclaje mecánico tradicional de plásticos se limita a triturar, lavar y refundir botellas, un proceso que degrada progresivamente las cadenas moleculares del polímero y limita el número de ciclos útiles antes de su desecho definitivo. En contraste, el reciclaje químico emplea despolimerización termocatalítica y solvólisis para romper los plásticos postconsumo hasta sus monómeros fundamentales originales. Al purificar estos monómeros de colorantes y aditivos, la industria puede resintetizar plásticos vírgenes de pureza idéntica a los derivados del petróleo, cerrando verdaderamente el ciclo de la economía circular sin pérdida alguna de calidad mecánica.',
          type: 'Reporte científico de ingeniería química ambiental',
          vocabWord: 'despolimerización',
          vocabMeaning: 'descomposición de una macromolécula plástica en sus unidades monoméricas básicas',
          intent: 'Exponer las ventajas del reciclaje químico para regenerar plásticos de pureza virgen de forma indefinida.',
          premise: 'El reciclaje químico descompone los plásticos en monómeros puros que pueden volverse a usar sin mermar su calidad.',
          tone: 'Técnico, innovador y enfocado en soluciones sustentables',
        },
      ];
      const a = articles[v];
      const passageContext = { title: a.title, source: a.source, text: a.text };

      if (slotIndex === 66) {
        const opts = formatOptions(a.type, [
          `Crónica deportiva de narrativa periodística en ${a.title}`,
          `Guion teatral de comedia de enredos en ${a.title}`,
          `Manual de instrucciones de ensamble mecánico en ${a.title}`,
        ]);
        return {
          id: 66,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura expositiva',
          passage: passageContext,
          questionText: `¿Qué <b>TIPO DE TEXTO</b> predomina en el artículo <i>"${a.title}"</i> (prueba ${v + 1})?`,
          ...opts,
          explanation: a.type,
        };
      }
      if (slotIndex === 67) {
        const opts = formatOptions(a.vocabMeaning, [
          `el costo comercial monetario de extracción en ${a.title}`,
          `la extinción inmediata e irreparable del recurso en ${a.title}`,
          `la velocidad de evaporación forzada en ${a.title}`,
        ]);
        return {
          id: 67,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura expositiva',
          passage: passageContext,
          questionText: `En el artículo <i>"${a.title}"</i>, el vocablo científico <b>"${a.vocabWord}"</b> se define como:`,
          ...opts,
          explanation: a.vocabMeaning,
        };
      }
      if (slotIndex === 68) {
        const opts = formatOptions(a.intent, [
          `Fomentar el consumo irresponsable y acelerado en ${a.title}.`,
          `Descalificar a las universidades que investigan el tema en ${a.title}.`,
          `Recomendar el cese definitivo de la investigación científica en ${a.title}.`,
        ]);
        return {
          id: 68,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura expositiva',
          passage: passageContext,
          questionText: `¿Cuál es el <b>PROPÓSITO PRINCIPAL</b> del autor en el artículo <i>"${a.title}"</i> (prueba ${v + 1})?`,
          ...opts,
          explanation: a.intent,
        };
      }
      if (slotIndex === 69) {
        const opts = formatOptions(a.premise, [
          `Todos los procesos industriales carecen de huella ambiental en ${a.title}.`,
          `La totalidad de las especies del ecosistema compiten sin cooperar en ${a.title}.`,
          `Los fenómenos descritos en el texto ocurren exclusivamente en condiciones de laboratorio en ${a.title}.`,
        ]);
        return {
          id: 69,
          section: 'espanol',
          sectionTitle: 'Parte 2 - Lengua Española',
          category: 'Comprensión de lectura expositiva',
          passage: passageContext,
          questionText: `Según el artículo <i>"${a.title}"</i>, ¿cuál de las siguientes afirmaciones está <b>RESPALDADA CON DATOS DEL TEXTO</b> (prueba ${v + 1})?`,
          ...opts,
          explanation: a.premise,
        };
      }
      // slotIndex === 70
      const opts = formatOptions(a.tone, [
        `Tono burlesco, superficial e indiferente en ${a.title}`,
        `Tono trágico, pesimista y fatalista sin salida en ${a.title}`,
        `Tono poético, sentimental y fantástico en ${a.title}`,
      ]);
      return {
        id: 70,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Comprensión de lectura expositiva',
        passage: passageContext,
        questionText: `¿Cuál es el <b>TONO PREDOMINANTE</b> que emplea el autor en <i>"${a.title}"</i> (prueba ${v + 1})?`,
        ...opts,
        explanation: a.tone,
      };
    }

    // ------------------------------------------------------------------------
    // Reactivos 71 al 80: Taller de redacción y edición (20 variantes únicas por slot)
    // ------------------------------------------------------------------------
    case 71: {
      const data = [
        { orig: 'Las celdas solares captan luz del sol y la energía solar que viene de arriba la convierten en corriente que sirve para aparatos.', good: 'Las celdas solares transforman la radiación solar en energía eléctrica utilizable.', bad: ['La energía que viene de arriba es agarrada para mover corrientes.', 'El sol emite luz que las celdas agarran para que funcionen las máquinas.', 'Las corrientes bajan del cielo y las celdas las reciben para las casas.'], exp: 'Sustituye la perífrasis coloquial y redundante por un enunciado técnico, sintético y preciso.' },
        { orig: 'Los autos que no usan gasolina sino corriente eléctrica se mueven sin echar humo malo a la atmósfera de la ciudad.', good: 'Los vehículos eléctricos circulan sin emitir contaminantes a la atmósfera.', bad: ['Los autos sin gasolina andan sin sacar humo feo al aire de la calle.', 'El humo malo no sale de los carros de corriente porque no usan gasolina.', 'Sin echar humos, los carros eléctricos se mueven bien por las avenidas.'], exp: 'Redacción concisa con vocabulario formal que elimina expresiones coloquiales.' },
        { orig: 'Los árboles viejos del parque que tienen muchas hojas limpias hacen que el aire se sienta fresco y con oxígeno para los pulmones.', good: 'El arbolado maduro del parque purifica el aire y regula la temperatura ambiental.', bad: ['Las hojas de los árboles echan aire fresco que los pulmones reciben contentos.', 'El parque tiene árboles con muchas hojas que dan oxígeno al aire de todos.', 'Para que los pulmones respiren bien, los árboles viejos limpian el viento del parque.'], exp: 'Condensa la idea en terminología botánica y ecológica adecuada.' },
        { orig: 'El agua que cae de las nubes en tiempo de lluvia se puede guardar en tinacos para no gastar la que viene de los tubos públicos.', good: 'La captación pluvial permite almacenar agua y disminuir la demanda de la red pública.', bad: ['Guardar la lluvia en tinacos sirve para no gastar tanta agua de los tubos.', 'El agua de arriba se junta en botes grandes para no pagar a los tubos del gobierno.', 'Cuando llueve mucho, la gente guarda agua para que los tubos no se sequen.'], exp: 'Emplea el término técnico "captación pluvial" y estructura sintaxis académica.' },
        { orig: 'La comida que tiene mucha azúcar y grasas malas hace que la gente se enferme del corazón y suba mucho de peso corporal.', good: 'Una dieta alta en azúcares y grasas saturadas eleva el riesgo cardiovascular y de obesidad.', bad: ['Comer cosas con grasa y azúcar engorda mucho a la gente y daña el corazón.', 'El corazón se enferma si la gente come cosas dulces y grasosas todos los días.', 'Subir de peso y enfermarse del pecho pasa cuando la comida tiene mucha azúcar mala.'], exp: 'Precisión léxica en términos nutricionales y médicos.' },
        { orig: 'Las computadoras nuevas que son muy rápidas hacen cuentas difíciles en segundos que a la gente le tomaría muchos años de su vida.', good: 'Los procesadores modernos resuelven cálculos complejos en segundos, superando la capacidad humana manual.', bad: ['Hacer cuentas en computadoras rápidas ahorra años de trabajo a las personas.', 'Las máquinas nuevas hacen números difíciles muy rápido sin cansarse nunca.', 'Los años de cuentas de la gente los hacen las computadoras en un segundo veloz.'], exp: 'Sustituye descripciones ingenuas por términos computacionales precisos.' },
        { orig: 'El plástico que la gente tira en la playa se va al mar y los peces se lo comen pensando que es comida y se mueren ahogados.', good: 'Los desechos plásticos vertidos en los litorales amenazan la fauna marina por ingestión accidental.', bad: ['Tirar plástico en la arena mata a los peces porque se lo tragan creyendo que es comida.', 'Los peces del mar se comen el plástico de la playa y se mueren por no saber qué es.', 'En la playa hay plástico que va al agua y los peces comen basura marina.'], exp: 'Redacción académica formal con términos ecológicos rigurosos.' },
        { orig: 'Las vacunas que inventan los doctores le enseñan al cuerpo a defenderse de los bichos malos para que no nos dé fiebre fuerte.', good: 'Las vacunas estimulan el sistema inmunológico para generar defensas contra agentes patógenos.', bad: ['Los doctores hacen vacunas para que el cuerpo sepa pelear contra los bichos.', 'Para que no dé fiebre, las vacunas entrenan al cuerpo contra microbios malos.', 'Las defensas del cuerpo aprenden con vacunas a matar a los microbios que enferman.'], exp: 'Emplea conceptos biomédicos precisos ("sistema inmunológico", "agentes patógenos").' },
        { orig: 'Los edificios que hacen con fierro y cemento bueno aguantan los temblores fuertes de la tierra sin romperse en pedazos.', good: 'Las edificaciones con diseño sismo-resistente soportan movimientos telúricos sin sufrir colapso estructural.', bad: ['Con fierro y buen cemento, las casas no se caen cuando tiembla duro el suelo.', 'Los temblores de la tierra no rompen los edificios si tienen fierros gruesos en las paredes.', 'Para que no se rompan las casas en los temblores, se les pone cemento resistente.'], exp: 'Uso de terminología técnica en ingeniería civil.' },
        { orig: 'Los libros viejos que están guardados en cajas se maltratan por la polilla y la humedad que hay en los cuartos oscuros.', good: 'El almacenamiento deficiente en espacios húmedos favorece el deterioro biológico de acervos bibliográficos.', bad: ['Guardar libros en cajas oscuras hace que las polillas y la humedad se los coman.', 'Los cuartos oscuros tienen humedad y polillas que maltratan los libros viejos.', 'Para que no se maltraten los libros, no hay que dejarlos en cajas húmedas.'], exp: 'Registro formal y sintaxis académica sobre conservación de patrimonio.' },
        { orig: 'Los focos ahorradores que dan luz blanca gastan poquita luz y hacen que el recibo de la compañía salga más barato cada dos meses.', good: 'Las luminarias LED optimizan el consumo energético y reducen los costos de facturación eléctrica.', bad: ['Poner focos blancos ahorra luz para que el recibo de la luz no salga caro.', 'La compañía de luz cobra menos si se usan focos ahorradores en toda la casa.', 'Gastar poquita luz con focos blancos ayuda a pagar menos dinero al bimestre.'], exp: 'Precisión técnica y formal sobre eficiencia energética.' },
        { orig: 'Las abejas que andan volando de flor en flor llevan polvito amarillo para que nazcan muchas frutas y verduras en el campo.', good: 'La polinización realizada por las abejas es indispensable para la reproducción vegetal y la producción agrícola.', bad: ['Volando con polvito amarillo, las abejas hacen que crezcan frutas en las parcelas.', 'El campo da muchas verduras gracias a las abejas que llevan polvo de las flores.', 'Para que nazcan frutas en las matas, las abejas llevan polvito de una flor a otra.'], exp: 'Sustituye la descripción infantil por el concepto biológico de polinización.' },
        { orig: 'Los puentes que cruzan los ríos anchos unen a los pueblos de un lado con los del otro lado para que no tengan que dar tanta vuelta en lancha.', good: 'La infraestructura de puentes interconecta comunidades ribereñas optimizando los tiempos de traslado.', bad: ['Hacer puentes en los ríos anchos evita que la gente tenga que dar vueltas en lanchas.', 'Los pueblos de los dos lados se unen con puentes para cruzar rápido sin barcos.', 'Para no dar vueltas en lanchas, los puentes grandes unen a los pueblos vecinos.'], exp: 'Lenguaje formal institucional sobre infraestructura y movilidad.' },
        { orig: 'La gente que hace ejercicio todas las mañanas suda mucho y quema calorías para estar sana y no enfermarse de azúcar en la sangre.', good: 'La actividad física regular contribuye al gasto calórico y a la prevención de la diabetes mellitus.', bad: ['Sudar en las mañanas corriendo quema grasa para que no dé diabetes a las personas.', 'Hacer ejercicio temprano quema muchas calorías y evita que suba el azúcar en el cuerpo.', 'Para estar sano y sin azúcar en la sangre, hay que sudar y correr todas las mañanas.'], exp: 'Terminología clínica adecuada sobre prevención metabólica.' },
        { orig: 'Los teléfonos inteligentes que tienen cámaras con muchos puntos toman fotos bien claritas que parecen retratos de profesionales.', good: 'Los dispositivos móviles con sensores de alta resolución capturan imágenes con nitidez fotográfica profesional.', bad: ['Tener muchos puntos en la cámara del teléfono hace que las fotos salgan bonitas.', 'Las fotos claritas que parecen de fotógrafo profesional salen de teléfonos nuevos.', 'Con cámaras de muchos puntos, los teléfonos toman retratos muy claros en la calle.'], exp: 'Precisión técnica en óptica y tecnología móvil.' },
        { orig: 'Las plantas del desierto que tienen espinas en lugar de hojas aguantan muchos meses sin que caiga una gota de agua del cielo.', good: 'Las especies xerófitas desarrollan hojas modificadas en espinas para minimizar la pérdida de agua por transpiración.', bad: ['Tener espinas en vez de hojas ayuda a las plantas del desierto a no secarse.', 'Sin que caiga agua, las plantas espinosas aguantan meses enteros en la arena caliente.', 'Las espinas de las plantas del desierto guardan agua para sobrevivir a la sequía larga.'], exp: 'Uso del vocablo botánico riguroso "xerófitas" y concepto de transpiración.' },
        { orig: 'El internet que viaja por cables transparentes de vidrio va a la velocidad de la luz y no se traba cuando ves videos pesados.', good: 'La transmisión por fibra óptica aprovecha pulsos de luz para proveer conexiones de alta velocidad y baja latencia.', bad: ['Los cables de vidrio transparentes hacen que el internet no se trabe al ver películas.', 'La luz que viaja por cables de vidrio lleva internet veloz que no se desconecta.', 'Para ver videos sin trabas, el internet usa cables transparentes que van bien rápido.'], exp: 'Terminología técnica de telecomunicaciones ("fibra óptica", "latencia").' },
        { orig: 'Los aviones grandotes que vuelan bien alto gastan mucho combustible caro que contamina el cielo con gases oscuros de escape.', good: 'La aviación comercial de gran escala genera una considerable huella de carbono por combustión de turbosina.', bad: ['El cielo se contamina con gases oscuros porque los aviones grandes queman gasolina cara.', 'Volar aviones enormes por el cielo gasta combustible costoso y ensucia la atmósfera.', 'Para volar tan alto, los aviones grandotes echan mucho humo malo de combustible al aire.'], exp: 'Lenguaje formal sobre aviación y huella de carbono.' },
        { orig: 'Los telescopios grandotes que ponen en la punta de los cerros ven estrellas lejanas porque no hay luces de la ciudad que estorben la vista.', good: 'Los observatorios astronómicos en cumbres montañosas minimizan la interferencia de la contaminación lumínica urbana.', bad: ['En los cerros altos se ven estrellas bonitas porque las luces del pueblo no estorban.', 'Poner telescopios en la punta del cerro sirve para ver galaxias sin focos de la calle.', 'Para que no estorben los focos de la ciudad, los astrónomos suben telescopios a los cerros.'], exp: 'Uso del concepto formal "contaminación lumínica" y registro científico.' },
        { orig: 'El reciclaje de la basura que se separa en botes de colores ayuda a que los basureros municipales no se llenen tan rápido de cochinada.', good: 'La separación integral de residuos sólidos urbanos prolonga la vida útil de los rellenos sanitarios.', bad: ['Separar basura en botes de colores hace que los basureros del pueblo no se llenen de suciedad.', 'Los basureros municipales no se llenan tan pronto si la gente recicla la basura en botes.', 'Para no juntar cochinadas en los basureros, hay que separar el plástico y el cartón en botes.'], exp: 'Terminología formal en gestión ambiental ("rellenos sanitarios", "residuos sólidos urbanos").' },
      ][v];
      const opts = formatOptions(data.good, data.bad);
      return {
        id: 71,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        instructions: 'En los ejercicios del 71 al 80 seleccione la opción que mejora la redacción, elimina redundancias o aplica conectores lógicos precisos.',
        questionText: `Considere la siguiente oración confusa (reactivo ${v + 1}):<br><br><i>"${data.orig}"</i><br><br>¿Qué opción expresa la misma idea con <b>MAYOR PRECISIÓN Y CLARIDAD</b>?`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 72: {
      const data = [
        { p: '(1) El ajolote es un anfibio endémico de los canales de Xochimilco. (2) Posee una asombrosa capacidad de regenerar órganos y tejidos complejos. (3) El mercado de flores de Xochimilco es muy visitado los domingos por turistas. (4) Actualmente se encuentra en peligro crítico debido a la contaminación del agua.', out: 'La oración 3', exp: 'La oración 3 aborda el turismo del mercado de flores, rompiendo la unidad temática biológica del ajolote.' },
        { p: '(1) El telescopio espacial Hubble revolucionó la astronomía moderna desde 1990. (2) Ha capturado imágenes inéditas de galaxias situadas a miles de millones de años luz. (3) El costo de las entradas a los cines comerciales aumentó considerablemente este año. (4) Sus observaciones permitieron calcular con mayor precisión la tasa de expansión cósmica.', out: 'La oración 3', exp: 'La oración 3 menciona boletos de cine, asunto totalmente ajeno a la astrofísica del Hubble.' },
        { p: '(1) La arquitectura bioclimática optimiza el aprovechamiento de recursos naturales como el sol y el viento. (2) Emplea materiales con alta inercia térmica para mantener temperaturas interiores estables. (3) Los automóviles deportivos de lujo consumen gasolina de alto octanaje en autopistas. (4) Este enfoque reduce sustancialmente el consumo energético de los edificios.', out: 'La oración 3', exp: 'La oración 3 introduce automóviles de lujo, rompiendo la temática arquitectónica bioclimática.' },
        { p: '(1) La mariposa monarca realiza una travesía migratoria de más de cuatro mil kilómetros. (2) Pasa el invierno congregada en los bosques montañosos de oyamel en México. (3) El precio del kilogramo de aguacate de exportación fluctuó en los mercados internacionales. (4) La pérdida de algodoncillo en su ruta norteña amenaza la supervivencia de sus colonias.', out: 'La oración 3', exp: 'La oración 3 habla del precio del aguacate, rompiendo la coherencia de la migración de la monarca.' },
        { p: '(1) Las energías renovables como la solar y la eólica no emiten gases de efecto invernadero. (2) Su implementación a gran escala disminuye la dependencia de los combustibles fósiles. (3) La final del torneo de fútbol soccer congregó a miles de aficionados en el estadio. (4) Diversos países ofrecen incentivos fiscales para promover la instalación de paneles en techos.', out: 'La oración 3', exp: 'La oración 3 refiere un evento deportivo ajeno al tema de energías limpias.' },
        { p: '(1) La penicilina, descubierta por Alexander Fleming en 1928, transformó la medicina moderna. (2) Permitió tratar infecciones bacterianas que antes resultaban letales para los pacientes. (3) Los teléfonos inteligentes de última generación cuentan con pantallas de alta definición. (4) Su producción masiva durante la Segunda Guerra Mundial salvó incontables vidas de soldados.', out: 'La oración 3', exp: 'La oración 3 desvía el tema hacia teléfonos inteligentes en un texto de historia médica.' },
        { p: '(1) El jaguar es el felino más grande del continente americano y un depredador tope. (2) Requiere extensos territorios continuos de selva tropical para cazar presas grandes. (3) Las líneas aéreas comerciales actualizaron sus tarifas de equipaje documentado. (4) La fragmentación de su hábitat por carreteras pone en riesgo la viabilidad de sus poblaciones.', out: 'La oración 3', exp: 'La oración 3 trata sobre tarifas de equipaje aéreo, ajena a la ecología del jaguar.' },
        { p: '(1) La nanotecnología permite manipular la materia a escala de átomos y moléculas individuales. (2) Facilita la creación de materiales más ligeros, resistentes y con propiedades conductoras únicas. (3) La cartelera teatral de la ciudad incluyó dos obras clásicas de dramaturgia barroca. (4) En medicina, se desarrollan nanocápsulas capaces de transportar fármacos directamente a células tumorales.', out: 'La oración 3', exp: 'La oración 3 menciona cartelera de teatro en medio de un texto sobre nanotecnología.' },
        { p: '(1) Los arrecifes de coral albergan más del veinticinco por ciento de toda la biodiversidad marina. (2) Actúan como barreras naturales que protegen las costas contra el impacto del oleaje de huracanes. (3) La cotización de los metales preciosos cerró con ganancias en la bolsa de valores. (4) El calentamiento global provoca el blanqueamiento masivo y la muerte de las colonias coralinas.', out: 'La oración 3', exp: 'La oración 3 introduce finanzas bursátiles en un texto sobre arrecifes de coral.' },
        { p: '(1) El sistema Braille permite a las personas con discapacidad visual leer y escribir mediante el tacto. (2) Se basa en una cuadrícula de seis puntos en relieve cuyas combinaciones forman letras y signos. (3) El menú del restaurante campestre ofrece cortes de carne a la parrilla los fines de semana. (4) Su invención en el siglo XIX abrió el acceso a la educación y la literatura a miles de personas.', out: 'La oración 3', exp: 'La oración 3 menciona un menú de restaurante, totalmente fuera de la temática del sistema Braille.' },
        { p: '(1) La fotosíntesis es el proceso mediante el cual las plantas convierten luz solar en energía química. (2) Utiliza agua y dióxido de carbono para sintetizar carbohidratos, liberando oxígeno a la atmósfera. (3) El concierto de música electrónica fue aplazado debido a problemas logísticos de sonido. (4) Es la base energética fundamental de casi todas las cadenas tróficas del planeta.', out: 'La oración 3', exp: 'La oración 3 aborda un concierto de música electrónica ajeno a la fotosíntesis.' },
        { p: '(1) La imprenta de tipos móviles permitió la difusión masiva del conocimiento en Europa renacentista. (2) Redujo sustancialmente el costo y tiempo de reproducción de los textos frente al copiado manual. (3) La venta de automóviles compactos aumentó un diez por ciento en las agencias del norte. (4) Gracias a ella, las ideas científicas y humanistas circularon con una rapidez sin precedentes.', out: 'La oración 3', exp: 'La oración 3 refiere ventas de automóviles, rompiendo la temática histórica de la imprenta.' },
        { p: '(1) El ciclo del agua describe la circulación continua del vital líquido entre atmósfera, tierra y océanos. (2) Los procesos de evaporación, condensación y precipitación regulan el clima planetario. (3) Los zapatos deportivos de suela de hule son populares entre los jóvenes corredores de pista. (4) La recarga de acuíferos subterráneos depende de la infiltración natural de las lluvias en cuencas forestales.', out: 'La oración 3', exp: 'La oración 3 refiere calzado deportivo en un texto de hidrología.' },
        { p: '(1) La atmósfera terrestre actúa como un escudo protector contra la radiación cósmica y meteoroides. (2) La capa de ozono estratosférico filtra la mayor parte de la radiación ultravioleta nociva. (3) El servicio postal anunció nuevas tarifas para envíos de paquetes al extranjero. (4) Sin este escudo de gases, la vida sobre la superficie del planeta resultaría inviable.', out: 'La oración 3', exp: 'La oración 3 habla de tarifas postales, rompiendo la coherencia de la física atmosférica.' },
        { p: '(1) La domesticación del fuego permitió a los primeros homínidos cocinar alimentos y protegerse de depredadores. (2) La cocción facilitó la digestión de carnes y tubérculos, favoreciendo el desarrollo encefálico. (3) Las líneas de metro subterráneo inauguraron una estación con murales modernos. (4) Alrededor del fuego nocturno se fortalecieron los lazos sociales y la comunicación lingüística comunitaria.', out: 'La oración 3', exp: 'La oración 3 refiere estaciones de metro en un texto sobre antropología del fuego.' },
        { p: '(1) Los antibióticos son fármacos diseñados para combatir infecciones causadas exclusivamente por bacterias. (2) No tienen efecto alguno contra virus responsables del resfriado común o la influenza estacional. (3) El precio del kilogramo de café de grano tostado subió en las cafeterías gourmet. (4) El uso indiscriminado de estos medicamentos propicia la aparición de cepas bacterianas multirresistentes.', out: 'La oración 3', exp: 'La oración 3 habla de precios de café en un texto de farmacología.' },
        { p: '(1) El desierto de Atacama en Chile es considerado el lugar no polar más árido del planeta. (2) Sus cielos despejados y baja humedad relativa lo convierten en sede de los mayores observatorios astronómicos. (3) El campeonato internacional de patinaje sobre hielo se celebró en una pista cubierta europea. (4) Algunas estaciones meteorológicas de la región no han registrado precipitaciones durante décadas.', out: 'La oración 3', exp: 'La oración 3 menciona patinaje sobre hielo en un texto sobre el desierto de Atacama.' },
        { p: '(1) La fibra dietética presente en frutas, verduras y cereales enteros favorece el tránsito intestinal. (2) Ayuda a regular los niveles de glucosa y colesterol en la sangre en pacientes adultos. (3) La tienda departamental del centro comercial ofrece descuentos en ropa de playa y alberca. (4) Un consumo adecuado de fibra se asocia con una menor incidencia de enfermedades digestivas.', out: 'La oración 3', exp: 'La oración 3 habla de ropa de playa en un párrafo de nutrición y salud.' },
        { p: '(1) Las abejas melíferas desempeñan un papel ecológico irremplazable como polinizadoras de cultivos alimentarios. (2) Al transportar polen entre flores, garantizan la fecundación y reproducción de numerosas plantas. (3) El vuelo charter con destino al Caribe aterrizó con dos horas de retraso por niebla. (4) El síndrome de colapso de colonias amenaza la estabilidad alimentaria de diversas regiones agrícolas.', out: 'La oración 3', exp: 'La oración 3 refiere un vuelo comercial ajeno a la polinización de abejas.' },
        { p: '(1) La vacunación masiva ha logrado erradicar enfermedades letales como la viruela a escala global. (2) Estimula la memoria inmunológica del cuerpo para generar anticuerpos sin provocar la enfermedad activa. (3) El diseño de uniformes deportivos para el equipo colegial incluyó colores llamativos. (4) La inmunidad colectiva protege a personas vulnerables que no pueden recibir biológicos por prescripción médica.', out: 'La oración 3', exp: 'La oración 3 menciona uniformes deportivos en un texto sobre salud pública y vacunas.' },
      ][v];
      const parts = data.p.split(/(d)s*/).filter(Boolean);
      const opts = formatOptions(`La oración 3: ${parts[2].slice(0, 45)}...`, [
        `La oración 1: ${parts[0].slice(0, 45)}...`,
        `La oración 2: ${parts[1].slice(0, 45)}...`,
        `La oración 4: ${parts[3].slice(0, 45)}...`,
      ]);
      return {
        id: 72,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `Lea el siguiente párrafo e identifique la oración que guarda <b>MENOS RELACIÓN</b> con el tema central (prueba ${v + 1}):<br><br><i>"${data.p}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 73: {
      const data = [
        { o1: 'Las abejas polinizan un tercio de los cultivos que alimentan al planeta.', o2: 'El uso indiscriminado de plaguicidas amenaza sus colonias con la extinción.', good: 'Aunque las abejas polinizan un tercio de los cultivos mundiales, el uso indiscriminado de plaguicidas amenaza sus colonias.', bad: ['Las abejas polinizan cultivos porque los plaguicidas amenazan sus colonias.', 'Las abejas polinizan cultivos, por consiguiente los plaguicidas las amenazan.', 'Si las abejas polinizan cultivos, entonces los plaguicidas usarán colonias.'], exp: 'El conector concesivo "Aunque" articula adecuadamente el contraste de ideas.' },
        { o1: 'La energía solar es inagotable y no contamina la atmósfera.', o2: 'Los costos iniciales de instalación de baterías continúan siendo elevados.', good: 'A pesar de que la energía solar es inagotable y limpia, los costos de instalación de baterías siguen siendo elevados.', bad: ['La energía solar no contamina porque las baterías cuestan mucho dinero.', 'Como la energía solar es limpia, por lo tanto las baterías no se compran.', 'Si la energía solar no contamina, entonces las baterías son inagotables.'], exp: 'Uso del conector concesivo "A pesar de que" para expresar contraste.' },
        { o1: 'El telescopio espacial James Webb opera a temperaturas cercanas al cero absoluto.', o2: 'Sus sensores infrarrojos pueden detectar la luz de las primeras galaxias.', good: 'Dado que opera cerca del cero absoluto, los sensores infrarrojos del telescopio Webb pueden captar la luz de las primeras galaxias.', bad: ['El telescopio opera en frío extremo pero sus sensores no captan galaxias.', 'El telescopio opera en frío aunque las galaxias estén muy calientes.', 'Los sensores captan galaxias a pesar de que el frío las destruye.'], exp: 'El conector causal "Dado que" enlaza la condición técnica con el logro observacional.' },
        { o1: 'Los manglares protegen las costas contra el embate de huracanes.', o2: 'El desarrollo turístico desmedido ha destruido grandes extensiones de este ecosistema.', good: 'Aunque los manglares protegen el litoral de huracanes, el desarrollo turístico desmedido ha destruido grandes áreas de su hábitat.', bad: ['Los manglares protegen el litoral porque los turistas construyen hoteles.', 'Los turistas destruyen manglares para que los huracanes golpeen las costas.', 'Si los manglares protegen las costas, los huracanes crearán turismo.'], exp: 'Nexo concesivo "Aunque" que contrapone el beneficio ecológico con la amenaza humana.' },
        { o1: 'La lectura cotidiana amplía el vocabulario y mejora la comprensión crítica.', o2: 'Muchos jóvenes dedican la mayor parte de su tiempo libre a redes sociales.', good: 'A pesar de que la lectura cotidiana amplía el vocabulario, muchos jóvenes priorizan el uso de redes sociales.', bad: ['La lectura mejora el vocabulario porque los jóvenes usan redes sociales.', 'Los jóvenes usan redes sociales por consiguiente leen muchos libros.', 'Si los jóvenes usan redes sociales, la lectura ampliará su tiempo libre.'], exp: 'Contraste adecuado mediante conector concesivo "A pesar de que".' },
        { o1: 'La deforestación acelerada destruye los hábitats de miles de especies.', o2: 'La fragmentación del bosque reduce la variabilidad genética animal.', good: 'La deforestación acelerada no solo destruye hábitats biológicos, sino que también fragmenta los bosques reduciendo la diversidad genética.', bad: ['La deforestación destruye hábitats pero los animales tienen más crías.', 'Como la deforestación destruye bosques, los animales viven mejor.', 'La fragmentación de bosques reforesta hábitats de miles de especies.'], exp: 'Articulación copulativa enfática "no solo... sino que también".' },
        { o1: 'El ejercicio aeróbico regular fortalece el sistema cardiovascular.', o2: 'Es indispensable consultar a un médico antes de iniciar rutinas de alta intensidad.', good: 'Si bien el ejercicio aeróbico fortalece el corazón, es indispensable una valoración médica previa a rutinas intensas.', bad: ['El ejercicio fortalece el corazón porque los médicos prohíben correr.', 'El corazón se fortalece a menos que el médico recete ejercicio intenso.', 'Como el ejercicio es sano, nadie debe consultar a un médico jamás.'], exp: 'Concesión preventiva mediante "Si bien...".' },
        { o1: 'El plástico tarda siglos en degradarse de forma natural en el medio ambiente.', o2: 'La industria petroquímica continúa produciendo millones de toneladas anuales de envases desechables.', good: 'A pesar de que el plástico tarda siglos en degradarse, la producción industrial de envases desechables continúa en aumento.', bad: ['El plástico tarda siglos en degradarse porque la industria lo fabrica con cuidado.', 'La industria produce plásticos para que la naturaleza los degrade rápido.', 'Si el plástico tarda siglos en degradarse, los envases desaparecerán solos.'], exp: 'Contraste paradójico mediante conector concesivo.' },
        { o1: 'El reciclaje de metales ahorra hasta un noventa por ciento de energía respecto a la minería.', o2: 'Aún falta infraestructura de acopio en muchas ciudades del país.', good: 'Aunque el reciclaje de metales ahorra ingentes cantidades de energía, aún se carece de infraestructura de recolección en muchas urbes.', bad: ['El reciclaje ahorra energía porque las ciudades no tienen centros de acopio.', 'Las ciudades no tienen acopio para que la minería gaste menos energía.', 'Si la minería gasta energía, las ciudades reciclarán metales sin acopio.'], exp: 'Contraste concesivo adecuado con "Aunque".' },
        { o1: 'Las vacunas han demostrado ser sumamente seguras y eficaces para prevenir epidemias.', o2: 'La desinformación en medios digitales fomenta la renuencia de ciertos sectores de la población.', good: 'No obstante la comprobada seguridad de las vacunas, la desinformación digital fomenta la resistencia de algunos grupos a inmunizarse.', bad: ['Las vacunas son seguras porque la gente lee desinformación digital.', 'La gente no se vacuna para que las epidemias prevengan enfermedades.', 'Si las vacunas previenen epidemias, la desinformación será segura y eficaz.'], exp: 'Conector preposicional de contraste "No obstante...".' },
        { o1: 'El transporte público colectivo disminuye la congestión vial y las emisiones vehiculares.', o2: 'Muchos usuarios prefieren el automóvil particular por deficiencias en el servicio.', good: 'A pesar de los beneficios ambientales del transporte público, las deficiencias del servicio llevan a muchos a preferir el automóvil privado.', bad: ['El transporte público reduce emisiones porque la gente usa autos privados.', 'Los usuarios usan autos para que el transporte público no tenga congestión.', 'Si el transporte público reduce congestión, los autos serán colectivos.'], exp: 'Contraste concesivo mediante "A pesar de...".' },
        { o1: 'La inteligencia artificial automatiza tareas repetitivas y optimiza diagnósticos médicos.', o2: 'Plantea dilemas éticos profundos sobre la privacidad de datos y el desplazamiento laboral.', good: 'Si bien la inteligencia artificial optimiza diagnósticos médicos, también suscita severos dilemas éticos sobre privacidad y empleo.', bad: ['La inteligencia artificial optimiza diagnósticos porque la privacidad desaparece.', 'Los dilemas éticos resuelven diagnósticos médicos sin inteligencia artificial.', 'Si la inteligencia artificial plantea dilemas, los médicos no usarán datos.'], exp: 'Estructura contrastiva "Si bien... también...".' },
        { o1: 'El tratamiento adecuado de aguas residuales evita la contaminación de mantos freáticos.', o2: 'Muchos municipios descargan sus efluentes directamente en ríos sin depuración previa.', good: 'A pesar de que el saneamiento de aguas protege los mantos freáticos, diversos municipios descargan efluentes crudos en ríos.', bad: ['El tratamiento de aguas protege ríos porque los municipios vierten desechos.', 'Los municipios vierten aguas negras para limpiar los mantos freáticos.', 'Si los ríos reciben aguas crudas, los mantos freáticos se depurarán solos.'], exp: 'Concesión de contradicción ambiental.' },
        { o1: 'La agricultura orgánica prescinde del uso de fertilizantes y plaguicidas sintéticos.', o2: 'Suele requerir mayor mano de obra y registrar rendimientos menores por hectárea.', good: 'Aunque la agricultura orgánica protege los suelos de químicos sintéticos, suele demandar más mano de obra y ofrecer menores rendimientos.', bad: ['La agricultura orgánica protege suelos porque los campesinos ganan más dinero.', 'Los rendimientos son menores para que los plaguicidas sintéticos funcionen mejor.', 'Si la agricultura usa químicos, los rendimientos orgánicos serán menores.'], exp: 'Contraste balanceado mediante "Aunque".' },
        { o1: 'La reforestación con especies nativas restaura el equilibrio hídrico de las cuencas.', o2: 'La siembra de monocultivos exóticos puede secar los mantos freáticos del entorno.', good: 'Mientras que la reforestación nativa restaura las cuencas hídricas, los monocultivos exóticos pueden abatir los mantos freáticos.', bad: ['La reforestación nativa seca mantos freáticos porque los monocultivos restauran cuencas.', 'Las cuencas se restauran para que los monocultivos sequen los árboles nativos.', 'Si los árboles nativos restauran cuencas, los monocultivos no tendrán agua.'], exp: 'Conector de oposición distributiva "Mientras que...".' },
        { o1: 'El internet facilita el acceso instantáneo a bibliotecas y fuentes de información.', o2: 'La proliferación de noticias falsas exige un pensamiento crítico constante en los usuarios.', good: 'A pesar de que internet democratiza el acceso a la información, la abundancia de noticias falsas exige un riguroso criterio analítico.', bad: ['Internet democratiza la información porque las noticias falsas son ciertas.', 'Las noticias falsas son útiles para que los usuarios no consulten bibliotecas.', 'Si internet da acceso a bibliotecas, las noticias falsas serán rigurosas.'], exp: 'Contraste analítico mediante "A pesar de que...".' },
        { o1: 'El ahorro sistemático de un porcentaje del ingreso fortalece la estabilidad financiera familiar.', o2: 'La inflación persistente deteriora el poder adquisitivo del dinero en cuentas bancarias.', good: 'Si bien el ahorro periódico brinda seguridad financiera, la inflación persistente erosiona el poder adquisitivo del dinero acumulado.', bad: ['El ahorro brinda seguridad porque la inflación aumenta el valor del dinero.', 'El poder adquisitivo aumenta cuando la inflación destruye los ahorros del banco.', 'Si la inflación deteriora el dinero, las familias ahorrarán sin ingresos.'], exp: 'Contraste económico mediante "Si bien...".' },
        { o1: 'La exploración espacial ha impulsado el desarrollo de tecnologías de uso cotidiano.', o2: 'Sus misiones demandan presupuestos multimillonarios que despiertan debates públicos.', good: 'Aunque la exploración espacial genera valiosas tecnologías cotidianas, sus elevados costos suscitan debates sobre prioridades de gasto.', bad: ['La exploración espacial es cara porque los ciudadanos no usan tecnologías.', 'Los presupuestos son altos para que las tecnologías cotidianas no se inventen.', 'Si el espacio genera tecnologías, los debates públicos serán multimillonarios.'], exp: 'Contraste concesivo equilibrado.' },
        { o1: 'El aislamiento térmico en viviendas reduce sensiblemente el gasto en calefacción y aire acondicionado.', o2: 'Muchos constructores omiten estos materiales para abaratar costos de edificación.', good: 'No obstante que el aislamiento térmico reduce el consumo energético, muchas constructoras prescinden de él por abaratar costos.', bad: ['El aislamiento ahorra energía porque los constructores no compran materiales.', 'Las constructoras abaratan casas para que el aire acondicionado gaste más gas.', 'Si las casas están aisladas, los constructores gastarán más calefacción.'], exp: 'Contraste de negligencia constructiva mediante "No obstante que...".' },
        { o1: 'El bilingüismo temprano favorece la flexibilidad cognitiva y la plasticidad cerebral infantil.', o2: 'Requiere constancia y exposición significativa a ambos idiomas en el entorno cotidiano.', good: 'Si bien el bilingüismo potencia la agilidad mental en la infancia, su consolidación exige exposición constante a ambas lenguas.', bad: ['El bilingüismo potencia la mente porque los niños nunca escuchan idiomas.', 'Los niños aprenden idiomas para que la plasticidad cerebral no trabaje.', 'Si el cerebro infantil es flexible, no se necesitará hablar ningún idioma.'], exp: 'Contraste condicional de esfuerzo formativo mediante "Si bien...".' },
      ][v];
      const opts = formatOptions(data.good, data.bad);
      return {
        id: 73,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `Considere estas dos oraciones independientes (prueba ${v + 1}):<br><br><i>Oración 1: "${data.o1}"</i><br><i>Oración 2: "${data.o2}"</i><br><br>¿Qué opción las <b>COMBINA MEJOR</b> en un solo enunciado cohesivo?`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 74: {
      const data = [
        { s: 'El equipo de robótica trabajó horas extras en el laboratorio; ________, consiguieron perfeccionar el sensor a tiempo.', c: 'por consiguiente', dis: ['sin embargo', 'a pesar de ello', 'no obstante'], exp: '"Por consiguiente" es un conector consecutivo que denota el resultado favorable derivado del esfuerzo previo.' },
        { s: 'Las lluvias torrenciales inundaron los accesos carreteros; ________, la ceremonia de inauguración tuvo que posponerse.', c: 'por lo tanto', dis: ['en cambio', 'no obstante', 'antes bien'], exp: '"Por lo tanto" expresa la consecuencia lógica directa del impedimento vial.' },
        { s: 'El atleta entrenó con estricta disciplina durante cuatro años; ________, logró romper la marca olímpica nacional.', c: 'en consecuencia', dis: ['sin embargo', 'al contrario', 'a pesar de todo'], exp: '"En consecuencia" introduce el desenlace positivo del entrenamiento constante.' },
        { s: 'El presupuesto para el proyecto fue recortado drásticamente; ________, los investigadores debieron reducir las muestras de campo.', c: 'por ende', dis: ['por el contrario', 'aun así', 'no obstante'], exp: '"Por ende" denota la secuela inevitable del recorte presupuestal.' },
        { s: 'La empresa invirtió en maquinaria automatizada de última generación; ________, la tasa de defectos en la producción disminuyó un ochenta por ciento.', c: 'así pues', dis: ['sin embargo', 'a pesar de ello', 'no obstante'], exp: '"Así pues" vincula causalmente la modernización con el resultado positivo.' },
        { s: 'El comité detectó severas irregularidades en la votación; ________, decidió anular los comicios de forma unánime.', c: 'de ahí que', dis: ['sin embargo', 'por otra parte', 'al revés'], exp: '"De ahí que" explica la medida tomada a raíz de las anomalías.' },
        { s: 'El conductor respetó todos los límites de velocidad y señalamientos viales; ________, evitó el percance en la curva cerrada.', c: 'por consiguiente', dis: ['no obstante', 'en cambio', 'a pesar de todo'], exp: '"Por consiguiente" subraya la consecuencia de la conducción prudente.' },
        { s: 'Los alumnos repasaron a conciencia la guía de estudio; ________, todos obtuvieron notas sobresalientes en la prueba.', c: 'por lo tanto', dis: ['sin embargo', 'no obstante', 'al contrario'], exp: '"Por lo tanto" es un nexo consecutivo que expresa el fruto del estudio.' },
        { s: 'La cosecha de trigo superó con creces las estimaciones iniciales; ________, los silos de almacenamiento se llenaron a su máxima capacidad.', c: 'en consecuencia', dis: ['a pesar de ello', 'en cambio', 'no obstante'], exp: '"En consecuencia" relaciona la sobreproducción con la saturación de los silos.' },
        { s: 'El paciente siguió al pie de la letra el tratamiento médico prescrito; ________, su recuperación se produjo en tiempo récord.', c: 'por ello', dis: ['sin embargo', 'no obstante', 'al contrario'], exp: '"Por ello" conecta causalmente la disciplina médica con la pronta sanación.' },
        { s: 'La conferencia magistral despertó un interés inusitado en el público; ________, el auditorio principal resultó insuficiente para albergar a los asistentes.', c: 'de tal manera que', dis: ['sin embargo', 'a pesar de ello', 'no obstante'], exp: '"De tal manera que" introduce la consecuencia de la masiva asistencia.' },
        { s: 'El panel solar captó radiación de forma continua durante la jornada; ________, las baterías alcanzaron su carga completa antes del anochecer.', c: 'por consiguiente', dis: ['no obstante', 'al contrario', 'en cambio'], exp: '"Por consiguiente" indica el efecto directo de la radiación constante.' },
        { s: 'El joven escritor revisó minuciosamente cada capítulo de su obra; ________, la versión final carecía de inconsistencias narrativas.', c: 'por lo tanto', dis: ['sin embargo', 'a pesar de todo', 'no obstante'], exp: '"Por lo tanto" denota el resultado de la exhaustiva revisión.' },
        { s: 'El municipio implementó un programa riguroso de bacheo y pavimentación; ________, los accidentes por baches en avenidas principales descendieron.', c: 'en consecuencia', dis: ['sin embargo', 'por otra parte', 'no obstante'], exp: '"En consecuencia" refleja el impacto del mantenimiento urbano.' },
        { s: 'El nuevo fármaco superó con éxito las tres fases de ensayos clínicos; ________, las autoridades sanitarias otorgaron la licencia de comercialización.', c: 'por ende', dis: ['a pesar de ello', 'en cambio', 'al contrario'], exp: '"Por ende" fundamenta la aprobación a partir del éxito clínico previo.' },
        { s: 'El telescopio fue calibrado con extrema precisión por los astrofísicos; ________, las imágenes captadas de la nebulosa mostraron nitidez absoluta.', c: 'por consiguiente', dis: ['no obstante', 'sin embargo', 'a pesar de todo'], exp: '"Por consiguiente" explica la calidad visual como resultado del ajuste.' },
        { s: 'La cooperativa agrícola comercializó directamente sus hortalizas sin intermediarios; ________, los ingresos de los campesinos aumentaron un cuarenta por ciento.', c: 'por lo tanto', dis: ['sin embargo', 'en cambio', 'no obstante'], exp: '"Por lo tanto" denota el beneficio de la venta directa.' },
        { s: 'El software de ciberseguridad detectó el intento de intrusión al instante; ________, el cortafuegos bloqueó la dirección IP atacante antes de cualquier fuga.', c: 'en consecuencia', dis: ['a pesar de ello', 'no obstante', 'al revés'], exp: '"En consecuencia" describe la respuesta automatizada de defensa.' },
        { s: 'Los voluntarios levantaron barricadas de arena en la orilla del río; ________, la corriente desbordada no ingresó a las viviendas habitadas.', c: 'de modo que', dis: ['sin embargo', 'a pesar de todo', 'no obstante'], exp: '"De modo que" enlaza la acción preventiva con la protección lograda.' },
        { s: 'La estudiante de preparatoria organizó su cronograma de repasos con antelación; ________, llegó al examen de admisión con serenidad y dominio de temas.', c: 'por consiguiente', dis: ['sin embargo', 'no obstante', 'en cambio'], exp: '"Por consiguiente" expresa el fruto de la planeación y la disciplina.' },
      ][v];
      const opts = formatOptions(data.c, data.dis);
      return {
        id: 74,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `Seleccione el <b>CONECTOR LÓGICO CONSECUTIVO</b> que enlaza de forma más coherente las dos proposiciones (prueba ${v + 1}):<br><br><i>"${data.s}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 75: {
      const data = [
        { s: 'Querida amiga _ te escribo desde Monterrey para contarte las novedades _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto seguido (.) y dos puntos (:)'], exp: 'En las cartas y correos formales, tras el vocativo de saludo se emplean dos puntos (:) y al cierre de la oración, punto final (.).' },
        { s: 'Estimado profesor _ le agradezco la orientación brindada durante el semestre _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y dos puntos (:)', 'Punto y coma (;) y coma (,)', 'Guion largo (—) y coma (,)'], exp: 'Fórmula epistolar de saludo formal: dos puntos y punto al cierre.' },
        { s: 'Apreciables colegas _ les comparto la agenda de trabajo para la reunión _', c: 'Dos puntos (:) y punto final (.)', dis: ['Punto y coma (;) y dos puntos (:)', 'Coma (,) y punto y coma (;)', 'Puntos suspensivos (...) y coma (,)'], exp: 'Encabezado epistolar formal seguido de dos puntos.' },
        { s: 'Distinguidos miembros del comité _ someto a su consideración el dictamen _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Vocativo formal de apertura epistolar.' },
        { s: 'A quien corresponda _ por medio de la presente certifico los datos del solicitante _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Fórmula epistolar general con dos puntos.' },
        { s: 'Queridos abuelos _ espero que al recibir esta carta gocen de cabal salud _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Guiones (—) y dos puntos (:)'], exp: 'Fórmula de saludo epistolar familiar con dos puntos.' },
        { s: 'Estimada licenciada _ adjunto a este mensaje encontrará el contrato firmado _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Vocativo profesional en comunicación formal.' },
        { s: 'Apreciable comunidad escolar _ les damos la más cordial bienvenida al ciclo _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Saludo de circular institucional con dos puntos.' },
        { s: 'Señor rector _ tengo el honor de remitirle la memoria anual de labores _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Puntos suspensivos (...) y punto (.)'], exp: 'Encabezamiento protocolario con dos puntos.' },
        { s: 'Querido hermano _ te mando un fuerte abrazo desde el campamento _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Guiones (—) y dos puntos (:)'], exp: 'Saludo epistolar informal con dos puntos.' },
        { s: 'Estimados padres de familia _ les notificamos las fechas de evaluación final _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Circular escolar dirigida a padres de familia.' },
        { s: 'Muy señor mío _ en respuesta a su atento oficio de fecha reciente le comunico _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Fórmula epistolar clásica formal.' },
        { s: 'Estimado doctor _ acudo a usted para solicitar una constancia de salud _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Saludo formal en carta de solicitud.' },
        { s: 'Apreciable jurado calificador _ expongo ante ustedes la defensa de tesis _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Guion largo (—) y coma (,)'], exp: 'Vocativo protocolario académico.' },
        { s: 'Querida tía _ te escribo muy contento tras recibir la noticia de mi admisión _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Carta familiar con vocativo y dos puntos.' },
        { s: 'Señores delegados _ declaro formalmente iniciada la asamblea general de socios _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Puntos suspensivos (...) y punto (.)'], exp: 'Saludo en acta o comunicado institucional.' },
        { s: 'Estimado ingeniero _ le envío las especificaciones técnicas del puente vehicular _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Saludo en correspondencia técnica.' },
        { s: 'Apreciables vecinos _ les recordamos la junta vecinal de este sábado por la tarde _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Convocatoria comunitaria con dos puntos.' },
        { s: 'Queridos amigos _ gracias por acompañarme en la celebración de mi graduación _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Mensaje de agradecimiento epistolar.' },
        { s: 'Distinguidas autoridades _ les presentamos los resultados de la encuesta ciudadana _', c: 'Dos puntos (:) y punto final (.)', dis: ['Coma (,) y punto y coma (;)', 'Punto y coma (;) y coma (,)', 'Punto (.) y dos puntos (:)'], exp: 'Protocolo formal ante autoridades con dos puntos.' },
      ][v];
      const opts = formatOptions(`${data.c} en "${data.s.slice(0, 25)}..."`, data.dis.map(d => `${d} en "${data.s.slice(0, 25)}..."`));
      return {
        id: 75,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `¿Qué signos de puntuación completan correctamente el siguiente enunciado epistolar (prueba ${v + 1})?<br><br><i>"${data.s}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 76: {
      const data = [
        { s: 'El Dr. Castillo _ eminente neurólogo mexicano _ dictó una conferencia magistral.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Signos de interrogación ( ¿ ... ? )'], exp: 'Las aposiciones o incisos que aclaran la identidad del sujeto deben aislarse entre comas.' },
        { s: 'Monterrey _ capital industrial del norte _ experimentó un crecimiento urbano acelerado.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Paréntesis angulares ( < ... > )'], exp: 'Aposición explicativa que califica al topónimo Monterrey.' },
        { s: 'Sor Juana Inés de la Cruz _ insigne poeta virreinal _ defendió el derecho de las mujeres al estudio.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos seguidos ( . ... . )', 'Dos puntos ( : ... : )', 'Puntos suspensivos ( ... ... ... )'], exp: 'Aposición de sujeto histórico entre comas.' },
        { s: 'El ajolote _ anfibio endémico de los canales de Xochimilco _ posee una asombrosa capacidad regenerativa.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Comillas dobles ( " ... " )'], exp: 'Inciso apositivo descriptivo aislado con comas.' },
        { s: 'Guadalajara _ la hermosa perla tapatía _ albergará la feria internacional del libro.', c: 'Comas explicativas ( , ... , )', dis: ['Punto y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Signos de exclamación ( ¡ ... ! )'], exp: 'Aposición que califica a la ciudad entre comas.' },
        { s: 'Mario Molina _ premio nobel de química _ alertó sobre el adelgazamiento de la capa de ozono.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Signos de interrogación ( ¿ ... ? )'], exp: 'Inciso explicativo de la trayectoria del científico.' },
        { s: 'El volcán Paricutín _ el más joven del continente _ nació súbitamente en un maizal michoacano.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos seguidos ( . ... . )', 'Dos puntos ( : ... : )', 'Punto y coma ( ; ... ; )'], exp: 'Aposición que especifica la singularidad del volcán.' },
        { s: 'La ceiba _ árbol sagrado de los mayas _ extiende sus ramas sobre la selva tropical.', c: 'Comas explicativas ( , ... , )', dis: ['Dos puntos ( : ... : )', 'Puntos y coma ( ; ... ; )', 'Guiones cortos ( - ... - )'], exp: 'Inciso explicativo botánico y cultural entre comas.' },
        { s: 'Octavio Paz _ galardonado ensayista y poeta mexicano _ escribió El laberinto de la soledad.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Punto y seguido ( . ... . )'], exp: 'Aposición que califica al autor literario.' },
        { s: 'El lago de Chapala _ el cuerpo de agua dulce más grande del país _ enfrenta retos ambientales.', c: 'Comas explicativas ( , ... , )', dis: ['Dos puntos ( : ... : )', 'Punto y coma ( ; ... ; )', 'Signos de admiración ( ¡ ... ! )'], exp: 'Inciso explicativo geográfico entre comas.' },
        { s: 'Don Quijote _ el ingenioso hidalgo manchego _ recorrió los llanos en busca de aventuras.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Puntos suspensivos ( ... ... ... )'], exp: 'Aposición clásica del personaje cervantino.' },
        { s: 'El colibrí _ diminuto polinizador de las flores silvestres _ bate sus alas con velocidad prodigiosa.', c: 'Comas explicativas ( , ... , )', dis: ['Punto y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Punto y seguido ( . ... . )'], exp: 'Inciso explicativo sobre el ave polinizadora.' },
        { s: 'Frida Kahlo _ pintora de renombre universal _ plasmó su dolor y fortaleza en lienzos inolvidables.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Signos de interrogación ( ¿ ... ? )'], exp: 'Aposición explicativa de la pintora.' },
        { s: 'El Popocatépetl _ majestuoso volcán nevado _ vigila desde las alturas el valle central.', c: 'Comas explicativas ( , ... , )', dis: ['Dos puntos ( : ... : )', 'Punto y coma ( ; ... ; )', 'Guiones medios ( - ... - )'], exp: 'Inciso poético apositivo sobre el volcán.' },
        { s: 'Miguel de Cervantes _ máxima figura de las letras hispanas _ concibió su obra maestra en prisión.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Punto seguido ( . ... . )'], exp: 'Aposición honorífica del autor.' },
        { s: 'La vainilla _ orquídea aromática originaria de Mesoamérica _ es apreciada en la gastronomía global.', c: 'Comas explicativas ( , ... , )', dis: ['Dos puntos ( : ... : )', 'Punto y coma ( ; ... ; )', "Comillas simples ( ' ... ' )"], exp: 'Inciso botánico explicativo entre comas.' },
        { s: 'Alfonso Reyes _ polígrafo y diplomático regiomontano _ cultivó la prosa con elegancia insuperable.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Punto y coma ( ; ... ; )'], exp: 'Aposición del escritor regiomontano.' },
        { s: 'La mariposa monarca _ incansable viajera de Norteamérica _ arriba puntualmente cada otoño a los santuarios.', c: 'Comas explicativas ( , ... , )', dis: ['Dos puntos ( : ... : )', 'Punto y coma ( ; ... ; )', 'Signos de exclamación ( ¡ ... ! )'], exp: 'Aposición metafórica aislada con comas.' },
        { s: 'El cacao _ semilla ceremonial de las culturas prehispánicas _ dio origen al chocolate moderno.', c: 'Comas explicativas ( , ... , )', dis: ['Puntos y coma ( ; ... ; )', 'Dos puntos ( : ... : )', 'Punto seguido ( . ... . )'], exp: 'Inciso histórico-cultural entre comas.' },
        { s: 'Manuel M. Ponce _ compositor pionero del nacionalismo musical mexicano _ compuso obras universales.', c: 'Comas explicativas ( , ... , )', dis: ['Dos puntos ( : ... : )', 'Punto y coma ( ; ... ; )', 'Signos de interrogación ( ¿ ... ? )'], exp: 'Aposición descriptiva del compositor musical.' },
      ][v];
      const opts = formatOptions(`${data.c} para ${data.s.split("_")[0].trim()}`, data.dis.map(d => `${d} para ${data.s.split("_")[0].trim()}`));
      return {
        id: 76,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `¿Qué signos de puntuación deben insertarse para aislar el inciso explicativo en la oración (prueba ${v + 1})?<br><br><i>"${data.s}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 77: {
      const data = [
        { s: 'El presupuesto asignado era sumamente limitado; ________, el comité logró organizar un congreso de calidad internacional.', c: 'no obstante', dis: ['por lo tanto', 'asimismo', 'en consecuencia'], exp: '"No obstante" introduce una objeción que no impide el cumplimiento del resultado positivo.' },
        { s: 'Las condiciones climáticas eran severamente adversas; ________, los alpinistas alcanzaron la cima con éxito.', c: 'sin embargo', dis: ['por ende', 'asimismo', 'por consiguiente'], exp: '"Sin embargo" es el nexo adversativo por excelencia que expresa oposición entre clima y logro.' },
        { s: 'El equipo visitante estuvo en desventaja la mayor parte del partido; ________, consiguieron remontar en los minutos finales.', c: 'a pesar de ello', dis: ['por lo tanto', 'de igual manera', 'en consecuencia'], exp: '"A pesar de ello" expresa el contraste adversativo frente a la dificultad.' },
        { s: 'El vehículo tenía más de diez años de uso continuo; ________, su motor funcionaba con suavidad y sin fallas mecánicas.', c: 'no obstante', dis: ['por consiguiente', 'asimismo', 'por ende'], exp: '"No obstante" manifiesta la oposición entre la antigüedad y el buen estado.' },
        { s: 'La novela recibió críticas divididas en su lanzamiento; ________, se convirtió en un éxito rotundo de ventas en librerías.', c: 'empero', dis: ['por tanto', 'en consecuencia', 'así pues'], exp: '"Empero" es un conector adversativo formal de fuerte valor opositor.' },
        { s: 'El camino hacia la cumbre era empinado y pedregoso; ________, la expedición no aminoró el paso durante la marcha.', c: 'sin embargo', dis: ['por ende', 'por consiguiente', 'en consecuencia'], exp: '"Sin embargo" marca el contraste entre el terreno difícil y la firmeza.' },
        { s: 'Muchos dudaban de la viabilidad económica del proyecto; ________, los emprendedores demostraron su rentabilidad en el primer trimestre.', c: 'a pesar de ello', dis: ['por lo tanto', 'asimismo', 'por ende'], exp: '"A pesar de ello" introduce el logro que refuta las dudas previas.' },
        { s: 'El concierto se celebró bajo una lluvia intermitente; ________, el público permaneció entusiasmado hasta la última canción.', c: 'no obstante', dis: ['por consiguiente', 'en consecuencia', 'por lo tanto'], exp: '"No obstante" denota que la lluvia no mermó el ánimo del público.' },
        { s: 'El estudiante enfrentó complicaciones personales durante el ciclo; ________, concluyó con el promedio más alto de la generación.', c: 'sin embargo', dis: ['por ende', 'por consiguiente', 'asimismo'], exp: '"Sin embargo" contrapone la adversidad con el triunfo académico.' },
        { s: 'La sala de exposiciones era pequeña y modesta; ________, las obras de arte exhibidas poseían un valor incalculable.', c: 'empero', dis: ['por lo tanto', 'en consecuencia', 'por consiguiente'], exp: '"Empero" articula la oposición entre la sencillez del recinto y el valor de las obras.' },
        { s: 'El tiempo de preparación para el debate fue de apenas dos días; ________, los oradores defendieron su postura con argumentos impecables.', c: 'no obstante', dis: ['por ende', 'asimismo', 'en consecuencia'], exp: '"No obstante" subraya que la brevedad de tiempo no impidió la excelencia.' },
        { s: 'El mar presentaba un oleaje fuerte y resaca profunda; ________, los pescadores lograron arribar a puerto con las redes intactas.', c: 'sin embargo', dis: ['por consiguiente', 'por lo tanto', 'de tal manera'], exp: '"Sin embargo" señala la superación del peligro marítimo.' },
        { s: 'La tecnología requería una curva de aprendizaje compleja; ________, el personal de oficina dominó el software en pocas semanas.', c: 'a pesar de ello', dis: ['por ende', 'en consecuencia', 'por tanto'], exp: '"A pesar de ello" expresa el contraste entre dificultad y dominio rápido.' },
        { s: 'La primera versión del manuscrito fue rechazada por tres editoriales; ________, la cuarta editorial reconoció su genialidad y la publicó.', c: 'no obstante', dis: ['por lo tanto', 'asimismo', 'por consiguiente'], exp: '"No obstante" introduce el giro favorable tras los rechazos.' },
        { s: 'El viento soplaba en contra con ráfagas heladas; ________, las aves migratorias mantuvieron su formación de vuelo en V.', c: 'sin embargo', dis: ['por ende', 'por consiguiente', 'en consecuencia'], exp: '"Sin embargo" refleja la resistencia de las aves frente a la ventisca.' },
        { s: 'El telescopio era un instrumento modesto para aficionados; ________, permitió descubrir un nuevo asteroide en el cinturón.', c: 'empero', dis: ['por lo tanto', 'asimismo', 'por ende'], exp: '"Empero" resalta el gran descubrimiento logrado con un equipo modesto.' },
        { s: 'El plazo de entrega vencía al mediodía; ________, el equipo de arquitectos entregó la maqueta terminada una hora antes.', c: 'a pesar de la prisa', dis: ['por ende', 'por lo tanto', 'en consecuencia'], exp: 'Conector que subraya la entrega puntual frente a la premura.' },
        { s: 'Las probabilidades matemáticas de éxito eran inferiores al diez por ciento; ________, el cirujano completó la intervención sin complicaciones.', c: 'no obstante', dis: ['por consiguiente', 'por tanto', 'asimismo'], exp: '"No obstante" contrapone el bajo pronóstico con el éxito quirúrgico.' },
        { s: 'El actor principal enfermó horas antes de la función de estreno; ________, el suplente memorizó el papel y brindó una actuación memorable.', c: 'sin embargo', dis: ['por ende', 'en consecuencia', 'por lo tanto'], exp: '"Sin embargo" enlaza el contratiempo con la brillante resolución del suplente.' },
        { s: 'La región sufrió una sequía histórica durante todo el estío; ________, los agricultores que usaron riego por goteo salvaron la cosecha.', c: 'no obstante', dis: ['por consiguiente', 'por ende', 'asimismo'], exp: '"No obstante" contrasta la sequía con la salvación del cultivo gracias a la técnica.' },
      ][v];
      const opts = formatOptions(`${data.c} (reactivo ${v + 1})`, data.dis.map(d => `${d} (reactivo ${v + 1})`));
      return {
        id: 77,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `Seleccione el conector que expresa una <b>RELACIÓN ADVERSATIVA O DE OPOSICIÓN</b> en la siguiente oración (prueba ${v + 1}):<br><br><i>"${data.s}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 78: {
      const data = [
        { s: 'Los resultados fueron <u>catastróficos</u> para la empresa', w: 'catastróficos', good: 'altamente desfavorables', bad: ['horribles y feos', 'una verdadera pesadilla', 'muy espantosos'], exp: '"Altamente desfavorables" mantiene un registro formal, profesional y desprovisto de exageración emocional.' },
        { s: 'El director pronunció un discurso <u>padre</u> en la ceremonia', w: 'padre', good: 'sumamente elocuente y motivador', bad: ['muy chido y chulo', 'de pelos de verdad', 'súper buena onda'], exp: '"Sumamente elocuente" sustituye el coloquialismo juvenil por un término formal.' },
        { s: 'El examen de admisión estuvo <u>perro</u> de resolver', w: 'perro', good: 'de elevado grado de complejidad', bad: ['manchado de difícil', 'bien cañón y pesado', 'salvaje y destructor'], exp: '"De elevado grado de complejidad" es la formulación técnica objetiva.' },
        { s: 'Los alumnos armaron un <u>relajo</u> en el pasillo', w: 'relajo', good: 'un desorden sonoro considerable', bad: ['un desmadre total', 'un zafarrancho bien chistoso', 'un barullo rebueno'], exp: '"Un desorden sonoro considerable" es el registro académico pertinente.' },
        { s: 'El ponente habló de puras <u>tarugadas</u> durante la sesión', w: 'tarugadas', good: 'afirmaciones carentes de sustento', bad: ['tonterías bien feas', 'puras babosadas', 'sandeces que dan risa'], exp: '"Afirmaciones carentes de sustento" conserva el rigor profesional.' },
        { s: 'El informe contiene datos <u>chafas</u> sin verificar', w: 'chafas', good: 'imprecisos o de dudosa procedencia', bad: ['bien piratas y gachos', 'corrientes de a tiro', 'de mala muerte'], exp: '"Imprecisos o de dudosa procedencia" elimina el coloquialismo "chafas".' },
        { s: 'El proyecto costó una <u>lanota</u> al presupuesto', w: 'lanota', good: 'una suma financiera considerable', bad: ['un dineral de locos', 'un billete bien gordo', 'mucha pasta bárbara'], exp: '"Una suma financiera considerable" es el término económico formal.' },
        { s: 'La reunión se puso <u>tensa de a madres</u> al final', w: 'tensa de a madres', good: 'en un clima de marcada hostilidad', bad: ['bien brava y caliente', 'pesadísima que daba miedo', 'súper tensa de miedo'], exp: '"En un clima de marcada hostilidad" formaliza el enunciado.' },
        { s: 'El nuevo software funciona con <u>madres</u> en la red', w: 'con madres', good: 'con óptima eficiencia operativa', bad: ['a todo dar y volando', 'bien padre y rápido', 'súper fregonamente'], exp: '"Con óptima eficiencia operativa" sustituye la expresión vulgar.' },
        { s: 'El candidato dijo cosas <u>chidas</u> para ganar votos', w: 'chidas', good: 'propuestas persuasivas y atractivas', bad: ['promesas bien suaves', 'palabras de oro y plata', 'cosas bien bonitas'], exp: '"Propuestas persuasivas y atractivas" formaliza la expresión.' },
        { s: 'El médico le recetó un remedio <u>milagroso</u> que lo alivió', w: 'milagroso', good: 'un fármaco de alta eficacia terapéutica', bad: ['una pócima bien bruja', 'un chocho bien poderoso', 'una medicina con poderes'], exp: '"De alta eficacia terapéutica" es la terminología médica formal.' },
        { s: 'La comida del banquete estuvo <u>deliciosa con ganas</u>', w: 'deliciosa con ganas', good: 'de excelente calidad gastronómica', bad: ['para chuparse los dedos', 'bien rica que te mueres', 'sabrosísima de locura'], exp: '"De excelente calidad gastronómica" mantiene la formalidad.' },
        { s: 'El edificio quedó <u>bien chueco</u> tras el sismo', w: 'bien chueco', good: 'con inclinación estructural visible', bad: ['todo ladeado y feo', 'bien torcido que da miedo', 'como torre inclinada'], exp: '"Con inclinación estructural visible" es el término pericial adecuado.' },
        { s: 'Los empleados andan <u>bien jetones</u> por el trabajo', w: 'bien jetones', good: 'mostrando evidente descontento laboral', bad: ['haciendo carotas feas', 'con trompa parada', 'enojadísimos de coraje'], exp: '"Mostrando evidente descontento laboral" formaliza la queja.' },
        { s: 'El debate se convirtió en un <u>pleito de comadres</u>', w: 'pleito de comadres', good: 'una confrontación verbal desordenada', bad: ['una bola de chismes', 'un mitote callejero', 'gritos de lavadero'], exp: '"Una confrontación verbal desordenada" sustituye el dicho popular.' },
        { s: 'El sospechoso se puso <u>bien nervioso y cantó todo</u>', w: 'cantó todo', good: 'confesó su participación en los hechos', bad: ['soltó la sopa entera', 'escupió la verdad de sopetón', 'habló hasta por los codos'], exp: '"Confesó su participación en los hechos" es el registro penal formal.' },
        { s: 'El automóvil quedó <u>hecho pedazos</u> en el choque', w: 'hecho pedazos', good: 'con pérdida total por daños mayores', bad: ['vuelto chatarra fea', 'destrozado que da lástima', 'hecho trizas totales'], exp: '"Con pérdida total por daños mayores" es el término formal de peritaje.' },
        { s: 'El conferencista se aventó un <u>rollo mareador</u> de dos horas', w: 'rollo mareador', good: 'una exposición excesivamente prolija', bad: ['una plática que daba sueño', 'una chorcha aburrida', 'pura palabrería hueca'], exp: '"Una exposición excesivamente prolija" califica con rigor formal.' },
        { s: 'La fiesta de aniversario estuvo <u>súper fresa</u>', w: 'súper fresa', good: 'caracterizada por un ambiente formal y refinado', bad: ['bien fifí de ricos', 'de mucha alcurnia y pisto', 'muy elegante de postín'], exp: '"Un ambiente formal y refinado" elimina la jerga coloquial.' },
        { s: 'El nuevo empleado resultó ser un <u>fregón</u> para las ventas', w: 'fregón', good: 'un profesional con alto rendimiento comercial', bad: ['un mero mero de negocios', 'un as que no perdona', 'un chingón vendiendo'], exp: '"Un profesional con alto rendimiento comercial" es el término laboral formal.' },
      ][v];
      const opts = formatOptions(data.good, data.bad);
      return {
        id: 78,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `En la oración: <i>"${data.s}"</i> (prueba ${v + 1}), seleccione la opción que sustituye la expresión subrayada en un tono <b>FORMAL Y OBJETIVO</b>:`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 79: {
      const data = [
        { orig: 'El testigo subió para arriba al estrado para rendir su declaración.', badW: 'subió para arriba', good: 'El testigo subió al estrado para rendir su declaración formal.', exp: '"Subir para arriba" es un pleonasmo innecesario, pues el verbo subir ya implica movimiento ascendente.' },
        { orig: 'Los rescatistas descendieron para abajo por la grieta del glaciar.', badW: 'descendieron para abajo', good: 'Los rescatistas descendieron por la grieta del glaciar.', exp: '"Descender para abajo" es redundante; descender ya expresa bajar.' },
        { orig: 'El profesor solicitó un lapso de tiempo breve para revisar los exámenes.', badW: 'lapso de tiempo', good: 'El profesor solicitó un lapso breve para revisar los exámenes.', exp: 'Un lapso ya denota por definición un periodo de tiempo.' },
        { orig: 'En el hospital le hicieron una autopsia a un cadáver fallecido ayer.', badW: 'cadáver fallecido', good: 'En el hospital le practicaron la autopsia correspondiente al cuerpo.', exp: 'Todo cadáver por definición ya ha fallecido.' },
        { orig: 'El gerente pidió salir para afuera del edificio durante el simulacro.', badW: 'salir para afuera', good: 'El gerente pidió salir del edificio durante el simulacro.', exp: '"Salir para afuera" es un pleonasmo; salir denota ya ir al exterior.' },
        { orig: 'Los arqueólogos encontraron un fósil antiguo muy viejo en la cueva.', badW: 'antiguo muy viejo', good: 'Los arqueólogos hallaron un fósil bien preservado en la cueva.', exp: 'Un fósil por su naturaleza es antiguo; duplicarlo con "muy viejo" es redundancia viciosa.' },
        { orig: 'El director decidió volver a repetir la indicación a todo el grupo.', badW: 'volver a repetir', good: 'El director decidió repetir la indicación a todo el grupo.', exp: '"Volver a repetir" es redundancia viciosa de reiteración.' },
        { orig: 'El comité organizador confirmó un hecho real sucedido en la mañana.', badW: 'hecho real', good: 'El comité organizador confirmó un suceso ocurrido por la mañana.', exp: 'Un hecho por definición es real; decir hecho real es redundante.' },
        { orig: 'Los jóvenes caminaron al parque con un amigo personal de la escuela.', badW: 'amigo personal', good: 'Los jóvenes caminaron al parque acompañados de un amigo escolar.', exp: 'La amistad es una relación intrínsecamente personal.' },
        { orig: 'El conductor tuvo que meterse para adentro del garaje por la lluvia.', badW: 'meterse para adentro', good: 'El conductor tuvo que ingresar al garaje debido a la lluvia.', exp: '"Meterse para adentro" es redundancia elemental.' },
        { orig: 'El científico demostró la hipótesis con una prueba fehaciente verdadera.', badW: 'prueba fehaciente verdadera', good: 'El científico demostró la hipótesis con una prueba fehaciente.', exp: 'Fehaciente ya significa que da testimonio de la verdad de algo.' },
        { orig: 'Los médicos lograron una cura definitiva para siempre de la enfermedad.', badW: 'definitiva para siempre', good: 'Los médicos lograron la cura definitiva de la enfermedad.', exp: '"Definitivo" ya implica para siempre.' },
        { orig: 'El conferencista resumió brevemente en un resumen corto sus conclusiones.', badW: 'resumió brevemente en un resumen corto', good: 'El conferencista resumió con concisión sus conclusiones finales.', exp: 'Triple redundancia entre resumir, brevemente y resumen corto.' },
        { orig: 'Los alumnos volvieron a reiniciar la computadora tras la falla.', badW: 'volvieron a reiniciar', good: 'Los alumnos reiniciaron la computadora tras el fallo del sistema.', exp: '"Volver a reiniciar" duplica el prefijo re- de reiteración.' },
        { orig: 'El arquitecto trazó una línea recta derecha sobre el plano maestro.', badW: 'recta derecha', good: 'El arquitecto trazó una línea recta sobre el plano maestro.', exp: 'Toda recta es derecha; añadir derecha es pleonasmo.' },
        { orig: 'La empresa presentó un pronóstico futuro para las ventas del año.', badW: 'pronóstico futuro', good: 'La empresa presentó el pronóstico de ventas del próximo ejercicio.', exp: 'Todo pronóstico alude por definición al futuro.' },
        { orig: 'Los jueces deliberaron en privado a solas en la sala de juntas.', badW: 'en privado a solas', good: 'Los jueces deliberaron en privado dentro de la sala de juntas.', exp: 'En privado y a solas expresan la misma circunstancia de aislamiento.' },
        { orig: 'El historiador documentó el pasado histórico de la ciudad colonial.', badW: 'pasado histórico', good: 'El historiador documentó la historia de la ciudad colonial.', exp: 'La historia se refiere necesariamente al pasado.' },
        { orig: 'El paciente experimentó una hemorragia de sangre en la nariz.', badW: 'hemorragia de sangre', good: 'El paciente sufrió una hemorragia nasal que fue controlada.', exp: 'Toda hemorragia es flujo de sangre.' },
        { orig: 'El comité celebró una reunión conjunta entre todos los miembros.', badW: 'conjunta entre todos', good: 'El comité celebró una reunión plenaria con sus integrantes.', exp: '"Conjunta entre todos" es redundancia de reunión.' },
      ][v];
      const opts = formatOptions(data.orig, [
        data.good,
        'La redacción formal de documentos oficiales exige precisión léxica y concisión.',
        'Los pleonasmos deben evitarse en la redacción formal de exámenes de admisión.',
      ]);
      return {
        id: 79,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `Identifique la opción que presenta <b>REDUNDANCIA O PLEONASMO INNECESARIO</b> (prueba ${v + 1}):`,
        ...opts,
        explanation: data.exp,
      };
    }

    case 80: {
      const data = [
        { p: '(1) El club de ciencias inició una campaña de reforestación en el patio trasero. (2) Se plantaron quince árboles nativos de bajo consumo de agua. (3) El precio de los teléfonos inteligentes aumentó en las tiendas departamentales. (4) Los estudiantes organizaron turnos semanales para el riego y cuidado de los plantíos.', out: 'La oración 3', exp: 'La oración 3 introduce un dato sobre comercio de teléfonos completamente ajeno al proyecto de reforestación escolar.' },
        { p: '(1) El equipo de robótica diseñó un prototipo para clasificar materiales reciclables. (2) El dispositivo emplea sensores ópticos y un brazo mecánico controlado por código. (3) El campeonato de patinaje artístico se celebrará en una pista de hielo europea. (4) Las pruebas iniciales alcanzaron una efectividad del noventa y dos por ciento en la separación de plásticos.', out: 'La oración 3', exp: 'La oración 3 introduce un campeonato de patinaje, rompiendo la coherencia de la robótica de reciclaje.' },
        { p: '(1) Los alumnos de tercer grado montaron una exposición sobre la Revolución mexicana. (2) Elaboraron maquetas de batallas históricas y recopilaron fotografías de época. (3) Las líneas aéreas internacionales actualizaron sus políticas de equipaje de mano. (4) La muestra incluyó periódicos auténticos impresos durante la década revolucionaria.', out: 'La oración 3', exp: 'La oración 3 menciona políticas de aerolíneas en medio de un proyecto escolar sobre historia revolucionaria.' },
        { p: '(1) El taller de periodismo escolar lanzó su primer número impreso del semestre. (2) Incluyó reportajes sobre la vida estudiantil y entrevistas a docentes destacados. (3) El costo de las materias primas siderúrgicas aumentó en la bolsa de metales. (4) La tirada de mil ejemplares se distribuyó gratuitamente durante el receso matutino.', out: 'La oración 3', exp: 'La oración 3 refiere precios siderúrgicos, ajena al periódico escolar.' },
        { p: '(1) La brigada ecológica instaló un sistema de compostaje en el huerto escolar. (2) Los desechos orgánicos de la cafetería se mezclaron con hojarasca seca. (3) La cotización del barril de petróleo crudo cerró a la baja en los mercados financieros. (4) En dos meses se obtuvo abono fértil para nutrir las hortalizas del plantel.', out: 'La oración 3', exp: 'La oración 3 introduce cotizaciones petroleras en un proyecto de composta escolar.' },
        { p: '(1) El grupo de teatro preparó la escenificación de una tragedia griega clásica. (2) Los estudiantes ensayaron los parlamentos del coro y confeccionaron máscaras de yeso. (3) La compañía de telefonía móvil anunció nuevos paquetes de datos ilimitados. (4) El estreno en el auditorio municipal congregó a más de trescientos espectadores.', out: 'La oración 3', exp: 'La oración 3 habla de planes telefónicos en un proyecto de teatro clásico.' },
        { p: '(1) La academia de matemáticas organizó un torneo relámpago de resolución de acertijos. (2) Participaron ochenta estudiantes divididos en parejas de diferentes grados. (3) El precio del kilogramo de manzana importada subió en las fruterías del mercado. (4) Los finalistas demostraron habilidades lógicas avanzadas al descifrar el enigma final.', out: 'La oración 3', exp: 'La oración 3 introduce el precio de frutas en un torneo de matemáticas.' },
        { p: '(1) El club de astronomía organizó una noche de observación estelar en el campo deportivo. (2) Se instalaron tres telescopios refractores apuntando a los anillos de Saturno. (3) El boleto del transporte colectivo metro incrementó su tarifa de fin de semana. (4) Docenas de familias contemplaron con asombro los cráteres lunares durante la velada.', out: 'La oración 3', exp: 'La oración 3 refiere tarifas de metro en una noche de astronomía.' },
        { p: '(1) Los estudiantes de artes plásticas pintaron un mural colectivo en el patio central. (2) La composición representó la diversidad cultural y las tradiciones de la región. (3) La cartelera de cines comerciales estrenó dos películas de superhéroes taquilleras. (4) Se utilizaron pinturas acrílicas resistentes a la intemperie para garantizar su durabilidad.', out: 'La oración 3', exp: 'La oración 3 refiere estrenos de cine comercial en un mural artístico escolar.' },
        { p: '(1) El comité de salud escolar coordinó una jornada de higiene bucal para la primaria. (2) Odontólogos voluntarios enseñaron técnicas de cepillado y donaron pasta dental. (3) Las acciones de las empresas de comercio digital cayeron en la bolsa de valores. (4) Más de doscientos niños aprendieron la importancia de prevenir las caries dentales.', out: 'La oración 3', exp: 'La oración 3 introduce el mercado accionario en una campaña de higiene bucal infantil.' },
        { p: '(1) El taller de oratoria organizó un debate sobre el uso ético de las redes sociales. (2) Los participantes defendieron posturas a favor y en contra con rigor argumentativo. (3) El restaurante de comida rápida abrió una nueva sucursal en el centro comercial. (4) El jurado evaluó la elocuencia, el manejo del tiempo y la solidez de las evidencias expuestas.', out: 'La oración 3', exp: 'La oración 3 menciona un restaurante de comida rápida en un debate de oratoria.' },
        { p: '(1) La sociedad de alumnos promovió una colecta de juguetes para un albergue infantil. (2) Se establecieron centros de acopio en las tres entradas principales del plantel. (3) La cotización del dólar frente a las divisas europeas mostró volatilidad en bancos. (4) Cientos de estudiantes donaron peluches, juegos de mesa y balones en buen estado.', out: 'La oración 3', exp: 'La oración 3 refiere cotizaciones de divisas en una colecta infantil benéfica.' },
        { p: '(1) El club de ajedrez implementó clases vespertinas para estudiantes principiantes. (2) Se enseñaron las reglas básicas de movimiento, aperturas clásicas y jaques mates. (3) El festival de música rock anunció las bandas invitadas para el verano. (4) Al cabo de un mes, los nuevos jugadores disputaron sus primeras partidas simultáneas.', out: 'La oración 3', exp: 'La oración 3 menciona un festival de rock en un proyecto de club de ajedrez.' },
        { p: '(1) El equipo de atletismo escolar acondicionó la pista de tierra para los entrenamientos. (2) Se retiraron piedras, se niveló el suelo y se marcaron los carriles con cal blanca. (3) Las tiendas departamentales iniciaron su temporada de baratas de invierno. (4) La pista renovada permitió cronometrar las pruebas de velocidad con mayor seguridad.', out: 'La oración 3', exp: 'La oración 3 menciona baratas de tiendas en un proyecto de pista de atletismo.' },
        { p: '(1) El comité de ecología instaló contenedores diferenciados para pilas y baterías usadas. (2) Se colocaron recipientes de plástico sellados en las oficinas y laboratorios. (3) La aerolínea de bajo costo inauguró una nueva ruta hacia playas del sur. (4) El material tóxico recolectado fue entregado a una empresa especializada en reciclaje seguro.', out: 'La oración 3', exp: 'La oración 3 habla de rutas de aerolíneas en un proyecto de acopio de baterías.' },
        { p: '(1) El taller de lectura juvenil organizó un maratón de cuentos de terror en la biblioteca. (2) Los participantes leyeron relatos de autores hispanoamericanos bajo la luz de velas. (3) La ensambladora de automóviles automotrices suspendió labores por mantenimiento. (4) La actividad estimuló el interés de los jóvenes por explorar nuevos géneros narrativos.', out: 'La oración 3', exp: 'La oración 3 habla de una planta automotriz en un maratón de cuentos en la biblioteca.' },
        { p: '(1) Los alumnos de biología crearon un herbario digital con plantas medicinales locales. (2) Fotografiaron cada espécimen, registraron su nombre científico y usos tradicionales. (3) El torneo de tenis profesional coronó a un nuevo campeón de individuales. (4) El catálogo interactivo fue publicado en la página web del colegio para consulta abierta.', out: 'La oración 3', exp: 'La oración 3 refiere tenis profesional en un proyecto escolar de herbario botánico.' },
        { p: '(1) La brigada de protección civil escolar realizó un simulacro de evacuación por sismo. (2) Se activaron las alarmas sonoras y los brigadistas guiaron el desalojo ordenado. (3) La agencia espacial lanzó un satélite meteorológico de órbita polar. (4) El edificio completo quedó desalojado en dos minutos y quince segundos sin contratiempos.', out: 'La oración 3', exp: 'La oración 3 menciona el lanzamiento de un satélite espacial en un simulacro escolar.' },
        { p: '(1) El club de química experimental elaboró jabones artesanales con aceite de cocina usado. (2) Se filtró el aceite residual y se mezcló con hidróxido de sodio en recipientes de vidrio. (3) El equipo de baloncesto profesional contrató a un nuevo jugador extranjero. (4) Los jabones saponificados fueron empacados en papel reciclado para su uso en los lavabos.', out: 'La oración 3', exp: 'La oración 3 menciona fichajes de baloncesto en un taller de química de saponificación.' },
        { p: '(1) El taller de fotografía documental montó una galería con retratos de oficios antiguos. (2) Se expusieron imágenes en blanco y negro de zapateros, alfareros y carpinteros locales. (3) La cadena de supermercados inauguró un autoservicio en las afueras de la urbe. (4) La exposición rindió homenaje a la memoria laboral y las tradiciones de la comunidad.', out: 'La oración 3', exp: 'La oración 3 habla de un supermercado comercial en una galería de fotografía documental.' },
      ][v];
      const parts80 = data.p.split(/(d)s*/).filter(Boolean);
      const opts = formatOptions(`La oración 3: ${parts80[2].slice(0, 45)}...`, [
        `La oración 1: ${parts80[0].slice(0, 45)}...`,
        `La oración 2: ${parts80[1].slice(0, 45)}...`,
        `La oración 4: ${parts80[3].slice(0, 45)}...`,
      ]);
      return {
        id: 80,
        section: 'espanol',
        sectionTitle: 'Parte 2 - Lengua Española',
        category: 'Taller de redacción',
        questionText: `Lea el texto e identifique la opción que guarda <b>MENOS COHERENCIA</b> con el objetivo del proyecto escolar (prueba ${v + 1}):<br><br><i>"${data.p}"</i>`,
        ...opts,
        explanation: data.exp,
      };
    }

    default:
      throw new Error(`Slot no válido para Español: ${slotIndex}`);
  }
}
