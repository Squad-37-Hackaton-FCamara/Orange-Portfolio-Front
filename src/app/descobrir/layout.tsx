import { theme } from "@/app/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

interface IDescobrirLayout {
  children: ReactNode;
}

const DescobrirLayout = ({ children }: IDescobrirLayout) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default DescobrirLayout;
