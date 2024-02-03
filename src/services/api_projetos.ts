import { ProjetoProps } from "@/app/@types/Projetos";
import axios from "axios";
import "dotenv/config";
import { parseCookies } from "nookies";

export const URL_BASE = "https://nervous-pear-clothes.cyclic.app";
let tokenCookie = parseCookies();
export const HEADERS = () => ({
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${tokenCookie["@nextauth.token"]}`,
});

export class ProjetosAPI {

  static async ListarProjetos({ token }: { token: string }, { tagBusca }: {tagBusca: string}) {
    const response = await axios.get(`${URL_BASE}/projeto?tag=${tagBusca}`, {
      headers: HEADERS(token),
    });
    return response.data;
  }

  static async ListarProjetosPeloId({ token, usuario_id }: { token: string, usuario_id:string }) {
    const response = await axios.get(`${URL_BASE}/projeto/${usuario_id}`, {
      headers: HEADERS(token),
    });
    return response.data;
  }

  static async CriarProjeto({ projeto }: { projeto: ProjetoProps }) {
    const response = await axios.post(`${URL_BASE}/projeto`, projeto, {
      headers: HEADERS(),
    });

    return response.data;
  }

  static async EditarProjeto({
    token, 
    projeto
}: {
    token: string, 
    projeto: ProjetoProps
}) {
    const response = await axios.put(`${URL_BASE}/projeto/${projeto.id}`, projeto, {
      headers: HEADERS(token),
    });

    return response.data;
  }
}
