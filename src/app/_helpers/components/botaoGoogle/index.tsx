import { Button, Typography } from "@mui/material";
import Image from "next/image";
import LogoGoogle from "../../assets/logoGoogle.png";
import { signIn } from "next-auth/react";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

export default function BotaoGoogle() {
  const router = useRouter(); // Adicionado

  async function entrarGoogle(event: SyntheticEvent) {
    event.preventDefault();
    const result = await signIn("google", { callbackUrl: "/meus-projetos" });

    if (result?.error) {
      return;
    } else {
      router.replace("/meus-projetos");
    }
  }
  return (
    <Button
      onClick={entrarGoogle}
      className="my-8 p-3 hover:bg-color-neutral-70"
      variant="contained"
      style={{ textTransform: "none" }}
    >
      <Image src={LogoGoogle} alt="Logo Google" className="mr-5" />
      <Typography
        component="p"
        className="font-roboto font-medium text-sm text-color-neutral-100"
      >
        Entrar com Google
      </Typography>
    </Button>
  );
}
