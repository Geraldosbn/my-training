import type { Exercicio } from "../types";
import styles from "./ExerciseItem.module.css";

type Props = {
  exercicio: Exercicio;
  index: number;
  feito: boolean;
  carga: string;
  ultimaCarga: string | null;
  onToggle: () => void;
  onCargaChange: (val: string) => void;
};

export function ExerciseItem({ exercicio, index, feito, carga, ultimaCarga, onToggle, onCargaChange }: Props) {
  const inputClass = [
    styles.inputWrapper,
    feito ? styles.inputWrapperDone : carga ? styles.inputWrapperWithCarga : "",
  ].join(" ");

  return (
    <div className={[styles.item, feito ? styles.itemDone : ""].join(" ")}>
      <div className={styles.row}>
        <button onClick={onToggle} className={[styles.checkButton, feito ? styles.checkButtonDone : ""].join(" ")}>
          {feito ? "✓" : index + 1}
        </button>
        <div className={[styles.info, feito ? styles.infoDone : ""].join(" ")}>
          <div className={[styles.name, feito ? styles.nameDone : ""].join(" ")}>
            {exercicio.nome}
          </div>
          <div className={styles.obs}>{exercicio.obs}</div>
          <div className={styles.tags}>
            <span className={[styles.tag, styles.tagSeries].join(" ")}>{exercicio.series}</span>
            <span className={styles.tag}>⏱ {exercicio.descanso}</span>
          </div>
        </div>
      </div>
      <div className={styles.cargaRow}>
        <div className={inputClass}>
          <span className={styles.inputIcon}>🏋️</span>
          <input
            type="text"
            value={carga}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCargaChange(e.target.value)}
            placeholder="Carga de hoje..."
            className={styles.input}
          />
        </div>
        {ultimaCarga && (
          <div className={styles.ultimaCarga}>
            ant: <span className={styles.ultimaCargaValue}>{ultimaCarga}</span>
          </div>
        )}
      </div>
    </div>
  );
}
