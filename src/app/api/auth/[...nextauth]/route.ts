import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

const prefixoDeSucesso = 2;
function statusCodePossuiPrefixo(numero: number, prefixo: number): boolean  {
   numero = Math.abs(numero);

  while (numero > 9) {
    numero = Math.floor(numero / 10);
  }

  return numero === prefixo;
};

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        senha: { label: "Senha", type: "password" }
      },
      async authorize(credentials, _) {
        const response = await axios.post('https://nervous-pear-clothes.cyclic.app/entrar', {
          email: credentials?.email,
          senha: credentials?.senha
        })
        const user = await response.data
        if (user && statusCodePossuiPrefixo(response.status, prefixoDeSucesso)) {
          return user
        }
        console.log(response)
        return null
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/',
  }
}

const handler = NextAuth(nextAuthOptions);


export { handler as GET, handler as POST, nextAuthOptions };

