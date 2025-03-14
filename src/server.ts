// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import raceRoutes from "./routes/raceRoutes";
import teamRoutes from "./routes/teamRoutes";
import driverRoutes from "./routes/driverRoutes";
import circuitRoutes from "./routes/circuitRoutes";
import { notFound } from "./controllers/notFoundController";

import { helloMiddleware } from "./middleware/exampleMiddleware";
import mongoose from "mongoose";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/races", raceRoutes);
app.use("/teams", teamRoutes);
app.use("/drivers", driverRoutes);
app.use("/circuits", circuitRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Formula 1 API!" });
});

app.all("*", notFound);

// Database connection
try {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Database connection OK");

} catch (err) {
  console.error(err);
  process.exit(1);
}

// Server Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}! 🚀`);
});