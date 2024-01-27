// PerfilPageLayout.tsx
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/theme";

interface PerfilPageLayoutProps {
  children: ReactNode;
}

const PerfilPageLayout = ({ children }: PerfilPageLayoutProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PerfilPageLayout;
