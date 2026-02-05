'use client';

import { useRouter } from 'next/navigation';
import { useEstadoUsuario } from '../src/estado/estadoUsuario';

type Usuario = {
  id: number;
  login: string;
  avatar_url: string;
};

type Props = {
  usuarios: Usuario[];
};

export default function ListadoUsuarios({ usuarios }: Props) {
  const router = useRouter();
  const { setUsuarioSeleccionado } = useEstadoUsuario();

  return (
    <ul className="lista-usuarios">
      {usuarios.map((usuario) => (
        <li key={usuario.id} className="tarjeta-usuario">
          <img src={usuario.avatar_url} width={80} />
          <p>{usuario.login}</p>

          <a
            onClick={() => {
              setUsuarioSeleccionado(usuario);
              window.location.href = `http://localhost:4200/detalle/${usuario.login}`;
            }}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            Ver detalle
          </a>
        </li>
      ))}
    </ul>
  );
}
