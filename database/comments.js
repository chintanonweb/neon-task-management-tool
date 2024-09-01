const sql = require('./sql');

const addComment = async (taskId, userId, comment) => {
    return await sql`
        INSERT INTO comments (task_id, user_id, comment) 
        VALUES (${taskId}, ${userId}, ${comment}) RETURNING *`;
};

const getComments = async (taskId) => {
    return await sql`SELECT * FROM comments WHERE task_id = ${taskId}`;
};

const deleteComment = async (commentId) => {
    return await sql`DELETE FROM comments WHERE id = ${commentId}`;
};

module.exports = { addComment, getComments, deleteComment };
