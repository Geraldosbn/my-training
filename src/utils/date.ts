import type { ProfileKey } from "../types";
import { profiles } from "../data/profiles";

export const todayKey = (): string => new Date().toISOString().slice(0, 10);

// JS getDay(): 0=Dom,1=Seg,...,6=Sáb → índice no array semana (Seg=0,...,Dom=6)
const JS_DAY_TO_SEMANA: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };

export function getWorkoutForToday(p: ProfileKey): string {
  const { semana, workouts } = profiles[p];
  const todayIdx = JS_DAY_TO_SEMANA[new Date().getDay()];
  for (let i = 0; i < 7; i++) {
    const d = semana[(todayIdx - i + 7) % 7];
    if (d.ativo && d.treino) return d.treino;
  }
  return Object.keys(workouts)[0];
}
