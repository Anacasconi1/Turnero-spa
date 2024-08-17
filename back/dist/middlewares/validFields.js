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
exports.validationUser = void 0;
const validationUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let validator = [];
    try {
        const user = yield req.body;
        if (user) {
            for (const iterator in user) {
                const i = user[iterator];
                if (i.length > 0 || typeof (i) === "number") {
                    validator.push(true);
                }
                else {
                    validator.push(false, iterator);
                }
            }
        }
        const includerFalse = yield validator.includes(false);
        if (!includerFalse) {
            validator = [];
            next();
        }
        else {
            validator = [];
            next({ error: "Revisa los datos ingresados" });
        }
    }
    catch (error) {
        next({ error: "Revisa los datos ingresados" });
    }
});
exports.validationUser = validationUser;
