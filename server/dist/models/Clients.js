"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ClientSchema = new mongoose_1.default.Schema({
    name: String,
    sname: String,
    email: String,
    psswd: String
});
// Utilise 'export default' pour exporter le modèle en ES Module
const ClientModel = mongoose_1.default.model("clients", ClientSchema);
exports.default = ClientModel;
