const express = require('express');
const router = express.Router();
const { addComment, getComments, deleteComment } = require('../database/comments');

// Add Comment
router.post('/projects/:projectId/tasks/:taskId/comments', async (req, res) => {
    const { taskId } = req.params;
    const { userId, comment } = req.body;
    try {
        const result = await addComment(taskId, userId, comment);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add comment' });
    }
});

// Get Comments
router.get('/projects/:projectId/tasks/:taskId/comments', async (req, res) => {
    const { taskId } = req.params;
    try {
        const result = await getComments(taskId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get comments' });
    }
});

// Delete Comment
router.delete('/projects/:projectId/tasks/:taskId/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    try {
        await deleteComment(commentId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete comment' });
    }
});

module.exports = router;
