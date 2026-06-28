import type { Exercicio } from "../types";

type Props = {
  exercicio: Exercicio;
  index: number;
  isLast: boolean;
  color: string;
  feito: boolean;
  carga: string;
  ultimaCarga: string | null;
  onToggle: () => void;
  onCargaChange: (val: string) => void;
};

export function ExerciseItem({ exercicio, index, isLast, color, feito, carga, ultimaCarga, onToggle, onCargaChange }: Props) {
  return (
    <div style={{
      padding: "14px 20px",
      borderBottom: !isLast ? "1px solid #1E1E1E" : "none",
      background: feito ? "rgba(255,255,255,0.015)" : "transparent",
      transition: "background 0.25s",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <button onClick={onToggle} style={{
          minWidth: 30, height: 30, borderRadius: "50%",
          background: feito ? color : "transparent",
          border: feito ? "none" : `2px solid ${color}66`,
          color: feito ? "#fff" : color,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", fontSize: feito ? 15 : 13, fontWeight: 800,
          marginTop: 1, flexShrink: 0, transition: "all 0.18s",
        }}>
          {feito ? "✓" : index + 1}
        </button>
        <div style={{ flex: 1, opacity: feito ? 0.55 : 1, transition: "opacity 0.2s" }}>
          <div style={{ fontWeight: 700, fontSize: 14, textDecoration: feito ? "line-through" : "none", color: feito ? "#777" : "#F0F0F0" }}>
            {exercicio.nome}
          </div>
          <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{exercicio.obs}</div>
          <div style={{ display: "flex", gap: 6, marginTop: 7, flexWrap: "wrap" }}>
            <span style={{ background: "#252525", borderRadius: 6, padding: "3px 9px", fontSize: 12, fontWeight: 700, color: "#ccc" }}>{exercicio.series}</span>
            <span style={{ background: "#252525", borderRadius: 6, padding: "3px 9px", fontSize: 12, color: "#666" }}>⏱ {exercicio.descanso}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10, marginLeft: 42 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "#252525", borderRadius: 10, padding: "8px 12px",
            border: `1.5px solid ${feito ? color + "88" : carga ? color + "44" : "#2E2E2E"}`,
            flex: 1, maxWidth: 200, transition: "border-color 0.2s",
          }}>
            <span style={{ fontSize: 15 }}>🏋️</span>
            <input
              type="text"
              value={carga}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCargaChange(e.target.value)}
              placeholder="Carga de hoje..."
              style={{ background: "transparent", border: "none", outline: "none", color: "#F0F0F0", fontSize: 13, width: "100%", fontFamily: "inherit" }}
            />
          </div>
          {ultimaCarga && (
            <div style={{ fontSize: 11, color: "#444", whiteSpace: "nowrap" }}>
              ant: <span style={{ color: "#666", fontWeight: 600 }}>{ultimaCarga}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
