import mongoose, { Schema, Document } from "mongoose";

interface IRace extends Document {
    round: number;
    circuit_id: mongoose.Types.ObjectId;
    date: Date;
    sprint_race: boolean;
    fastest_lap: string;
    race_results: { driver_id: mongoose.Types.ObjectId; time: number; position: number; points: number }[];
}

const RaceSchema: Schema = new Schema({
    round: { type: Number, required: true },
    circuit_id: { type: Schema.Types.ObjectId, ref: "Circuit", required: true },
    date: { type: Date, required: true },
    sprint_race: { type: Boolean, required: true },
    fastest_lap: { type: String, required: true },
    race_results: [
        {
            driver_id: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
            time: { type: Number, required: true },
            position: { type: Number, required: true },
            points: { type: Number, required: true }
        }
    ]
});

export default mongoose.model<IRace>("Race", RaceSchema);
