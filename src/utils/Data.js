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

export const OFs = [
  {
    "N° OF": "23Cair1006",
    Réference: "5TG000",
    "N° Lot": "",
    Quantite: 10000,
    Statut: "à lancer",
    atelier: "Plasturgie",
    "Date prévu": "10/5/2023",
    DP: "DP-23-11",
    MP: {
      "réference 1": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 2": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 3": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 4": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 5": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
    },
  },
  {
    "N° OF": "23Cair0005",
    Réference: "5TG000",
    "N° Lot": "",
    Quantite: 1000,
    Statut: "à lancer",
    atelier: "Plasturgie",
    "Date prévu": "10/5/2023",
    DP: "DP-23-11",
    MP: {
      "réference 1": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 2": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 3": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 4": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 5": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
    },
  },
  {
    "N° OF": "23Cair1026",
    Réference: "5TG000",
    "N° Lot": "23A11",
    Quantite: 10000,
    Statut: "Préparation MP",
    atelier: "Plasturgie",
    "Date prévu": "10/5/2023",
    DP: "DP-23-11",
    MP: {
      "réference 1": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 2": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 3": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 4": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
      "réference 5": { Quantite: 0, "N° lot MP": "", "Preparé par": "" },
    },
  },
  {
    "N° OF": "23Cair1011",
    Réference: "5TG000",
    "N° Lot": "23J01",
    Quantite: 10000,
    Statut: "Fabrication",
    atelier: "Plasturgie",
    "Date prévu": "10/5/2023",
    DP: "DP-23-11",
    MP: {
      "réference 1": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 2": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 3": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 4": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 5": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
    },
  },
  {
    "N° OF": "23Cair1018",
    Réference: "5TG000",
    "N° Lot": "23C21",
    Quantite: 10100,
    Statut: "Fabrication",
    atelier: "Plasturgie",
    "Date prévu": "10/5/2023",
    DP: "DP-23-11",
    MP: {
      "réference 1": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 2": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 3": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 4": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 5": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
    },
  },
  {
    "N° OF": "23Cair1071",
    Réference: "5TG000",
    "N° Lot": "23D15",
    Quantite: 2000,
    Statut: "Fabrication",
    atelier: "Plasturgie",
    "Date prévu": "10/5/2023",
    DP: "DP-23-11",
    MP: {
      "réference 1": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 2": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 3": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 4": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
      "réference 5": {
        Quantite: 1200,
        "N° lot MP": "23A12",
        "Preparé par": "3103",
      },
    },
  },
];
export const ops = [
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
  ["Operation 1", "poste de cahrge 1", "14/12/2022", "2000"],
];
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
    "Verification OF",
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
export const MP = {
  "5TG000": ["5SEP8501N"],
  qpm: 0.15,
};
