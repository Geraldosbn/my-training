import type { DiaSemana, Workout } from "../types";
import styles from "./WeekDayBar.module.css";

type Props = {
  semana: DiaSemana[];
  workouts: Record<string, Workout>;
  selected: string;
  isFeitoHoje: (id: string) => boolean;
  onSelect: (treino: string) => void;
};

export function WeekDayBar({ semana, workouts, selected, isFeitoHoje, onSelect }: Props) {
  return (
    <div className={styles.container}>
      {semana.map((d) => {
        const isSel = d.ativo && d.treino === selected;
        const isDone = d.ativo && d.treino && workouts[d.treino]?.exercicios.every(ex => isFeitoHoje(ex.id));
        const col = d.ativo && d.treino ? workouts[d.treino].color : undefined;

        const dayClass = [
          styles.day,
          d.ativo && !isSel ? styles.dayActive : "",
          isSel ? styles.daySelected : "",
        ].join(" ");

        return (
          <div
            key={d.dia}
            onClick={() => { if (d.ativo && d.treino) onSelect(d.treino); }}
            className={dayClass}
            style={isSel ? { "--day-color": col } as React.CSSProperties : undefined}
          >
            <div className={[styles.dayLabel, d.ativo ? (isSel ? styles.dayLabelSelected : styles.dayLabelActive) : ""].join(" ")}>
              {d.dia}
            </div>
            <div className={[styles.dayValue, isSel ? styles.dayValueSelected : ""].join(" ")}>
              {d.ativo ? (isDone ? "✓" : d.treino) : "—"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
