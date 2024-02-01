import { ColecoesIcon } from "@/app/_helpers/svg/colecoesIcon";
import { Button, TextField, Typography, styled } from "@mui/material";
import clsx from "clsx";
import projeto_generico from "@/app/_helpers/assets/projeto_generico.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjetosAPI } from "@/services/api_projetos";
import { ProjetoProps } from "@/app/@types/Projetos";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function ConteudoModalProjeto({ projeto }: { projeto?: any }) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhMmI2YzRjLTdjNDUtNDMxZS04MWEwLTdhMjgwNWVlMGYwNSIsImlhdCI6MTcwNjgxODI2OCwiZXhwIjoxNzA2OTA0NjY4LCJzdWIiOiIyYTJiNmM0Yy03YzQ1LTQzMWUtODFhMC03YTI4MDVlZTBmMDUifQ.t2YuAQ8yfu1Lb-PIh2iawa8XpXK2YcvAL5S9omj2LJE";
  const [tituloProjeto, setTituloProjeto] = useState(projeto?.tituloProjeto);
  const [tagsProjeto, setTagsProjeto] = useState(projeto?.tags);
  const [linkProjeto, setLinkProjeto] = useState(projeto?.linkProjeto);
  const [descricaoProjeto, setDescricaoProjeto] = useState(
    projeto?.descricaoProjeto
  );
  const [imgProjeto, setImgProjeto] = useState(projeto?.imgProjeto);

  useEffect(() => {
    console.log(projeto);
  }, []);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (projeto != undefined) {
      console.log("entrou errado");
      //adicionar
      return;
    } else {
      console.log("entrou");
      const novoProjeto: ProjetoProps = {
        titulo: tituloProjeto,
        tags: tagsProjeto,
        link: linkProjeto,
        descricao: descricaoProjeto,
        foto: imgProjeto,
        usuario_id: "2a2b6c4c-7c45-431e-81a0-7a2805ee0f05",
      };
      try {
        const response = ProjetosAPI.CriarProjeto({
          token,
          projeto: novoProjeto,
        }).then((response) => {
          console.log("projeto criado", response);
        });
        //adicionar
      } catch (error) {
        console.log("erro", error);
      }
    }
  }

  return (
    <>
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
          <form
            onSubmit={handleSubmit}
            className="w-1/2 flex flex-col justify-between lg:w-full lg:gap-4"
          >
            <TextField
              id="outlined-basic"
              label="Título"
              placeholder="Título"
              variant="outlined"
              onChange={(e) => setTituloProjeto(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Tags"
              placeholder="Tags"
              variant="outlined"
              onChange={(e) => setTagsProjeto(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Link"
              placeholder="Link"
              variant="outlined"
              onChange={(e) => setLinkProjeto(e.target.value)}
            />
            <TextField
              id="outlined-textarea"
              label="Descrição"
              placeholder="Placeholder"
              multiline
              rows={3}
              onChange={(e) => setDescricaoProjeto(e.target.value)}
            />
            <Button component="label" variant="contained">
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => setImgProjeto(e)}
              />
            </Button>
            <button type="submit">adicionar</button>
          </form>
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
            type="submit"
          >
            CANCELAR
          </Button>
        </div>
      </div>
    </>
  );
}
