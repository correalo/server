import { surgeriesController } from "../controllers/surgeriesController";
import { Router } from "express";

const router = Router();

/* GET users listing. */
router.get('/', surgeriesController.getSurgeries);

export { router as surgeriesRouter };
