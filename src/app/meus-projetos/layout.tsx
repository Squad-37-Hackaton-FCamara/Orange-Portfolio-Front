import { theme } from "@/app/theme";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

interface MeusProjetosPageLayoutProps {
  children: ReactNode;
}

const MeusProjetosPageLayout = ({ children }: MeusProjetosPageLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
    </ThemeProvider>
  );
};

export default MeusProjetosPageLayout;
