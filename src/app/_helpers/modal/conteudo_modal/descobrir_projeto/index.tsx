/* eslint-disable @next/next/no-img-element */
import { formatarData } from "@/app/util/formatarData";
import { Avatar, Chip, Grid, Link, Typography } from "@mui/material";

interface IProjeto {
  autor: string;
  imgUsuario: string;
  titulo: string;
  foto: string;
  createAt: string;
  descricacao: string;
  link: string;
  tags: string[];
}

const tags = ["UX", "Web", "UX", "Web", "UX", "Web", "UX", "Web"];

export function ConteudoModalDescobrirProjeto(projeto: IProjeto) {
  return (
    <Grid
      container
      sx={{
        width: "auto",
        marginTop: "0.5rem",
        marginLeft: "4.375rem",
        marginRight: "4.25rem",
        marginBottom: "3.676rem",
      }}
    >
      <Grid
        sx={{
          width: "54.25rem",
          height: "3.125rem",
          display: "inline-flex",
          padding: "0px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            width: "9.875rem",
            padding: "0px",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Avatar
            sx={{ width: 40, height: 40 }}
            src={projeto.imgUsuario}
            alt={`imagem usuario ${projeto.autor}`}
          />
          <Grid
            overflow="hidden"
            whiteSpace="nowrap"
            sx={{
              display: "flex",
              width: "6.625rem",
              height: "3.125rem",
              padding: "0px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "1rem",
                color: "#303133",
              }}
            >
              {projeto.autor}
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "1rem",
                color: "#303133",
              }}
            >
              {formatarData(projeto.createAt)}
            </Typography>
          </Grid>
        </Grid>
        <Grid overflow="hidden" whiteSpace="nowrap" height="1.7rem">
          <Typography
            sx={{
              maxWidth: "36.25rem",
              fontWeight: 400,
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              color: "#303133",
            }}
          >
            {projeto.titulo}
          </Typography>
        </Grid>
        <Grid
          overflow="hidden"
          sx={{
            width: "5.688rem",
            display: "flex",
            padding: "0px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {projeto.tags.map((tag, i) => (
            <Chip key={`${tag}-${i}`} size="small" label={tag} />
          ))}
        </Grid>
      </Grid>
      <Grid
        overflow="hidden"
        sx={{
          width: "52.375rem",
          height: "36.625rem",
          marginTop: "1.989rem",
          borderRadius: "0.25rem",
        }}
      >
        <img
          className="block object-cover w-full h-full"
          alt={`Projeto ${projeto.foto}`}
          src={projeto.foto}
        />
      </Grid>
      <Grid
        sx={{
          width: "52.375rem",
          marginTop: "4.011rem",
        }}
      >
        <Typography
          sx={{
            letterSpacing: "0.0313rem",
            lineHeight: "1rem",
            color: "#303133",
          }}
        >
          {projeto.descricacao}
        </Typography>
        <Grid
          sx={{
            marginTop: "3rem",
          }}
        >
          <Typography
            sx={{
              letterSpacing: "0.009rem",
              lineHeight: "1rem",
              color: "#303133",
            }}
          >
            Download
          </Typography>

          <Link color="#608AE1" href="#" target="_blank" underline="hover">
            {
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  letterSpacing: "0.016rem",
                  lineHeight: "0.875rem",
                }}
              >
                {projeto.link}
              </Typography>
            }
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
