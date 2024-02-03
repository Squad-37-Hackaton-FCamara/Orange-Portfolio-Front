import projeto_generico from "@/app/_helpers/assets/projeto_generico.png";
import { CloseIcon } from "@/app/_helpers/svg/closeIcon";
import { ColecoesIcon } from "@/app/_helpers/svg/colecoesIcon";
import { ProjetosAPI } from "@/services/api_projetos";
import styled from "@emotion/styled";
import { X } from "@mui/icons-material";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import sem_imagem from "@/app/_helpers/assets/sem_imagem.png";

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  cursor: "pointer",
});

export function ConteudoModalProjeto({
  setIsOpen,
  setModal,
  projeto,
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
  projeto?: any;
}) {
  // TODO retirar token e nome quando implementado provider de usuário
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwNTBhZDg1LTk1NjctNDg1Ni05MTRjLTIxY2M2OTllNWUxOSIsImlhdCI6MTcwNjkxMjcwMSwiZXhwIjoxNzA2OTk5MTAxLCJzdWIiOiI3MDUwYWQ4NS05NTY3LTQ4NTYtOTE0Yy0yMWNjNjk5ZTVlMTkifQ.8KF-T_-r9o_9xS0Zize8NljTGouGa1tWGbS5fB-OKc8";
  const nome = "Maria Luisa";

  //qnd tiver o context:
  // const {token, nome} = useContextSelector(UserContext, context => context)

  const [tituloProjeto, setTituloProjeto] = useState(
    projeto?.tituloProjeto || ""
  );
  const [tagsProjeto, setTagsProjeto] = useState(projeto?.tags || "");
  const [linkProjeto, setLinkProjeto] = useState(projeto?.linkProjeto || "");
  const [descricaoProjeto, setDescricaoProjeto] = useState(
    projeto?.descricaoProjeto || ""
  );

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState<File | null>(null);

  const [erroView, setErroView] = useState(false);
  const [erroMsg, setErroMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFile(e: any) {
    console.log(e.target.files[0]);
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

  // useEffect(() => {
  //   console.log(projeto);
  // }, []);

  async function handleSubmit(e: FormEvent) {
    setLoading(true);
    e.preventDefault();
    if (projeto != undefined) {
      console.log("entrou em editar");
      // editar projeto
      return;
    }

    try {
      console.log("entrou em adicionar", token);
      const listaTags = tagsProjeto.split(",").map((tag: string) => tag.trim());

      if (listaTags.length > 2) {
        console.log("erro de tags");
        setLoading(false);
        setErroView(true);
        setErroMsg(
          "Você excedeu o limite máximo de 2 tags por projeto, por favor, selecione apenas as tags mais relevantes."
        );
        return;
      }

      if (imageAvatar) {
        await ProjetosAPI.CriarProjeto({
          token,
          projeto: {
            autor: nome,
            titulo: tituloProjeto,
            tags: listaTags,
            link: linkProjeto,
            descricao: descricaoProjeto,
            foto: imageAvatar,
            usuario_id: "7050ad85-9567-4856-914c-21cc699e5e19",
          },
        });
      }
      setModal("adicionado");
      console.log("Projeto cadastrado com sucesso"); // TODO retirar quando implementar resposta visual
      setLoading(false);
    } catch (error) {
      setErroView(true);
      setErroMsg("Erro ao cadastrar projeto, por favor, tente novamente");
      console.log("erro", error); // TODO retirar quando implementar resposta visual
      setLoading(false);
    }
  }

  return (
    <>
      <div className="relative w-[890px] flex flex-col gap-6 lg:w-full">
        <Typography component="h1" className="text-2xl text-color-neutral-110">
          {projeto ? "Editar projeto" : "Adicionar projeto"}
        </Typography>
        <div
          data-error={erroView}
          className="w-full hidden data-[error=true]:flex"
          onClick={() => setErroView(false)}
        >
          <div className="absolute flex gap-4 bg-color-error-80 py-4 px-2 top-0 left-0 z-10">
            <p>{erroMsg}</p>
            <CloseIcon />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between gap-4 lg:flex-col-reverse"
        >
          <div className="flex flex-col w-full">
            <div className="flex gap-6 lg:flex-col-reverse ">
              <div className="w-1/2 flex flex-col gap-4 lg:w-full">
                <label className="text-color-neutral-110">
                  Selecione o conteúdo que você deseja fazer upload
                </label>
                {projeto ? (
                  <Image src={projeto_generico} alt="imagem projeto" />
                ) : (
                  <>
                    {avatarUrl ? (
                      <div className="relative">
                        <Image
                          src={avatarUrl}
                          alt="Imagem do projeto"
                          width={394}
                          height={268}
                          className="w-[433px] h-[268px] lg:w-[394px]  object-cover"
                        />
                        <div
                          className="absolute top-4 right-4 z-10 cursor-pointer"
                          onClick={() => {
                            setAvatarUrl("");
                            setImageAvatar(null);
                          }}
                        >
                          <CloseIcon color="black" />
                        </div>
                      </div>
                    ) : (
                      <Button
                        component="label"
                        className={clsx(
                          "relative w-fit flex flex-col items-center",
                          "px-[70px] py-[91px] lg:px-1 lg:px-[10px]",
                          "bg-color-neutral-70 hover:bg-color-neutral-70",
                          "cursor-pointer"
                        )}
                      >
                        <VisuallyHiddenInput
                          type="file"
                          onChange={handleFile}
                          className="w-full h-full"
                        />
                        <ColecoesIcon size={46} />
                        <Typography
                          component="p"
                          className="text-sm text-color-neutral-120 lg:text-center"
                        >
                          Compartilhe seu talento com milhares de pessoas
                        </Typography>
                      </Button>
                    )}
                  </>
                )}
              </div>
              <div className="w-1/2 flex flex-col justify-between lg:w-full lg:gap-4">
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
              </div>
            </div>
            <Typography
              component="p"
              className="text-color-neutral-110 cursor-pointer my-4"
              onClick={() => console.log("oi")}
            >
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
                {loading ? <CircularProgress size={16} /> : "SALVAR"}
              </Button>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                className={clsx(
                  "bg-color-neutral-80 hover:bg-color-neutral-100",
                  "text-[15px] font-medium text-color-neutral-110 hover:text-color-neutral-60"
                )}
                onClick={() => setIsOpen(false)}
              >
                CANCELAR
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
