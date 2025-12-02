// export const products = async () => {

//     const response = await fetch('./prod.json')
//     const data = await response.json()

//     return data
// }

export const products = async () => {
  const base = import.meta.env.BASE_URL;
  const response = await fetch(`${base}prod.json`);

  if (!response.ok) throw new Error("No se pudo cargar prod.json");

  return await response.json();
};

