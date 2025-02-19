import { Request, Response } from "express";
import Team from "../models/Team";

export const getTeams = async (req: Request, res: Response) => {
    try {
        const teams = await Team.find().populate("drivers.driver_id");
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export const createTeam = async (req: Request, res: Response) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ error: "Invalid data" });
    }
};
