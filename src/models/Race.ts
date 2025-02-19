
import mongoose, { Schema, Document } from "mongoose";

interface IRace extends Document {
    name: string;
    location: string;
    countryCode: string;
    date: Date;
    results: { driver_id: mongoose.Types.ObjectId; time: number }[];
}

const RaceSchema: Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    countryCode: { type: String, required: true },
    date: { type: Date, required: true },
    results: [
        {
            driver_id: { type: Schema.Types.ObjectId, ref: "Driver" },
            time: { type: Number, required: true }
        }
    ]
});

export default mongoose.model<IRace>("Race", RaceSchema);
