import { SetaIcon } from "@/app/_helpers/svg/setaIcon";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

export function MenuEditar({
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
    <div
      className={clsx(
        "w-[208px] absolute right-4 top-[50px]",
        "flex flex-col gap-2",
        "py-4 rounded-lg",
        "bg-color-neutral-60 shadow-lg"
      )}
    >
      <div className="absolute right-4 top-[-10px]">
        <SetaIcon />
      </div>
      <button
        onClick={() => {
          setModal("editar_projeto");
          setIsOpen(true);
        }}
        className={clsx(
          "w-full flex justify-left",
          "py-2 px-6",
          "hover:bg-color-secondary-60"
        )}
      >
        Editar
      </button>
      <button
        onClick={() => {
          setModal("confirmar_deletar");
          setIsOpen(true);
        }}
        className={clsx(
          "w-full flex justify-left",
          "py-2 px-6",
          "hover:bg-color-secondary-60"
        )}
      >
        Excluir
      </button>
    </div>
  );
}