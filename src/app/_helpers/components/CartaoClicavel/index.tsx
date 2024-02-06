import { formatarData } from "@/app/util/formatarData";
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
  autor: string;
  imgUsuario?: string;
  titulo: string;
  foto: string;
  createAt: string;
  tags: string[];
  onClick: () => void;
  clicavel?: boolean;
}

export default function CartaoPortifolio({ ...rest }: ICartaoPortifolio) {
  return (
    <Card className="relative w-full flex flex-col gap-2 shadow-none">
      <CardActionArea disabled={!rest.clicavel} onClick={rest.onClick}>
        <CardMedia
          sx={{ height: 258 }}
          component="img"
          image={rest.foto}
          alt={`imagem projeto ${rest.titulo}`}
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
                //* Funcionalidade de imagem ainda não na fase de MVP implementada
                src={
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Favatar&psig=AOvVaw0wCvk7frc6ShmhPd_38vzK&ust=1706906502121000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIith6-Ai4QDFQAAAAAdAAAAABAE"
                }
                alt={`imagem usuario ${rest.imgUsuario}`}
              />
              <Grid overflow="hidden">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: "1rem",
                    color: "#515255",
                  }}
                >{`${rest.autor}`}</Typography>
              </Grid>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1rem",
                  color: "#515255",
                }}
              >{`• ${formatarData(rest.createAt)}`}</Typography>
            </Grid>
            <Grid
              overflow="hidden"
              sx={{
                display: "flex",
                direction: "row-reverse",
                gap: "0.5rem",
              }}
            >
              {rest.tags && rest.tags.map((tag, i) => (
                <Chip key={`${tag}-${i}`} size="medium" label={tag} />
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
