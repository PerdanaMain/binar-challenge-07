import express from "express";
import { filterCar } from "../controllers/Controller.js";

const router = express.Router();

// Endpoint
router.get("/filtercar", filterCar);

export default router;
