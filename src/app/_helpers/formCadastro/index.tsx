import { Typography } from '@mui/material';
import clsx from "clsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CampoSenha from '../components/campoSenha';
import { useState, } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import React from 'react';
import * as yup from 'yup';

export default function FormularioCadastro() {

  const [mensagem, setMensagem] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'info' | 'success' | 'warning' | undefined>();

  const schema = yup.object().shape({
    nome:
      yup.string()
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .max(15, 'Nome deve ter no máximo 15 caracteres')
        .matches(/^[A-Za-z]+$/, 'Nome não deve conter espaços, números ou caracteres especiais'),
    sobrenome:
      yup.string()
        .min(3, 'Sobrenome deve ter pelo menos 3 caracteres')
        .max(15, 'Sobrenome deve ter no máximo 15 caracteres')
        .matches(/^[A-Za-z]+$/, 'Sobrenome não deve conter espaços, números ou caracteres especiais'),
    email:
      yup.string()
        .email('Email inválido'),
    senha:
      yup.string()
        .min(8, 'Senha deve ter pelo menos 8 caracteres')
        .max(10, 'Senha deve ter no máximo 10 caracteres')
        .test('senha', 'Senha não deve conter espaços', value => {
          return value ? !value.includes(' ') : false;
        }),
  });

  const cadastrar = async (evento: React.FormEvent<HTMLFormElement>) => {

    evento.preventDefault()
    const usuario = {
      nome,
      sobrenome,
      email,
      senha
    }

    if (!nome || !sobrenome || !email || !senha) {
      setMensagem('Preencha todos os campos!');
      setAlertSeverity('error');
      return;
    }

    try {
      await schema.validate(usuario, { abortEarly: true });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.message;
        setMensagem(errorMessage);
        setAlertSeverity('error');
        setTimeout(() => setMensagem(''), 6000);
        return;
      }
    }

    axios.post('https://nervous-pear-clothes.cyclic.app/cadastro', usuario)
      .then(() => {
        setMensagem('Cadastro feito com sucesso!');
        setAlertSeverity('success');
        setTimeout(() => setMensagem(''), 6000);
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');

      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setMensagem(error.response.data.error);
        } else {
          setMensagem('Ocorreu um erro desconhecido');
        }
        setAlertSeverity('error');
        setTimeout(() => setMensagem(''), 6000);
      })
  }

  return (
    <form
      noValidate
      className='flex flex-col justify-center items-center w-[100vw] h-[100vh]'
      onSubmit={cadastrar}>
      {mensagem && (
        <Alert severity={alertSeverity} variant="filled" className='absolute top-0 mt-20 md:w-[340px]'>
          {mensagem}
        </Alert>
      )}
      <Typography component="h1" className={clsx(
        'text-5xl mb-5 md:text-2xl lg:text-2xl',
        'mb-6',
        'text-color-principal-90'
      )}
      >Cadastre-se</Typography>
      <div className='flex flex-col gap-4 w-[517px] h-[258px] md:w-[312px] md:h-[330px] lg:w-[312px] lg:h-[330px]'>
        <div className='flex justify-between md:flex-col md:gap-4 lg:flex-col lg:gap-4'>
          <TextField
            color='info'
            value={nome}
            name='nome'
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            className='w-[253px] md:w-[312px] lg:w-[312px]'
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <TextField
            color='info'
            value={sobrenome}
            name='sobrenome'
            id='outlined-basic'
            label='Sobrenome'
            variant='outlined'
            className='w-[253px] md:w-[312px] lg:w-[312px]'
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>
        <TextField
          color='info'
          value={email}
          name='email'
          id='outlined-basic'
          label='Email address'
          variant='outlined'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <CampoSenha
          name='senha'
          value={senha}
          onChange={(e: any) => setSenha(e.target.value)}
        />
        <Button
          variant='contained'
          color='secondary'
          type='submit'
          className={clsx(
            'bg-color-secondary-100 hover:bg-color-secondary-110',
            'text-[15px] font-medium text-color-neutral-60'
          )}
        >CADASTRAR</Button>
      </div>
    </form>
  );
}