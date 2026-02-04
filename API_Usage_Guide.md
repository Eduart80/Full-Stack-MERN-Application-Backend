# API Usage Guide

This guide provides step-by-step instructions on how to use the Full-Stack MERN Application API.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Authentication Flow](#authentication-flow)
3. [Working with Projects](#working-with-projects)
4. [Working with Tasks](#working-with-tasks)
5. [Example Workflows](#example-workflows)
6. [Error Handling](#error-handling)

---

## Getting Started

### Base URL
```
http://localhost:5000 (or your configured PORT)
```

### Prerequisites
- Node.js installed
- MongoDB running
- Environment variables configured in `.env` file

### Required Headers
- **Content-Type**: `application/json`
- **Authorization**: `Bearer <your-jwt-token>` (for protected routes)

---

## Authentication Flow

### Step 1: Register a New User

**Endpoint**: `POST /api/users/register`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Example using cURL**:
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"securePassword123"}'
```

**Example using JavaScript (Fetch)**:
```javascript
const response = await fetch('http://localhost:5000/api/users/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'securePassword123'
  })
});
const data = await response.json();
console.log(data);
```

### Step 2: Login

**Endpoint**: `POST /api/users/login`

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response**: You'll receive a JWT token (either in a cookie or response body)

**Example using cURL**:
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"securePassword123"}' \
  -c cookies.txt
```

**Example using JavaScript (Fetch)**:
```javascript
const response = await fetch('http://localhost:5000/api/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include', // Important for cookie handling
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'securePassword123'
  })
});
const data = await response.json();
// Save the token if provided in response body
const token = data.token;
```

### Step 3: Use the Token for Protected Routes

For all subsequent requests to protected endpoints, include the token:

**Using Cookies** (if token is stored in cookies):
```javascript
fetch('http://localhost:5000/api/projects', {
  credentials: 'include'
});
```

**Using Authorization Header**:
```javascript
fetch('http://localhost:5000/api/projects', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

---

## Working with Projects

### Create a Project

**Endpoint**: `POST /api/projects`

**Request Body**:
```json
{
  "name": "Website Redesign",
  "description": "Complete redesign of company website",
  "status": "active",
  "startDate": "2026-02-01T00:00:00.000Z",
  "endDate": "2026-06-30T00:00:00.000Z"
}
```

**Example using cURL**:
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"name":"Website Redesign","description":"Complete redesign","status":"active","startDate":"2026-02-01T00:00:00.000Z","endDate":"2026-06-30T00:00:00.000Z"}'
```

**Example using JavaScript**:
```javascript
const response = await fetch('http://localhost:5000/api/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name: 'Website Redesign',
    description: 'Complete redesign of company website',
    status: 'active',
    startDate: '2026-02-01T00:00:00.000Z',
    endDate: '2026-06-30T00:00:00.000Z'
  })
});
const project = await response.json();
console.log('Created project:', project);
```

### Get All Projects

**Endpoint**: `GET /api/projects`

**Example using cURL**:
```bash
curl -X GET http://localhost:5000/api/projects \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Example using JavaScript**:
```javascript
const response = await fetch('http://localhost:5000/api/projects', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const projects = await response.json();
console.log('All projects:', projects);
```

### Get a Specific Project

**Endpoint**: `GET /api/projects/:id`

**Example using JavaScript**:
```javascript
const projectId = '507f1f77bcf86cd799439011';
const response = await fetch(`http://localhost:5000/api/projects/${projectId}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const project = await response.json();
```

### Update a Project

**Endpoint**: `PUT /api/projects/:id`

**Request Body** (all fields optional):
```json
{
  "name": "Updated Project Name",
  "status": "closed"
}
```

**Example using JavaScript**:
```javascript
const projectId = '507f1f77bcf86cd799439011';
const response = await fetch(`http://localhost:5000/api/projects/${projectId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    status: 'closed'
  })
});
const updatedProject = await response.json();
```

### Delete a Project

**Endpoint**: `DELETE /api/projects/:id`

**Example using JavaScript**:
```javascript
const projectId = '507f1f77bcf86cd799439011';
const response = await fetch(`http://localhost:5000/api/projects/${projectId}`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const result = await response.json();
console.log(result.message);
```

---

## Working with Tasks

### Create a Task

**Endpoint**: `POST /api/projects/:projectId/tasks`

**Request Body**:
```json
{
  "title": "Design homepage mockup",
  "description": "Create initial design mockups for the homepage",
  "status": "pending",
  "user": "507f1f77bcf86cd799439011"
}
```

**Example using JavaScript**:
```javascript
const projectId = '507f1f77bcf86cd799439011';
const response = await fetch(`http://localhost:5000/api/projects/${projectId}/tasks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    title: 'Design homepage mockup',
    description: 'Create initial design mockups for the homepage',
    status: 'pending',
    user: '507f1f77bcf86cd799439011'
  })
});
const task = await response.json();
```

### Get All Tasks for a Project

**Endpoint**: `GET /api/projects/:projectId/tasks`

**Example using JavaScript**:
```javascript
const projectId = '507f1f77bcf86cd799439011';
const response = await fetch(`http://localhost:5000/api/projects/${projectId}/tasks`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const tasks = await response.json();
console.log('Project tasks:', tasks);
```

### Get a Specific Task

**Endpoint**: `GET /api/tasks/:id`

**Example using JavaScript**:
```javascript
const taskId = '507f1f77bcf86cd799439012';
const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const task = await response.json();
```

### Update a Task

**Endpoint**: `PUT /api/tasks/:id`

**Request Body** (all fields optional):
```json
{
  "title": "Updated task title",
  "status": "in-progress"
}
```

**Example using JavaScript**:
```javascript
const taskId = '507f1f77bcf86cd799439012';
const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    status: 'completed'
  })
});
const updatedTask = await response.json();
```

### Delete a Task

**Endpoint**: `DELETE /api/tasks/:id`

**Example using JavaScript**:
```javascript
const taskId = '507f1f77bcf86cd799439012';
const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const result = await response.json();
```

---

## Example Workflows

### Complete Workflow: Creating a Project with Tasks

```javascript
// 1. Register and Login
const loginResponse = await fetch('http://localhost:5000/api/users/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'securePassword123'
  })
});
const { token } = await loginResponse.json();

