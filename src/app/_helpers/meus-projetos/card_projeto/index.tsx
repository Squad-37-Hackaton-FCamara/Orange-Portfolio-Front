import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import { EditarIcon } from "../../svg/editarIcon";
import { SetaIcon } from "../../svg/setaIcon";
import { Dispatch, SetStateAction, useState } from "react";
import { MenuEditar } from "./menu_editar";
import { useWindowDimensions } from "@/services/window_size";

interface ICartaoPortfolioMeusProjetos {
  nomeUsuario: string;
  imgUsuario?: string;
  tituloProjeto: string;
  imgProjeto: string;
  dataProjeto: string;
  tags: string[];
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
}

export default function CartaoPortifolioMeusProjetos({
  ...rest
}: ICartaoPortfolioMeusProjetos) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <Card className="relative w-full flex flex-col gap-2 shadow-none">
      <CardActionArea>
        <div
          className={clsx(
            "absolute right-4 top-4 flex items-center justify-center",
            "p-[2px] rounded-full",
            "bg-color-secondary-70"
          )}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <EditarIcon />
        </div>
        {menuIsOpen && (
          <MenuEditar setIsOpen={rest.setIsOpen} setModal={rest.setModal} />
        )}
      </CardActionArea>
      <CardMedia
        sx={{ height: 258 }}
        component="img"
        image={rest.imgProjeto}
        alt={`imagem projeto ${rest.tituloProjeto}`}
        className="rounded-[4px]"
      />
      <CardContent
        sx={{
          padding: 0,
        }}
      >
        <Grid
          container
          overflow="hidden"
          wrap="nowrap"
          sx={{
            display: "flex",
            alignItems: "center",
            marginBlock: "0.25rem",
            gap: "0.5rem",
            whiteSpace: "nowrap",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              width: "60%",
            }}
          >
            <Avatar
              sx={{ width: 24, height: 24 }}
              src={rest.imgUsuario}
              alt={`imagem usuario ${rest.nomeUsuario}`}
            />
            <Grid overflow="hidden">
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1rem",
                  color: "#515255",
                }}
              >{`${rest.nomeUsuario}`}</Typography>
            </Grid>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "1rem",
                color: "#515255",
              }}
            >{`• ${rest.dataProjeto}`}</Typography>
          </Grid>
          <Grid
            overflow="hidden"
            sx={{
              display: "flex",
              direction: "row-reverse",
              gap: "0.5rem",
            }}
          >
            {rest.tags.map((tag, i) => (
              <Chip key={`${tag}-${i}`} size="medium" label={tag} />
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
