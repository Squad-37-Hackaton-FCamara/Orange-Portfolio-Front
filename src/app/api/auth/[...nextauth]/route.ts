import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "email", type: "text" },
        senha: { label: "senha", type: "password" }
      },
      async authorize(credentials, req) {

        const response = await axios.post('https://nervous-pear-clothes.cyclic.app/entrar', {
          email: 'primeiro@gmail.com',
          senha: '12345678'
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const user = await response.data
        console.log(user)
        if (user && response.status == 200) {
          return user
        }

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

