import dbPromise from "../config/database.js";

const getDbGames = async (req, res) => {
    const db = await dbPromise();
    const games = await db.all('SELECT * FROM games');
    res.json({ games });
}


const getDbGameById = async (req, res) => {
    const db = await dbPromise();
    const game = await db.get('SELECT * FROM games WHERE id = ?', [req.params.id]);
    if (game) {
        res.json(game);
    } else {
        res.status(404).send('Game not found');
    }
}


export { getDbGames, getDbGameById }