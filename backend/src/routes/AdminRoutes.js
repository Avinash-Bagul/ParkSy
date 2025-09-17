import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { getSpaces, getUsersDetails, updatedSpace } from "../controllers/Admin.js";
import { updateUserDetail } from "../controllers/Admin.js";

const router = Router();

router.get('/getUsers', authMiddleware, roleMiddleware("admin"), getUsersDetails);
router.put('/updateUser/:id', authMiddleware, roleMiddleware('admin'), updateUserDetail);
router.get('/getSpaces', authMiddleware, roleMiddleware("admin"), getSpaces);
router.put('/updatedSpace/:id', authMiddleware, roleMiddleware("admin"), updatedSpace);

export default router;