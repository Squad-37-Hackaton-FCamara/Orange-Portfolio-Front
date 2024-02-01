"use client"

import Image from 'next/image'
import ImgLogin from './_helpers/assets/img_login.png'
import FormularioLogin from './_helpers/formLogin';

export default function LoginPage() {
  return (
    <main className="flex">
        <Image src={ImgLogin} alt="Ilustração" className="h-[832px] w-[525px] md:hidden"/>
        <FormularioLogin />
    </main>
  );
}