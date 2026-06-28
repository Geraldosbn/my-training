import type { Profile, ProfileKey } from "../types";

export const profiles: Record<ProfileKey, Profile> = {
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
