import { ProjetoProps } from "@/app/@types/Projetos";
import img_perfil from "@/app/_helpers/assets/perfil.png";
import { formatarData } from "@/app/util/formatarData";
import { Chip, Typography } from "@mui/material";
import Image from "next/image";

export function CabecalhoModalVisualizarProjeto({
  projeto,
}: {
  projeto: ProjetoProps;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="rounded-full overflow-hidden">
          <Image
            src={img_perfil}
            alt="Imagem do usuário"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-color-neutral-120">{projeto.autor}</p>
          <p className="text-color-neutral-110">
            {formatarData(projeto.createAt as string)}
          </p>
        </div>
      </div>
      <Typography
        variant="h1"
        className="text-2xl text-color-neutral-130 text-center"
      >
        {projeto.titulo}
      </Typography>
      <div className="flex gap-2">
        {projeto.tags.map((tag, index) => {
          return <Chip key={index} label={tag} size="medium" />;
        })}
      </div>
    </div>
  );
}
