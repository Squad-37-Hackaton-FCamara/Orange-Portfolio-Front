import { CheckIcon } from "@/app/_helpers/svg/checkIcon";
import { Button, Typography } from "@mui/material";
import clsx from "clsx";

export function ConteudoModalConfirmarDeletar() {
  function handleClose() {
    window.location.reload();
  }

  return (
    <div className="flex flex-col gap-6 ">
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
          onClick={() => handleClose()}
        >
          EXCLUIR
        </Button>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          disabled={true}
          className={clsx(
            "bg-color-secondary-100 hover:bg-color-secondary-110",
            "text-[15px] font-medium text-color-neutral-60"
          )}
          onClick={() => handleClose()}
        >
          CANCELAR
        </Button>
      </div>
    </div>
  );
}