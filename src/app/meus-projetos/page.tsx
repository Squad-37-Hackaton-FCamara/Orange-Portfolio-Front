"use client";

import PerfilPageLayout from "@/app/meus-projetos/layout";
import ComponenteModal from "@/app/_helpers/modal";
import { Button } from "@mui/material";
import { useState } from "react";
import { ConteudoModalSucesso } from "../_helpers/modal/conteudo_modal/sucesso";
import { ConteudoModalConfirmarDeletar } from "../_helpers/modal/conteudo_modal/confirmar_deletar";
import { ConteudoModalAddProjeto } from "../_helpers/modal/conteudo_modal/adicionar_projeto";

function PerfilPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    | "editado"
    | "adicionado"
    | "deletado"
    | "confirmar_deletar"
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
        return <ConteudoModalConfirmarDeletar />;
      case "add_projeto":
        return <ConteudoModalAddProjeto />;
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
    <PerfilPageLayout>
      <div className="flex flex-col gap-4">
        Perfil
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setModal("editado");
            setIsOpen(true);
          }}
          className="text-black"
        >
          <p>Abrir modal de edição</p>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setModal("deletado");
            setIsOpen(true);
          }}
          className="text-black"
        >
          <p>Abrir modal de deletar</p>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setModal("adicionado");
            setIsOpen(true);
          }}
          className="text-black"
        >
          <p>Abrir modal de adicionar</p>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setModal("confirmar_deletar");
            setIsOpen(true);
          }}
          className="text-black"
        >
          <p>Abrir modal de confirmar deletar</p>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setModal("add_projeto");
            setIsOpen(true);
          }}
          className="text-black"
        >
          <p>Abrir modal de adicionar projeto</p>
        </Button>
        <ComponenteModal isOpen={isOpen} setIsOpen={setIsOpen}>
          {defModal(modal)}
        </ComponenteModal>
      </div>
    </PerfilPageLayout>
  );
}

export default PerfilPage;
