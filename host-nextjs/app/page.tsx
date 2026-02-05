import ListadoUsuarios from './ListadoUsuarios';

async function obtenerUsuarios() {
  const res = await fetch(
    'https://api.github.com/search/users?q=github',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data.items || [];
}

export default async function HomePage() {
  const usuarios = await obtenerUsuarios();

  return (
    <main>
      <h1 className="titulo-listado">Usuarios de GitHub</h1>
      <ListadoUsuarios usuarios={usuarios} />
    </main>
  );
}