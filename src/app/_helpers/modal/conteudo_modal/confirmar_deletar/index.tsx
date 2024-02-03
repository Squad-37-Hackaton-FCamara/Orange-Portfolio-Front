import { idSelecionadoAtom } from "@/app/_helpers/meus-projetos/card_projeto/menu_editar/atoms";
import { ProjetosAPI } from "@/services/api_projetos";
import { DeleteSharp } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Dispatch, SetStateAction, useState } from "react";

export function ConteudoModalConfirmarDeletar({
  setIsOpen,
  setModal,
}: {
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
    >
  >;
}) {
  const [idSelecionado, setIdSelecionado] = useAtom(idSelecionadoAtom);
  const [loading, setLoading] = useState(false);
  const [erroView, setErroView] = useState(false);

  function handleClose() {
    window.location.reload();
  }

  async function deletarProjeto(id: string) {
    setLoading(true);
    try {
      await ProjetosAPI.DeletarProjeto(idSelecionado);
      setLoading(false);
      console.log("Projeto deletado com sucesso");
      setModal("deletado");
      setIsOpen(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 ">
      {erroView && <p>Ocorreu um erro ao excluir seu projeto</p>}
      <Typography component="h1" className="text-2xl text-color-neutral-110">
        Deseja excluir?
      </Typography>
      <Typography component="p" className="text-neutral-110 max-w-[337px]">
        Se você prosseguir irá excluir o projeto do seu portfólio
      </Typography>
      <div className="flex gap-4">
        <Button
          size="large"
          color="secondary"
          variant="contained"
          className={clsx(
            "bg-color-secondary-100 hover:bg-color-secondary-110",
            "text-[15px] font-medium text-color-neutral-60"
          )}
          onClick={() => {
            deletarProjeto(idSelecionado);
          }}
        >
          {loading ? <CircularProgress size={16} /> : "EXCLUIR"}
        </Button>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          className={clsx(
            "bg-color-neutral-80 hover:bg-color-neutral-100",
            "text-[15px] font-medium text-color-neutral-110 hover:text-color-neutral-60"
          )}
          onClick={() => handleClose()}
        >
          CANCELAR
        </Button>
      </div>
    </div>
  );
}
