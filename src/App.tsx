import { useState } from "react";

type DiaSemana = {
  dia: string;
  treino: string | null;
  ativo: boolean;
};

type Aquecimento = {
  exercicio: string;
  tempo: string;
  intensidade: string;
};

type Exercicio = {
  id: string;
  nome: string;
  series: string;
  descanso: string;
  obs: string;
};

type Workout = {
  label: string;
  focus: string;
  color: string;
  aquecimento: Aquecimento;
  exercicios: Exercicio[];
};

type Profile = {
  nome: string;
  emoji: string;
  descricao: string;
  accentBg: string;
  semana: DiaSemana[];
  workouts: Record<string, Workout>;
};

type ProfileKey = "eu" | "esposa";

type ExerciseData = {
  cargas: Record<string, string>;
  feito: Record<string, boolean>;
};

type AppData = Record<string, ExerciseData>;

const profiles: Record<ProfileKey, Profile> = {
  eu: {
    nome: "Masculino",
    emoji: "👨",
    descricao: "33 anos · 140 kg · Hipertrofia + Emagrecimento",
    accentBg: "#0F0F0F",
    semana: [
      { dia: "Seg", treino: "A", ativo: true },
      { dia: "Ter", treino: "B", ativo: true },
      { dia: "Qua", treino: null, ativo: false },
      { dia: "Qui", treino: "C", ativo: true },
      { dia: "Sex", treino: "D", ativo: true },
      { dia: "Sáb", treino: null, ativo: false },
      { dia: "Dom", treino: null, ativo: false },
    ],
    workouts: {
      A: {
        label: "Treino A", focus: "Peito + Tríceps", color: "#E85D26",
        aquecimento: { exercicio: "Esteira / Bicicleta ergométrica", tempo: "8 min", intensidade: "Moderada (caminhada rápida ou bike leve)" },
        exercicios: [
          { id: "mA0", nome: "Supino Reto com Halteres", series: "4x12", descanso: "60s", obs: "Movimento controlado, foco na descida" },
          { id: "mA1", nome: "Crucifixo Inclinado (Polia ou Haltere)", series: "3x15", descanso: "45s", obs: "Amplitude máxima, sem travar o cotovelo" },
          { id: "mA2", nome: "Supino Inclinado com Halteres", series: "3x12", descanso: "60s", obs: "Banco a 30–45°, controle a descida até o peitoral superior, empurre sem travar os cotovelos" },
          { id: "mA3", nome: "Tríceps Pulley (Barra reta)", series: "4x15", descanso: "45s", obs: "Cotovelos fixos ao lado do corpo" },
          { id: "mA4", nome: "Tríceps Francês com Haltere", series: "3x12", descanso: "45s", obs: "Sentado ou em pé, haltere atrás da nuca, cotovelos apontados para cima, extensão completa" },
        ],
      },
      B: {
        label: "Treino B", focus: "Costas + Bíceps", color: "#2563EB",
        aquecimento: { exercicio: "Bicicleta ergométrica", tempo: "8 min", intensidade: "Resistência leve a moderada" },
        exercicios: [
          { id: "mB0", nome: "Puxada Frente (Pulldown)", series: "4x12", descanso: "60s", obs: "Pegada aberta, puxe até o queixo" },
          { id: "mB1", nome: "Remada Sentada na Polia", series: "4x12", descanso: "60s", obs: "Escápulas juntas no final do movimento" },
          { id: "mB2", nome: "Remada Unilateral com Haltere", series: "3x12", descanso: "45s", obs: "Apoio no banco, puxe pelo cotovelo" },
          { id: "mB3", nome: "Rosca Direta com Halteres", series: "4x12", descanso: "45s", obs: "Sem balançar o tronco" },
          { id: "mB4", nome: "Rosca Concentrada", series: "3x15", descanso: "45s", obs: "Máxima contração no topo" },
        ],
      },
      C: {
        label: "Treino C", focus: "Pernas + Glúteos", color: "#16A34A",
        aquecimento: { exercicio: "Esteira (inclinação leve)", tempo: "8 min", intensidade: "Caminhada a 5–6 km/h com 3% inclinação" },
        exercicios: [
          { id: "mC0", nome: "Leg Press 45°", series: "4x15", descanso: "60s", obs: "Pés afastados, quadril encaixado" },
          { id: "mC1", nome: "Cadeira Adutora", series: "4x15", descanso: "45s", obs: "Movimento controlado, pressione no final" },
          { id: "mC2", nome: "Cadeira Extensora", series: "3x15", descanso: "45s", obs: "Extensão completa, desça devagar" },
          { id: "mC3", nome: "Mesa Flexora", series: "3x15", descanso: "45s", obs: "Foco na contração do posterior" },
          { id: "mC4", nome: "Cadeira Abdutora", series: "4x15", descanso: "45s", obs: "Movimento controlado, pressione na abertura máxima e volte devagar" },
        ],
      },
      D: {
        label: "Treino D", focus: "Ombros + Trapézio", color: "#7C3AED",
        aquecimento: { exercicio: "Elíptico", tempo: "8 min", intensidade: "Ritmo confortável, braços ativos" },
        exercicios: [
          { id: "mD0", nome: "Desenvolvimento com Halteres", series: "4x12", descanso: "60s", obs: "Não trave os cotovelos no topo" },
          { id: "mD1", nome: "Elevação Lateral com Halteres", series: "4x15", descanso: "45s", obs: "Leve inclinação à frente, sem balanço" },
          { id: "mD2", nome: "Elevação Frontal (Polia baixa)", series: "3x12", descanso: "45s", obs: "Alternado, cotovelo levemente flexionado" },
          { id: "mD3", nome: "Encolhimento com Halteres", series: "4x15", descanso: "45s", obs: "Sobe direto, não gira os ombros" },
          { id: "mD4", nome: "Face Pull na Polia", series: "3x15", descanso: "45s", obs: "Puxe até as orelhas, ótimo para postura" },
        ],
      },
    },
  },

  esposa: {
    nome: "Feminino",
    emoji: "👩",
    descricao: "Silhueta + Glúteos · Emagrecimento + Hipertrofia",
    accentBg: "#0F0F0F",
    semana: [
      { dia: "Seg", treino: "E1", ativo: true },
      { dia: "Ter", treino: "E2", ativo: true },
      { dia: "Qua", treino: null, ativo: false },
      { dia: "Qui", treino: "E3", ativo: true },
      { dia: "Sex", treino: "E4", ativo: true },
      { dia: "Sáb", treino: null, ativo: false },
      { dia: "Dom", treino: null, ativo: false },
    ],
    workouts: {
      E1: {
        label: "Treino 1", focus: "Glúteos + Posterior", color: "#DB2777",
        aquecimento: { exercicio: "Esteira com inclinação", tempo: "10 min", intensidade: "Caminhada a 5 km/h com 5–8% inclinação — ativa glúteos" },
        exercicios: [
          { id: "eE10", nome: "Hip Thrust com Barra", series: "4x15", descanso: "60s", obs: "Apoie o banco nas escápulas, barra no quadril com amortecedor, empurre os calcanhares no chão e contraia os glúteos no topo" },
          { id: "eE11", nome: "Agachamento Sumo com Haltere", series: "4x15", descanso: "60s", obs: "Pés bem abertos, pontas para fora, desça com o quadril" },
          { id: "eE12", nome: "Leg Press pés altos e afastados", series: "4x15", descanso: "60s", obs: "Pés no topo da plataforma ativa mais glúteo e posterior" },
          { id: "eE13", nome: "Cadeira Adutora", series: "3x20", descanso: "45s", obs: "Movimento lento, pressão constante na junção" },
          { id: "eE14", nome: "Mesa Flexora", series: "3x15", descanso: "45s", obs: "Sem tirar o quadril, desça devagar" },
        ],
      },
      E2: {
        label: "Treino 2", focus: "Cintura + Costas", color: "#0891B2",
        aquecimento: { exercicio: "Bicicleta ergométrica", tempo: "10 min", intensidade: "Ritmo moderado, resistência leve" },
        exercicios: [
          { id: "eE20", nome: "Puxada Frente com pegada fechada", series: "4x12", descanso: "60s", obs: "Pegada supinada, puxe pelo cotovelo, ativa o latíssimo (afina cintura)" },
          { id: "eE21", nome: "Remada Sentada na Polia", series: "4x12", descanso: "60s", obs: "Escápulas juntas, tronco ereto" },
          { id: "eE22", nome: "Pullover com Haltere", series: "3x15", descanso: "45s", obs: "Expande a caixa torácica e define o serrátil" },
          { id: "eE23", nome: "Desenvolvimento com Halteres (ombros)", series: "3x15", descanso: "45s", obs: "Ombros largos criam ilusão de cintura mais fina" },
          { id: "eE24", nome: "Elevação Lateral com Halteres", series: "3x20", descanso: "45s", obs: "Peso leve, amplitude total, subida controlada" },
        ],
      },
      E3: {
        label: "Treino 3", focus: "Glúteos + Quadríceps", color: "#7C3AED",
        aquecimento: { exercicio: "Elíptico", tempo: "10 min", intensidade: "Ritmo moderado, braços e pernas ativos" },
        exercicios: [
          { id: "eE30", nome: "Agachamento Búlgaro com Halteres", series: "4x12", descanso: "60s", obs: "Pé traseiro elevado no banco, desça até 90°, foco no glúteo" },
          { id: "eE31", nome: "Cadeira Extensora", series: "3x15", descanso: "45s", obs: "Extensão completa, descida lenta de 3 segundos" },
          { id: "eE32", nome: "Afundo com Halteres (passada)", series: "3x12", descanso: "45s", obs: "Passo largo, joelho traseiro quase toca o chão" },
          { id: "eE33", nome: "Abdutora (Glúteo Médio)", series: "4x20", descanso: "45s", obs: "Contração no topo, define o lateral do glúteo" },
          { id: "eE34", nome: "Panturrilha no Leg Press", series: "4x20", descanso: "30s", obs: "Amplitude máxima, subida e descida controladas" },
        ],
      },
      E4: {
        label: "Treino 4", focus: "Braços + Peito", color: "#D97706",
        aquecimento: { exercicio: "Corda naval / Step leve", tempo: "10 min", intensidade: "Ritmo suave, frequência cardíaca elevada" },
        exercicios: [
          { id: "eE40", nome: "Supino Inclinado com Halteres", series: "3x15", descanso: "45s", obs: "Ativa peitoral superior, ajuda no contorno do decote" },
          { id: "eE41", nome: "Crucifixo com Halteres", series: "3x15", descanso: "45s", obs: "Amplitude total, cotovelo levemente flexionado" },
          { id: "eE42", nome: "Rosca Alternada com Halteres", series: "3x15", descanso: "45s", obs: "Supinação no topo (vira o punho para fora)" },
          { id: "eE43", nome: "Tríceps Pulley com Corda", series: "3x15", descanso: "45s", obs: "Abre a corda na descida, contração total" },
          { id: "eE44", nome: "Tríceps Testa com Halteres", series: "3x12", descanso: "45s", obs: "Cotovelos apontados para cima, desça até a testa" },
        ],
      },
    },
  },
};

