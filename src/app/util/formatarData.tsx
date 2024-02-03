export function formatarData(dataString: string): string {

  const data = new Date(dataString);
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");

  return `${mes}-${ano}`;
}
