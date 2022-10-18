export interface IMaterias {
  id: number;
  name: string;
  color: string;
  acertos: string[];
  erros: {
    number: string;
    letter: string;
  }[];
}
[];

export interface ITotal {
  acertostotais: number;
  errostotais: number;
  aprovadas: string[];
  reprovadas: string[];
}
[];
