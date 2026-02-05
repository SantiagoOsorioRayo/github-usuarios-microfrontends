#  Prueba Técnica – Búsqueda de Usuarios GitHub (Microfrontends)

Este proyecto fue desarrollado como parte de una prueba técnica, con el objetivo de demostrar la construcción de una aplicación web moderna basada en **microfrontends**, separando responsabilidades, mejorando la escalabilidad y manteniendo las aplicaciones desacopladas entre sí.

La aplicación permite buscar usuarios de GitHub, ver su detalle y consultar su listado de seguidores, integrando **Next.js** y **Angular** dentro de una misma arquitectura.

---

##  Tabla de contenidos

- [Idea general del proyecto](#-idea-general-del-proyecto)
- [Arquitectura](#️-arquitectura)
- [APIs utilizadas](#-apis-utilizadas)
- [Cómo ejecutar el proyecto](#️-cómo-ejecutar-el-proyecto)
- [Decisiones importantes](#-decisiones-importantes)
- [Qué demuestra esta solución](#-qué-demuestra-esta-solución)
- [Conclusión](#-conclusión)

---

##  Idea general del proyecto

La solución se pensó como un escenario real:

- Una aplicación principal que orquesta la navegación, maneja el contexto general y puede crecer con más funcionalidades (login, permisos, menú, etc.).
- Aplicaciones independientes que se encargan de funcionalidades específicas, como el detalle del usuario o sus seguidores.

Por esta razón:

- **Next.js** funciona como aplicación **host**.
- **Angular** se utiliza para construir **microfrontends independientes**, que pueden ejecutarse solos o ser integrados al host.

---

##  Arquitectura

### Versiones

- Angular CLI       : 21.1.2
- Node.js           : 22.19.0
- Npm               : 10.9.3

La aplicación está dividida en **tres proyectos**:

### 1️ Next.js – Aplicación Host

- Muestra el listado de usuarios de GitHub.
- Consume la API pública usando **Server-Side Rendering (SSR)** para mejorar rendimiento y SEO.
- Maneja el estado global del usuario seleccionado.
- Actúa como **orquestador**, redirigiendo al detalle o a los seguidores.

 Esta app representa el **punto de entrada del sistema**.

---

### 2️ Angular – Detalle de Usuario (Microfrontend)

- Muestra la información detallada de un usuario.
- Consume el endpoint:

```
https://api.github.com/users/USERNAME
```

- Se carga mediante **Lazy Loading**.
- Está desacoplado usando **Module Federation**.
- Puede funcionar:
  - Integrado desde Next.js
  - O de forma independiente (standalone)
- Incluye lógica para detectar si fue abierto desde el host o directamente, y ajustar la UI (por ejemplo, mostrar o no el botón **“Volver”**).

---

### 3️ Angular – Seguidores (Microfrontend)

- Muestra el listado de seguidores de un usuario.
- Consume el endpoint:

```
https://api.github.com/users/USERNAME/followers
```

- Es un módulo completamente independiente.
- Usa:
  - **Lazy Loading**
  - **Observables y RxJS**
  - **Interceptors** para manejo de errores HTTP
- Incluye un **Pipe personalizado** para mostrar correctamente el número de seguidores o el texto **“Sin seguidores”**.

---

##  APIs utilizadas

- **Buscar usuarios**

```
https://api.github.com/search/users?q=YOUR_NAME
```

- **Detalle de usuario**

```
https://api.github.com/users/USERNAME
```

- **Seguidores**

```
https://api.github.com/users/USERNAME/followers
```

---

##  Cómo ejecutar el proyecto

###  Next.js – Host

```bash
cd nextjs-host
npm install
npm run dev
```

Disponible en:

```
http://localhost:3000
```

---

###  Angular – Detalle de Usuario

```bash
cd angular-detalle-usuario
npm install
npm start
```

Disponible en:

```
http://localhost:4200/detalle/octocat
```

---

###  Angular – Seguidores

```bash
cd angular-seguidores
npm install
npm start -- --port 4201
```

Disponible en:

```
http://localhost:4201/seguidores/octocat
```

---

##  Decisiones importantes

- Los microfrontends **no dependen del estado interno del host**.
- La comunicación se realiza mediante **parámetros de ruta**, manteniendo bajo acoplamiento.
- Cada aplicación puede evolucionar, desplegarse y probarse de manera independiente.
- El host controla el flujo de navegación, pero **no la lógica interna** de los microfrontends.

---

##  Qué demuestra esta solución

- Comprensión de arquitectura de **microfrontends**.
- Uso correcto de **Next.js con SSR**.
- Buen manejo de **Angular moderno** (Lazy Loading, RxJS, Pipes, Interceptors).
- Separación clara de responsabilidades.
- Enfoque en **escalabilidad y mantenibilidad**.
- Capacidad de pensar el sistema más allá de “que funcione”.

---

##  Conclusión

Este proyecto no solo cumple los requerimientos técnicos solicitados, sino que busca reflejar una forma de trabajo orientada a **arquitecturas limpias, desacopladas y pensadas para crecer**, similares a las que se utilizan en entornos reales de producción.

