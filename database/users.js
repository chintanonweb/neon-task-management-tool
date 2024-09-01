const sql = require('./sql');
const bcrypt = require('bcrypt');

// Create User
const createUser = async (username, email, password) => {
    const password_hash = await bcrypt.hash(password, 10);
    return await sql`
        INSERT INTO users (username, email, password_hash) 
        VALUES (${username}, ${email}, ${password_hash}) RETURNING *`;
};

// Get All Users
const getUsers = async () => {
    return await sql`SELECT * FROM users`;
};

// Update User
const updateUser = async (userId, updates) => {
    const { email, password } = updates;
    const password_hash = password ? await bcrypt.hash(password, 10) : undefined;
    return await sql`
        UPDATE users SET 
            email = ${email}, 
            ${password_hash ? `password_hash = ${password_hash},` : ''} 
            updated_at = CURRENT_TIMESTAMP 
        WHERE id = ${userId} RETURNING *`;
};

// Delete User
const deleteUser = async (userId) => {
    return await sql`DELETE FROM users WHERE id = ${userId}`;
};

// Get User by Username
const getUserByUsername = async (username) => {
    return await sql`SELECT * FROM users WHERE username = ${username}`;
};

module.exports = { createUser, getUsers, updateUser, deleteUser, getUserByUsername };
