import logo_orange from "@/app/_helpers/assets/logo_orange.png";
import img_perfil from "@/app/_helpers/assets/perfil.png";
import Image from "next/image";
import { Notifications } from "@mui/icons-material";
import clsx from "clsx";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useWindowDimensions } from "@/services/window_size";
import { ProjetosAPI } from "@/services/api_projetos";

export function Header() {
  const { width } = useWindowDimensions();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhMmI2YzRjLTdjNDUtNDMxZS04MWEwLTdhMjgwNWVlMGYwNSIsImlhdCI6MTcwNjgxODI2OCwiZXhwIjoxNzA2OTA0NjY4LCJzdWIiOiIyYTJiNmM0Yy03YzQ1LTQzMWUtODFhMC03YTI4MDVlZTBmMDUifQ.t2YuAQ8yfu1Lb-PIh2iawa8XpXK2YcvAL5S9omj2LJE";

  const getProjetos = () => {
    const response = ProjetosAPI.ListarProjetos({ token }).then((response) => {
      console.log(response);
    });
  };

  return (
    <header className="w-screen flex bg-color-principal-100">
      <div
        className={clsx(
          "max-w-6xl w-full flex items-center justify-between",
          "mx-auto py-4 lg:p-6"
        )}
      >
        <div className="flex items-center gap-[100px] md:gap-0">
          {width < 767 && (
            <IconButton>
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
      <button onClick={() => getProjetos()}>ooooi</button>
    </header>
  );
}
