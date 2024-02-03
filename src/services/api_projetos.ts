import { ProjetoProps } from "@/app/@types/Projetos";
import axios from "axios";
import "dotenv/config";

export const URL_BASE = "https://nervous-pear-clothes.cyclic.app";
export const HEADERS = (token?: string) => ({
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${token}`,
});

export class ProjetosAPI {
  static async ListarProjetos({ token }: { token: string }) {
    const response = await axios.get(`${URL_BASE}/projeto`, {
      headers: HEADERS(token),
    });
    console.log(URL_BASE);
    return response.data;
  }

  static async CriarProjeto({
    token,
    projeto,
  }: {
    token: string;
    projeto: ProjetoProps;
  }) {
    const response = await axios.post(`${URL_BASE}/projeto`, projeto, {
      headers: HEADERS(token),
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
    const response = await axios.put(`${URL_BASE}/projeto`, projeto, {
      headers: HEADERS(token),
    });

    return response.data;
  }
}
