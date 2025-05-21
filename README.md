# Promptify – Prompts generator for Devs (API)

A simple tool to generate and share development prompts for inspiration and learning.
> Think. Prompt. Build.

## 🗓️ MVP Scope

| **Feature**                      | **Priority** | **Description**                              |
|----------------------------------|--------------|----------------------------------------------|
| User Registration/Login          | High         | With JWT + refresh tokens                    |
| Create, edit, and delete prompts | High         | Each post has a title, description, and tags |
| List prompts with pagination     | High         | Display a public list filterable by tags     |
| Upvote requests                  | High         | Simple, no-duplicate voting system           |
| Save favorite prompts            | Medium       | Users save posts to their profile            |
| Comments in prompts              | Medium       | Basic, non-threaded comments                 |
| AI to suggest new prompts        | Low          | Integration with OpenAI API for suggestions  |

## 🔧 Used Technologies
-   **Node.js**: Runtime environment for JavaScript on the backend.
-   **Express**: Minimalist framework for creating servers in Node.js.
-   **TypeScript**: Superset of JavaScript that adds static typing.
-   **Prisma (ORM)**: Tool for interacting with databases easily.
-   **PostgreSQL**: Relational database used for storing data.
-   **JsonWebTokens (JWT)**: Handles authentication with JSON Web Tokens.
-   **Middlewares**:
      * **CORS**: Middleware to enable cross-origin resource sharing.
      * **Helmet**: Security middleware to protect the application.
      * **Json**: Middleware for parsing JSON in HTTP requests.

## 🛠️ Main Backend Endpoints (REST API)
<!--
Método	Ruta	Descripción	Auth
POST	/api/auth/register	Registrar usuario	No
POST	/api/auth/login	Login, devolver JWT	No
POST	/api/auth/refresh	Refrescar token JWT	Sí
GET	/api/prompts	Listar prompts (paginado, filtrado por tag)	No
POST	/api/prompts	Crear prompt	Sí
PUT	/api/prompts/:id	Editar prompt	Sí
DELETE	/api/prompts/:id	Eliminar prompt	Sí
POST	/api/prompts/:id/vote	Votar prompt (upvote)	Sí
POST	/api/prompts/:id/fav	Agregar/remover de favoritos	Sí
GET	/api/users/:id/favorites	Obtener favoritos del usuario	Sí
POST	/api/prompts/:id/comment	Agregar comentario	Sí
GET	/api/prompts/:id/comments	Listar comentarios	No
POST	/api/ai/generate	Generar prompt con IA (OpenAI)	Sí


Bonus opcionales para destacar
-   SEO básico React Helmet
-   Tests básicos (Jest + React Testing Library + Supertest)
-   Deploy automático en Vercel + Railway
-   Notificaciones tipo toast para UX (react-toastify o similar)
-   Rate limiting / seguridad básica (express-rate-limit)


-->
<!-- 
3.   **Database**: `PostgreSQL (w/Prisma)`
4.   **IA**: OpenAI API for prompt generation
5.   **Deploy**:
    -   *Frontend*: TBD
    -   *Backend*: TBD
    -   *Database*: TBD -->