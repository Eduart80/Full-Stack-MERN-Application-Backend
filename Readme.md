
# Full-Stack MERN Application Backend

This project is the backend API for a full-stack MERN (MongoDB, Express, React, Node.js) application, designed to provide robust user, project, and task management for modern web applications. Built with scalability and security in mind, this backend serves as the foundation for a collaborative project and task management platform, supporting user authentication, project organization, and task tracking.

## Features

- **User Authentication:** Secure registration, login, and logout using JWT and Passport.js. Passwords are hashed with bcrypt for security. Only authenticated users can access protected routes.
- **Project Management:** Authenticated users can create, view, update, and delete projects. Each project contains metadata such as name, description, status, and timeline.
- **Task Management:** Users can add, update, and delete tasks within projects. Tasks support statuses like 'To Do', 'In Progress', and 'Done', and can be assigned to users for collaboration.
- **RESTful API:** Follows REST principles for clear, predictable endpoints. All endpoints requiring authentication expect a valid JWT token.
- **CORS Support:** Configured for secure cross-origin requests, suitable for integration with a React frontend.

## Folder Structure

```
backend/
  |-- server.js
  |-- config/
  |     |-- db.js
  |     |-- passport.js
  |-- models/
  |     |-- User.js
  |     |-- Project.js
  |     |-- Task.js
  |-- controllers/
  |     |-- userController.js
  |     |-- projectController.js
  |     |-- taskController.js
  |-- routes/
  |     |-- userRoutes.js
  |     |-- projectRoutes.js
  |     |-- taskRoutes.js
  |-- middleware/
  |     |-- auth.js
  |-- utils/
  |-- package.json
  |-- .env
```
## Documentation

Planning documentation: [Planning](./Planning.md).<br>
For detailed API endpoints and usage, see the [API Documentation](./API_Documentation.md)

## API Overview

- **User Endpoints:**
  - `POST /api/users/register` — Register a new user
  - `POST /api/users/login` — Login and receive JWT
  - `POST /api/users/logout` — Logout and invalidate session
- **Project Endpoints:**
  - `POST /api/projects` — Create a new project
  - `GET /api/projects` — List all projects for the user
  - `GET /api/projects/:id` — Get a single project
  - `PUT /api/projects/:id` — Update a project
  - `DELETE /api/projects/:id` — Delete a project
- **Task Endpoints:**
  - `POST /api/projects/:projectId/tasks` — Add a task to a project
  - `GET /api/projects/:projectId/tasks` — List all tasks for a project
  - `GET /api/tasks/:id` — Get a single task
  - `PUT /api/tasks/:id` — Update a task
  - `DELETE /api/tasks/:id` — Delete a task

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Eduart80/Full-Stack-MERN-Application-Backend.git
    cd Full-Stack-MERN-Application-Backend
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Configure environment variables:**
    - Create a `.env` file based on `.env.example` (if provided) and set your MongoDB URI, JWT secret, and other config values.
4. **Run the server:**
    ```bash
    npm run dev
    ```
    The server will start on the port specified in your `.env` file.

## Technologies Used

- Node.js, Express.js
- MongoDB, Mongoose
- Passport.js, JWT
- bcrypt, dotenv, cors


