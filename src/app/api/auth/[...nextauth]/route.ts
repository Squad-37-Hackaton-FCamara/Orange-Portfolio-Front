import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const prefixoDeSucesso = 2;
function statusCodePossuiPrefixo(numero: number, prefixo: number): boolean {
  numero = Math.abs(numero);

  while (numero > 9) {
    numero = Math.floor(numero / 10);
  }

  return numero === prefixo;
}

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials, _) {
        const response = await axios.post(
          "https://nervous-pear-clothes.cyclic.app/entrar",
          {
            email: credentials?.email,
            senha: credentials?.senha,
          }
        );
        const user = await response.data;
        if (
          user &&
          statusCodePossuiPrefixo(response.status, prefixoDeSucesso)
        ) {
          return user;
        }
        console.log(response);
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user, session }) {
      //**Injetar token nos cookies da aplicação */
      cookies().set("@nextauth.token", token.token as string);
      return { ...token, ...user };
    },
    async session({ token, user, session }) {
      session.user = token as any;

      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
