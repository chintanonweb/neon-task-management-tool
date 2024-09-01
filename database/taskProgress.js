const sql = require('./sql');

const updateProgress = async (taskId, progress_percentage) => {
    return await sql`
        INSERT INTO task_progress (task_id, progress_percentage) 
        VALUES (${taskId}, ${progress_percentage})
        ON CONFLICT (task_id) 
        DO UPDATE SET progress_percentage = ${progress_percentage}, updated_at = CURRENT_TIMESTAMP 
        RETURNING *`;
};

const getProgress = async (taskId) => {
    return await sql`SELECT * FROM task_progress WHERE task_id = ${taskId}`;
};

module.exports = { updateProgress, getProgress };
