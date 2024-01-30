import { Dispatch, SetStateAction } from "react";
// import { ProjetoCard } from "../card_projeto";
import CartaoPortfolioMeusProjetos from "../card_projeto";
import { CardPrimeiroProjeto } from "../card_primeiro_projeto";
import { TextField, Typography } from "@mui/material";

export function Projetos({
  projetos,
  setIsOpen,
  setModal,
}: {
  projetos: any[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setModal: Dispatch<
    SetStateAction<
      | ""
      | "editado"
      | "adicionado"
      | "deletado"
      | "confirmar_deletar"
      | "add_projeto"
      | "editar_projeto"
    >
  >;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Typography
          variant="h6"
          className="text-color-neutral-130 opacity-60 leading-none"
        >
          Meus projetos
        </Typography>
        <TextField
          id="outlined-basic"
          label="Buscar tags"
          placeholder="Buscar tags"
          variant="outlined"
          className="w-[490px]"
        />
      </div>
      {projetos.length === 0 ? (
        <div className="grid grid-cols-3 gap-6">
          <div
            className="cursor-pointer"
            onClick={() => {
              setModal("add_projeto");
              setIsOpen(true);
            }}
          >
            <CardPrimeiroProjeto />
          </div>
          <div className="w-full h-full bg-color-neutral-70 opacity-20" />
          <div className="w-full h-full bg-color-neutral-70 opacity-20" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {projetos.map((projeto, i) => {
            return (
              // <ProjetoCard setIsOpen={setIsOpen} setModal={setModal} key={i} />
              <CartaoPortfolioMeusProjetos
                key={i}
                setIsOpen={setIsOpen}
                setModal={setModal}
                nomeUsuario={projeto.nomeUsuario}
                imgUsuario={projeto.imgUsuario}
                tituloProjeto={projeto.tituloProjeto}
                imgProjeto={projeto.imgProjeto}
                dataProjeto={projeto.dataProjeto}
                tags={projeto.tags}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
