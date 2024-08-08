import { getServiceGames, getServiceGamesById } from "../services/index.js"

const getGames = (req, res) => {
    getServiceGames(req, res);
}

const getGamesById = (req, res) => {
    getServiceGamesById(req, res);

}


export { getGames, getGamesById }