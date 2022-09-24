import { Router } from "express";
import { getPets , getPet, createPets, updatePets, deletePets} from "../controllers/pets.controller.js";

const router = Router();

router.get('/pets', getPets);

router.get('/pets/:id', getPet);

router.post('/pets', createPets);

router.patch('/pets/:id', updatePets);

router.delete('/pets/:id', deletePets);

export default router