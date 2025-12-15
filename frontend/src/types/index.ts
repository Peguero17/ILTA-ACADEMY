export interface FormData {
  nombre: string;
  apellido?: string;
  email: string;
  telefono?: string;
  programa_id?: number;
  modalidad_id?: number;
  empresa?: string;
  comentarios?: string;
  asunto?: string;
  mensaje?: string;
}

export interface ProgramaCard {
  id: number;
  title: string;
  description: string;
  duration: string;
  modality: string;
  icon: React.ReactNode;
}
export type Modalidad = {
  id: number;
  nombre: string;
};

export type Programa = {
  id: number;
  nombre: string;
};
