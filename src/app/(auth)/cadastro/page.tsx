<<<<<<< HEAD
"use client";
import Image from 'next/image';
import ImgCadastro from '../../_helpers/assets/img_cadastro.png';
import FormularioCadastro from '@/app/_helpers/formCadastro';

export default function CadastroPage() {
  return (
    <main className='flex'>
      <Image src={ImgCadastro} alt="Ilustração" className="h-[832px] w-[549px] md:hidden" />
      <FormularioCadastro/>
    </main>
  );
}
=======
function CadastroPage() {
  return <div>Cadastro</div>;
}

export default CadastroPage;
>>>>>>> 6e744ac57723f0c6e3ab129426f713699efe4cb8
