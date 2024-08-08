import { getServiceGames, getServiceGamesById, createServiceGame } from "../services/index.js"

const getGames = (req, res) => {
    getServiceGames(req, res);
}

const getGamesById = (req, res) => {
    getServiceGamesById(req, res);

}

const createGame = (req, res) => {
    createServiceGame(req, res);

}


export { getGames, getGamesById, createGame }