export interface ProjetoProps {
  id?: string;
  autor: string;
  titulo: string;
  tags: string[];
  link: string;
  descricao: string;
  foto: File | null | string;
  usuario_id: string;
  createAt?: string;
}
