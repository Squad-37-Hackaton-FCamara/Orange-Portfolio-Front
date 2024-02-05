import { Typography } from "@mui/material";
import { ColecoesIcon } from "../../svg/colecoesIcon";
import clsx from "clsx";

export function CardPrimeiroProjeto() {
  return (
    <div
      className={clsx(
        "max-w-[389px] w-full flex flex-col items-center gap-4",
        "px-[60px] py-[91px]",
        "bg-color-neutral-70",
        "lg:px-[21px] lg:py-[68px]"
      )}
    >
      <ColecoesIcon size={46} />
      <Typography component="h6" className="text-color-neutral-120">
        Adicione seu primeiro projeto
      </Typography>
      <Typography
        component="p"
        className="text-sm text-color-neutral-120 lg:tracking-[.25px]"
      >
        Compartilhe seu talento com milhares de pessoas
      </Typography>
    </div>
  );
}
