import type { Workout } from "../types";
import { WorkoutHeader } from "./WorkoutHeader";
import { WarmupCard } from "./WarmupCard";
import { ExerciseList } from "./ExerciseList";
import { WorkoutActions } from "./WorkoutActions";
import styles from "./WorkoutCard.module.css";

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
    <div className={styles.card} style={{ "--accent": workout.color } as React.CSSProperties}>
      <WorkoutHeader
        label={workout.label}
        focus={workout.focus}
        totalFeito={totalFeito}
        total={workout.exercicios.length}
      />
      <WarmupCard aquecimento={workout.aquecimento} />
      <ExerciseList
        exercicios={workout.exercicios}
        isFeitoHoje={isFeitoHoje}
        getCargaHoje={getCargaHoje}
        getLastCarga={getLastCarga}
        onToggle={onToggle}
        onCargaChange={onCargaChange}
      />
      <WorkoutActions
        allDone={allDone}
        totalFeito={totalFeito}
        onMarkAll={onMarkAll}
        onClear={onClear}
      />
    </div>
  );
}
