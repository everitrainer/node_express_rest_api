import { getDbGames, getDbGameById } from "../database/index.js"

const getServiceGames = (req, res) => {
    getDbGames(req, res)
        .then((result) => res.send({ result }))


}

const getServiceGamesById = (req, res) => {
    getDbGameById(req, res)
        .then((result) => res.send({ result }))


}
export { getServiceGames, getServiceGamesById }