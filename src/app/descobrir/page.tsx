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

interface IProjeto {
  // nomeUsuario: string;
  // imgUsuario: string;
  tituloProjeto: string;
  imgProjeto: string;
  dataProjeto: string;
  descricacao: string;
  url: string;
  tags: string[];
}

function PaginaDescobrir() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhMmI2YzRjLTdjNDUtNDMxZS04MWEwLTdhMjgwNWVlMGYwNSIsImlhdCI6MTcwNjgxODI2OCwiZXhwIjoxNzA2OTA0NjY4LCJzdWIiOiIyYTJiNmM0Yy03YzQ1LTQzMWUtODFhMC03YTI4MDVlZTBmMDUifQ.t2YuAQ8yfu1Lb-PIh2iawa8XpXK2YcvAL5S9omj2LJE";
  const projetoObj = [
    //! Mock temporário
    {
      nomeUsuario: "Usuario user 1",
      // imgUsuario:
      //   "https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain",
      tituloProjeto: "Projeto Usuário Teste 1",
      imgProjeto:
        "https://th.bing.com/th/id/OIP.XK5qmiDx5gPneqy-4LRgKAHaEK?rs=1&pid=ImgDetMain",
      dataProjeto: "01/24",
      descricacao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["react", "front-end"],
      url: "urldeteste.com.br",
      onClick: () => console.log("onClick card 1"),
    },
    {
      nomeUsuario: "Usuário Teste 2",
      imgUsuario:
        "https://th.bing.com/th/id/OIP.2r5wqEPi_CvcNGmUprinPwHaIB?rs=1&pid=ImgDetMain",
      tituloProjeto: "Projeto Usuário Teste 2",
      imgProjeto:
        "https://th.bing.com/th/id/OIP.OoLcRGuhamaX0D87UyXBeQAAAA?rs=1&pid=ImgDetMain",
      dataProjeto: "01/24",
      descricacao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["teste", "UX", "chip 2"],
      url: "urldeteste.com.br",
      onClick: () => console.log("onClick card 2"),
    },
    {
      nomeUsuario: "Usuário Teste 3",
      imgUsuario:
        "https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg",
      tituloProjeto: "Projeto Usuário Teste 3",
      imgProjeto:
        "https://blog.csptecnologia.com/wp-content/uploads/2021/03/AnyConv.com__coder-illustration.png",
      dataProjeto: "01/24",
      descricacao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["teste", "chip 3"],
      url: "urldeteste.com.br",
      onClick: () => console.log("onClick card 3"),
    },
    {
      nomeUsuario: "Usuário Teste 4",
      imgUsuario:
        "https://i.pinimg.com/originals/c1/c5/7f/c1c57f7a5014d41d9de890f8640f64d0.jpg",
      tituloProjeto: "Projeto Usuário Teste 4",
      imgProjeto:
        "https://th.bing.com/th/id/OIP.2r5wqEPi_CvcNGmUprinPwHaIB?rs=1&pid=ImgDetMain",
      dataProjeto: "01/24",
      descricacao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["teste", "chip 4"],
      url: "urldeteste.com.br",
      onClick: () => console.log("onClick card 4"),
    },
    {
      nomeUsuario: "Usuário Teste 5",
      imgUsuario:
        "https://th.bing.com/th/id/OIP.2r5wqEPi_CvcNGmUprinPwHaIB?rs=1&pid=ImgDetMain",
      tituloProjeto: "Projeto Usuário Teste 5",
      imgProjeto:
        "https://blog.csptecnologia.com/wp-content/uploads/2021/03/AnyConv.com__coder-illustration.png",
      dataProjeto: "01/24",
      descricacao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["chip 1", "chip 2", "chip 3", "chip 4", "chip 5"],
      url: "urldeteste.com.br",
      onClick: () => console.log("onClick card 5"),
    },
  ];

  const [projeto, setProjeto] = useState<any>(projetoObj); //! Tipagem temporária
  const [projetos, setProjetos] = useState<Array<{}>>([]); //! Tipagem temporária
  const [expandirProjeto, setExpandirProjeto] = useState(false);

  function funcaoExpandirProjeto(projeto: IProjeto) {
    setExpandirProjeto(!expandirProjeto);
    setProjeto(projeto);
  }

  const getProjetos = () => {
    const response = ProjetosAPI.ListarProjetos({ token }).then((response) => {
      console.log(response);
      setProjetos(response);
    });
    projetos.map((projeto: any, i: number) => {
      console.log(projeto);
    });
    return response;
  };

  useEffect(() => {
    getProjetos();
  }, []);

  return (
    <DescobrirLayout>
      <Header />
      <ComponenteModal
        isClosable
        isOpen={expandirProjeto}
        setIsOpen={setExpandirProjeto}
      >
        <ConteudoModalDescobrirProjeto projeto {...projeto} />
      </ComponenteModal>
      <div
        className={clsx(
          "max-w-6xl w-full flex flex-col items-center justify-between gap-14",
          "mx-auto py-4 lg:p-6"
        )}
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
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <TextField
              id="outlined-basic"
              label="Buscar tags"
              placeholder="Buscar tags"
              variant="outlined"
              className="max-w-[490px] w-full lg:w-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:flex md:flex-col md:items-center">
            {projetos.map((projeto: any, i: number) => {
              return (
                <div key={i} className="max-w-[389px]">
                  <CartaoPortifolio
                    nomeUsuario={projeto.nomeUsuario}
                    imgUsuario={projeto.imgUsuario}
                    tituloProjeto={projeto.titulo}
                    imgProjeto={projeto.foto}
                    dataProjeto={projeto.createAt}
                    tags={projeto.tags}
                    onClick={() => funcaoExpandirProjeto(projeto)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DescobrirLayout>
  );
}

export default PaginaDescobrir;
