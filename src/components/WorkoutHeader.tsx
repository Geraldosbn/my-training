type Props = {
  label: string;
  focus: string;
  color: string;
  totalFeito: number;
  total: number;
};

export function WorkoutHeader({ label, focus, color, totalFeito, total }: Props) {
  const pct = (totalFeito / total) * 100;
  return (
    <div style={{ background: color, padding: "16px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.8, textTransform: "uppercase" }}>{label}</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 2 }}>{focus}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>~40</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>minutos</div>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontSize: 11, opacity: 0.85 }}>Progresso hoje</span>
          <span style={{ fontSize: 11, fontWeight: 800 }}>{totalFeito}/{total} exercícios</span>
        </div>
        <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 99, height: 7 }}>
          <div style={{ background: "#fff", borderRadius: 99, height: 7, width: `${pct}%`, transition: "width 0.4s ease" }} />
        </div>
      </div>
    </div>
  );
}
