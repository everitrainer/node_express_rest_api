import express from "express"
import { getGames, getGamesById, createGame, updateGame, deleteGame } from "../controllers/index.js";

const router = express.Router();

// Get all games
router.get('/games', getGames);

// Get a specific game by ID
router.get('/games/:id', getGamesById);

// Add a new game
router.post('/games', createGame);

// Update a game by ID
router.put('/games/:id', updateGame)

// Delete a game by ID
router.delete('/games/:id', deleteGame);

export default router;