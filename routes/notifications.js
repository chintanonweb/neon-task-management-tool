const express = require('express');
const { createNotification, getNotifications, updateNotification, deleteNotification } = require('../database/notifications');
const router = express.Router();

// Send Notification
router.post('/notifications', async (req, res) => {
    const { recipient_id, message, type } = req.body;
    try {
        const result = await createNotification(recipient_id, message, type);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send notification' });
    }
});

// Get Notifications
router.get('/notifications', async (req, res) => {
    try {
        const result = await getNotifications();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get notifications' });
    }
});

// Update Notification
router.put('/notifications/:notificationId', async (req, res) => {
    const { notificationId } = req.params;
    const { is_read } = req.body;
    try {
        const result = await updateNotification(notificationId, is_read);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update notification' });
    }
});

// Delete Notification
router.delete('/notifications/:notificationId', async (req, res) => {
    const { notificationId } = req.params;
    try {
        await deleteNotification(notificationId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete notification' });
    }
});

module.exports = router;
