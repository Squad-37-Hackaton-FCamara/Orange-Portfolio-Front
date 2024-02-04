"use client";

import ComponenteModal from "@/app/_helpers/modal";
import MeusProjetosPageLayout from "@/app/meus-projetos/layout";
import { ProjetosAPI } from "@/services/api_projetos";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ProjetoProps } from "../@types/Projetos";
import { Header } from "../_helpers/header";
import { DadosPessoais } from "../_helpers/meus-projetos/cabecalho";
import { idSelecionadoAtom } from "../_helpers/meus-projetos/card_projeto/menu_editar/atoms";
import { Projetos } from "../_helpers/meus-projetos/projetos";
import { ConteudoModalProjeto } from "../_helpers/modal/conteudo_modal/add_editar_projeto";
import { ConteudoModalConfirmarDeletar } from "../_helpers/modal/conteudo_modal/confirmar_deletar";
import { ConteudoModalSucesso } from "../_helpers/modal/conteudo_modal/sucesso";
import { ConteudoModalVisualizarProjeto } from "../_helpers/modal/visualizar_projeto";
// import { ConteudoModalVisualizarProjeto } from "../_helpers/modal/visualizar_projeto";

function MeusProjetosPage() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const [projeto, setProjeto] = useState<any>({});
  const idSelecionado = useAtomValue(idSelecionadoAtom);
  const { data: session } = useSession();
  const token = session?.user.token ? session.user.token : "";
  const user_id = session?.user.usuario.id ? session.user.usuario.id : "";
  const [isOpen, setIsOpen] = useState(false);
  const [tagBusca, setTagBusca] = useState("");
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
      case "visualizar_projeto":
        return (
          <ConteudoModalVisualizarProjeto
            projeto={projeto}
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
    console.log("ENTROU");
    const response = ProjetosAPI.ListarProjetosPeloId({
      usuario_id,
      tagBusca,
    }).then((response) => {
      setProjetos([...response]);
    });
    return response;
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      session?.user.usuario &&
        listarMeusProjetos(session?.user.usuario.id as string);
    }, 200);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, tagBusca]);

  return (
    <MeusProjetosPageLayout>
      <Header />
      <ComponenteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        add_edit={modal == "add_projeto" || modal == "editar_projeto"}
      >
        {defModal(modal)}
      </ComponenteModal>
      <div
        className={clsx(
          "max-w-6xl w-full flex flex-col items-center justify-between gap-14",
          "mx-auto py-4 lg:p-6"
        )}
        suppressHydrationWarning
      >
        <DadosPessoais setIsOpen={setIsOpen} setModal={setModal} />
        <Projetos
          projetos={projetos}
          setIsOpen={setIsOpen}
          setModal={setModal}
          setTagBusca={setTagBusca}
          tagBusca={tagBusca}
          setProjeto={setProjeto}
        />
      </div>
    </MeusProjetosPageLayout>
  );
}

export default MeusProjetosPage;
