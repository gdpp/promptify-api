# Promptify – Prompts generator for Devs

A simple tool to generate and share development prompts for inspiration and learning.
Think. Prompt. Build.

## 🗓️ MVP Scope (8-10 days)

| **Feature**                      | **Priority** | **Description**                              |
|----------------------------------|--------------|----------------------------------------------|
| User Registration/Login          | High         | With JWT + refresh tokens                    |
| Create, edit, and delete prompts | High         | Each post has a title, description, and tags |
| List prompts with pagination     | High         | Display a public list filterable by tags     |
| Upvote requests                  | High         | Simple, no-duplicate voting system           |
| Save favorite prompts            | Medium       | Users save posts to their profile            |
| Comments in prompts              | Medium       | Basic, non-threaded comments                 |
| AI to suggest new prompts        | Low          | Integration with OpenAI API for suggestions  |

## 🔧 Used Stack
1.   **Frontend**: `React(w/Typescript) + DaisyUI`
2.   **Backend**: `Express (Node.Js w/Typescript)`
3.   **Database**: `PostgreSQL (w/Prisma)`
4.   **IA**: OpenAI API for prompt generation
5.   **Deploy**:
    -   *Frontend*: TBD
    -   *Backend*: TBD
    -   *Database*: TBD

<!-- ## 📂 Estructura básica del proyecto -->

<!-- ```plaintext
/promptify
│
├── /frontend
│   ├── /src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   └── services (API calls)
│   └── package.json
│
├── /backend
│   ├── /src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models (Prisma schema)
│   │   ├── middleware (auth, error handler)
│   │   └── services (DB, OpenAI)
│   └── package.json
│
└── README.md
``` -->
<!--
🗃️ Esquema básico de base de datos (PostgreSQL)
prisma
Copy
Edit
model User {
  id          String    @id @default(cuid())
  email       String    @unique
  password    String
  name        String?
  createdAt   DateTime  @default(now())
  prompts     Prompt[]  @relation("UserPrompts")
  favorites   Favorite[]
  votes       Vote[]
  comments    Comment[]
}

model Prompt {
  id          String    @id @default(cuid())
  title       String
  description String
  tags        String[]  // tags array
  author      User      @relation(fields: [authorId], references: [id])
  authorId    String
  createdAt   DateTime  @default(now())
  votes       Vote[]
  comments    Comment[]
  favorites   Favorite[]
}

model Vote {
  id        String   @id @default(cuid())
  user      User     @relation(fields: [userId], references: [id])
  userId    String
  prompt    Prompt   @relation(fields: [promptId], references: [id])
  promptId  String
  value     Int      // 1 for upvote
  createdAt DateTime @default(now())

  @@unique([userId, promptId]) // no duplicate votes
}

model Favorite {
  id        String   @id @default(cuid())
  user      User     @relation(fields: [userId], references: [id])
  userId    String
  prompt    Prompt   @relation(fields: [promptId], references: [id])
  promptId  String
  createdAt DateTime @default(now())

  @@unique([userId, promptId])
}

model Comment {
  id        String   @id @default(cuid())
  user      User     @relation(fields: [userId], references: [id])
  userId    String
  prompt    Prompt   @relation(fields: [promptId], references: [id])
  promptId  String
  content   String
  createdAt DateTime @default(now())
}
🛠️ Endpoints backend principales (REST API)
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

UI / UX: Flujo básico
Página de inicio
Lista de prompts con filtros por tags
Buscador general
Paginación
Registro / Login
Formulario sencillo con validación
Dashboard usuario
Crear/editar/eliminar prompts
Lista de favoritos
Historial de votos y comentarios
Detalle de prompt
Ver prompt, tags, autor
Votar y marcar favorito
Ver comentarios y añadir uno
Generar prompt con IA (opcional)
Botón para abrir modal o página con input de tema
Mostrar resultado generado con botón de guardar

Bonus opcionales para destacar
-   Dark mode (Tailwind + localStorage)
-   SEO básico con Next.js o React Helmet
-   Tests básicos (Jest + React Testing Library + Supertest)
-   Deploy automático en Vercel + Railway
-   Notificaciones tipo toast para UX (react-toastify o similar)
-   Rate limiting / seguridad básica (express-rate-limit) -->