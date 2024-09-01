const sql = require('./sql');

const createProject = async (name, description, due_date, assigned_users) => {
    return await sql`
        INSERT INTO projects (name, description, due_date) 
        VALUES (${name}, ${description}, ${due_date}) RETURNING *`;
};

const getProjects = async (filters = {}) => {
    const query = sql`SELECT * FROM projects`;
    // Add filters if provided
    return await query;
};

const updateProject = async (projectId, updates) => {
    const { name, description, due_date, assigned_users } = updates;
    return await sql`
        UPDATE projects SET 
            name = ${name}, 
            description = ${description}, 
            due_date = ${due_date}, 
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${projectId} RETURNING *`;
};

const deleteProject = async (projectId) => {
    return await sql`DELETE FROM projects WHERE id = ${projectId}`;
};

module.exports = { createProject, getProjects, updateProject, deleteProject };
