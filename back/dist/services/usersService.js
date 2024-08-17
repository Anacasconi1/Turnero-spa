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
exports.createNewUserService = exports.returnUserByIDService = exports.allUsersRetornerService = void 0;
const data_source_1 = require("../config/data.source");
const cedentialService_1 = require("./cedentialService");
const allUsersRetornerService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find({
        relations: {
            credentialID: true,
            appointments: true
        },
    });
    return users;
});
exports.allUsersRetornerService = allUsersRetornerService;
const returnUserByIDService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const finder = yield data_source_1.UserModel.findOneBy({ id });
    return finder;
});
exports.returnUserByIDService = returnUserByIDService;
const createNewUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const usercred = {
        username: user.username,
        password: user.password,
    };
    const idCrend = yield (0, cedentialService_1.credentialService)(usercred);
    const userObj = {
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        nDni: user.nDni,
        credentialID: idCrend
    };
    const newUser = yield data_source_1.UserModel.create(userObj);
    const response = data_source_1.UserModel.save(newUser);
    return response;
});
exports.createNewUserService = createNewUserService;
