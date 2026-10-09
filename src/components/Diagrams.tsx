import React from 'react';
import { DiagramType } from '../types';

interface DiagramProps {
  type: DiagramType;
  data?: any;
  highlightKey?: string | number;
}

export const DiagramViewer: React.FC<DiagramProps> = ({ type, data, highlightKey }) => {
  return (
    <div className="my-6 flex flex-col items-center justify-center p-6 bg-white border-2 border-black rounded-3xl shadow-none text-black overflow-hidden">
      {type === 'venn' && <VennDiagram data={data} highlightKey={highlightKey} />}
      {type === 'matrix' && <MatrixDiagram data={data} />}
      {type === 'cartesian' && <CartesianDiagram data={data} />}
      {type === 'similar_triangles' && <SimilarTrianglesDiagram data={data} />}
      {type === 'triangle_angles' && <TriangleAnglesDiagram data={data} />}
      {type === 'supplementary_angles' && <SupplementaryAnglesDiagram data={data} />}
      {type === 'circle_angles' && <CircleAnglesDiagram data={data} />}
      {type === 'dartboard' && <DartboardDiagram data={data} />}
      {type === 'bar_chart' && <BarChartDiagram data={data} />}
      {type === 'number_line' && <NumberLineDiagram data={data} />}
      {type === 'perimeter_shape' && <PerimeterShapeDiagram data={data} />}
      {type === 'table' && <TableDiagram data={data} />}
    </div>
  );
};

// 1. DIAGRAMA DE VENN (3 CÍRCULOS CON 7 SECTORES - ESPACIO AMPLIO SIN COLISIONES)
const VennDiagram: React.FC<{ data?: any; highlightKey?: string | number }> = ({ data, highlightKey }) => {
  const labelA = data?.labelA || 'Acción (A)';
  const labelB = data?.labelB || 'Comedias (B)';
  const labelC = data?.labelC || 'Musicales (C)';

  return (
    <div className="flex flex-col items-center w-full max-w-lg">
      <svg
        viewBox="0 0 540 480"
        className="w-full h-auto stroke-black fill-none select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Círculo A (Izquierda) */}
        <circle cx="210" cy="195" r="115" strokeWidth="2.5" className="stroke-black" />
        {/* Círculo B (Derecha) */}
        <circle cx="330" cy="195" r="115" strokeWidth="2.5" className="stroke-black" />
        {/* Círculo C (Inferior) */}
        <circle cx="270" cy="290" r="115" strokeWidth="2.5" className="stroke-black" />

        {/* Etiquetas Exteriores despejadas de los círculos */}
        <rect x="30" y="25" width="160" height="28" rx="8" className="fill-white stroke-black stroke-1" />
        <text x="110" y="44" textAnchor="middle" className="text-xs font-bold fill-black stroke-none font-sans">
          {labelA}
        </text>

        <rect x="350" y="25" width="160" height="28" rx="8" className="fill-white stroke-black stroke-1" />
        <text x="430" y="44" textAnchor="middle" className="text-xs font-bold fill-black stroke-none font-sans">
          {labelB}
        </text>

        <rect x="190" y="435" width="160" height="28" rx="8" className="fill-white stroke-black stroke-1" />
        <text x="270" y="454" textAnchor="middle" className="text-xs font-bold fill-black stroke-none font-sans">
          {labelC}
        </text>

        {/* Sectores 1 a 7 con círculos protectores en blanco */}
        {/* Sector 1: Sólo A */}
        <g transform="translate(155, 190)">
          <circle cx="0" cy="0" r="15" className="fill-white stroke-black stroke-1" />
          <text x="0" y="5" textAnchor="middle" className="text-sm font-bold stroke-none fill-black">1</text>
        </g>

        {/* Sector 2: A ∩ B (arriba) */}
        <g transform="translate(270, 145)">
          <circle cx="0" cy="0" r="15" className="fill-white stroke-black stroke-1" />
          <text x="0" y="5" textAnchor="middle" className="text-sm font-bold stroke-none fill-black">2</text>
        </g>

        {/* Sector 3: Sólo B */}
        <g transform="translate(385, 190)">
          <circle cx="0" cy="0" r="15" className="fill-white stroke-black stroke-1" />
          <text x="0" y="5" textAnchor="middle" className="text-sm font-bold stroke-none fill-black">3</text>
        </g>

        {/* Sector 4: A ∩ C */}
        <g transform="translate(205, 275)">
          <circle cx="0" cy="0" r="15" className="fill-white stroke-black stroke-1" />
          <text x="0" y="5" textAnchor="middle" className="text-sm font-bold stroke-none fill-black">4</text>
        </g>

        {/* Sector 5: Intersección Central (A ∩ B ∩ C) */}
        <g transform="translate(270, 230)">
          <circle cx="0" cy="0" r="15" className="fill-white stroke-black stroke-1" />
          <text x="0" y="5" textAnchor="middle" className="text-sm font-bold stroke-none fill-black">5</text>
        </g>

        {/* Sector 6: B ∩ C */}
        <g transform="translate(335, 275)">
          <circle cx="0" cy="0" r="15" className="fill-white stroke-black stroke-1" />
          <text x="0" y="5" textAnchor="middle" className="text-sm font-bold stroke-none fill-black">6</text>
        </g>

        {/* Sector 7: Sólo C */}
        <g transform="translate(270, 360)">
          <circle cx="0" cy="0" r="15" className="fill-white stroke-black stroke-1" />
          <text x="0" y="5" textAnchor="middle" className="text-sm font-bold stroke-none fill-black">7</text>
        </g>
      </svg>
      <p className="text-xs text-zinc-600 font-mono mt-2">Diagrama de Venn con siete regiones numeradas claramente disjuntas</p>
    </div>
  );
};

