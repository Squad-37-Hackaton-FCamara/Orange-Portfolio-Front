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

interface ICartaoPortifolio {
  nomeUsuario: string;
  imgUsuario?: string;
  tituloProjeto: string;
  imgProjeto: string;
  dataProjeto: string;
  tags: string[];
  onClick: () => void;
}

export default function CartaoPortifolio({ ...rest }: ICartaoPortifolio) {
  return (
    <Card className="relative w-full flex flex-col gap-2 shadow-none">
      <CardActionArea onClick={rest.onClick}>
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
      </CardActionArea>
    </Card>
  );
}
