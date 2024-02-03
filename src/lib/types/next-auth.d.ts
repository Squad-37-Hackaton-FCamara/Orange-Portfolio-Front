import "next-auth";

//** Sobrescrever o objeto (user) para disponibilizar os atributos do usuário no hook useSession*/
declare module "next-auth" {
  interface Session {
    user: {
      usuario: {
        id: string;
        nome: string;
        sobrenome: string;
        email: string;
      };
      token: string;
    };
  }
}
