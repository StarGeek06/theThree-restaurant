import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [psswd, setPasswd] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setError('');
        setSuccess(''); 
        
       
        axios.post('http://localhost:3001/login', { email, psswd })
        .then(_result => {
            console.log("Réponse de l'API :", _result.data);  // Vérifie ce que l'API renvoie
            if (_result.data.message === "Success") {
                setSuccess("Connexion réussie !");
                navigate('/home');
            }
            else {
                setError(_result.data.error || "Erreur lors de la connexion.");
            }
        })
        .catch(_err => {
            console.error("Erreur côté client :", _err);
            setError("Erreur réseau ou serveur indisponible.");
        });

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
              

                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <input 
                    type="password" 
                    placeholder="Password"
                    value={psswd}
                    onChange={(e) => setPasswd(e.target.value)}
                />
                
               
                
                <button type="submit">LogIn</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            Pas de compte? <Link to="/sign"> Inscrivez-vous !!</Link>
        </div>
    );
}
