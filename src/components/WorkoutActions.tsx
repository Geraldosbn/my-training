import styles from "./WorkoutActions.module.css";

type Props = {
  allDone: boolean;
  totalFeito: number;
  onMarkAll: () => void;
  onClear: () => void;
};

export function WorkoutActions({ allDone, totalFeito, onMarkAll, onClear }: Props) {
  return (
    <div className={styles.container}>
      <button
        onClick={onMarkAll}
        disabled={allDone}
        className={[styles.markAllButton, allDone ? styles.markAllButtonDone : ""].join(" ")}
      >
        {allDone ? "✓ Treino concluído hoje!" : "Marcar todos como feito"}
      </button>
      {totalFeito > 0 && (
        <button onClick={onClear} className={styles.clearButton}>↺</button>
      )}
    </div>
  );
}
