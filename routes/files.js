const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { addFile, getFiles, deleteFile } = require('../database/fileAttachments');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Ensure uploads/ directory exists

// Upload File
router.post('/projects/:projectId/tasks/:taskId/files', upload.single('file'), async (req, res) => {
    const { taskId } = req.params;
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const filePath = path.join('uploads', file.filename);
    try {
        const result = await addFile(taskId, file.originalname, filePath);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload file' });
    }
});

// Get Files
router.get('/projects/:projectId/tasks/:taskId/files', async (req, res) => {
    const { taskId } = req.params;
    try {
        const result = await getFiles(taskId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get files' });
    }
});

// Delete File
router.delete('/projects/:projectId/tasks/:taskId/files/:fileId', async (req, res) => {
    const { fileId } = req.params;
    try {
        await deleteFile(fileId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete file' });
    }
});

module.exports = router;
