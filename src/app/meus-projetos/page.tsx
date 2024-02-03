"use client";

import MeusProjetosPageLayout from "@/app/meus-projetos/layout";
import ComponenteModal from "@/app/_helpers/modal";
import { useState } from "react";
import { ConteudoModalSucesso } from "../_helpers/modal/conteudo_modal/sucesso";
import { ConteudoModalConfirmarDeletar } from "../_helpers/modal/conteudo_modal/confirmar_deletar";
import { ConteudoModalProjeto } from "../_helpers/modal/conteudo_modal/add_editar_projeto";
import { Header } from "../_helpers/header";
import { DadosPessoais } from "../_helpers/meus-projetos/cabecalho";
import clsx from "clsx";
import { Projetos } from "../_helpers/meus-projetos/projetos";

function MeusProjetosPage() {
  const projetos: any[] = [
    {
      nomeUsuario: "maria luisa",
      imgUsuario:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      tituloProjeto: "projeto em next",
      imgProjeto:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      dataProjeto: "14/12",
      tags: ["javascript", "next"],
    },
    {
      nomeUsuario: "maria luisa",
      imgUsuario:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      tituloProjeto: "projeto em next",
      imgProjeto:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      dataProjeto: "14/12",
      tags: ["javascript", "next"],
    },
    {
      nomeUsuario: "maria luisa",
      imgUsuario:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      tituloProjeto: "projeto em next",
      imgProjeto:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      dataProjeto: "14/12",
      tags: ["javascript", "next"],
    },
    {
      nomeUsuario: "maria luisa",
      imgUsuario:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      tituloProjeto: "projeto em next",
      imgProjeto:
        "https://img.redbull.com/images/c_crop,w_4160,h_2080,x_0,y_698,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/10/16/urwbcyb8ld26j0cuhhfr/surfe-eclipse-italo-ferreira-1",
      dataProjeto: "14/12",
      tags: ["javascript", "next"],
    },
  ];
  // const projetos: any[] = [];
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    | "editado"
    | "adicionado"
    | "deletado"
    | "confirmar_deletar"
    | "editar_projeto"
    | "add_projeto"
    | ""
  >("");

  function defModal(
    modal:
      | "editado"
      | "adicionado"
      | "deletado"
      | "confirmar_deletar"
      | "add_projeto"
      | "editar_projeto"
      | ""
  ) {
    switch (modal) {
      case "editado":
        return <ConteudoModalSucesso titulo={defTituloModalSucesso(modal)} />;
      case "adicionado":
        return <ConteudoModalSucesso titulo={defTituloModalSucesso(modal)} />;
      case "deletado":
        return <ConteudoModalSucesso titulo={defTituloModalSucesso(modal)} />;
      case "confirmar_deletar":
        return (
          <ConteudoModalConfirmarDeletar
            setIsOpen={setIsOpen}
            setModal={setModal}
          />
        );
      case "add_projeto":
        return (
          <ConteudoModalProjeto setIsOpen={setIsOpen} setModal={setModal} />
        );
      case "editar_projeto":
        return (
          <ConteudoModalProjeto
            projeto={projetos[0]}
            setIsOpen={setIsOpen}
            setModal={setModal}
          />
        );
      default:
        return <></>;
    }
  }

  function defTituloModalSucesso(
    modal: "editado" | "adicionado" | "deletado" | ""
  ) {
    switch (modal) {
      case "editado":
        return "Edição concluída com sucesso!";
      case "adicionado":
        return "Projeto adicionado com sucesso!";
      case "deletado":
        return "Projeto deletado com sucesso!";
      default:
        return "";
    }
  }

  return (
    <MeusProjetosPageLayout>
      <Header />
      <ComponenteModal isOpen={isOpen} setIsOpen={setIsOpen}>
        {defModal(modal)}
      </ComponenteModal>
      <div
        className={clsx(
          "max-w-6xl w-full flex flex-col items-center justify-between gap-14",
          "mx-auto py-4 lg:p-6"
        )}
      >
        <DadosPessoais setIsOpen={setIsOpen} setModal={setModal} />
        <Projetos
          projetos={projetos}
          setIsOpen={setIsOpen}
          setModal={setModal}
        />
      </div>
    </MeusProjetosPageLayout>
  );
}

export default MeusProjetosPage;
