export default interface IUserSession {
  usuario: {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
  };
  token: string;
}
