import { Typography } from '@mui/material';
import clsx from "clsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CampoSenha from '../components/campoSenha';
import { useState } from 'react';
import axios from 'axios';

export default function FormularioCadastro() {

  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const cadastrar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const usuario = {
      nome,
      sobrenome,
      email,
      senha
    }
    axios.post('https://nervous-pear-clothes.cyclic.app/cadastro', usuario)
      .then(() => {
        alert('usuario cadastrado');
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');

      })
      .catch(() => {
        alert('erro');
      })
  }

  return (
    <form className='flex flex-col justify-center items-center w-[100vh] h-[100vh]' onSubmit={cadastrar}>
      <Typography component="h1" className={clsx(
        'text-5xl mb-5 md:text-2xl',
        'mb-6',
        'text-color-principal-90'
      )}
      >Cadastre-se</Typography>
      <div className='flex flex-col gap-4 w-[517px] h-[258px] md:w-[312px] md:h-[330px]'>
        <div className='flex justify-between md:flex-col md:gap-4'>
          <TextField
            value={nome}
            name='nome'
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            className='w-[253px] md:w-[312px]'
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <TextField
            value={sobrenome}
            name='sobrenome'
            id="outlined-basic"
            label="Sobrenome"
            variant="outlined"
            className='w-[253px] md:w-[312px]'
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>
        <TextField
          value={email}
          name='email'
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          value={senha}
          name='senha'
          type='password'
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <Button
          variant="contained"
          color='secondary'
          type='submit'
          className={clsx(
            "bg-color-secondary-100 hover:bg-color-secondary-110",
            "text-[15px] font-medium text-color-neutral-60"
          )}
        >CADASTRAR</Button>
      </div>
    </form>
  );
}