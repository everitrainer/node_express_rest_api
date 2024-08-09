import express from 'express';

const router = express.Router();

// Mock user data
const users = [
    { id: 1, name: 'Ravi' },
    { id: 2, name: 'Neha' }
];

// Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get a single user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

export default router;
