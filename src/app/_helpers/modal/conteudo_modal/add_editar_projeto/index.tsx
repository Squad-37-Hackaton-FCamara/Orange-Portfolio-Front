import projeto_generico from "@/app/_helpers/assets/projeto_generico.png";
import { ColecoesIcon } from "@/app/_helpers/svg/colecoesIcon";
import { ProjetosAPI } from "@/services/api_projetos";
import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

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
  // TODO retirar token quando implementado provider de usuário
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhMmI2YzRjLTdjNDUtNDMxZS04MWEwLTdhMjgwNWVlMGYwNSIsImlhdCI6MTcwNjgxODI2OCwiZXhwIjoxNzA2OTA0NjY4LCJzdWIiOiIyYTJiNmM0Yy03YzQ1LTQzMWUtODFhMC03YTI4MDVlZTBmMDUifQ.t2YuAQ8yfu1Lb-PIh2iawa8XpXK2YcvAL5S9omj2LJE";
  const [tituloProjeto, setTituloProjeto] = useState(projeto?.tituloProjeto);
  const [tagsProjeto, setTagsProjeto] = useState(projeto?.tags);
  const [linkProjeto, setLinkProjeto] = useState(projeto?.linkProjeto);
  const [descricaoProjeto, setDescricaoProjeto] = useState(
    projeto?.descricaoProjeto
  );
  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState<File | null>(null);

  function handleFile(e: any) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  useEffect(() => {
    console.log(projeto);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (projeto != undefined) {
      console.log("entrou errado");
      //adicionar
      return;
    }

    try {
      const listaTags = tagsProjeto.split(",").map((tag: string) => tag.trim());
      if (imageAvatar) {
        await ProjetosAPI.CriarProjeto({
          token,
          projeto: {
            titulo: tituloProjeto,
            tags: listaTags,
            link: linkProjeto,
            descricao: descricaoProjeto,
            foto: imageAvatar,
            usuario_id: "2a2b6c4c-7c45-431e-81a0-7a2805ee0f05",
          },
        });
      }
      console.log("Projeto cadastrado com sucesso"); // TODO retirar quando implementar resposta visual
    } catch (error) {
      console.log("erro", error); // TODO retirar quando implementar resposta visual
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
              value={tituloProjeto}
              onChange={(e: any) => setTituloProjeto(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Tags"
              placeholder="Tags"
              variant="outlined"
              value={tagsProjeto}
              onChange={(e: any) => setTagsProjeto(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Link"
              placeholder="Link"
              variant="outlined"
              value={linkProjeto}
              onChange={(e: any) => setLinkProjeto(e.target.value)}
            />
            <TextField
              id="outlined-textarea"
              label="Descrição"
              placeholder="Placeholder"
              multiline
              rows={3}
              value={descricaoProjeto}
              onChange={(e: any) => setDescricaoProjeto(e.target.value)}
            />
            <Button component="label" variant="contained">
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFile} />
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
