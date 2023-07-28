import express from "express";
import { addToDo } from "../controllers/controllers.js";
import { getAll } from "../controllers/controllers.js"
import { toggleTD } from "../controllers/controllers.js"
import { updateTD } from "../controllers/controllers.js"
import { deleteTD } from "../controllers/controllers.js"


export const router = express.Router();

router.post("/newtodo", addToDo);
router.get("/newtodo", getAll);
router.get("/newtodo/:id",toggleTD);
router.put("/newtodo/:id",updateTD);
router.delete("/newtodo/:id",deleteTD);