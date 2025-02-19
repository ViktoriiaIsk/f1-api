import mongoose, { Schema, Document } from "mongoose";

interface ITeam extends Document {
    name: string;
    countryCode: string;
    drivers: mongoose.Types.ObjectId[];
}

const TeamSchema: Schema = new Schema({
    name: { type: String, required: true },
    countryCode: { type: String, required: true },
    drivers: [{ type: Schema.Types.ObjectId, ref: "Driver" }]
});

export default mongoose.model<ITeam>("Team", TeamSchema);
