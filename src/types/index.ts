export type DiaSemana = {
  dia: string;
  treino: string | null;
  ativo: boolean;
};

export type Aquecimento = {
  exercicio: string;
  tempo: string;
  intensidade: string;
};

export type Exercicio = {
  id: string;
  nome: string;
  series: string;
  descanso: string;
  obs: string;
};

export type Workout = {
  label: string;
  focus: string;
  color: string;
  aquecimento: Aquecimento;
  exercicios: Exercicio[];
};

export type Profile = {
  nome: string;
  emoji: string;
  descricao: string;
  accentBg: string;
  semana: DiaSemana[];
  workouts: Record<string, Workout>;
};

export type ProfileKey = "eu" | "esposa";

export type ExerciseData = {
  cargas: Record<string, string>;
  feito: Record<string, boolean>;
};

export type AppData = Record<string, ExerciseData>;
