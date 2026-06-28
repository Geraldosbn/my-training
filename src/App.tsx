import { useState } from "react";
import type { ProfileKey } from "./types";
import { profiles } from "./data/profiles";
import { getWorkoutForToday } from "./utils/date";
import { useWorkoutData } from "./hooks/useWorkoutData";
import { ProfileSelector } from "./components/ProfileSelector";
import { WeekDayBar } from "./components/WeekDayBar";
import { WorkoutCard } from "./components/WorkoutCard";

export default function TreinoApp() {
  const [perfil, setPerfil] = useState<ProfileKey>("eu");
  const [selected, setSelected] = useState<string>(() => getWorkoutForToday("eu"));
  const { flash, setCarga, toggleFeito, markAllDone, clearChecks, getLastCarga, isFeitoHoje, getCargaHoje } = useWorkoutData();

  const profile = profiles[perfil];
  const workout = profile.workouts[selected] ?? profile.workouts[Object.keys(profile.workouts)[0]];

  const switchPerfil = (p: ProfileKey): void => {
    setPerfil(p);
    setSelected(getWorkoutForToday(p));
  };

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: "#0F0F0F", minHeight: "100vh", color: "#F5F5F5", padding: "20px 16px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>

        <ProfileSelector profiles={profiles} selected={perfil} onSelect={switchPerfil} />

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4, height: 16 }}>
          <span style={{ fontSize: 11, color: flash ? "#4ade80" : "transparent", transition: "color 0.2s", fontWeight: 700 }}>✓ salvo</span>
        </div>

        <WeekDayBar
          semana={profile.semana}
          workouts={profile.workouts}
          selected={selected}
          isFeitoHoje={isFeitoHoje}
          onSelect={setSelected}
        />

        <WorkoutCard
          workout={workout}
          isFeitoHoje={isFeitoHoje}
          getCargaHoje={getCargaHoje}
          getLastCarga={getLastCarga}
          onToggle={toggleFeito}
          onCargaChange={setCarga}
          onMarkAll={() => markAllDone(workout.exercicios.map(ex => ex.id))}
          onClear={() => clearChecks(workout.exercicios.map(ex => ex.id))}
        />

      </div>
    </div>
  );
}
