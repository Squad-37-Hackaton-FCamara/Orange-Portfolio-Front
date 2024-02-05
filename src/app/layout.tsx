import NextAuthSessionProvider from "@/providers/sessionProvider";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { theme } from "./theme";

type LayoutProps = {
  types: string;
  children: ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Orange Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={roboto.className}>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
