"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUserController = exports.getAllUsersController = void 0;
const usersService_1 = require("../services/usersService");
const getAllUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, usersService_1.allUsersRetornerService)();
        res.status(200).json(allUsers);
    }
    catch (error) {
        res.status(500).json({
            message: "No se pudo obtener todos los usuarios",
            error: error,
        });
    }
});
exports.getAllUsersController = getAllUsersController;
const getOneUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paramID = req.params.id;
        const userId = yield (0, usersService_1.returnUserByIDService)(parseInt(paramID));
        res.status(200).json(userId);
    }
    catch (error) {
        res.status(500).json({
            message: "No se pudo obtener el detalle del usuario",
            error: error,
        });
    }
});
exports.getOneUserController = getOneUserController;
