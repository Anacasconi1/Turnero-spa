"use strict";
//aca van a estar los el registro y el login
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
exports.logoutUserController = exports.loginUserController = exports.registerUserController = void 0;
const usersService_1 = require("../services/usersService");
const cedentialService_1 = require("../services/cedentialService");
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield (0, usersService_1.createNewUserService)(user);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({
            message: "No se pudo registrar al usuario",
            error: error,
        });
    }
});
exports.registerUserController = registerUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = yield (0, cedentialService_1.credentialExistingService)(username, password);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({
            message: "Usuario o contraseña incorrectos",
            error,
        });
    }
});
exports.loginUserController = loginUserController;
const logoutUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, cedentialService_1.logOutUser)(Number(id));
        res.status(200).json({ message: "Usuario deslogueado correctamente." });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.logoutUserController = logoutUserController;
