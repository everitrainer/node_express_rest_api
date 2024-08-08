import express from "express"
import { getGames, getGamesById } from "../controllers/index.js";

const router = express.Router();

// Get all games
router.get('/games', getGames);
// Get a specific game by ID
app.get('/games/:id', getGamesById);



// async (req, res) => {
//     const db = await dbPromise();
//     const games = await db.all('SELECT * FROM games');
//     res.json(games);
// });


export default router;