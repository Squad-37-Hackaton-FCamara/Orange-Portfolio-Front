export function formatarData(dataString: string): string {
  // console.log(dataString)

  const data = new Date(dataString);
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // Adiciona zero à esquerda se o mês for menor que 10

  return `${mes}-${ano}`;
}
