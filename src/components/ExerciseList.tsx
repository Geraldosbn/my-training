import type { Exercicio } from "../types";
import { ExerciseItem } from "./ExerciseItem";
import styles from "./ExerciseList.module.css";

type Props = {
  exercicios: Exercicio[];
  isFeitoHoje: (id: string) => boolean;
  getCargaHoje: (id: string) => string;
  getLastCarga: (id: string) => string | null;
  onToggle: (id: string) => void;
  onCargaChange: (id: string, val: string) => void;
};

export function ExerciseList({ exercicios, isFeitoHoje, getCargaHoje, getLastCarga, onToggle, onCargaChange }: Props) {
  return (
    <div>
      <div className={styles.sectionTitle}>💪 Musculação</div>
      {exercicios.map((ex, i) => (
        <ExerciseItem
          key={ex.id}
          exercicio={ex}
          index={i}
          feito={isFeitoHoje(ex.id)}
          carga={getCargaHoje(ex.id)}
          ultimaCarga={getLastCarga(ex.id)}
          onToggle={() => onToggle(ex.id)}
          onCargaChange={(val) => onCargaChange(ex.id, val)}
        />
      ))}
    </div>
  );
}
