import logo_orange from "@/app/_helpers/assets/logo_orange.png";
import img_perfil from "@/app/_helpers/assets/perfil.png";
import Image from "next/image";
import { Notifications } from "@mui/icons-material";
import clsx from "clsx";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useWindowDimensions } from "@/services/window_size";
import { useState } from "react";
import { MenuSanduiche } from "../components/MenuSanduiche";

export function Header() {
  const { width } = useWindowDimensions();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="relative w-screen flex bg-color-principal-100">
      {width <= 767 && menuIsOpen && (
        <div className="absolute top-[89px]">
          <MenuSanduiche setIsOpen={setMenuIsOpen} />
        </div>
      )}
      <div
        className={clsx(
          "max-w-6xl w-full flex items-center justify-between",
          "mx-auto py-4 lg:p-6"
        )}
      >
        <div className="flex items-center gap-[100px] md:gap-0">
          {width < 767 && (
            <IconButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <MenuIcon sx={{ fontSize: 24 }} color="primary" />
            </IconButton>
          )}
          <Image
            src={logo_orange}
            alt="Logo Orange Juice"
            className="flex-none w-[111px]"
          />
          {width > 767 && (
            <div className="flex gap-6">
              <Link
                href="/meus-projetos"
                className="text-[20px] text-color-neutral-60"
              >
                Meus projetos
              </Link>
              <Link
                href={"/descobrir"}
                className="text-[20px] text-color-neutral-60"
              >
                Descobrir
              </Link>
            </div>
          )}
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
