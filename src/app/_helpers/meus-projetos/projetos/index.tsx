import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CartaoPortfolioMeusProjetos from "../card_projeto";
import { CardPrimeiroProjeto } from "../card_primeiro_projeto";
import { TextField, Typography } from "@mui/material";
import { useWindowDimensions } from "@/services/window_size";
import { formatarData } from "../../../util/formatarData";
import { useSession } from "next-auth/react";

export function Projetos({
  projetos,
  setIsOpen,
  setModal,
  setTagBusca,
  tagBusca,
  setProjeto,
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
      | "visualizar_projeto"
    >
  >;
  setTagBusca: Dispatch<SetStateAction<string>>;
  tagBusca: string;
  setProjeto: Dispatch<SetStateAction<any>>;
}) {
  const { width } = useWindowDimensions();
  const projetosOrdenados = [...projetos].sort(
    (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
  );

  const handleChange = (e: any) => {
    setTagBusca(e.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-10 lg:justify-center">
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
          className="max-w-[490px] w-full"
          value={tagBusca}
          onChange={handleChange}
        />
      </div>
      {projetos.length === 0 ? (
        <div className="grid grid-cols-3 gap-6 lg:flex lg:w-full ">
          <div
            className="cursor-pointer"
            onClick={() => {
              setModal("add_projeto");
              setIsOpen(true);
            }}
          >
            <CardPrimeiroProjeto />
          </div>
          {width > 1023 && (
            <>
              <div className="w-full h-full bg-color-neutral-70 opacity-20" />
              <div className="w-full h-full bg-color-neutral-70 opacity-20" />
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 lg:max-w-[802px] lg:grid-cols-2 md:flex md:w-full md:flex-col md:items-center md:justify-center">
          {projetosOrdenados.map((projeto, i) => {
            return (
              <div
                key={i}
                className="max-w-[389px] lg:w-full "
                onClick={() => {
                  setProjeto(projeto);
                }}
              >
                <CartaoPortfolioMeusProjetos
                  id={projeto.id}
                  setIsOpen={setIsOpen}
                  setModal={setModal}
                  nomeUsuario={projeto.autor}
                  // imgUsuario={projeto.imgUsuario}
                  tituloProjeto={projeto.titulo}
                  imgProjeto={projeto.foto}
                  dataProjeto={formatarData(projeto.createAt)}
                  tags={projeto.tags}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
