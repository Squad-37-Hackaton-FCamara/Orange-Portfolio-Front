import TextField from '@mui/material/TextField';
import CampoSenha from '../campoSenha';
import Link from 'next/link'
import * as React from 'react';
import Button from '@mui/material/Button';
import clsx from "clsx"
import { Typography } from '@mui/material';

export default function FormularioLogin() {
  return (
    <form className='flex flex-col justify-center items-center w-[100vh] h-[100vh]'>
      <Typography className={clsx(
        'text-5xl mb-5 md:text-2xl',
        'text-color-principal-90 '
      )}
      >Entre no Orange Portfólio</Typography>
      <div className='flex flex-col justify-between w-[517px] h-[271px] md:w-[312px]'>
        <Typography className={clsx(
          'text-2xl md:text-base',
          'text-color-neutral-110'
        )}
        >Faça login com email</Typography>
        <TextField
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          required
        />
        <CampoSenha />
        <Button variant="contained" color='secondary' className={clsx(
          "bg-color-secondary-100 hover:bg-color-secondary-110",
          "text-[15px] font-medium text-color-neutral-60"
        )}
        >ENTRAR</Button>
        <Link href="/cadastro" className='text-color-neutral-100 text-base'>Cadastre-se</Link>
      </div>
    </form>
  );
}

