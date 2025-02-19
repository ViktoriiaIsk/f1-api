import { Request, Response } from "express";
import Circuit from "../models/Circuit";

export const getCircuits = async (req: Request, res: Response) => {
    try {
        const circuits = await Circuit.find();
        res.json(circuits);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export const createCircuit = async (req: Request, res: Response) => {
    try {
        const circuit = new Circuit(req.body);
        await circuit.save();
        res.status(201).json(circuit);
    } catch (error) {
        res.status(400).json({ error: "Invalid data" });
    }
};
