import express from "express";
import { getCircuits, createCircuit } from "../controllers/circuitController";

const router = express.Router();

router.get("/", getCircuits);
router.post("/", createCircuit);

export default router;
