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
  projeto: ProjetoProps;
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
  const projeto_teste = {
    id: "1",
    autor: "Camila Soares",
    titulo: "One Ecommerce",
    tags: ["React", "Next.js"],
    link: "projeto.com",
    descricao:
      "Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.",
    foto: projeto_generico,
    usuario_id: "1",
    createAt: "12-24",
  };
  const { width } = useWindowDimensions();

  function handleClose() {
    setIsOpen(false);
  }

  return width > 1200 ? (
    projeto_teste ? (
      <div className="relative flex flex-col gap-8 p-4 max-w-[838px]">
        <div
          onClick={handleClose}
          className="absolute top-[-25px] right-[-20px]"
        >
          <CloseIcon />
        </div>
        <CabecalhoModalVisualizarProjeto projeto={projeto_teste} />
        <Image
          src={projeto_teste.foto}
          alt="Imagem do projeto"
          width={838}
          height={585}
          className="mb-8 object-cover"
        />
        <Typography variant="body1" className="w-full">
          {projeto_teste.descricao}
        </Typography>
        <div className="flex flex-col">
          <p>Download</p>
          <a href={projeto_teste.link} className="text-color-info-80">
            {projeto_teste.link}
          </a>
        </div>
      </div>
    ) : (
      <ProjectLoading />
    )
  ) : (
    <div className="flex flex-col gap-6">
      <Typography variant="h1" className="text-2xl text-color-neutral-130">
        {projeto_teste.titulo}
      </Typography>
      {/* <CartaoPortifolioMeusProjetos {...projeto} /> */}
      <Typography variant="body1">{projeto_teste.descricao}</Typography>
      <div className="flex flex-col">
        <p>Download</p>
        <a href={projeto_teste.link} className="text-color-info-80">
          {projeto_teste.link}
        </a>
      </div>
    </div>
  );
}
