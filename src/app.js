import express from 'express';
import petsRoutes from "./routes/pets.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Pasa los datos a json
app.use(express.json())

app.use(indexRoutes);
app.use(petsRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app