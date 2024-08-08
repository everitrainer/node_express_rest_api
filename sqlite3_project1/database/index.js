import openDb from "../config/database.js";

const getDbGames = async (req, res) => {
    const db = await openDb();
    const games = await db.all('SELECT * FROM games');
    res.json({ games });
}

export { getDbGames }