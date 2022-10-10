import express from "express";
import { getNearbyPartners } from "../controllers/partnersController";
const partnersRouter = express.Router();

partnersRouter.get("/get-nearby-partners", getNearbyPartners);

export default partnersRouter;
