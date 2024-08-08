import { getServiceGames, getServiceGamesById, createServiceGame, updateServiceGame, deleteServiceGame } from "../services/index.js"

const getGames = (req, res) => {
    getServiceGames(req, res);
}

const getGamesById = (req, res) => {
    getServiceGamesById(req, res);

}

const createGame = (req, res) => {
    createServiceGame(req, res);

}

const updateGame = (req, res) => {
    updateServiceGame(req, res);
}



const deleteGame = (req, res) => {
    deleteServiceGame(req, res);
}


export { getGames, getGamesById, createGame, updateGame, deleteGame }