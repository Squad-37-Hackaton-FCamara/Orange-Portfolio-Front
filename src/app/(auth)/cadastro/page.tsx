"use client"
import Image from 'next/image'
import ImgCadastro from '../../assets/img_cadastro.png'
import FormularioCadastro from '@/app/_helpers/formCadastro';

export default function CadastroPage() {
  return (
    <main className='flex'>
      <Image src={ImgCadastro} alt="Ilustração" className="h-[832px] w-[549px] md:hidden" />
      <FormularioCadastro/>
    </main>
  );
}