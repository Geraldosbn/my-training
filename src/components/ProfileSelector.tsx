import type { Profile, ProfileKey } from "../types";
import styles from "./ProfileSelector.module.css";

type Props = {
  profiles: Record<ProfileKey, Profile>;
  selected: ProfileKey;
  onSelect: (key: ProfileKey) => void;
};

export function ProfileSelector({ profiles, selected, onSelect }: Props) {
  return (
    <div className={styles.container}>
      {(Object.entries(profiles) as [ProfileKey, Profile][]).map(([key, p]) => {
        const isActive = selected === key;
        const activeClass = isActive
          ? key === "eu" ? styles.buttonActiveMasculino : styles.buttonActiveFeminino
          : "";
        return (
          <button key={key} onClick={() => onSelect(key)} className={`${styles.button} ${activeClass}`}>
            <div className={styles.emoji}>{p.emoji}</div>
            <div className={styles.name}>{p.nome}</div>
          </button>
        );
      })}
    </div>
  );
}
