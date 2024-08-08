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
const createDbGame = async (req, res) => {
    const { name, genre } = req.body;
    const db = await dbPromise();
    const result = await db.run('INSERT INTO games (name, genre) VALUES (?, ?)', [name, genre]);
    res.status(201).json({ name, genre, id: result.lastID });
}

export { getDbGames, getDbGameById, createDbGame }