import { ColecoesIcon } from "@/app/_helpers/svg/colecoesIcon";
import { Button, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import projeto_generico from "@/app/_helpers/assets/projeto_generico.png";
import Image from "next/image";

export function ConteudoModalProjeto({ projeto }: { projeto?: any }) {
  return (
    <div className="w-[890px] flex flex-col gap-6 lg:w-full">
      <Typography component="h1" className="text-2xl text-color-neutral-110">
        {projeto ? "Editar projeto" : "Adicionar projeto"}
      </Typography>
      <div className="flex justify-between gap-4 lg:flex-col-reverse">
        <div className="w-1/2 flex flex-col gap-4 lg:w-full">
          <label className="text-color-neutral-110">
            Selecione o conteúdo que você deseja fazer upload
          </label>
          {projeto ? (
            <Image src={projeto_generico} alt="imagem projeto" />
          ) : (
            <>
              <div className="w-fit flex flex-col items-center px-[60px] py-[91px] bg-color-neutral-70 lg:px-1 lg:px-0">
                <ColecoesIcon size={46} />
                <Typography
                  component="p"
                  className="text-sm text-color-neutral-120"
                >
                  Compartilhe seu talento com milhares de pessoas
                </Typography>
              </div>
            </>
          )}
        </div>
        <div className="w-1/2 flex flex-col justify-between lg:w-full lg:gap-4">
          <TextField
            id="outlined-basic"
            label="Título"
            placeholder="Título"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Tags"
            placeholder="Tags"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Link"
            placeholder="Link"
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="Descrição"
            placeholder="Placeholder"
            multiline
            rows={3}
          />
        </div>
      </div>
      <Typography component="p" className="text-color-neutral-110">
        Visualizar publicação
      </Typography>
      <div className="flex gap-4">
        <Button
          type="submit"
          size="large"
          color="secondary"
          variant="contained"
          className={clsx(
            "bg-color-secondary-100 hover:bg-color-secondary-110",
            "text-[15px] font-medium text-color-neutral-60"
          )}
        >
          SALVAR
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
        >
          CANCELAR
        </Button>
      </div>
    </div>
  );
}
