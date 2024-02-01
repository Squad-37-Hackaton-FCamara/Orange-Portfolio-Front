import { Typography } from '@mui/material';
import clsx from "clsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CampoSenha from '../components/campoSenha';

export default function FormularioCadastro() {
  return (
    <form className='flex flex-col justify-center items-center w-[100vh] h-[100vh]'>
      <Typography component="h1" className={clsx(
        'text-5xl mb-5 md:text-2xl',
        'mb-6',
        'text-color-principal-90'
      )}
      >Cadastre-se</Typography>
      <div className='flex flex-col gap-4 w-[517px] h-[258px] md:w-[312px] md:h-[330px]'>
        <div className='flex justify-between md:flex-col md:gap-4'>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            className='w-[253px] md:w-[312px]'
            required
          />
          <TextField
            id="outlined-basic"
            label="Sobrenome"
            variant="outlined"
            className='w-[253px] md:w-[312px]'
            required
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          required
        />
        <CampoSenha />
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