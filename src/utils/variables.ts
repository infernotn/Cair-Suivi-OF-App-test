export const of_template = {
  id: 0,
  N_OF: "",
  Reference: "",
  N_LOT: "",
  Quantite: 0,
  Statut: "",

  atelier: "",
  Date_prévu: "",
  DP: "",
  Derogation: "",
  DP_version: 0,
  Semaine_prévu: 0,
};
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
export const OF_phases = ["Planification", "Production", "Expedition"];
export const OF_subPhases: any =
  // {
  //   Planification: string[];
  //   Production: string[];
  //   Expedition: string[];
  // }
  {
    Planification: ["à lancer", "derogation FF"],
    Production: [
      "Préparation MP",
      "Fabrication",
      "controle Qualite",
      "Emballage",
      "controle PF",
      // "Verification OF",
    ],
    Expedition: ["à expedier", "liste des charges preparées"],
  };

export const D_phase = {
  "à lancer": ["N° OF", "Réference", "Quantite"],
  "Préparation MP": ["N° OF", "Réference", "N° Lot", "Quantite"],
  Fabrication: ["N° OF", "Réference", "N° Lot", "Quantite"],

  "derogation FF": ["N° OF", "Réference", "N° Lot", "Quantite"],

  "controle Qualite": ["N° OF", "Réference", "N° Lot", "Quantite"],
  Emballage: ["N° OF", "Réference", "N° Lot", "Quantite"],
  "controle PF": ["N° OF", "Réference", "N° Lot", "Quantite"],
  "Verification OF": ["N° OF", "Réference", "N° Lot", "Quantite"],
};
export const DB_notation = {
  "N° OF": "N_OF",
  Réference: "Reference",
  "N° Lot": "N_LOT",
  Quantite: "Quantite",
  Statut: "Statut",

  Atelier: "atelier",
  "Date prévu": "Date_prévu",
  "N° DP": "DP",
  Derogation: "Derogation",
  DP_version: "DP_version",
};
// colors

export const color_1 = "#A63770";
export const color_2 = "#AE3AB0";
export const color_3 = "#7E3A99";
export const color_4 = "#6F3AB0";
export const color_5 = "#4937A6";
export const ateliers = [
  "à determiner",
  "CTUK 1",
  "CTUK 2",
  "CTUK 3",
  "Plasturgie",
];
