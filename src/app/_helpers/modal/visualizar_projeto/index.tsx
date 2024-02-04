import { ProjetoProps } from "@/app/@types/Projetos";
import { useWindowDimensions } from "@/services/window_size";
import { Dispatch, SetStateAction } from "react";

export const ConteudoModalVisualizarProjeto = ({
  projeto,
  setModal,
  setIsOpen,
}: {
  projeto: ProjetoProps;
  setModal: Dispatch<
    SetStateAction<
      | ""
      | "editado"
      | "adicionado"
      | "deletado"
      | "confirmar_deletar"
      | "editar_projeto"
      | "add_projeto"
      | "visualizar_projeto"
    >
  >;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { width } = useWindowDimensions();
  return width > 768 ? <div></div> : <div>mobile</div>;
};
