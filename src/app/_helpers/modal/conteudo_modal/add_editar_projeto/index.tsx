import { CloseIcon } from "@/app/_helpers/svg/closeIcon";
import { Typography } from "@mui/material";

import { Dispatch, SetStateAction, useState } from "react";
import { FormAddEditarProjeto } from "./Form";

export function ConteudoModalProjeto({
  setIsOpen,
  setModal,
  projeto,
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
  projeto?: any;
}) {
  // TODO retirar token e nome quando implementado provider de usuário

  const [erroView, setErroView] = useState(false);
  const [erroMsg, setErroMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log(projeto);
  // }, []);

  return (
    <>
      <div className="relative w-[890px] flex flex-col gap-6 lg:w-full">
        <Typography component="h1" className="text-2xl text-color-neutral-110">
          {projeto ? "Editar projeto" : "Adicionar projeto"}
        </Typography>
        <div
          data-error={erroView}
          className="w-full hidden data-[error=true]:flex"
          onClick={() => setErroView(false)}
        >
          <div className="absolute flex gap-4 bg-color-error-80 py-4 px-2 top-0 left-0 z-10">
            <p>{erroMsg}</p>
            <CloseIcon />
          </div>
        </div>
        <FormAddEditarProjeto
          projeto={projeto}
          setErroMsg={setErroMsg}
          setErroView={setErroView}
          setIsOpen={setIsOpen}
          setModal={setModal}
        />
      </div>
    </>
  );
}
