import mongoose, { Schema, Document } from "mongoose";

interface ITeamDriver {
    driver_id: mongoose.Types.ObjectId;
    position: number;
}

interface ITeam extends Document {
    team_id: string;
    name: string;
    principal: string;
    base: string;
    founded_year: number;
    engine: string;
    drivers: ITeamDriver[];
    image: string;
}

const TeamSchema: Schema = new Schema({
    team_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    principal: { type: String, required: true },
    base: { type: String, required: true },
    founded_year: { type: Number, required: true },
    engine: { type: String, required: true },
    drivers: [
        {
            driver_id: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
            position: { type: Number, required: true }
        }
    ],
    image: { type: String, required: true }
});

export default mongoose.model<ITeam>("Team", TeamSchema);
