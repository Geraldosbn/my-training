import type { Profile, ProfileKey } from "../types";

type Props = {
  profiles: Record<ProfileKey, Profile>;
  selected: ProfileKey;
  onSelect: (key: ProfileKey) => void;
};

export function ProfileSelector({ profiles, selected, onSelect }: Props) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
      {(Object.entries(profiles) as [ProfileKey, Profile][]).map(([key, p]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          style={{
            flex: 1, padding: "12px 8px", borderRadius: 14,
            background: selected === key ? (key === "eu" ? "#1E1E1E" : "#1A1020") : "#131313",
            border: selected === key
              ? `2px solid ${key === "eu" ? "#444" : "#DB277766"}`
              : "2px solid #1A1A1A",
            color: selected === key ? "#F5F5F5" : "#555",
            cursor: "pointer", transition: "all 0.18s",
          }}
        >
          <div style={{ fontSize: 22 }}>{p.emoji}</div>
          <div style={{ fontSize: 13, fontWeight: 800, marginTop: 4 }}>{p.nome}</div>
        </button>
      ))}
    </div>
  );
}
