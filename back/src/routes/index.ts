import { Router } from "express";
import { userRouter } from "./users";
import { appointRouter } from "./appoint";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointment", appointRouter);

export default router;
