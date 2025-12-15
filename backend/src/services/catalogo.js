export async function getProgramas() {
  const res = await fetch("http://localhost:4000/api/catalogos/programas");
  return res.json();
}

export async function getModalidades() {
  const res = await fetch("http://localhost:4000/api/catalogos/modalidades");
  return res.json();
}
