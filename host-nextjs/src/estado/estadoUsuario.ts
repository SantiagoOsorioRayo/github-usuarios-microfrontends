import { create } from 'zustand';

type EstadoUsuario = {
  usuarioSeleccionado: any;
  setUsuarioSeleccionado: (usuario: any) => void;
};

export const useEstadoUsuario = create<EstadoUsuario>((set) => ({
  usuarioSeleccionado: null,
  setUsuarioSeleccionado: (usuario) =>
    set({ usuarioSeleccionado: usuario }),
}));