import logo_orange from "@/app/_helpers/assets/logo_orange.png";
import img_perfil from "@/app/_helpers/assets/perfil.png";
import Image from "next/image";
import { Notifications } from "@mui/icons-material";
import clsx from "clsx";
import { Typography } from "@mui/material";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-screen flex bg-color-principal-100">
      <div
        className={clsx(
          "max-w-6xl w-full flex items-center justify-between",
          "mx-auto py-4 lg:pt-4"
        )}
      >
        <div className="flex items-center gap-[100px]">
          <Image
            src={logo_orange}
            alt="Logo Orange Juice"
            className="flex-none w-[111px]"
          />
          <div className="flex gap-6">
            <Link
              href="/meus-projetos"
              className="text-[20px] text-color-neutral-60"
            >
              Meus projetos
            </Link>
            <Link href={"/"} className="text-[20px] text-color-neutral-60">
              Descobrir
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/meus-projetos">
            <div className="rounded-full overflow-hidden">
              <Image
                src={img_perfil}
                alt="Imagem de perfil"
                className="w-[40px] cursor-pointer"
              />
            </div>
          </Link>
          <Notifications color="primary" sx={{ fontSize: 24 }} />
        </div>
      </div>
    </header>
  );
}