// 2. MATRIZ / CUADRO NUMÉRICO
const MatrixDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const rows: (string | number)[][] = data?.rows || [
    [3, 6, 9],
    [2, '□', '□'],
    [5, 10, 15],
  ];

  return (
    <div className="inline-block p-6 border-2 border-black bg-white rounded-3xl">
      <div className="grid gap-3 text-center font-mono font-bold text-base text-black">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="flex items-center justify-center gap-6">
            {row.map((val, cIdx) => (
              <span
                key={cIdx}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl text-base ${
                  val === '□'
                    ? 'border-2 border-dashed border-black bg-zinc-100 text-black font-black'
                    : 'border border-zinc-400 bg-zinc-50'
                }`}
              >
                {val}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. PLANO CARTESIANO CON INTERSECCIÓN DE RECTAS SIN COLISIONES DE ETIQUETAS
const CartesianDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const pX = data?.intersectionX ?? 2;
  const pY = data?.intersectionY ?? 3;
  const originX = 180;
  const originY = 180;
  const scale = 26;

  const targetX = originX + pX * scale;
  const targetY = originY - pY * scale;

  // Evitar que la etiqueta de la coordenada choque con bordes
  const labelOffsetX = targetX > 250 ? -66 : 10;
  const labelOffsetY = targetY < 60 ? 12 : -26;

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <svg viewBox="0 0 360 360" className="w-full h-auto stroke-black fill-none select-none">
        {/* Cuadrícula suave */}
        {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map((u) => {
          const gx = originX + u * scale;
          const gy = originY - u * scale;
          return (
            <g key={u} className="stroke-zinc-200 stroke-[1]">
              <line x1={gx} y1="20" x2={gx} y2="340" strokeDasharray="2,2" />
              <line x1="20" y1={gy} x2="340" y2={gy} strokeDasharray="2,2" />
            </g>
          );
        })}

        {/* Ejes principales */}
        <line x1="20" y1={originY} x2="340" y2={originY} strokeWidth="2.5" />
        <line x1={originX} y1="340" x2={originX} y2="20" strokeWidth="2.5" />

        {/* Flechas de ejes */}
        <polygon points="340,176 350,180 340,184" className="fill-black stroke-none" />
        <polygon points="176,20 180,10 184,20" className="fill-black stroke-none" />

        {/* Marcas de unidades */}
        {[-4, -2, 2, 4].map((u) => {
          const gx = originX + u * scale;
          const gy = originY - u * scale;
          return (
            <g key={u} className="stroke-black stroke-[1.5]">
              <line x1={gx} y1={originY - 4} x2={gx} y2={originY + 4} />
              <line x1={originX - 4} y1={gy} x2={originX + 4} y2={gy} />
              <text x={gx} y={originY + 18} textAnchor="middle" className="text-[11px] font-mono fill-black stroke-none font-bold">
                {u}
              </text>
              <text x={originX - 10} y={gy + 4} textAnchor="end" className="text-[11px] font-mono fill-black stroke-none font-bold">
                {u}
              </text>
            </g>
          );
        })}

        {/* Nombres de los ejes */}
        <text x="352" y={originY + 4} className="text-sm font-bold fill-black stroke-none font-sans">x</text>
        <text x={originX - 6} y="15" className="text-sm font-bold fill-black stroke-none font-sans">y</text>

        {/* Recta a (sólida) */}
        <line
          x1="45"
          y1={targetY + (targetX - 45) * 0.7}
          x2="315"
          y2={targetY - (315 - targetX) * 0.7}
          strokeWidth="2.5"
        />
        <rect x="320" y={targetY - (315 - targetX) * 0.7 - 10} width="18" height="18" rx="4" className="fill-white stroke-black stroke-1" />
        <text x="329" y={targetY - (315 - targetX) * 0.7 + 3} textAnchor="middle" className="text-xs font-bold fill-black stroke-none font-mono">
          a
        </text>

        {/* Recta b (discontinua) */}
        <line
          x1="55"
          y1={targetY - (targetX - 55) * 0.65}
          x2="305"
          y2={targetY + (305 - targetX) * 0.65}
          strokeWidth="2.5"
          strokeDasharray="6,4"
        />
        <rect x="310" y={targetY + (305 - targetX) * 0.65 - 10} width="18" height="18" rx="4" className="fill-white stroke-black stroke-1" />
        <text x="319" y={targetY + (305 - targetX) * 0.65 + 3} textAnchor="middle" className="text-xs font-bold fill-black stroke-none font-mono">
          b
        </text>

        {/* Punto de intersección con etiqueta redondeada sin salirse del marco */}
        <circle cx={targetX} cy={targetY} r="5" className="fill-black stroke-white stroke-2" />
        <rect
          x={targetX + labelOffsetX}
          y={targetY + labelOffsetY}
          width="56"
          height="22"
          rx="6"
          className="fill-white stroke-black stroke-1"
        />
        <text
          x={targetX + labelOffsetX + 28}
          y={targetY + labelOffsetY + 15}
          textAnchor="middle"
          className="text-[11px] font-mono font-bold fill-black stroke-none"
        >
          ({pX}, {pY})
        </text>
      </svg>
      <span className="text-xs font-mono text-zinc-600 mt-2">Punto de intersección ({pX}, {pY}) de las rectas a y b</span>
    </div>
  );
};

// 4. TRIÁNGULOS SEMEJANTES (BAC y FDE) - TOTALMENTE SEPARADOS Y DESPEJADOS
const SimilarTrianglesDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const ab = data?.ab ?? 12;
  const ac = data?.ac ?? 9;
  const fd = data?.fd ?? 4;

  return (
    <div className="flex flex-col items-center w-full max-w-lg">
      <svg viewBox="0 0 520 230" className="w-full h-auto stroke-black fill-none select-none">
        {/* Triángulo BAC (Grande a la izquierda) */}
        <polygon points="50,175 210,175 210,50" strokeWidth="2.5" />
        {/* Símbolo de ángulo recto en A */}
        <rect x="194" y="159" width="16" height="16" strokeWidth="1.5" />
        
        {/* Vértices con margen */}
        <text x="32" y="195" className="text-sm font-bold fill-black stroke-none font-serif">B</text>
        <text x="218" y="195" className="text-sm font-bold fill-black stroke-none font-serif">A</text>
        <text x="218" y="48" className="text-sm font-bold fill-black stroke-none font-serif">C</text>

        {/* Cotas con etiquetas blancas redondeadas */}
        <rect x="95" y="185" width="70" height="22" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="130" y="200" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">
          AB = {ab}
        </text>

        <rect x="235" y="102" width="70" height="22" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="270" y="117" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">
          AC = {ac}
        </text>

        {/* Triángulo FDE (Pequeño a la derecha, bien separado) */}
        <polygon points="340,175 430,175 430,105" strokeWidth="2.5" />
        <rect x="418" y="163" width="12" height="12" strokeWidth="1.5" />

        {/* Vértices */}
        <text x="322" y="195" className="text-sm font-bold fill-black stroke-none font-serif">F</text>
        <text x="438" y="195" className="text-sm font-bold fill-black stroke-none font-serif">D</text>
        <text x="438" y="100" className="text-sm font-bold fill-black stroke-none font-serif">E</text>

        {/* Cotas */}
        <rect x="355" y="185" width="60" height="22" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="385" y="200" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">
          FD = {fd}
        </text>

        <rect x="455" y="130" width="55" height="22" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="482" y="145" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">
          DE = ?
        </text>
      </svg>
      <span className="text-xs font-mono text-zinc-600 mt-2">Triángulo BAC ~ Triángulo FDE (Triángulos semejantes por escala)</span>
    </div>
  );
};

// 5. ÁNGULOS EN UN TRIÁNGULO (a, b, c) - ETIQUETAS EXTERIORES SIN COLISIÓN
const TriangleAnglesDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const angleAExpr = data?.angleAExpr || 'a = 3b - 10';
  const angleBExpr = data?.angleBExpr || 'b';
  const angleCExpr = data?.angleCExpr || 'c = 70°';

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <svg viewBox="0 0 440 230" className="w-full h-auto stroke-black fill-none select-none">
        <polygon points="80,170 360,170 220,55" strokeWidth="2.5" />
        
        {/* Arcos de ángulo limpios */}
        <path d="M 115,170 A 35 35 0 0 0 100,145" strokeWidth="1.8" />
        <path d="M 325,170 A 35 35 0 0 1 340,145" strokeWidth="1.8" />
        <path d="M 208,72 A 30 30 0 0 0 232,72" strokeWidth="1.8" />

        {/* Etiquetas en cajas redondeadas fuera del trazo de los lados */}
        {/* Ángulo A (inferior izquierda) */}
        <rect x="15" y="175" width="95" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="62" y="191" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{angleAExpr}</text>

        {/* Ángulo B (inferior derecha) */}
        <rect x="345" y="175" width="45" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="367" y="191" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{angleBExpr}</text>

        {/* Ángulo C (arriba del vértice C) */}
        <rect x="180" y="15" width="80" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="220" y="31" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{angleCExpr}</text>
      </svg>
      <span className="text-xs font-mono text-zinc-600 mt-1">Suma de ángulos interiores: a + b + c = 180°</span>
    </div>
  );
};

// 6. ÁNGULOS SUPLEMENTARIOS
const SupplementaryAnglesDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const leftLabel = data?.leftLabel || 'x';
  const rightLabel = data?.rightLabel || '2x - 30°';

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <svg viewBox="0 0 380 190" className="w-full h-auto stroke-black fill-none select-none">
        <line x1="30" y1="140" x2="350" y2="140" strokeWidth="2.5" />
        <line x1="190" y1="140" x2="265" y2="45" strokeWidth="2.5" />

        <path d="M 145,140 A 45 45 0 0 1 210,105" strokeWidth="1.8" />
        <path d="M 215,102 A 45 45 0 0 1 235,140" strokeWidth="1.8" />

        <rect x="105" y="75" width="45" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="127" y="91" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{leftLabel}</text>

        <rect x="250" y="75" width="80" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="290" y="91" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{rightLabel}</text>
      </svg>
      <span className="text-xs font-mono text-zinc-600 mt-1">Ángulos suplementarios adyacentes sobre una recta (suman 180°)</span>
    </div>
  );
};

// 7. ÁNGULOS EN LA CIRCUNFERENCIA (ÁNGULO CENTRAL E INSCRITO)
const CircleAnglesDiagram: React.FC<{ data?: any }> = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <svg viewBox="0 0 360 310" className="w-full h-auto stroke-black fill-none select-none">
        <circle cx="180" cy="155" r="115" strokeWidth="2.5" />
        
        {/* Centro O */}
        <circle cx="180" cy="155" r="4" className="fill-black stroke-none" />
        <text x="186" y="150" className="text-sm font-bold fill-black stroke-none font-sans">O</text>

        {/* Radios formando Ángulo Central (∠2) */}
        <line x1="180" y1="155" x2="275" y2="95" strokeWidth="2.2" />
        <line x1="180" y1="155" x2="275" y2="215" strokeWidth="2.2" />
        <path d="M 218,135 A 42 42 0 0 1 218,175" strokeWidth="1.8" />
        
        <rect x="230" y="143" width="32" height="22" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="246" y="158" textAnchor="middle" className="text-xs font-bold fill-black stroke-none font-mono">∠2</text>

        {/* Cuerdas formando Ángulo Inscrito (∠1) */}
        <line x1="65" y1="155" x2="275" y2="95" strokeWidth="1.8" strokeDasharray="4,2" />
        <line x1="65" y1="155" x2="275" y2="215" strokeWidth="1.8" strokeDasharray="4,2" />
        <path d="M 98,143 A 32 32 0 0 1 98,167" strokeWidth="1.8" />
        
        <rect x="108" y="143" width="32" height="22" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="124" y="158" textAnchor="middle" className="text-xs font-bold fill-black stroke-none font-mono">∠1</text>
      </svg>
      <span className="text-xs font-mono text-zinc-600 mt-1">∠2 es ángulo central (vértice en el centro O); ∠1 es ángulo inscrito</span>
    </div>
  );
};

// 8. TABLERO DE DARDOS
const DartboardDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const totalSectors = data?.totalSectors || 12;
  const sectors = Array.from({ length: totalSectors }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      <svg viewBox="0 0 320 320" className="w-full h-auto stroke-black fill-none select-none">
        <circle cx="160" cy="160" r="135" strokeWidth="2.5" />
        <circle cx="160" cy="160" r="85" strokeWidth="1.8" />
        <circle cx="160" cy="160" r="28" strokeWidth="2" className="fill-black" />

        {sectors.map((num, idx) => {
          const angle = (idx * 360) / totalSectors;
          const rad = (angle * Math.PI) / 180;
          const x2 = 160 + 135 * Math.cos(rad);
          const y2 = 160 + 135 * Math.sin(rad);

          const midAngle = ((idx + 0.5) * 360) / totalSectors;
          const midRad = (midAngle * Math.PI) / 180;
          const tx = 160 + 110 * Math.cos(midRad);
          const ty = 160 + 110 * Math.sin(midRad);

          return (
            <g key={idx}>
              <line x1="160" y1="160" x2={x2} y2={y2} strokeWidth="1.5" />
              <circle cx={tx} cy={ty} r="12" className="fill-white stroke-black stroke-1" />
              <text
                x={tx}
                y={ty + 4}
                textAnchor="middle"
                className="text-xs font-bold fill-black stroke-none font-mono"
              >
                {num}
              </text>
            </g>
          );
        })}
      </svg>
      <span className="text-xs font-mono text-zinc-600 mt-2">Tablero circular dividido en {totalSectors} sectores numerados de igual área</span>
    </div>
  );
};

// 9. GRÁFICA DE BARRAS / HISTOGRAMA DE FRECUENCIAS
const BarChartDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const items: { label: string; value: number }[] = data?.items || [
    { label: '0 visitas', value: 3 },
    { label: '1 visita', value: 5 },
    { label: '2 visitas', value: 8 },
    { label: '3 visitas', value: 4 },
    { label: '4 visitas', value: 2 },
  ];
  const yLabel = data?.yLabel || 'Frecuencia';
  const xLabel = data?.xLabel || 'Visitas al cine en el mes';
  const maxValue = 10;

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <svg viewBox="0 0 460 260" className="w-full h-auto stroke-black fill-none select-none">
        {/* Ejes */}
        <line x1="60" y1="190" x2="430" y2="190" strokeWidth="2.5" />
        <line x1="60" y1="25" x2="60" y2="190" strokeWidth="2.5" />

        {/* Marcas de escala Y */}
        {[0, 2, 4, 6, 8, 10].map((tick) => {
          const y = 190 - (tick / maxValue) * 150;
          return (
            <g key={tick} className="stroke-zinc-200">
              <line x1="60" y1={y} x2="430" y2={y} strokeDasharray="2,2" />
              <text x="50" y={y + 4} textAnchor="end" className="text-[11px] font-mono fill-black stroke-none font-bold">
                {tick}
              </text>
            </g>
          );
        })}

        {/* Barras */}
        {items.map((it, idx) => {
          const barWidth = 44;
          const x = 90 + idx * 68;
          const barHeight = (it.value / maxValue) * 150;
          const y = 190 - barHeight;

          return (
            <g key={idx}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="6"
                className="fill-black stroke-black stroke-2"
              />
              <text
                x={x + barWidth / 2}
                y="212"
                textAnchor="middle"
                className="text-[11px] font-sans font-bold fill-black stroke-none"
              >
                {it.label}
              </text>
              <rect x={x + barWidth / 2 - 14} y={y - 22} width="28" height="18" rx="4" className="fill-white stroke-black stroke-1" />
              <text
                x={x + barWidth / 2}
                y={y - 9}
                textAnchor="middle"
                className="text-[11px] font-mono font-bold fill-black stroke-none"
              >
                {it.value}
              </text>
            </g>
          );
        })}

        <text x="250" y="245" textAnchor="middle" className="text-xs font-sans font-bold fill-black stroke-none">
          {xLabel}
        </text>
        <text
          x="18"
          y="110"
          transform="rotate(-90 18 110)"
          textAnchor="middle"
          className="text-xs font-sans font-bold fill-black stroke-none"
        >
          {yLabel}
        </text>
      </svg>
    </div>
  );
};

// 10. RECTA NUMÉRICA CON PASOS CONSTANTES
const NumberLineDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const points: { label: string; pos: number }[] = data?.points || [
    { label: '0', pos: 0 },
    { label: 'A', pos: 3 },
    { label: '', pos: 6 },
    { label: 'D', pos: 9 },
    { label: '12', pos: 12 },
  ];
  const step = data?.step || 3;

  return (
    <div className="flex flex-col items-center py-2 w-full max-w-md">
      <svg viewBox="0 0 420 100" className="w-full h-auto stroke-black fill-none select-none">
        <line x1="30" y1="50" x2="390" y2="50" strokeWidth="2.5" />
        <polygon points="30,45 18,50 30,55" className="fill-black stroke-none" />
        <polygon points="390,45 402,50 390,55" className="fill-black stroke-none" />

        {points.map((pt, idx) => {
          const x = 55 + idx * 78;
          return (
            <g key={idx}>
              <line x1={x} y1="38" x2={x} y2="62" strokeWidth="2.5" />
              {pt.label && (
                <g>
                  <circle cx={x} cy="76" r="13" className="fill-white stroke-black stroke-1" />
                  <text x={x} y="80" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">
                    {pt.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      <span className="text-xs font-mono text-zinc-600 mt-2">
        Cada división representa un incremento constante de {step} unidades
      </span>
    </div>
  );
};

// 11. POLÍGONO CON EXPRESIONES ALGEBRAICAS DE PERÍMETRO
const PerimeterShapeDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const top = data?.top || 'x + 6';
  const bottom = data?.bottom || 'x + 6';
  const left = data?.left || 'x + 7';
  const right = data?.right || 'x + 7';

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <svg viewBox="0 0 340 210" className="w-full h-auto stroke-black fill-none select-none">
        <rect x="70" y="48" width="200" height="110" rx="10" strokeWidth="2.5" />
        
        {/* Cota Superior */}
        <rect x="135" y="16" width="70" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="170" y="32" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{top}</text>

        {/* Cota Inferior */}
        <rect x="135" y="168" width="70" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="170" y="184" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{bottom}</text>

        {/* Cota Izquierda */}
        <rect x="15" y="91" width="48" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="39" y="107" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{left}</text>

        {/* Cota Derecha */}
        <rect x="277" y="91" width="48" height="24" rx="6" className="fill-white stroke-black stroke-1" />
        <text x="301" y="107" textAnchor="middle" className="text-xs font-mono font-bold fill-black stroke-none">{right}</text>
      </svg>
    </div>
  );
};

// 12. TABLA ACADÉMICA EN BLANCO Y NEGRO
const TableDiagram: React.FC<{ data?: any }> = ({ data }) => {
  const headers: string[] = data?.headers || ['Grado escolar', 'Total de Alumnos', 'Porcentaje con Internet'];
  const rows: (string | number)[][] = data?.rows || [
    ['1° de Secundaria', 95, '50%'],
    ['2° de Secundaria', 100, '55%'],
    ['3° de Secundaria', 90, '60%'],
  ];

  return (
    <div className="overflow-x-auto w-full max-w-[460px] rounded-3xl border-2 border-black overflow-hidden my-3">
      <table className="w-full text-left border-collapse text-xs font-mono">
        <thead>
          <tr className="border-b-2 border-black bg-zinc-100">
            {headers.map((h, i) => (
              <th key={i} className="p-3 border-r border-black font-bold text-black last:border-r-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b border-black last:border-b-0">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 border-r border-black text-black last:border-r-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
