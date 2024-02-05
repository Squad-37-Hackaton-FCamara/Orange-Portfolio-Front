import { ProjetoProps } from "@/app/@types/Projetos";
import { useWindowDimensions } from "@/services/window_size";
import { Dispatch, SetStateAction } from "react";
import { CabecalhoModalVisualizarProjeto } from "./Cabecalho";
import Image from "next/image";
import { ProjectLoading } from "../../components/Loader";
import projeto_generico from "@/app/_helpers/assets/projeto_generico.png";
import { Close } from "@mui/icons-material";
import { CloseIcon } from "../../svg/closeIcon";
import { Typography } from "@mui/material";
import CartaoPortifolio from "../../components/CartaoClicavel";
import CartaoPortifolioMeusProjetos from "../../meus-projetos/card_projeto";

export function ConteudoModalVisualizarProjeto({
  projeto,
  setModal,
  setIsOpen,
}: {
  projeto: any;
  setModal?: Dispatch<
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
}) {
  const { width } = useWindowDimensions();

  function handleClose() {
    setIsOpen(false);
  }

  return width > 1200 ? (
    projeto ? (
      <div className="w-full relative flex flex-col gap-8 p-4 max-w-[838px] overflow-y-auto">
        <div
          onClick={handleClose}
          className="absolute top-0 right-[-20px] cursor-pointer"
        >
          <CloseIcon />
        </div>
        <CabecalhoModalVisualizarProjeto projeto={projeto} />
        <img
          src={projeto.foto}
          alt="Imagem do projeto"
          className="w-[750px] h-[500px] mb-8 object-cover"
        />
        <Typography
          variant="body1"
          className="max-w-[750px] w-full text-wrap break-words"
        >
          {projeto.descricao}
        </Typography>
        <div className="flex flex-col">
          <p>Download</p>
          <a href={projeto.link} className="text-color-info-80">
            {projeto.link}
          </a>
        </div>
      </div>
    ) : (
      <ProjectLoading />
    )
  ) : (
    <div className="relative max-w-[320px] w-[90%] flex flex-col gap-6">
      <div
        onClick={handleClose}
        className="absolute top-0 right-[-20px] cursor-pointer"
      >
        <CloseIcon />
      </div>
      <Typography
        variant="h1"
        className="text-2xl text-color-neutral-130 text-center"
      >
        {projeto.titulo}
      </Typography>
      <CartaoPortifolio {...projeto} />
      <div className="flex flex-col gap-6 w-full">
        <Typography variant="body1" className="text-wrap break-words">
          {projeto.descricao}
        </Typography>
        <div className="flex flex-col">
          <p>Download</p>
          <a href={projeto.link} className="text-color-info-80">
            {projeto.link}
          </a>
        </div>
      </div>
    </div>
  );
}
