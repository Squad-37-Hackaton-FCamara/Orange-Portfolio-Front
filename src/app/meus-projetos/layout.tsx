import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/theme";

interface MeusProjetosPageLayoutProps {
  children: ReactNode;
}

const MeusProjetosPageLayout = ({ children }: MeusProjetosPageLayoutProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MeusProjetosPageLayout;
