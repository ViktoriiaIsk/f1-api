import express from "express";
import { getRaces, createRace } from "../controllers/raceController";

const router = express.Router();

router.get("/", getRaces);
router.post("/", createRace)
export default router;
