import { CheckIcon } from "@/app/_helpers/svg/checkIcon";
import { Button, Typography } from "@mui/material";
import clsx from "clsx";

export function ConteudoModalSucesso({ titulo }: { titulo: string }) {
  function handleClose() {
    window.location.reload();
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <Typography
        component="h1"
        className={clsx("text-2xl text-center", "text-color-neutral-110")}
      >
        {titulo}
      </Typography>
      <div
        className={clsx(
          "w-fit h-fit flex items-center justify-center",
          "p-[1px] rounded-full",
          "bg-color-success-110"
        )}
      >
        <CheckIcon size={40} />
      </div>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        className={clsx(
          "bg-color-secondary-100 hover:bg-color-secondary-110",
          "text-[15px] font-medium text-color-neutral-60"
        )}
        onClick={() => handleClose()}
      >
        VOLTAR PARA PROJETOS
      </Button>
    </div>
  );
}
