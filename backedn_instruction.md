Core Features & User Stories
“User Stories” are a way to capture the requirements of the project from the perspective of the user.

Here are the user stories for this project:

User Management:
As a new user, I can create an account and log in.
As a logged-in user, my session is managed securely, and I can log out.
Project Management:
As a logged-in user, I can create new projects, giving them a name and description.
I can view a dashboard of all the projects I have created.
I can view the details of a single project.
I can update or delete only the projects that I own.
Task Management:
Within a project I own, I can create new tasks with a title, description, and status (e.g., ‘To Do’, ‘In Progress’, ‘Done’).
I can view all tasks belonging to a specific project.
I can update the details or status of any task within a project I own.
I can delete tasks from a project I own.
Collaboration (Stretch Goal):
As a project owner, I can invite other registered users to collaborate on my project.
As a collaborator, I can view and update tasks within a project I’ve been invited to.

Technical Requirements
Backend (Node.js, Express, MongoDB)
Modular API: Structure your API with a clear separation of concerns (e.g., models, routes, controllers, middleware).
RESTful Endpoints: Design and implement a full suite of RESTful API endpoints for Users, Projects, and Tasks.
Database Schemas: Create robust Mongoose schemas for User, Project, and Task models, establishing clear relationships using ref.
Authentication: Implement secure user registration and login using JWTs. All sensitive routes must be protected.
Authorization: Implement strict, ownership-based authorization. A user must only be able to view or modify data they own. This is the most critical security requirement.
Password Security: Hash all user passwords using bcrypt before storing them in the database, preferably using a pre-save hook in your User model.