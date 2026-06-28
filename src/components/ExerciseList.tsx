import type { Exercicio } from "../types";
import { ExerciseItem } from "./ExerciseItem";

type Props = {
  exercicios: Exercicio[];
  color: string;
  isFeitoHoje: (id: string) => boolean;
  getCargaHoje: (id: string) => string;
  getLastCarga: (id: string) => string | null;
  onToggle: (id: string) => void;
  onCargaChange: (id: string, val: string) => void;
};

export function ExerciseList({ exercicios, color, isFeitoHoje, getCargaHoje, getLastCarga, onToggle, onCargaChange }: Props) {
  return (
    <div>
      <div style={{ padding: "12px 20px 4px", fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>💪 Musculação</div>
      {exercicios.map((ex, i) => (
        <ExerciseItem
          key={ex.id}
          exercicio={ex}
          index={i}
          isLast={i === exercicios.length - 1}
          color={color}
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
