const sql = require('./sql');

const addFile = async (taskId, file_name, file_path) => {
    return await sql`
        INSERT INTO file_attachments (task_id, file_name, file_path) 
        VALUES (${taskId}, ${file_name}, ${file_path}) RETURNING *`;
};

const getFiles = async (taskId) => {
    return await sql`SELECT * FROM file_attachments WHERE task_id = ${taskId}`;
};

const deleteFile = async (fileId) => {
    return await sql`DELETE FROM file_attachments WHERE id = ${fileId}`;
};

module.exports = { addFile, getFiles, deleteFile };
