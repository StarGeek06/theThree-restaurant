import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: String,
    sname: String,
    email: String,
    psswd: String
});

// Utilise 'export default' pour exporter le modèle en ES Module
const ClientModel = mongoose.model("clients", ClientSchema);
export default ClientModel;
