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
exports.loginIsValid = void 0;
const data_source_1 = require("../config/data.source");
//ya se que no es un middleware pero no sabia donde guardar la validacion
const loginIsValid = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const cred = yield data_source_1.CredentialModel.findOneBy({ username });
    if (cred) {
        if (cred.password === password) {
            cred.login = true;
            data_source_1.CredentialModel.save(cred);
            return getByUserByCredential(cred);
        }
    }
    else {
        throw Error("Usuario o contraseña incorrectos");
    }
});
exports.loginIsValid = loginIsValid;
const getByUserByCredential = (cred) => {
    const user = data_source_1.UserModel.findOneBy({ credentialID: cred });
    return user;
};
