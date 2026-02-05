'use client';

import { useRouter } from 'next/navigation';
import { useEstadoUsuario } from '../../src/estado/estadoUsuario';

export default function DetallePage() {
  const router = useRouter();
  const { usuarioSeleccionado } = useEstadoUsuario();

  if (!usuarioSeleccionado) {
    return (
      <main>
        <p>No hay usuario seleccionado</p>
        <button onClick={() => router.push('/')}>Volver</button>
      </main>
    );
  }

  return (
    <main>
      <button onClick={() => router.push('/')}>← Volver</button>

      <h1>Detalle del usuario</h1>

      <img
        src={usuarioSeleccionado.avatar_url}
        width={120}
        alt="avatar"
      />

      <p>
        <strong>Usuario:</strong> {usuarioSeleccionado.login}
      </p>

      <a
        href={usuarioSeleccionado.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver perfil en GitHub
      </a>
    </main>
  );
}