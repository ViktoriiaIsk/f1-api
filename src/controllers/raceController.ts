import { Request, Response } from "express";
import Race from "../models/Race";

export const getRaces = async (req: Request, res: Response) => {
    try {
        const races = await Race.find();
        res.json(races);
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};

export const createRace = async (req: Request, res: Response) => {
    try {
        const newRace = new Race(req.body);
        await newRace.save();
        res.status(201).json(newRace);
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};