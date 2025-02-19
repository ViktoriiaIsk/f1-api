import express from "express";
import { getDrivers} from "../controllers/driverController";

const router = express.Router();

router.get("/", getDrivers);


export default router;
