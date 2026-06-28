import type { DiaSemana, Workout } from "../types";

type Props = {
  semana: DiaSemana[];
  workouts: Record<string, Workout>;
  selected: string;
  isFeitoHoje: (id: string) => boolean;
  onSelect: (treino: string) => void;
};

export function WeekDayBar({ semana, workouts, selected, isFeitoHoje, onSelect }: Props) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
      {semana.map((d) => {
        const isSel = d.ativo && d.treino === selected;
        const isDone = d.ativo && d.treino && workouts[d.treino]?.exercicios.every(ex => isFeitoHoje(ex.id));
        const col = d.ativo && d.treino ? workouts[d.treino].color : null;
        return (
          <div
            key={d.dia}
            onClick={() => { if (d.ativo && d.treino) onSelect(d.treino); }}
            style={{
              flex: 1, borderRadius: 10, padding: "10px 4px", textAlign: "center",
              cursor: d.ativo ? "pointer" : "default",
              background: isSel ? col ?? undefined : d.ativo ? "#1C1C1C" : "#131313",
              border: isSel ? "none" : d.ativo ? "1px solid #2A2A2A" : "1px solid transparent",
              transition: "all 0.15s",
            }}
          >
            <div style={{ fontSize: 10, color: d.ativo ? (isSel ? "#fff" : "#888") : "#2E2E2E", fontWeight: 700, letterSpacing: 1 }}>{d.dia}</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: isSel ? "#fff" : "#666", marginTop: 4 }}>
              {d.ativo ? (isDone ? "✓" : d.treino) : "—"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
