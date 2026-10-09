import jsPDF from 'jspdf';
import { ExamResults, CandidateInfo, SectionId } from '../types';

function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?(b|strong|u|em|i|p|div|span)[^>]*>/gi, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function generateAndDownloadExamPDF(
  results: ExamResults,
  candidate: CandidateInfo
): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  const footerMargin = 12;
  const bottomLimit = pageHeight - footerMargin;
  let y = margin;

  const displayName = candidate.fullName.trim() || 'Aspirante';
  const displayCampus = candidate.campus.trim() || 'PrepaTec';

  const renderHeader = () => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 100, 100);
    doc.text('PruebaT · Simulador Oficial PIENSE II (2027) · Reporte de Examen', margin, y);
    doc.text(`${displayName} · ${displayCampus}`, pageWidth - margin, y, { align: 'right' });
    y += 2.5;
    doc.setDrawColor(210, 210, 210);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5.5;
  };

  const addPageWithHeader = () => {
    doc.addPage();
    y = margin;
    renderHeader();
  };

  const ensureSpace = (neededMm: number) => {
    if (y + neededMm > bottomLimit) {
      addPageWithHeader();
    }
  };

  // ==========================================================================
  // PÁGINA 1: PORTADA Y DIAGNÓSTICO INSTITUCIONAL
  // ==========================================================================
  renderHeader();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(17, 24, 39);
  doc.text('REPORTE OFICIAL DE RESULTADOS PIENSE II', margin, y);
  y += 5.5;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(75, 85, 99);
  doc.text('Evaluación de Admisión a Preparatoria · Modelo Oficial PrepaTec (College Board)', margin, y);
  y += 6.5;

  // Cuadro General de Diagnóstico
  doc.setLineWidth(0.4);
  doc.setDrawColor(30, 41, 59);
  doc.setFillColor(252, 252, 253);
  doc.roundedRect(margin, y, contentWidth, 43, 3, 3, 'FD');

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(17, 24, 39);
  doc.text('DATOS DEL ASPIRANTE', margin + 4, y + 6);
  doc.text('RESULTADO Y ESTADO DE ADMISIÓN', margin + contentWidth / 2 + 4, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(55, 65, 81);
  doc.text(`Aspirante: ${displayName}`, margin + 4, y + 12);
  doc.text(`Folio: ${candidate.identifier.trim() || 'No asignado'}`, margin + 4, y + 17);
  doc.text(`Correo: ${candidate.email.trim() || 'No asignado'}`, margin + 4, y + 22);
  doc.text(`Campus deseado: ${displayCampus}`, margin + 4, y + 27);
  doc.text(`Programa: ${candidate.program.trim() || 'Bachillerato General'}`, margin + 4, y + 32);

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isPassed = results.estimatedScaledScore >= 600;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(17, 24, 39);
  doc.text(`${results.estimatedScaledScore} / 800 PTS`, margin + contentWidth / 2 + 4, y + 13.5);

  doc.setFontSize(8.5);
  if (isPassed) {
    doc.setTextColor(16, 120, 50);
    doc.text('ESTADO: APROBADO (CUMPLE PUNTAJE CORTE)', margin + contentWidth / 2 + 4, y + 19);
  } else {
    doc.setTextColor(185, 28, 28);
    doc.text('ESTADO: NO APROBADO (REQUIERE REFORZAMIENTO)', margin + contentWidth / 2 + 4, y + 19);
  }

  doc.setTextColor(55, 65, 81);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(
    `Aciertos totales: ${results.totalCorrect} de ${results.totalQuestions} (${results.scorePercentage}%)`,
    margin + contentWidth / 2 + 4,
    y + 25
  );
  doc.text(`Tiempo empleado: ${formatTime(results.timeSpentSeconds)}`, margin + contentWidth / 2 + 4, y + 30);
  doc.text(
    `Fecha de aplicación: ${new Date(results.completedAt).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })}`,
    margin + contentWidth / 2 + 4,
    y + 35
  );

  y += 49;

  // Desglose por Áreas
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(17, 24, 39);
  doc.text('DESGLOSE OFICIAL POR ÁREA EVALUADA:', margin, y);
  y += 5;

  const secCogn = results.sectionScores.cognoscitiva;
  const secEsp = results.sectionScores.espanol;
  const secMat = results.sectionScores.matematicas;

  const sectionsData = [
    {
      name: '1. Habilidad Cognoscitiva (Reactivos 1 al 43)',
      score: `${secCogn.correct}/${secCogn.total} (${secCogn.percentage}%)`,
      desc: 'Series numéricas, analogías, lógica deductiva, diagramas de Venn y silogismos.',
    },
    {
      name: '2. Lengua Española - Español (Reactivos 44 al 80)',
      score: `${secEsp.correct}/${secEsp.total} (${secEsp.percentage}%)`,
      desc: 'Ortografía, concordancia, lectura literaria y expositiva, y taller de redacción.',
    },
    {
      name: '3. Matemáticas (Reactivos 81 al 114)',
      score: `${secMat.correct}/${secMat.total} (${secMat.percentage}%)`,
      desc: 'Aritmética, fracciones, álgebra, geometría, áreas, probabilidad y estadística.',
    },
  ];

  sectionsData.forEach((s) => {
    doc.setLineWidth(0.2);
    doc.setDrawColor(203, 213, 225);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin, y, contentWidth, 9.5, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(s.name, margin + 3.5, y + 4.5);
    doc.text(s.score, pageWidth - margin - 3.5, y + 4.5, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(s.desc, margin + 3.5, y + 8);

    y += 11.5;
  });

  y += 4;
  doc.setLineWidth(0.4);
  doc.setDrawColor(30, 41, 59);
  doc.line(margin, y, pageWidth - margin, y);
  y += 7;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('HOJA COMPLETA DE REACTIVOS (1 AL 114) Y JUSTIFICACIÓN PEDAGÓGICA', margin, y);
  y += 7;

  // ==========================================================================
  // LISTA COMPLETA DE REACTIVOS (DEL 1 AL 114) ORDENADOS Y SIN AMONTONAR
  // ==========================================================================
  const sortedQuestions = [...results.questions].sort((a, b) => a.id - b.id);
  let lastSection: SectionId | null = null;
  let lastPassageTitle: string | null = null;

  sortedQuestions.forEach((q) => {
    // 1. Encabezado de Sección si cambia
    if (q.section !== lastSection) {
      lastSection = q.section;
      ensureSpace(16);
      doc.setLineWidth(0.3);
      doc.setDrawColor(15, 23, 42);
      doc.setFillColor(235, 240, 248);
      doc.roundedRect(margin, y, contentWidth, 8.5, 2, 2, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      const secTitle =
        q.section === 'cognoscitiva'
          ? 'PARTE 1: HABILIDAD COGNOSCITIVA (Reactivos 1 al 43)'
          : q.section === 'espanol'
          ? 'PARTE 2: LENGUA ESPAÑOLA (Reactivos 44 al 80)'
          : 'PARTE 3: MATEMÁTICAS (Reactivos 81 al 114)';
      doc.text(secTitle, margin + 4, y + 5.8);
      y += 12;
    }

    // 2. Si hay texto de lectura nuevo, renderizarlo completo sin cortar
    if (q.passage && q.passage.text && q.passage.title !== lastPassageTitle) {
      lastPassageTitle = q.passage.title || 'Lectura';
      const cleanPassage = stripHtml(q.passage.text);
      const passageLines = doc.splitTextToSize(cleanPassage, contentWidth - 10);
      const lineHeightMm = 3.6;
      const pHeaderHeight = 9;
      const totalPassageHeight = pHeaderHeight + passageLines.length * lineHeightMm + 4;

      // Si el texto es largo, paginarlo ordenadamente
      if (y + totalPassageHeight > bottomLimit) {
        addPageWithHeader();
      }

      const passageStartY = y;
      doc.setLineWidth(0.25);
      doc.setDrawColor(148, 163, 184);
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(margin, passageStartY, contentWidth, totalPassageHeight, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`TEXTO DE LECTURA: ${q.passage.title || ''}`, margin + 4, passageStartY + 5.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(51, 65, 85);
      doc.text(passageLines, margin + 4, passageStartY + 9.5);
      y = passageStartY + totalPassageHeight + 5;
    }

    // 3. Preparación de contenidos del reactivo
    const userAnswer = results.answers[q.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = userAnswer === q.correctAnswer;
    const cleanQText = stripHtml(q.questionText);
    const cleanExplanation = stripHtml(q.explanation);

    const qLines = doc.splitTextToSize(cleanQText, contentWidth - 10);
    const expLines = doc.splitTextToSize(`Explicación oficial: ${cleanExplanation}`, contentWidth - 12);

    // Preparar opciones A, B, C, D
    const wrappedOptions = q.options.map((opt) => {
      const isSelected = userAnswer === opt.key;
      const isRightOpt = q.correctAnswer === opt.key;
      let badge = `(${opt.key.toUpperCase()})`;
      if (isSelected && isRightOpt) badge = `[✓ CORRECTA] (${opt.key.toUpperCase()})`;
      else if (isSelected && !isRightOpt) badge = `[✗ TU ELECCIÓN] (${opt.key.toUpperCase()})`;
      else if (isRightOpt) badge = `[★ CLAVE] (${opt.key.toUpperCase()})`;

      const cleanOptText = stripHtml(opt.text);
      const textToWrap = `${badge} ${cleanOptText}`;
      const lines = doc.splitTextToSize(textToWrap, contentWidth - 14);
      return { key: opt.key, lines, isSelected, isRightOpt };
    });

    // Medición exacta y cálculo de espaciado sin amontonamiento
    const qLinePitch = 3.8;
    const optLinePitch = 3.6;
    const expLinePitch = 3.4;

    const qTextHeight = qLines.length * qLinePitch;
    const optionsTotalHeight = wrappedOptions.reduce(
      (acc, opt) => acc + opt.lines.length * optLinePitch + 1.2,
      0
    );
    const expBoxHeight = expLines.length * expLinePitch + 5;
    const diagramNoticeHeight = q.diagramType ? 4.5 : 0;

    const headerHeight = 7.5;
    const cardPaddingTop = 3.5;
    const cardPaddingBottom = 4;
    const cardNeededHeight =
      headerHeight +
      cardPaddingTop +
      qTextHeight +
      2 +
      diagramNoticeHeight +
      optionsTotalHeight +
      3 +
      expBoxHeight +
      cardPaddingBottom;

    // Salto de página preventivo con margen seguro
    ensureSpace(cardNeededHeight);

    // Renderizar Tarjeta del Reactivo
    const cardStartY = y;
    doc.setLineWidth(0.3);
    doc.setDrawColor(203, 213, 225);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, cardStartY, contentWidth, cardNeededHeight, 2.5, 2.5, 'FD');

    // Barra superior del reactivo
    let curY = cardStartY + cardPaddingTop;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`Reactivo ${q.id} de 114 · ${q.category}`, margin + 4, curY + 3);

    // Estatus a la derecha
    doc.setFontSize(7.5);
    if (!isAnswered) {
      doc.setTextColor(148, 163, 184);
      doc.text('[SIN RESPONDER]', pageWidth - margin - 4, curY + 3, { align: 'right' });
    } else if (isCorrect) {
      doc.setTextColor(22, 101, 52);
      doc.text('[✓ CORRECTO · 1/1 PTS]', pageWidth - margin - 4, curY + 3, { align: 'right' });
    } else {
      doc.setTextColor(185, 28, 28);
      doc.text('[✗ INCORRECTO · 0/1 PTS]', pageWidth - margin - 4, curY + 3, { align: 'right' });
    }

    curY += headerHeight;

    // Enunciado de la pregunta
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(qLines, margin + 4, curY);
    curY += qTextHeight + 2;

    // Indicador si tenía diagrama
    if (q.diagramType) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      doc.text(`[Diagrama en pantalla: ${q.diagramType.replace('_', ' ').toUpperCase()}]`, margin + 4, curY);
      curY += diagramNoticeHeight;
    }

    // Opciones A, B, C, D
    wrappedOptions.forEach((opt) => {
      if (opt.isSelected && opt.isRightOpt) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(22, 101, 52);
      } else if (opt.isSelected && !opt.isRightOpt) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(185, 28, 28);
      } else if (opt.isRightOpt) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(15, 23, 42);
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
      }
      doc.setFontSize(7.5);
      doc.text(opt.lines, margin + 6, curY);
      curY += opt.lines.length * optLinePitch + 1.2;
    });

    curY += 1.5;

    // Cuadro de Justificación Pedagógica
    doc.setLineWidth(0.2);
    doc.setDrawColor(226, 232, 240);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin + 3, curY, contentWidth - 6, expBoxHeight, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(51, 65, 85);
    doc.text(expLines, margin + 5, curY + 3.5);

    // Separación limpia entre reactivos
    y = cardStartY + cardNeededHeight + 4.5;
  });

  // Pie de página oficial en todas las páginas
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Página ${i} de ${totalPages} · D.R.© Simulador Oficial PIENSE II PrepaTec · Reactivos 1 al 114`,
      pageWidth / 2,
      pageHeight - 6,
      { align: 'center' }
    );
  }

  // Guardar archivo con nombre descriptivo
  const safeName = (candidate.fullName.trim() || 'Aspirante').replace(/\s+/g, '_');
  doc.save(`PIENSE_II_Examen_Oficial_${safeName}_${results.estimatedScaledScore}pts.pdf`);
}
