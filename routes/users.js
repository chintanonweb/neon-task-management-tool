const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../database/users');

// Create User
router.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const result = await createUser(username, email, password);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Get Users
router.get('/users', async (req, res) => {
    try {
        const filters = req.query; // Handle optional filters
        const result = await getUsers(filters);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get users' });
    }
});

// Update User
router.put('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const updates = req.body;
    try {
        const result = await updateUser(userId, updates);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

// Delete User
router.delete('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        await deleteUser(userId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

module.exports = router;
