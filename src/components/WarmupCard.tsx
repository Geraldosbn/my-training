import type { Aquecimento } from "../types";

type Props = {
  aquecimento: Aquecimento;
  color: string;
};

export function WarmupCard({ aquecimento, color }: Props) {
  return (
    <div style={{ padding: "14px 20px", borderBottom: "1px solid #222", background: "#161616" }}>
      <div style={{ fontSize: 10, color: color, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>🔥 Aquecimento</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{aquecimento.exercicio}</div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 3 }}>{aquecimento.intensidade}</div>
        </div>
        <div style={{ background: color + "28", color: color, borderRadius: 8, padding: "4px 10px", fontSize: 13, fontWeight: 800, whiteSpace: "nowrap", marginLeft: 12 }}>
          {aquecimento.tempo}
        </div>
      </div>
    </div>
  );
}
