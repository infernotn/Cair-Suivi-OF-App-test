export const data = [
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "12/5/2023", "DP-23-10"],
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "12/5/2023", "DP-23-10"],
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "12/5/2023", "DP-23-10"],
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "12/5/2023", "DP-23-10"],
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "10/5/2023", "DP-23-10"],
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "12/5/2023", "DP-23-10"],
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "12/5/2023", "DP-23-10"],
  ["23Cair1006", "5TG000", 10000, "Plasturgie", "10/5/2023", "DP-23-10"],
];

export const of_status = [
  "à lancer",
  "derogation FF",
  "Préparation MP",
  "Fabrication",
  "controle Qualite",
  "Emballage",
  "controle PF",
  "Verification OF",
];
export const OFs = [
  {
    "N° OF": "",
    Réference: "",
    "N° Lot": "",
    Quantite: "",
    Statut: "",
    MP: [
      {
        ref: " ref_1",
        lot: "AAMMJJ",
        statut: "ready",
      },
      {
        ref: " ref_2",
        lot: "AAMMJJ",
        statut: "ready",
      },
      {
        ref: " ref_3",
        lot: "AAMMJJ",
        statut: "ready",
      },
    ],
  },
];
export const ops = [
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
];
export const MP = [
  ["ref 1", "lot 1", "2000"],
  ["ref 1", "lot 1", "2000"],
  ["ref 1", "lot 1", "2000"],
  ["ref 1", "lot 1", "2000"],
  ["ref 1", "lot 1", "2000"],
  ["ref 1", "lot 1", "2000"],
];
export const OF_phases = ["Planification", "Production", "Expedition"];
export const OF_subPhases = {
  Planification: ["S+0", "S+1"],
  Production: ["Fabrication", "Emballage"],
  Expedition: ["à expedier", "liste des charges preparées"],
};
export const Theader_subphase = {
  "S+0": ["N° OF", "Réference", "N° Lot", "Quantite", "Statut", "I"],
  "S+1": ["N° OF", "Réference", "N° Lot", "Quantite", "Statut", "I"],
  Fabrication: ["N° OF", "Réference", "N° Lot", "Quantite", "Statut", "I"],
  Emballage: ["N° OF", "Réference", "N° Lot", "Quantite", "Statut", "I"],
  "à expedier": ["N° OF", "Réference", "N° Lot", "Quantite", "Statut", "I"],
  "liste des charges preparées": [
    "N° OF",
    "Réference",
    "N° Lot",
    "Quantite",
    "Statut",
    "I",
  ],
};
export const ateliers = ["CTUK 1", "CTUK 2", "CTUK 3", "Plasturgie"];
