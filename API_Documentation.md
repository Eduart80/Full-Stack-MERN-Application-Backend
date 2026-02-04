# API Documentation

## Authentication

### Register User
**POST** `/api/users/register`
- Request: `{ name, email, password }`
- Response: User object or error

### Login User
**POST** `/api/users/login`
- Request: `{ email, password }`
- Response: JWT token (cookie or response body)

### Logout User
**POST** `/api/users/logout`
- Clears authentication cookie/token
- Response: `{ message: 'Logged out successfully' }`

---

## Project Endpoints

### Create Project
**POST** `/api/projects`
- Auth required
- Request body:
	- `name` (string, required)
	- `description` (string, required)
	- `status` (string, required, enum: 'active', 'closed')
	- `startDate` (ISO date string, required)
	- `endDate` (ISO date string, required)
- Response: Project object

### Get All Projects
**GET** `/api/projects`
- Auth required
- Response: Array of project objects

### Get Project by ID
**GET** `/api/projects/:id`
- Auth required
- Response: Project object

### Update Project
**PUT** `/api/projects/:id`
- Auth required
- Request body (any of):
	- `name` (string)
	- `description` (string)
	- `status` (string, enum: 'active', 'closed')
	- `startDate` (ISO date string)
	- `endDate` (ISO date string)
- Response: Updated project object

### Delete Project
**DELETE** `/api/projects/:id`
- Auth required
- Response: Success message

---

## Task Endpoints
 
### Create Task
**POST** `/api/projects/:projectId/tasks`
- Auth required
- Request: `{ projectId, user, title, description, status }`
- Response: Task object

### Get One Task for Project
**GET** `/api/tasks/:id`
- Auth required
- Response: Array of tasks

### Get All Tasks for Project
**GET** `/api/projects/:projectId/tasks`
- Auth required
- Response: Array of tasks

### Update Task
**PUT** `/api/tasks/:id`
- Auth required
- Request: `{ title, description, status }`
- Response: Updated task object

### Delete Task
**DELETE** `/api/tasks/:id`
- Auth required
- Response: Success message

---

## Notes
- All endpoints requiring authentication expect a valid JWT token.
