import {pool} from "../database_connection.js"

export const ping =  async (req, res) => {
    const [result]= await pool.query("SELECT 'PONG' AS resultado")
    res.json(result)
}