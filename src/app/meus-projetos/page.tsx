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
import { useAtomValue } from "jotai";
import { idSelecionadoAtom } from "../_helpers/meus-projetos/card_projeto/menu_editar/atoms";
import { useSession } from "next-auth/react";
import { ConteudoModalDescobrirProjeto } from "../_helpers/modal/conteudo_modal/descobrir_projeto";
// import { ConteudoModalVisualizarProjeto } from "../_helpers/modal/visualizar_projeto";

function MeusProjetosPage() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const idSelecionado = useAtomValue(idSelecionadoAtom);
  const { data: session } = useSession();
  const token = session?.user.token ? session.user.token : "";
  const user_id = session?.user.usuario.id ? session.user.usuario.id : "";
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    | "editado"
    | "adicionado"
    | "deletado"
    | "confirmar_deletar"
    | "editar_projeto"
    | "add_projeto"
    | ""
    | "visualizar_projeto"
  >("");

  function defModal(
    modal:
      | "editado"
      | "adicionado"
      | "deletado"
      | "confirmar_deletar"
      | "add_projeto"
      | "editar_projeto"
      | "visualizar_projeto"
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
            projeto={projetos.find((projeto) => projeto.id === idSelecionado)}
            setIsOpen={setIsOpen}
            setModal={setModal}
          />
        );
      // case "visualizar_projeto":
      //   return (
      //     // <ConteudoModalVisualizarProjeto
      //     //   projeto={projetos.find((projeto) => projeto.id === idSelecionado)}
      //     //   setIsOpen={setIsOpen}
      //     //   setModal={setModal}
      //     // />
      //   // );
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
    listarMeusProjetos(user_id);
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
