import { getDbGames, getDbGameById, createDbGame } from "../database/index.js"

const getServiceGames = (req, res) => {
    getDbGames(req, res);


}

const getServiceGamesById = (req, res) => {
    getDbGameById(req, res);

}


const createServiceGame = (req, res) => {
    createDbGame(req, res);

}
export { getServiceGames, getServiceGamesById, createServiceGame }