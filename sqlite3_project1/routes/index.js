import express from "express"
import { getGames } from "../controllers/index.js";

const router = express.Router();

// Get all games
router.get('/games', getGames)


// async (req, res) => {
//     const db = await dbPromise();
//     const games = await db.all('SELECT * FROM games');
//     res.json(games);
// });


export default router;