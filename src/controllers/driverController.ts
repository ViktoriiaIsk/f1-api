import { Request, Response } from "express";
import Driver from "../models/Driver";

export const getDrivers = async (req: Request, res: Response) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
