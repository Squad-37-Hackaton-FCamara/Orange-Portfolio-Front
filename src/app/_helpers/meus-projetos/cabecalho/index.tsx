import Image from "next/image";
import img_perfil from "@/app/_helpers/assets/perfil.png";
import { Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export function Cabecalho({
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
  return (
    <div>
      <div className="flex items-center gap-[42px] mt-[112px]">
        <Image
          src={img_perfil}
          alt="Imagem de perfil"
          className="w-[122px] rounded-full"
        />

        <div className="flex flex-col">
          <Typography
            variant="h5"
            className="text-color-neutral-120 leading-none mb-4"
          >
            Camila Soares
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-color-neutral-130 leading-none opacity-50 mb-6"
          >
            Brasil
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className="bg-color-secondary-100 text-color-neutral-60"
            onClick={() => {
              setModal("add_projeto");
              setIsOpen(true);
            }}
          >
            ADICIONAR PROJETO
          </Button>
        </div>
      </div>
    </div>
  );
}
