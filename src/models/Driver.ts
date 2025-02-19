import mongoose, { Schema, Document } from "mongoose";

interface IDriver extends Document {
    name: string;
    countryCode: string;
    team: mongoose.Types.ObjectId;
}

const DriverSchema: Schema = new Schema({
    name: { type: String, required: true },
    countryCode: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, ref: "Team" }
});

export default mongoose.model<IDriver>("Driver", DriverSchema);
