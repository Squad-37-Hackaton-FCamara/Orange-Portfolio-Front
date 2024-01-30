import { theme } from "@/app/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "../_helpers/header";

interface IDescobrirLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Descobrir | Orange Portfolio",
  description: "Generated by create next app",
};

const DescobrirLayout = ({ children }: IDescobrirLayout) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default DescobrirLayout;