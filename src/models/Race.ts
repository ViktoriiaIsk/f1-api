import mongoose, { Schema, Document } from "mongoose";

interface IRace extends Document {
    round: number;
    circuit_id: string;
    date: Date;
    sprint_race: boolean;
    fastest_lap: string;
    race_results: {
        position: number;
        driver_id: string;
        time: number;
        points: number;
    }[];
}

const RaceSchema: Schema = new Schema({
    round: { type: Number, required: true },
    circuit_id: { type: String, required: true },
    date: { type: Date, required: true },
    sprint_race: { type: Boolean, required: true },
    fastest_lap: { type: String, required: true },
    race_results: [
        {
            position: { type: Number, required: true },
            driver_id: { type: String, required: true },
            time: { type: Number, required: true },
            points: { type: Number, required: true }
        }
    ]
});

export default mongoose.model<IRace>("Race", RaceSchema);
