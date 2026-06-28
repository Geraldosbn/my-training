import type { AppData } from "../types";

const STORAGE_KEY = "treino_gym_data_v2";

export function loadData(): AppData {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as AppData; }
  catch { return {}; }
}

export function saveData(d: AppData): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch {}
}
