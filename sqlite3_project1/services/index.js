import { getDbGames } from "../database/index.js"

const getServiceGames = (req, res) => {
    getDbGames(req, res)
        .then((result) => res.send({ result }))


}

export { getServiceGames }