export type SectionId = 'cognoscitiva' | 'espanol' | 'matematicas';

export interface QuestionOption {
  key: 'a' | 'b' | 'c' | 'd';
  text: string;
}

export type DiagramType =
  | 'venn'
  | 'matrix'
  | 'cartesian'
  | 'similar_triangles'
  | 'triangle_angles'
  | 'circle_angles'
  | 'dartboard'
  | 'bar_chart'
  | 'number_line'
  | 'table'
  | 'perimeter_shape'
  | 'supplementary_angles';

export interface PassageContext {
  title?: string;
  source?: string;
  text: string;
}

export interface Question {
  id: number;
  section: SectionId;
  sectionTitle: string;
  category: string;
  instructions?: string;
  passage?: PassageContext;
  questionText: string;
  diagramType?: DiagramType;
  diagramData?: any;
  options: QuestionOption[];
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation: string;
}

export type ExamMode = 'official' | 'guide';

export interface CandidateInfo {
  fullName: string;
  identifier: string;
  email: string;
  term: string;
  campus: string;
  program: string;
}

export interface ExamResults {
  examId?: number;
  examTitle?: string;
  isGuideMode?: boolean;
  passed: boolean;
  passingScore: number;
  totalQuestions: number;
  totalCorrect: number;
  scorePercentage: number;
  estimatedScaledScore: number; // 200 - 800 PIENSE scale
  timeSpentSeconds: number;
  sectionScores: {
    cognoscitiva: { correct: number; total: number; percentage: number };
    espanol: { correct: number; total: number; percentage: number };
    matematicas: { correct: number; total: number; percentage: number };
  };
  answers: Record<number, 'a' | 'b' | 'c' | 'd'>;
  questions: Question[];
  completedAt: string;
}