const STORAGE_KEY = "treino_gym_data_v2";
const todayKey = (): string => new Date().toISOString().slice(0, 10);

// JS getDay(): 0=Dom,1=Seg,...,6=Sáb → índice no array semana (Seg=0,...,Dom=6)
const JS_DAY_TO_SEMANA: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };

function getWorkoutForToday(p: ProfileKey): string {
  const { semana, workouts } = profiles[p];
  const todayIdx = JS_DAY_TO_SEMANA[new Date().getDay()];
  for (let i = 0; i < 7; i++) {
    const d = semana[(todayIdx - i + 7) % 7];
    if (d.ativo && d.treino) return d.treino;
  }
  return Object.keys(workouts)[0];
}

function loadData(): AppData {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as AppData; }
  catch { return {}; }
}

function saveData(d: AppData): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch {}
}

export default function TreinoApp() {
  const [perfil, setPerfil] = useState<ProfileKey>("eu");
  const [selected, setSelected] = useState<string>(() => getWorkoutForToday("eu"));
  const [data, setData] = useState<AppData>(() => loadData());
  const [flash, setFlash] = useState<boolean>(false);

  const profile = profiles[perfil];
  const today = todayKey();

  const switchPerfil = (p: ProfileKey): void => {
    setPerfil(p);
    setSelected(getWorkoutForToday(p));
  };

  const treino = profile.workouts[selected] ?? profile.workouts[Object.keys(profile.workouts)[0]];

  const exd = (id: string): ExerciseData => data[id] ?? { cargas: {}, feito: {} };

  const update = (nd: AppData): void => {
    setData(nd); saveData(nd);
    setFlash(true); setTimeout(() => setFlash(false), 1200);
  };

  const setCarga = (id: string, val: string): void =>
    update({ ...data, [id]: { ...exd(id), cargas: { ...exd(id).cargas, [today]: val } } });

  const toggleFeito = (id: string): void =>
    update({ ...data, [id]: { ...exd(id), feito: { ...exd(id).feito, [today]: !exd(id).feito[today] } } });

  const markAllDone = (): void => {
    const nd: AppData = { ...data };
    treino.exercicios.forEach(ex => {
      nd[ex.id] = { ...exd(ex.id), feito: { ...exd(ex.id).feito, [today]: true } };
    });
    update(nd);
  };

  const clearChecks = (): void => {
    const nd: AppData = { ...data };
    treino.exercicios.forEach(ex => {
      nd[ex.id] = { ...exd(ex.id), feito: { ...exd(ex.id).feito, [today]: false } };
    });
    update(nd);
  };

  const getLastCarga = (id: string): string | null => {
    const c = exd(id).cargas;
    const past = Object.keys(c).filter(d => d < today).sort().reverse();
    return past.length ? (c[past[0]] ?? null) : null;
  };

  const totalFeito = treino.exercicios.filter(ex => exd(ex.id).feito[today]).length;
  const allDone = totalFeito === treino.exercicios.length;
  const pct = (totalFeito / treino.exercicios.length) * 100;

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: "#0F0F0F", minHeight: "100vh", color: "#F5F5F5", padding: "20px 16px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>

        {/* Seletor de perfil */}
        <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
          {(Object.entries(profiles) as [ProfileKey, Profile][]).map(([key, p]) => (
            <button
              key={key}
              onClick={() => switchPerfil(key)}
              style={{
                flex: 1, padding: "12px 8px", borderRadius: 14,
                background: perfil === key ? (key === "eu" ? "#1E1E1E" : "#1A1020") : "#131313",
                border: perfil === key
                  ? `2px solid ${key === "eu" ? "#444" : "#DB277766"}`
                  : "2px solid #1A1A1A",
                color: perfil === key ? "#F5F5F5" : "#555",
                cursor: "pointer", transition: "all 0.18s",
              }}
            >
              <div style={{ fontSize: 22 }}>{p.emoji}</div>
              <div style={{ fontSize: 13, fontWeight: 800, marginTop: 4 }}>{p.nome}</div>
            </button>
          ))}
        </div>

        {/* Flash salvo */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4, height: 16 }}>
          <span style={{ fontSize: 11, color: flash ? "#4ade80" : "transparent", transition: "color 0.2s", fontWeight: 700 }}>✓ salvo</span>
        </div>

        {/* Dias da semana */}
        <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
          {profile.semana.map((d) => {
            const isSel = d.ativo && d.treino === selected;
            const isDone = d.ativo && d.treino && profile.workouts[d.treino]?.exercicios.every(ex => exd(ex.id).feito[today]);
            const col = d.ativo && d.treino ? profile.workouts[d.treino].color : null;
            return (
              <div key={d.dia} onClick={() => { if (d.ativo && d.treino) setSelected(d.treino); }} style={{
                flex: 1, borderRadius: 10, padding: "10px 4px", textAlign: "center",
                cursor: d.ativo ? "pointer" : "default",
                background: isSel ? col ?? undefined : d.ativo ? "#1C1C1C" : "#131313",
                border: isSel ? "none" : d.ativo ? "1px solid #2A2A2A" : "1px solid transparent",
                transition: "all 0.15s",
              }}>
                <div style={{ fontSize: 10, color: d.ativo ? (isSel ? "#fff" : "#888") : "#2E2E2E", fontWeight: 700, letterSpacing: 1 }}>{d.dia}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: isSel ? "#fff" : "#666", marginTop: 4 }}>
                  {d.ativo ? (isDone ? "✓" : d.treino) : "—"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Card principal */}
        <div style={{ background: "#1A1A1A", borderRadius: 16, overflow: "hidden", marginBottom: 16, border: "1px solid #242424" }}>

          {/* Header colorido */}
          <div style={{ background: treino.color, padding: "16px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.8, textTransform: "uppercase" }}>{treino.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, marginTop: 2 }}>{treino.focus}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>~40</div>
                <div style={{ fontSize: 11, opacity: 0.8 }}>minutos</div>
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 11, opacity: 0.85 }}>Progresso hoje</span>
                <span style={{ fontSize: 11, fontWeight: 800 }}>{totalFeito}/{treino.exercicios.length} exercícios</span>
              </div>
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 99, height: 7 }}>
                <div style={{ background: "#fff", borderRadius: 99, height: 7, width: `${pct}%`, transition: "width 0.4s ease" }} />
              </div>
            </div>
          </div>

          {/* Aquecimento */}
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #222", background: "#161616" }}>
            <div style={{ fontSize: 10, color: treino.color, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>🔥 Aquecimento</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{treino.aquecimento.exercicio}</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 3 }}>{treino.aquecimento.intensidade}</div>
              </div>
              <div style={{ background: treino.color + "28", color: treino.color, borderRadius: 8, padding: "4px 10px", fontSize: 13, fontWeight: 800, whiteSpace: "nowrap", marginLeft: 12 }}>
                {treino.aquecimento.tempo}
              </div>
            </div>
          </div>

          {/* Exercícios */}
          <div>
            <div style={{ padding: "12px 20px 4px", fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>💪 Musculação</div>
            {treino.exercicios.map((ex, i) => {
              const feito = exd(ex.id).feito[today] ?? false;
              const carga = exd(ex.id).cargas[today] ?? "";
              const ultima = getLastCarga(ex.id);
              return (
                <div key={ex.id} style={{
                  padding: "14px 20px",
                  borderBottom: i < treino.exercicios.length - 1 ? "1px solid #1E1E1E" : "none",
                  background: feito ? "rgba(255,255,255,0.015)" : "transparent",
                  transition: "background 0.25s",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <button onClick={() => toggleFeito(ex.id)} style={{
                      minWidth: 30, height: 30, borderRadius: "50%",
                      background: feito ? treino.color : "transparent",
                      border: feito ? "none" : `2px solid ${treino.color}66`,
                      color: feito ? "#fff" : treino.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", fontSize: feito ? 15 : 13, fontWeight: 800,
                      marginTop: 1, flexShrink: 0, transition: "all 0.18s",
                    }}>
                      {feito ? "✓" : i + 1}
                    </button>
                    <div style={{ flex: 1, opacity: feito ? 0.55 : 1, transition: "opacity 0.2s" }}>
                      <div style={{ fontWeight: 700, fontSize: 14, textDecoration: feito ? "line-through" : "none", color: feito ? "#777" : "#F0F0F0" }}>
                        {ex.nome}
                      </div>
                      <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{ex.obs}</div>
                      <div style={{ display: "flex", gap: 6, marginTop: 7, flexWrap: "wrap" }}>
                        <span style={{ background: "#252525", borderRadius: 6, padding: "3px 9px", fontSize: 12, fontWeight: 700, color: "#ccc" }}>{ex.series}</span>
                        <span style={{ background: "#252525", borderRadius: 6, padding: "3px 9px", fontSize: 12, color: "#666" }}>⏱ {ex.descanso}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 10, marginLeft: 42 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 8,
                        background: "#252525", borderRadius: 10, padding: "8px 12px",
                        border: `1.5px solid ${feito ? treino.color + "88" : carga ? treino.color + "44" : "#2E2E2E"}`,
                        flex: 1, maxWidth: 200, transition: "border-color 0.2s",
                      }}>
                        <span style={{ fontSize: 15 }}>🏋️</span>
                        <input
                          type="text"
                          value={carga}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarga(ex.id, e.target.value)}
                          placeholder="Carga de hoje..."
                          style={{ background: "transparent", border: "none", outline: "none", color: "#F0F0F0", fontSize: 13, width: "100%", fontFamily: "inherit" }}
                        />
                      </div>
                      {ultima && <div style={{ fontSize: 11, color: "#444", whiteSpace: "nowrap" }}>ant: <span style={{ color: "#666", fontWeight: 600 }}>{ultima}</span></div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botão finalizar */}
          <div style={{ padding: "14px 20px", borderTop: "1px solid #1E1E1E", display: "flex", gap: 8 }}>
            <button onClick={markAllDone} disabled={allDone} style={{
              flex: 1, padding: "14px", borderRadius: 12,
              background: allDone ? "#1C1C1C" : treino.color,
              color: allDone ? "#4ade80" : "#fff",
              border: allDone ? "1px solid #2A2A2A" : "none",
              cursor: allDone ? "default" : "pointer",
              fontSize: 15, fontWeight: 800, letterSpacing: 0.3, transition: "all 0.25s",
            }}>
              {allDone ? "✓ Treino concluído hoje!" : "Marcar todos como feito"}
            </button>
            {totalFeito > 0 && (
              <button onClick={clearChecks} style={{
                padding: "14px 16px", borderRadius: 12,
                background: "transparent",
                color: "#555",
                border: "1px solid #2A2A2A",
                cursor: "pointer",
                fontSize: 15, fontWeight: 800, transition: "all 0.25s",
                flexShrink: 0,
              }}>
                ↺
              </button>
            )}
          </div>
        </div>

        {/* Dicas */}
        <div style={{ background: "#1A1A1A", borderRadius: 14, padding: "16px 18px", border: "1px solid #242424", marginBottom: 16 }}>
          <div style={{ fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Orientações gerais</div>
          {(perfil === "esposa" ? [
            ["🥤", "Hidratação", "500ml antes + gole a cada exercício"],
            ["🍑", "Foco", "Contraia o glúteo conscientemente em cada rep — isso faz diferença real"],
            ["📈", "Progressão", "Aumente carga a cada 2 semanas para continuar evoluindo"],
            ["😴", "Descanso", "7–9h de sono: hormônios equilibrados queimam mais gordura"],
          ] : [
            ["🥤", "Hidratação", "500ml antes + gole a cada exercício"],
            ["🍽️", "Pré-treino", "Refeição leve 1h antes (carbo + proteína)"],
            ["📈", "Progressão", "Aumente carga quando completar todas as séries com facilidade"],
            ["😴", "Descanso", "7–9h de sono: essencial para emagrecer e hipertrofiar"],
          ]).map(([icon, titulo, desc]) => (
            <div key={titulo} style={{ display: "flex", gap: 12, marginBottom: 9 }}>
              <span style={{ fontSize: 16, marginTop: 1 }}>{icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{titulo}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: 11, color: "#383838", paddingBottom: 12 }}>
          Consulte um educador físico para ajustes personalizados
        </div>
      </div>
    </div>
  );
}
