import Image from "next/image";
import img_perfil from "@/app/_helpers/assets/perfil.png";
import { Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

export function DadosPessoais({
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
      | "visualizar_projeto"
    >
  >;
}) {
  return (
    <div>
      <div
        className={clsx(
          "flex items-center gap-[42px] mt-[112px]",
          "lg:flex-col lg:gap-4 lg:mt-[56px]"
        )}
      >
        <Image
          src={img_perfil}
          alt="Imagem de perfil"
          className="w-[122px] rounded-full"
        />

        <div className="flex flex-col lg:gap-2">
          <Typography
            variant="h5"
            className="text-color-neutral-120 leading-none mb-4 lg:mb-0"
          >
            Camila Soares
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-color-neutral-130 leading-none opacity-50 mb-6 lg:mb-0"
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
