import mongoose, { Schema, Document } from "mongoose";

interface ICircuit extends Document {
    name: string;
    location: string;
    countryCode: string;
}

const CircuitSchema: Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    countryCode: { type: String, required: true }
});

export default mongoose.model<ICircuit>("Circuit", CircuitSchema);
