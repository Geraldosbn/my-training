import type { Aquecimento } from "../types";
import styles from "./WarmupCard.module.css";

type Props = {
  aquecimento: Aquecimento;
};

export function WarmupCard({ aquecimento }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>🔥 Aquecimento</div>
      <div className={styles.content}>
        <div>
          <div className={styles.name}>{aquecimento.exercicio}</div>
          <div className={styles.intensity}>{aquecimento.intensidade}</div>
        </div>
        <div className={styles.badge}>{aquecimento.tempo}</div>
      </div>
    </div>
  );
}
