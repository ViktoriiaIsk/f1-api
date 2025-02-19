import { Request, Response } from "express";
import Team from "../models/Team";

export const getTeams = async (req: Request, res: Response) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
