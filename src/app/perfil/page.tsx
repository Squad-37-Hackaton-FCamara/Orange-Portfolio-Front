"use client";

import PerfilPageLayout from "@/app/perfil/layout";
import Modal from "@/app/_helpers/modal";
import { Button } from "@mui/material";
import { useState } from "react";
import { ConteudoModalSucesso } from "../_helpers/modal/conteudo_modal/sucesso";
import { ConteudoModalConfirmarDeletar } from "../_helpers/modal/conteudo_modal/confirmar_deletar";

function PerfilPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    "editado" | "adicionado" | "deletado" | "confirmar_deletar" | ""
  >("");

  function definirModal(modal: "editado" | "adicionado" | "deletado" | "") {
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
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {modal == "confirmar_deletar" ? (
            <ConteudoModalConfirmarDeletar />
          ) : (
            <ConteudoModalSucesso titulo={definirModal(modal)} />
          )}
        </Modal>
      </div>
    </PerfilPageLayout>
  );
}

export default PerfilPage;
