import styles from "./WorkoutHeader.module.css";

type Props = {
  label: string;
  focus: string;
  totalFeito: number;
  total: number;
};

export function WorkoutHeader({ label, focus, totalFeito, total }: Props) {
  const pct = (totalFeito / total) * 100;
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div>
          <div className={styles.label}>{label}</div>
          <div className={styles.focus}>{focus}</div>
        </div>
        <div className={styles.duration}>
          <div className={styles.durationValue}>~40</div>
          <div className={styles.durationUnit}>minutos</div>
        </div>
      </div>
      <div className={styles.progressSection}>
        <div className={styles.progressLabels}>
          <span className={styles.progressLabel}>Progresso hoje</span>
          <span className={styles.progressCount}>{totalFeito}/{total} exercícios</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
