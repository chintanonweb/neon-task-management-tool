const sql = require('./sql');

const createTask = async (projectId, name, description, due_date, priority, status) => {
    return await sql`
        INSERT INTO tasks (project_id, name, description, due_date, priority, status) 
        VALUES (${projectId}, ${name}, ${description}, ${due_date}, ${priority}, ${status}) RETURNING *`;
};

const getTasks = async (projectId, filters = {}) => {
    const query = sql`SELECT * FROM tasks WHERE project_id = ${projectId}`;
    // Add filters if provided
    return await query;
};

const updateTask = async (taskId, updates) => {
    const { name, description, due_date, priority, status } = updates;
    return await sql`
        UPDATE tasks SET 
            name = ${name}, 
            description = ${description}, 
            due_date = ${due_date}, 
            priority = ${priority},
            status = ${status},
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${taskId} RETURNING *`;
};

const deleteTask = async (taskId) => {
    return await sql`DELETE FROM tasks WHERE id = ${taskId}`;
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
