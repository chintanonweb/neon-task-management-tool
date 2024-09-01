const express = require('express');
const router = express.Router();
const { updateProgress, getProgress } = require('../database/taskProgress');

// Update Task Progress
router.put('/projects/:projectId/tasks/:taskId/progress', async (req, res) => {
    const { taskId } = req.params;
    const { progressPercentage } = req.body;
    try {
        const result = await updateProgress(taskId, progressPercentage);
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
