"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLatop_1 = __importDefault(require("./BaseLatop"));
class Macbook extends BaseLatop_1.default {
    constructor(type, numeric, touchButton) {
        super("Macbook", type, numeric, touchButton);
    }
}
exports.default = Macbook;
