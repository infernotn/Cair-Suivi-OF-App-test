export type OF_type = {
  id: number;
  N_OF: string;
  Réference: string;
  N_LOT: string;
  Quantite: number;
  Statut: string;

  atelier: string;
  Date_prévu: Date | null;
  DP: string;
  Derogation: string;
  DP_version: number;
  Semaine_prévu: number;
};
