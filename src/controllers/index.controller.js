import { dbconnection } from "../db.js";

export const ping = async (req, res) => {
    try {
        const result = await dbconnection.query('SELECT "Pong" AS result')
        res.json(result[0])
        
    } catch (error) {
        return res.status(500).json({
            message: 'Cannot connect to database'
        })
    }
}