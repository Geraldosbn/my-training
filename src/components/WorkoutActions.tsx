type Props = {
  color: string;
  allDone: boolean;
  totalFeito: number;
  onMarkAll: () => void;
  onClear: () => void;
};

export function WorkoutActions({ color, allDone, totalFeito, onMarkAll, onClear }: Props) {
  return (
    <div style={{ padding: "14px 20px", borderTop: "1px solid #1E1E1E", display: "flex", gap: 8 }}>
      <button onClick={onMarkAll} disabled={allDone} style={{
        flex: 1, padding: "14px", borderRadius: 12,
        background: allDone ? "#1C1C1C" : color,
        color: allDone ? "#4ade80" : "#fff",
        border: allDone ? "1px solid #2A2A2A" : "none",
        cursor: allDone ? "default" : "pointer",
        fontSize: 15, fontWeight: 800, letterSpacing: 0.3, transition: "all 0.25s",
      }}>
        {allDone ? "✓ Treino concluído hoje!" : "Marcar todos como feito"}
      </button>
      {totalFeito > 0 && (
        <button onClick={onClear} style={{
          padding: "14px 16px", borderRadius: 12,
          background: "transparent",
          color: "#555",
          border: "1px solid #2A2A2A",
          cursor: "pointer",
          fontSize: 15, fontWeight: 800, transition: "all 0.25s",
          flexShrink: 0,
        }}>
          ↺
        </button>
      )}
    </div>
  );
}
