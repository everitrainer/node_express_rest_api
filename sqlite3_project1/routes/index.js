import express from "express"
import { getGames, getGamesById, createGame } from "../controllers/index.js";

const router = express.Router();

// Get all games
router.get('/games', getGames);
// Get a specific game by ID
router.get('/games/:id', getGamesById);


// Add a new game
router.post('/games', createGame);

// async (req, res) => {
//     const db = await dbPromise();
//     const games = await db.all('SELECT * FROM games');
//     res.json(games);
// });


export default router;