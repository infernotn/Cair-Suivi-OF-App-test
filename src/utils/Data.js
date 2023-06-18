import { ofs } from "./ofs";

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

export const OFs_data = ofs;
export const ops = {
  "5TG000": [
    "Operation 1",
    "Operation 2",
    "Operation 3",
    "Operation 4",
    "Operation 5",
  ],
};
// export const MP = [
//   ["ref 1", "lot 1", "2000"],
//   ["ref 1", "lot 1", "2000"],
//   ["ref 1", "lot 1", "2000"],
//   ["ref 1", "lot 1", "2000"],
//   ["ref 1", "lot 1", "2000"],
//   ["ref 1", "lot 1", "2000"],
// ];
export const OF_phases = ["Planification", "Production", "Expedition"];
export const OF_subPhases = {
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
