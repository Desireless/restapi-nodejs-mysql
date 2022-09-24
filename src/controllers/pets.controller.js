import { dbconnection } from "../db.js";

export const getPets = async (req, res) => {
    try {
        const [rows] = await dbconnection.query('SELECT * FROM mascotas')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getPet = async (req, res) => {
    try {
        const [rows] = await dbconnection.query('SELECT * FROM mascotas WHERE id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Pet not found :('
        })

        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const createPets = async (req, res) => {
    // TODO: validar datos del body
    const {name, description} = req.body;
    
    try {
        const [rows] =await dbconnection.query('INSERT INTO mascotas (name, description) VALUES (?, ?)', [name, description])
        res.send({
            id: rows.insertId,
            name,
            description,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
};

export const updatePets = async (req, res) => {
    const {id} = req.params;
    const {name, description} = req.body;

    try {
        const [result] = await dbconnection.query('UPDATE mascotas SET name = IFNULL(?, name), description = IFNULL(?, description) WHERE id = ?', [name, description, id])
        if (result.affectedRows === 0) return res.status(404).json({
           message: 'Pet not found :('
        })
    
        const [rows] = await dbconnection.query('SELECT * FROM mascotas WHERE id = ?', [id])
        res.json('recieved')
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
    
}

export const deletePets = async (req, res) => {
    try {
        const [result] = await dbconnection.query('DELETE FROM mascotas WHERE id = ?', [req.params.id])
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Pet not found :('
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}