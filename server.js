const express = require('express');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
const progressRoutes = require('./routes/progress');
const notificationRoutes = require('./routes/notifications');
const commentRoutes = require('./routes/comments');
const fileRoutes = require('./routes/files');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
app.use(express.json());
app.use(cors());

// Route Middleware
app.use('/projects', projectRoutes);
app.use('/projects/:projectId/tasks', taskRoutes);
app.use('/projects/:projectId/tasks/:taskId/progress', progressRoutes);
app.use('/notifications', notificationRoutes);
app.use('/projects/:projectId/tasks/:taskId/comments', commentRoutes);
app.use('/projects/:projectId/tasks/:taskId/files', fileRoutes);
app.use('/auth', authRoutes); // Use auth routes

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
