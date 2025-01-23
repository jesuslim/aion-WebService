import e, { Router } from "express";
import {
  deleteMinuta,
  getMinuta,
  getMinutas,
  patchMinuta,
  postMinuta,
} from "../controllers/minutas";

const router = Router();

router.get("/", getMinutas);
router.get("/:id", getMinuta);
router.post("/", postMinuta);
router.patch("/:id", patchMinuta);
router.delete("/:id", deleteMinuta);

export default router;
