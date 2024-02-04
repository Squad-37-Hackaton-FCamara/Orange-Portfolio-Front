"use client";

import ComponenteModal from "@/app/_helpers/modal";
import { TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import CartaoPortifolio from "../_helpers/components/CartaoClicavel";
import { Header } from "../_helpers/header";
import { ConteudoModalDescobrirProjeto } from "../_helpers/modal/conteudo_modal/descobrir_projeto";
import DescobrirLayout from "./layout";
import { ProjetosAPI } from "@/services/api_projetos";
import { formatarData } from "../util/formatarData";
import { ProjetoProps } from "../@types/Projetos";
import { ProjectLoading } from "../_helpers/components/Loader";

function PaginaDescobrir() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNGY4YWQ5LTBkNTgtNDc0NS1hNWU3LWFhNmYzNWExMmY5NiIsImlhdCI6MTcwNjk2NzEwNiwiZXhwIjoxNzA3MDUzNTA2LCJzdWIiOiJlYTRmOGFkOS0wZDU4LTQ3NDUtYTVlNy1hYTZmMzVhMTJmOTYifQ.LCfmZNbiqSSWoOCOB6NKSt7TYiFN94EAT_XAhc48_9o";

  const [projeto, setProjeto] = useState<any>({});
  const [projetos, setProjetos] = useState<Array<{}>>([]);
  const [expandirProjeto, setExpandirProjeto] = useState(false);
  const [tagBusca, setTagBusca] = useState("");

  function funcaoExpandirProjeto(projeto: ProjetoProps) {
    setExpandirProjeto(true);
    setProjeto(projeto);
  }

  const listarProjetos = () => {
    const response = ProjetosAPI.ListarProjetos({ token }, { tagBusca }).then(
      (response) => {
        setProjetos(response);
      }
    );
    return response;
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      listarProjetos();
    }, 200);
    return () => {
      clearTimeout(timerId);
    };
  }, [tagBusca]);

  const handleChange = (e: any) => {
    setTagBusca(e.target.value);
  };

  return (
    <DescobrirLayout>
      <Header />
      <ComponenteModal
        isOpen={expandirProjeto}
        setIsOpen={setExpandirProjeto}
        add_edit={false}
      >
        <ConteudoModalDescobrirProjeto projeto {...projeto} />
      </ComponenteModal>
      <div
        className={clsx(
          "max-w-6xl w-full flex flex-col items-center justify-between gap-14",
          "mx-auto py-4 lg:p-6"
        )}
        suppressHydrationWarning
      >
        <div className="flex items-center gap-[42px] mt-[112px] lg:flex-col lg:gap-4 lg:mt-[56px]">
          <Typography
            variant="h4"
            className="text-color-principal-90 leading-[2.125rem] sm:text-2xl sm:leading-6 text-center "
          >
            {
              "Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis"
            }
          </Typography>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-4">
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
          <div className="grid grid-cols-3 gap-6 lg:max-w-[802px] lg:grid-cols-2 md:flex md:w-full md:flex-col md:items-center md:justify-center">
            {projetos.length != 0 ? (
              projetos.map((projeto: any, i: number) => {
                return (
                  <div key={i} className="max-w-[389px] lg:w-full">
                    <CartaoPortifolio
                      nomeUsuario={projeto.autor}
                      imgUsuario={projeto.imgUsuario}
                      tituloProjeto={projeto.titulo}
                      imgProjeto={projeto.foto}
                      dataProjeto={formatarData(projeto.createAt)}
                      tags={projeto.tags}
                      onClick={() => funcaoExpandirProjeto(projeto)}
                    />
                  </div>
                );
              })
            ) : (
              <>
                <ProjectLoading />
                <ProjectLoading />
                <ProjectLoading />
              </>
            )}
          </div>
        </div>
      </div>
    </DescobrirLayout>
  );
}

export default PaginaDescobrir;
