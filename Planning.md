# Full-Stack-MERN-Application

***API structure:***
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
    |     |-- 
    |-- package.json
    |-- .env
```
***User Storie 1***
User Management:
  - Registration:
      - User can submit a registration form with username, email, and password.
      - System validates input and checks for existing users.
      - Passwords are securely hashed before storage.
      - User receives confirmation of successful registration or error messages.
  - Login:
      - User can log in with valid credentials (email/username and password).
      - System verifies credentials and issues a session token (e.g., JWT).
      - User receives feedback on login success or failure.
  - Session Management:
      - User session is maintained securely (e.g., via HTTP-only cookies or tokens).
      - Protected routes are accessible only to authenticated users.
      - Session expires after 2h period and logout.
  - Logout:
      - User can log out, which invalidates the session/token.
      - User is redirected to the login or home page after logout.
---

***User Storie 2***
Project Management:
  - Create Project:
      - Authenticated user can submit a form to create a new project with a name and description.
      - System validates input and associates the project with the user.
      - User receives confirmation of successful creation or error messages.
  - View Projects Dashboard:
      - User can view a list/dashboard of all projects they own.
      - Each project entry displays key information (name, description, status, etc.).
  - View Single Project:
      - User can select a project to view its detailed information.
      - Details include project metadata and associated tasks.
  - Update Project:
      - User can edit the name or description of their own projects.
      - System validates changes and updates the project.
  - Delete Project:
      - User can delete only the projects they own.
      - System removes the project and all associated tasks.

---

***User Storie 3***
Task Management:
  - Create Task:
      - Project owner can add a new task to a project they own, specifying title, description, and status (e.g., 'To Do', 'In Progress', 'Done').
      - System validates input and associates the task with the correct project.
      - User receives confirmation of successful creation or error messages.
  - View Tasks:
      - User can view a list of all tasks for a specific project they own or collaborate on.
      - Each task displays key information (title, description, status, assignee, etc.).
  - Update Task:
      - User can update the details or status of any task within a project they own or collaborate on.
      - System validates changes and updates the task.
  - Delete Task:
      - User can delete tasks from a project they own.
      - System removes the task and updates the project accordingly.
  - Collaboration (Stretch Goal):
      - Project owner can invite other registered users to collaborate on their project.
      - Invited collaborators can view and update tasks within the project.
      - System manages permissions to ensure only authorized users can modify tasks.



