import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

// Instanciar GoogleGenAI
const ai = new GoogleGenAI();

// Endpoint para generar reactivos con IA siguiendo exactamente la taxonomía PIENSE II
app.post('/api/ai-generate-questions', async (req, res) => {
  try {
    const { slotRange, currentQuestions } = req.body;

    const prompt = `Eres un diseñador experto de exámenes de admisión del College Board (Prueba PIENSE II).
Tu tarea es generar variantes nuevas y rigurosas de reactivos para los siguientes slots oficiales, respetando ESTRICTAMENTE el concepto, orden y formato.
No cambies el orden ni el concepto de cada número de reactivo.

Slots a generar (rango ${slotRange || '7 a 118'}):
${JSON.stringify(currentQuestions?.slice(0, 5) || [])}

Genera un arreglo JSON válido con reactivos que tengan la estructura:
[
  {
    "id": número (ej 7),
    "section": "cognoscitiva" | "espanol" | "matematicas",
    "sectionTitle": string,
    "category": string,
    "questionText": string,
    "options": [{"key": "a", "text": string}, {"key": "b", "text": string}, {"key": "c", "text": string}, {"key": "d", "text": string}],
    "correctAnswer": "a" | "b" | "c" | "d",
    "explanation": string (justificación paso a paso en español idéntica al feedback oficial de PrepaTec)
  }
]
Devuelve ÚNICAMENTE el bloque JSON sin explicaciones markdown fuera de JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '[]';
    const parsed = JSON.parse(text);
    return res.json({ success: true, questions: parsed });
  } catch (error: any) {
    console.error('Error generating with Gemini:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// Middleware Vite en modo desarrollo
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor PIENSE II corriendo en http://localhost:${port}`);
  });
}

startServer();
