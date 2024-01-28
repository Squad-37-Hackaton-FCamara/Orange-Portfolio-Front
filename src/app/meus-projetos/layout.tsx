import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/theme";
import { Header } from "../_helpers/header";

interface MeusProjetosPageLayoutProps {
  children: ReactNode;
}

const MeusProjetosPageLayout = ({ children }: MeusProjetosPageLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default MeusProjetosPageLayout;
