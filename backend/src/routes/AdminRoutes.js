import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { getUsersDetails } from "../controllers/Admin.js";
import { updateUserDetail } from "../controllers/Admin.js";

const router = Router();

router.get('/getUsers', authMiddleware, roleMiddleware("admin"), getUsersDetails);
router.put('/updateUser/:id', authMiddleware, roleMiddleware('admin'), updateUserDetail);

export default router;