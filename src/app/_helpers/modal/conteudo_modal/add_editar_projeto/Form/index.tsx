import { ProjetoProps } from "@/app/@types/Projetos";
import projeto_generico from "@/app/_helpers/assets/projeto_generico.png";
import { CloseIcon } from "@/app/_helpers/svg/closeIcon";
import { ColecoesIcon } from "@/app/_helpers/svg/colecoesIcon";
import { ProjetosAPI } from "@/services/api_projetos";
import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

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

export function FormAddEditarProjeto({
  projeto,
  setErroMsg,
  setErroView,
  setIsOpen,
  setModal,
}: {
  projeto?: ProjetoProps;
  setErroMsg: Dispatch<SetStateAction<string>>;
  setErroView: Dispatch<SetStateAction<boolean>>;
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
}) {
  const { data: session } = useSession();

  const autor = `${session?.user.usuario.nome} ${session?.user.usuario.sobrenome}`;
  const usuario_id = session?.user.usuario.id;

  const [tituloProjeto, setTituloProjeto] = useState(projeto?.titulo || "");
  const [tagsProjeto, setTagsProjeto] = useState(projeto?.tags || "");
  const [linkProjeto, setLinkProjeto] = useState(projeto?.link || "");
  const [descricaoProjeto, setDescricaoProjeto] = useState(
    projeto?.descricao || ""
  );

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState<File | null>(null);

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

  async function handleSubmit(e: FormEvent) {
    setLoading(true);
    e.preventDefault();
    if (projeto != undefined) {
      console.log("entrou em editar");
      // editar projeto
      return;
    }

    try {
      let listaTags: string[] = [];
      if (typeof tagsProjeto === "string") {
        listaTags = tagsProjeto.split(",").map((tag: string) => tag.trim());
      }

      if (listaTags.length > 2) {
        console.log("erro de tags");
        setLoading(false);
        setErroView(true);
        setErroMsg(
          "Você excedeu o limite máximo de 2 tags por projeto, por favor, selecione apenas as tags mais relevantes."
        );
        return;
      }

      if (imageAvatar && usuario_id) {
        await ProjetosAPI.CriarProjeto({
          projeto: {
            autor: autor,
            titulo: tituloProjeto,
            tags: listaTags,
            link: linkProjeto,
            descricao: descricaoProjeto,
            foto: imageAvatar,
            usuario_id: session?.user.usuario.id,
          },
        });
      }
      setModal("adicionado");
      setLoading(false);
    } catch (error) {
      setErroView(true);
      setErroMsg("Erro ao cadastrar projeto, por favor, tente novamente");
      setLoading(false);
      console.log(error);
    }
  }

  return (
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
  );
}
