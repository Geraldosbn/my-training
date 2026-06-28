import { useState } from "react";
import type { AppData, ExerciseData } from "../types";
import { loadData, saveData } from "../utils/storage";
import { todayKey } from "../utils/date";

export function useWorkoutData() {
  const [data, setData] = useState<AppData>(() => loadData());
  const [flash, setFlash] = useState<boolean>(false);
  const today = todayKey();

  const exd = (id: string): ExerciseData => data[id] ?? { cargas: {}, feito: {} };

  const update = (nd: AppData): void => {
    setData(nd);
    saveData(nd);
    setFlash(true);
    setTimeout(() => setFlash(false), 1200);
  };

  const setCarga = (id: string, val: string): void =>
    update({ ...data, [id]: { ...exd(id), cargas: { ...exd(id).cargas, [today]: val } } });

  const toggleFeito = (id: string): void =>
    update({ ...data, [id]: { ...exd(id), feito: { ...exd(id).feito, [today]: !exd(id).feito[today] } } });

  const markAllDone = (ids: string[]): void => {
    const nd: AppData = { ...data };
    ids.forEach(id => {
      nd[id] = { ...exd(id), feito: { ...exd(id).feito, [today]: true } };
    });
    update(nd);
  };

  const clearChecks = (ids: string[]): void => {
    const nd: AppData = { ...data };
    ids.forEach(id => {
      nd[id] = { ...exd(id), feito: { ...exd(id).feito, [today]: false } };
    });
    update(nd);
  };

  const getLastCarga = (id: string): string | null => {
    const c = exd(id).cargas;
    const past = Object.keys(c).filter(d => d < today).sort().reverse();
    return past.length ? (c[past[0]] ?? null) : null;
  };

  const isFeitoHoje = (id: string): boolean => exd(id).feito[today] ?? false;
  const getCargaHoje = (id: string): string => exd(id).cargas[today] ?? "";

  return { flash, setCarga, toggleFeito, markAllDone, clearChecks, getLastCarga, isFeitoHoje, getCargaHoje };
}
