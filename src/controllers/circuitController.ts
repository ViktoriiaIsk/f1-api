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
