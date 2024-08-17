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
exports.logOutUser = exports.credentialExistingService = exports.credentialService = void 0;
const data_source_1 = require("../config/data.source");
const loginValid_1 = require("../middlewares/loginValid");
const credentialService = (credDto) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield data_source_1.CredentialModel.create(credDto);
    credential.login = false;
    yield data_source_1.CredentialModel.save(credential);
    return credential;
});
exports.credentialService = credentialService;
const credentialExistingService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, loginValid_1.loginIsValid)(username, password);
    }
    catch (error) {
        throw error;
    }
});
exports.credentialExistingService = credentialExistingService;
const logOutUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield data_source_1.UserModel.findOneBy({ id });
        if (user) {
            let loginProperty = user.credentialID.login;
            console.log(loginProperty);
            if (loginProperty) {
                loginProperty = false;
                // UserModel.save(loginProperty)
            }
        }
    }
    catch (error) {
        throw error;
    }
});
exports.logOutUser = logOutUser;
