// export async function fetchDogs() {
//   const res = await fetch("https://dog.ceo/api/breeds/image/random");
//   return res.json();
// }

export const fetchDogs = () => () =>
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .catch((e) => console.log(e));
