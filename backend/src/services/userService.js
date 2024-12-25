const db = require('../config/database');

const getAllUsers = async () => {
    try {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        throw new Error('Error fetching users from database');
    }
};

const createUser = async (name, email) => {
    try {
        const result = await db.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error('Error creating user in database');
    }
};

module.exports = {
    getAllUsers,
    createUser,
};
