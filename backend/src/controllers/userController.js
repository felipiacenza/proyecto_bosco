const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await userService.createUser(name, email);
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

module.exports = {
    getAllUsers,
    createUser,
};
