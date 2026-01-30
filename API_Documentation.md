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
- Request: `{ name, description, status, tags, startDate, endDate }`
- Response: Project object

### Get All Projects
**GET** `/api/projects`
- Auth required
- Response: Array of projects

### Get Project by ID
**GET** `/api/projects/:id`
- Auth required
- Response: Project object

### Update Project
**PUT** `/api/projects/:id`
- Auth required
- Request: `{ name, description, status, tags, startDate, endDate }`
- Response: Updated project object

### Delete Project
**DELETE** `/api/projects/:id`
- Auth required
- Response: Success message

---

## Task Endpoints

### Create Task
**POST** `/api/tasks`
- Auth required
- Request: `{ projectId, name, description, status, tags }`
- Response: Task object

### Get Tasks for Project
**GET** `/api/tasks/project/:projectId`
- Auth required
- Response: Array of tasks

### Update Task
**PUT** `/api/tasks/:id`
- Auth required
- Request: `{ name, description, status, tags }`
- Response: Updated task object

### Delete Task
**DELETE** `/api/tasks/:id`
- Auth required
- Response: Success message

---
// hiqe kete ose modific
## Notes
- All endpoints requiring authentication expect a valid JWT token.
- `status` fields are numbers (see your model for details).
- `tags` are arrays of strings.
- `startDate` and `endDate` are ISO date strings.
