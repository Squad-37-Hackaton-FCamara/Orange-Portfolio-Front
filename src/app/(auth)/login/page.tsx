"use client"
import FormularioLogin from "@/app/_helpers/formLogin";
import Image from 'next/image'
import ImgLogin from '../../_helpers/assets/img_login.png'

export default function LoginPage() {
  return (
    <main className="flex">
        <Image src={ImgLogin} alt="Ilustração" className="h-[832px] w-[525px] md:hidden"/>
        <FormularioLogin />
    </main>
  );
}
