import type { Workout } from "../types";
import { WorkoutHeader } from "./WorkoutHeader";
import { WarmupCard } from "./WarmupCard";
import { ExerciseList } from "./ExerciseList";
import { WorkoutActions } from "./WorkoutActions";

type Props = {
  workout: Workout;
  isFeitoHoje: (id: string) => boolean;
  getCargaHoje: (id: string) => string;
  getLastCarga: (id: string) => string | null;
  onToggle: (id: string) => void;
  onCargaChange: (id: string, val: string) => void;
  onMarkAll: () => void;
  onClear: () => void;
};

export function WorkoutCard({ workout, isFeitoHoje, getCargaHoje, getLastCarga, onToggle, onCargaChange, onMarkAll, onClear }: Props) {
  const totalFeito = workout.exercicios.filter(ex => isFeitoHoje(ex.id)).length;
  const allDone = totalFeito === workout.exercicios.length;

  return (
    <div style={{ background: "#1A1A1A", borderRadius: 16, overflow: "hidden", marginBottom: 16, border: "1px solid #242424" }}>
      <WorkoutHeader
        label={workout.label}
        focus={workout.focus}
        color={workout.color}
        totalFeito={totalFeito}
        total={workout.exercicios.length}
      />
      <WarmupCard aquecimento={workout.aquecimento} color={workout.color} />
      <ExerciseList
        exercicios={workout.exercicios}
        color={workout.color}
        isFeitoHoje={isFeitoHoje}
        getCargaHoje={getCargaHoje}
        getLastCarga={getLastCarga}
        onToggle={onToggle}
        onCargaChange={onCargaChange}
      />
      <WorkoutActions
        color={workout.color}
        allDone={allDone}
        totalFeito={totalFeito}
        onMarkAll={onMarkAll}
        onClear={onClear}
      />
    </div>
  );
}
