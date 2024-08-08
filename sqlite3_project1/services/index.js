import { getDbGames, getDbGameById, createDbGame, updateDbGame, deleteDbGame } from "../database/index.js"

const getServiceGames = (req, res) => {
    getDbGames(req, res);


}

const getServiceGamesById = (req, res) => {
    getDbGameById(req, res);

}


const createServiceGame = (req, res) => {
    createDbGame(req, res);

}
const updateServiceGame = (req, res) => {
    updateDbGame(req, res);

}
const deleteServiceGame = (req, res) => {
    updateDbGame(req, res);

}
export { getServiceGames, getServiceGamesById, createServiceGame, updateServiceGame, deleteServiceGame }