"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("./users");
const appoint_1 = require("./appoint");
const router = (0, express_1.Router)();
router.use("/users", users_1.userRouter);
router.use("/appointment", appoint_1.appointRouter);
exports.default = router;
