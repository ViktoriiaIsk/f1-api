import { Request, Response } from "express";
import Race from "../models/Race";
import { Error as MongooseError } from "mongoose";
const { ValidationError } = MongooseError;




export const getRaces = async (req: Request, res: Response) => {
    try {
        const races = await Race.find();
        res.json(races);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

