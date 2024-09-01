# Neon Task Management Tool

## About This Project

This Task Management Tool is a web application designed to help teams and individuals manage projects, tasks, and related activities. It features project creation, task assignment, progress tracking, user management, and more. The backend is built using Node.js with Express and PostgreSQL, hosted on Neon.

## Features

- **Project Management**: Create, update, delete, and list projects.
- **Task Management**: Create, update, delete, and list tasks within projects.
- **Progress Tracking**: Update and view progress on tasks.
- **User Management**: Signup, login, update, and delete users.
- **Notifications**: Send and manage notifications.
- **Comments**: Add and view comments on tasks.
- **File Attachments**: Upload and manage files attached to tasks.

## Environment Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (or access to a PostgreSQL database hosted on Neon)

### 1. Clone the Repository

```bash
git clone https://github.com/chintanonweb/neon-task-management-tool.git
cd task-management-tool
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project. The `.env` file should contain the following variables:

```env
PGHOST='your-postgres-host'
PGDATABASE='your-database-name'
PGUSER='your-database-username'
PGPASSWORD='your-database-password'
ENDPOINT_ID='your-endpoint-id'
SECRET_KEY='your-jwt-secret-key'
PORT=3001
```

- **PGHOST**: The host of your PostgreSQL database.
- **PGDATABASE**: The name of your PostgreSQL database.
- **PGUSER**: The username for accessing the database.
- **PGPASSWORD**: The password for the database user.
- **ENDPOINT_ID**: The endpoint ID for connecting to the database on Neon.
- **SECRET_KEY**: The secret key for signing JWT tokens.
- **PORT**: The port number on which the server will run.

### 5. Run the Server

Start the server using Node.js:

```bash
npm start
```

The server will be available at `http://localhost:3001`.

### 6. API Endpoints

Here are some of the main API endpoints:

- **Project Management**
  - Create Project: `POST /projects`
  - Get Projects: `GET /projects`
  - Update Project: `PUT /projects/:projectId`
  - Delete Project: `DELETE /projects/:projectId`

- **Task Management**
  - Create Task: `POST /projects/:projectId/tasks`
  - Get Tasks: `GET /projects/:projectId/tasks`
  - Update Task: `PUT /projects/:projectId/tasks/:taskId`
  - Delete Task: `DELETE /projects/:projectId/tasks/:taskId`

- **Progress Tracking**
  - Update Task Progress: `PUT /projects/:projectId/tasks/:taskId/progress`
  - Get Task Progress: `GET /projects/:projectId/tasks/:taskId/progress`

- **User Management**
  - Create User: `POST /users`
  - Get Users: `GET /users`
  - Update User: `PUT /users/:userId`
  - Delete User: `DELETE /users/:userId`

- **Notifications**
  - Send Notifications: `POST /notifications`

- **Comments**
  - Add Comment: `POST /projects/:projectId/tasks/:taskId/comments`

- **File Attachments**
  - Upload File: `POST /projects/:projectId/tasks/:taskId/files`

- **Authentication**
  - Signup: `POST /auth/signup`
  - Login: `POST /auth/login`

### 7. Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.

### 8. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.