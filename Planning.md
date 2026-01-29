# Full-Stack-MERN-Application

API structure:
Full-Stack MERN Backend API Structure:
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

User Stories
User Management:
    As a new user, I can create an account and log in.
    As a logged-in user, my session is managed securely, and I can log out.

User Stories
Project Management:
    As a logged-in user, I can create new projects, giving them a name and description.
    I can view a dashboard of all the projects I have created.
    I can view the details of a single project.
    I can update or delete only the projects that I own.

User Stories
Task Management:
    Within a project I own, I can create new tasks with a title, description, and status (e.g., ‘To Do’, ‘In Progress’, ‘Done’).
    I can view all tasks belonging to a specific project.
    I can update the details or status of any task within a project I own.
    I can delete tasks from a project I own.
    Collaboration (Stretch Goal):
    As a project owner, I can invite other registered users to collaborate on my project.
    As a collaborator, I can view and update tasks within a project I’ve been invited to.



