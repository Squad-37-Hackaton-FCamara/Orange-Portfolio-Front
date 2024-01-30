"use client";

import { Grid, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import CartaoPortifolio from "../_helpers/components/CartaoClicavel";
import ComponentModal from "../_helpers/modal";
import { ConteudoModalDescobrirProjeto } from "../_helpers/modal/conteudo_modal/descobrir_projeto";

interface IProjeto {
  nomeUsuario: string;
  imgUsuario: string;
  tituloProjeto: string;
  imgProjeto: string;
  dataProjeto: string;
  descricacao: string;
  url: string;
  tags: string[];
}

const descricacaoPagina =
  "Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis";

function PaginaDescobrir() {
  const [projeto, setProjeto] = useState<any>(); //! Tipagem temporária
  const [projetos, setProjetos] = useState<any>(); //! Tipagem temporária
  const [expandirProjeto, setExpandirProjeto] = useState(false);

  function funcaoExpandirProjeto(projeto: IProjeto) {
    setExpandirProjeto(!expandirProjeto);
    setProjeto(projeto);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <div className="w-[46.5rem] h-[6.375rem] sm:w-[19.5rem] sm:h-[7.5rem] mt-28 sm:mt-16">
          <Typography
            variant="h4"
            className="text-color-principal-90 leading-[2.125rem] sm:text-2xl sm:leading-6 text-center"
          >
            {descricacaoPagina}
          </Typography>
        </div>
      </div>
      <div>
        <div className="max-w-[74rem] sm:w-[19.5rem] w-full mt-[7.5rem] mx-8 sm:mx-6 sm:mt-10">
          <div className="w-[45.188rem] sm:w-[19.5rem] ">
            <Grid item sm={4} md={6}>
              <TextField label="Buscar tags" fullWidth />
            </Grid>
          </div>
        </div>
        {/**
         * // TODO: implementar infinit scroll - aguardando integração
         */}
        <div
          className={clsx(
            "max-w-[76rem] sm:w-[19.5rem] mx-8 sm:mx-6 mt-10 flex flex-wrap gap-6"
          )}
        >
          {projetos.map(
            (
              item: any,
              i: any //! Tipagem temporária
            ) => (
              <CartaoPortifolio
                key={i}
                nomeUsuario={item.nomeUsuario}
                imgUsuario={item.imgUsuario}
                tituloProjeto={item.tituloProjeto}
                imgProjeto={item.imgProjeto}
                dataProjeto={item.dataProjeto}
                tags={item.tags}
                onClick={() => funcaoExpandirProjeto(item)}
              />
            )
          )}
        </div>
      </div>
      <ComponentModal
        isOpen={expandirProjeto}
        setIsOpen={setExpandirProjeto}
        isClosable
      >
        <ConteudoModalDescobrirProjeto projeto {...projeto} />
      </ComponentModal>
    </div>
  );
}

export default PaginaDescobrir;
