import { getServiceGames } from "../services/index.js"

const getGames = (req, res) => {
    getServiceGames(req, res);


}

export { getGames }