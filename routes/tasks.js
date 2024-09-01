const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../database/tasks');
const { assignTask, getTaskAssignments, deleteTaskAssignment } = require('../database/taskAssignments');
const { updateProgress, getProgress } = require('../database/taskProgress');

// Create Task
router.post('/projects/:projectId/tasks', async (req, res) => {
    const { projectId } = req.params;
    const { name, description, due_date, priority, status } = req.body;
    try {
        const result = await createTask(projectId, name, description, due_date, priority, status);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});

// Get Tasks
router.get('/projects/:projectId/tasks', async (req, res) => {
    const { projectId } = req.params;
    try {
        const filters = req.query; // Handle optional filters
        const result = await getTasks(projectId, filters);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get tasks' });
    }
});

// Update Task
router.put('/projects/:projectId/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const updates = req.body;
    try {
        const result = await updateTask(taskId, updates);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});

// Delete Task
router.delete('/projects/:projectId/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params;
    try {
        await deleteTask(taskId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

// Assign User to Task
router.post('/projects/:projectId/tasks/:taskId/assign', async (req, res) => {
    const { taskId } = req.params;
    const { userId } = req.body;
    try {
        const result = await assignTask(taskId, userId);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to assign task' });
    }
});

// Get Task Assignments
router.get('/projects/:projectId/tasks/:taskId/assignments', async (req, res) => {
    const { taskId } = req.params;
    try {
        const result = await getTaskAssignments(taskId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get task assignments' });
    }
});

// Remove User from Task
router.delete('/projects/:projectId/tasks/:taskId/assign/:userId', async (req, res) => {
    const { taskId, userId } = req.params;
    try {
        await deleteTaskAssignment(taskId, userId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove task assignment' });
    }
});

// Update Task Progress
router.put('/projects/:projectId/tasks/:taskId/progress', async (req, res) => {
    const { taskId } = req.params;
    const { progress_percentage } = req.body;
    try {
        const result = await updateProgress(taskId, progress_percentage);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task progress' });
    }
});

// Get Task Progress
router.get('/projects/:projectId/tasks/:taskId/progress', async (req, res) => {
    const { taskId } = req.params;
    try {
        const result = await getProgress(taskId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get task progress' });
    }
});

module.exports = router;
