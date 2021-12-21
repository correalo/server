import { surgeriesController } from "../controllers/surgeriesController";
import { Router } from "express";

const router = Router();

/* GET users listing. */
router.get("/", surgeriesController.getSurgeries);
router.get("/:id", surgeriesController.getSurgery);
router.post("/", surgeriesController.createSurgeries);
router.delete("/:id", surgeriesController.deleteSurgeries);
router.put("/:id", surgeriesController.updateSurgeries);

export { router as surgeriesRouter };
