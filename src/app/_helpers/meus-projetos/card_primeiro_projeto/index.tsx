import { Typography } from "@mui/material";
import { ColecoesIcon } from "../../svg/colecoesIcon";

export function CardPrimeiroProjeto() {
  return (
    <div className="w-fit flex flex-col items-center gap-4 px-[60px] py-[91px] bg-color-neutral-70">
      <ColecoesIcon size={46} />
      <Typography component="h6" className="text-color-neutral-120">
        Adicione seu primeiro projeto
      </Typography>
      <Typography component="p" className="text-sm text-color-neutral-120">
        Compartilhe seu talento com milhares de pessoas
      </Typography>
    </div>
  );
}
