"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE = exports.USERNAME = exports.PASSWORD = exports.DBPORT = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.DBPORT = Number(process.env.DBPORT);
exports.PASSWORD = process.env.PASSWORD;
exports.USERNAME = process.env.USERNAME;
exports.DATABASE = process.env.DATABASE;
