"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const Clients_1 = __importDefault(require("./models/Clients")); // Utiliser 'import' au lieu de 'require'
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect("mongodb://127.0.0.1:27017/client");
// Route pour la page d'accueil 
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
app.post('/register', (req, res) => {
    Clients_1.default.create(req.body)
        .then((clients) => res.json(clients))
        .catch((err) => res.json(err));
});
app.listen(3001, () => {
    console.log("Server is running on port 3001 !!");
});
