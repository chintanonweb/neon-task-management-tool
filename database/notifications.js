const sql = require('./sql');

const createNotification = async (recipient_id, message, type) => {
    return await sql`
        INSERT INTO notifications (recipient_id, message, type) 
        VALUES (${recipient_id}, ${message}, ${type}) RETURNING *`;
};

const getNotifications = async () => {
    return await sql`SELECT * FROM notifications`;
};

const updateNotification = async (notificationId, is_read) => {
    return await sql`
        UPDATE notifications SET 
            is_read = ${is_read}, 
            updated_at = CURRENT_TIMESTAMP 
        WHERE id = ${notificationId} RETURNING *`;
};

const deleteNotification = async (notificationId) => {
    return await sql`DELETE FROM notifications WHERE id = ${notificationId}`;
};

module.exports = { createNotification, getNotifications, updateNotification, deleteNotification };
