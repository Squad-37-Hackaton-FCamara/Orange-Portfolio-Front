"use client"
import TextField from '@mui/material/TextField';
import CampoSenha from '../components/campoSenha';
import Link from 'next/link'
import { SyntheticEvent, useState } from 'react';
import Button from '@mui/material/Button';
import clsx from "clsx";
import { Typography } from '@mui/material';
import BotaoGoogle from '../components/botaoGoogle';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function FormularioLogin() {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const router = useRouter();

  async function enviar(event: SyntheticEvent) {
    event.preventDefault();

    const result = await signIn('credentials', {
      email,
      senha,
      redirect: false
    })

    if (result?.error) {
      return;
    }
    router.replace('/meus-projetos')
  }

  return (
    <form
      className='flex flex-col justify-center items-center w-[100vh] h-[100vh]'
      onSubmit={enviar}
    >
      <Typography component="h1" className={clsx(
        'text-5xl md:text-2xl',
        'text-color-principal-90 '
      )}
      >Entre no Orange Portfólio</Typography>
      <BotaoGoogle></BotaoGoogle>
      <div className='flex flex-col justify-between w-[517px] h-[271px] md:w-[312px]'>
        <Typography component="p" className={clsx(
          'text-2xl md:text-base',
          'text-color-neutral-110'
        )}
        >Faça login com email</Typography>
        <TextField
          color='info' 
          name='email'
          type='email'
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <CampoSenha
          name='senha'
          onChange={(e: any) => setSenha(e.target.value)}
        />
        <Button
          variant="contained"
          color='secondary'
          type='submit'
          className={clsx(
            "bg-color-secondary-100 hover:bg-color-secondary-110",
            "text-[15px] font-medium text-color-neutral-60"
          )}
        >ENTRAR</Button>
        <Link href="/cadastro" className='text-color-neutral-100 text-base'>Cadastre-se</Link>
      </div>
    </form>
  );
}