// 2. Create a new project
const projectResponse = await fetch('http://localhost:5000/api/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name: 'Mobile App Development',
    description: 'Build a new mobile application',
    status: 'active',
    startDate: '2026-02-01T00:00:00.000Z',
    endDate: '2026-08-01T00:00:00.000Z'
  })
});
const project = await projectResponse.json();

// 3. Add tasks to the project
const task1Response = await fetch(`http://localhost:5000/api/projects/${project._id}/tasks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    title: 'Setup development environment',
    description: 'Install and configure all necessary tools',
    status: 'pending',
    user: project.createdBy
  })
});

const task2Response = await fetch(`http://localhost:5000/api/projects/${project._id}/tasks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    title: 'Design UI/UX',
    description: 'Create wireframes and mockups',
    status: 'pending',
    user: project.createdBy
  })
});

// 4. Get all tasks for the project
const tasksResponse = await fetch(`http://localhost:5000/api/projects/${project._id}/tasks`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const tasks = await tasksResponse.json();
console.log('All tasks:', tasks);

// 5. Update task status
const task1 = await task1Response.json();
await fetch(`http://localhost:5000/api/tasks/${task1._id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({ status: 'in-progress' })
});
```

---

## Error Handling

### Common HTTP Status Codes

- **200**: Success
- **201**: Created successfully
- **400**: Bad request (invalid data)
- **401**: Unauthorized (missing or invalid token)
- **404**: Resource not found
- **500**: Server error

### Example Error Response
```json
{
  "error": "Invalid credentials",
  "message": "Email or password is incorrect"
}
```

### Handling Errors in JavaScript
```javascript
try {
  const response = await fetch('http://localhost:5000/api/projects', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('Error:', error.message);
}
```

---

## Testing with Postman

1. **Import Collection**: Create a new collection in Postman
2. **Set Environment Variable**: Create a variable `token` to store your JWT
3. **Login Request**: 
   - Create POST request to `/api/users/login`
   - In Tests tab, add: `pm.environment.set("token", pm.response.json().token);`
4. **Authenticated Requests**:
   - Add `Authorization` header with value `Bearer {{token}}`

---

## Best Practices

1. **Always validate token expiration** and handle re-authentication
2. **Store tokens securely** (use httpOnly cookies or secure storage)
3. **Handle errors gracefully** with try-catch blocks
4. **Use HTTPS** in production environments
5. **Implement rate limiting** on the client side
6. **Log out users** when their session expires

---

## Additional Resources

- [API_Documentation.md](API_Documentation.md) - Complete endpoint reference
- [Readme.md](Readme.md) - Project setup instructions

---

## Support

For issues or questions, please refer to the project documentation or contact the development team.
