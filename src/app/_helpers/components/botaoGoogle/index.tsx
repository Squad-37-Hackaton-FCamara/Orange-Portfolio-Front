import { Button, Typography } from "@mui/material";
import Image from 'next/image'
import LogoGoogle from '../../assets/logoGoogle.png'
import { signIn } from "next-auth/react";


export default function BotaoGoogle() {
  function handleClick() {
    signIn("google");
  }
  return (
    <Button
      onClick={handleClick}
      className="my-8 p-3 hover:bg-color-neutral-70"
      variant="contained"
      style={{ textTransform: 'none' }}>
      <Image
        src={LogoGoogle}
        alt="Logo Google"
        className="mr-5" />
      <Typography
        component="p"
        className="font-roboto font-semibold text-sm text-color-neutral-100">
        Entrar com Google
      </Typography>
    </Button>
  );
}