import { SetStateAction, useState } from "react";
import { EditarIcon } from "../../svg/editarIcon";
import Image from "next/image";
import projeto_generico from "@/app/_helpers/assets/projeto_generico.png";
import img_perfil from "@/app/_helpers/assets/perfil.png";
import { Chip, Typography } from "@mui/material";
import { Dispatch } from "react";
import clsx from "clsx";

export function ProjetoCard({
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
    >
  >;
}) {
  const [projeto, setProjeto] = useState(true);
  const tags = ["React", "Next", "TypeScript", "JavaScript", "HTML", "CSS"];

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col gap-2">
        <div
          className={clsx(
            "absolute right-4 top-4 flex items-center justify-center",
            "p-[2px] rounded-full",
            "bg-color-secondary-70"
          )}
        >
          <EditarIcon />
        </div>
        <Image
          src={projeto_generico}
          alt="Imagem do projeto"
          className="w-full object-cover"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image
              src={img_perfil}
              alt="Imagem de perfil"
              className="w-6 h-6 rounded-full"
            />
            <Typography variant="subtitle1" className="text-color-neutral-110">
              Camila Soares • 12/23
            </Typography>
          </div>
          <div className="flex gap-2 max-w-[150px] overflow-x-scroll">
            {tags.map((tag, i) => {
              return <Chip key={i} label={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
