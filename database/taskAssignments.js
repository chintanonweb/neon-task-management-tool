const sql = require('./sql');

const assignTask = async (taskId, userId) => {
    return await sql`
        INSERT INTO task_assignments (task_id, user_id) 
        VALUES (${taskId}, ${userId}) RETURNING *`;
};

const getTaskAssignments = async (taskId) => {
    return await sql`SELECT * FROM task_assignments WHERE task_id = ${taskId}`;
};

const deleteTaskAssignment = async (taskId, userId) => {
    return await sql`DELETE FROM task_assignments WHERE task_id = ${taskId} AND user_id = ${userId}`;
};

module.exports = { assignTask, getTaskAssignments, deleteTaskAssignment };
