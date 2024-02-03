"use client";

import MeusProjetosPageLayout from "@/app/meus-projetos/layout";
import ComponenteModal from "@/app/_helpers/modal";
import { useEffect, useState } from "react";
import { ConteudoModalSucesso } from "../_helpers/modal/conteudo_modal/sucesso";
import { ConteudoModalConfirmarDeletar } from "../_helpers/modal/conteudo_modal/confirmar_deletar";
import { ConteudoModalProjeto } from "../_helpers/modal/conteudo_modal/add_editar_projeto";
import { Header } from "../_helpers/header";
import { DadosPessoais } from "../_helpers/meus-projetos/cabecalho";
import clsx from "clsx";
import { Projetos } from "../_helpers/meus-projetos/projetos";
import { ProjetosAPI } from "@/services/api_projetos";
import { ProjetoProps } from "../@types/Projetos";

function MeusProjetosPage() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ5NmFhOTY1LTI2MjEtNDJkZC1hMzI1LWJkZWM0MzhlNzFlNyIsImlhdCI6MTcwNjkwNTIxMywiZXhwIjoxNzA2OTkxNjEzLCJzdWIiOiJkOTZhYTk2NS0yNjIxLTQyZGQtYTMyNS1iZGVjNDM4ZTcxZTcifQ.Qz8Scg8Ppkz76-nbQixRi2pI2dBNug7_zKL3GKIch7M";
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

  const listarMeusProjetos = (usuario_id: string) => {
    const response = ProjetosAPI.ListarProjetosPeloId({
      token,
      usuario_id,
    }).then((response) => {
      setProjetos([...response]);
    });
    return response;
  };

  useEffect(() => {
    listarMeusProjetos("7050ad85-9567-4856-914c-21cc699e5e19");
  }, []);

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
