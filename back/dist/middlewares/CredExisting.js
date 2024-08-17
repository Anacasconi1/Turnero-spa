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
exports.credAlreadyExisting = void 0;
const data_source_1 = require("../config/data.source");
const credAlreadyExisting = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield req.body;
        const credential = yield data_source_1.CredentialModel.findOneBy({ username: user.username });
        if (credential) {
            next("El usuario ya existe, intenta creando otro o ingresando si tienes acceso");
        }
        else {
            next();
        }
    }
    catch (error) {
        next("Ingrese campos validos");
    }
});
exports.credAlreadyExisting = credAlreadyExisting;
