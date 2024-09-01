const express = require('express');
const router = express.Router();
const { createProject, getProjects, updateProject, deleteProject } = require('../database/projects');

// Create Project
router.post('/projects', async (req, res) => {
    const { name, description, due_date } = req.body;
    try {
        const result = await createProject(name, description, due_date);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project' });
    }
});

// Get Projects
router.get('/projects', async (req, res) => {
    try {
        const filters = req.query; // Handle optional filters
        const result = await getProjects(filters);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get projects' });
    }
});

// Update Project
router.put('/projects/:projectId', async (req, res) => {
    const { projectId } = req.params;
    const updates = req.body;
    try {
        const result = await updateProject(projectId, updates);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update project' });
    }
});

// Delete Project
router.delete('/projects/:projectId', async (req, res) => {
    const { projectId } = req.params;
    try {
        await deleteProject(projectId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

module.exports = router;
