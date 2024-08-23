import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import ClientModel from "./models/Clients";  // Utiliser 'import' au lieu de 'require'

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/client");

mongoose.connection.on('connected', () => {
  console.log('Connecté à MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('Erreur de connexion à MongoDB:', err);
});

// Route pour la page d'accueil 
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.post('/login', (req, res) => {
  const { email, psswd } = req.body;
  
  // Log les données reçues pour vérifier
  console.log("Données reçues à la connexion : ", { email, psswd });
  
  ClientModel.findOne({ email })
    .then(user => {
      if (user) {
        console.log("Utilisateur trouvé :", user);
        if (user.psswd === psswd) {
          console.log("Mot de passe correct");
          res.json({ message: "Success" });
        } else {
          console.log("Mot de passe incorrect");
          res.json({ error: "Le mot de passe est incorrect !" });
        }
      } else {
        console.log("Utilisateur non trouvé");
        res.json({ error: "Aucun utilisateur n'existe avec cet email" });
      }
    })
    .catch(err => {
      console.error("Erreur lors de la recherche de l'utilisateur :", err);
      res.status(500).json({ error: "Erreur serveur" });
    });
});



app.post('/register', (req, res) => {
  ClientModel.create(req.body)
    .then((clients: any) => res.json(clients))
    .catch((err: any) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001 !!");
});
