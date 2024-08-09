import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World..!")
})

router.get('/error', (req, res) => {
    throw new Error('This is a test error.');
});

// Create a new user
router.post('/users', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({ username, password })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }

})

// Read all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ "error": error.message })
    }
})


// Get user by id
router.get('/users/:id', async (req, res) => {

    const { id } = req.params;
    console.log("reached " + id)
    try {
        const user = await User.findByPk(id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send("User not found")
        }

    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
})

// Update user using id
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let user = await User.findByPk(id)
        if (user) {
            user.username = req.body.username;
            user.password = req.body.password
            user.save()
            res.status(200).json(user)
        } else {
            res.status(404).json({ "message": "User not found" })
        }
    } catch (err) {
        res.status(500).json({ "error": "server error" })
    }
})

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        let user = await User.findByPk(id)
        if (user) {
            user.destroy()
            res.status(200).send("User is deleted")
        } else {
            res.status(404).json({ message: "User is not found" })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
export default router;