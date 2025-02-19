import mongoose, { Schema, Document } from "mongoose";

interface ILocation {
    country: string;
    city: string;
}

interface ICircuit extends Document {
    circuit_id: string;
    name: string;
    image: string;
    location: ILocation;
    length_km: number;
    turns: number;
}

const CircuitSchema: Schema = new Schema({
    circuit_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    location: {
        country: { type: String, required: true },
        city: { type: String, required: true }
    },
    length_km: { type: Number, required: true },
    turns: { type: Number, required: true }
});

export default mongoose.model<ICircuit>("Circuit", CircuitSchema);
