import express from 'express';
import PokemonController from "../controllers/PokemonController.ts";

const router = express.Router();

router.post("/captures/:id", PokemonController.postCapture);
router.get("/team", PokemonController.getTeam);

export default router;


