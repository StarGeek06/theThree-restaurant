import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './index.css'

export default function SignUp() {
    const [name, setName] = useState('');
    const [sname, setSname] = useState('');
    const [email, setEmail] = useState('');
    const [psswd, setPasswd] = useState('');
    const [confirmPsswd, setConfirmPsswd] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Vérifie que les mots de passe correspondent
        if (psswd !== confirmPsswd) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        axios.post('http://localhost:3001/register', { name, sname, email, psswd })
            .then(_result => {
                setSuccess('Inscription réussie!');
                navigate('/log')
                setError('');
            })
            .catch(_err => {
                setError('Erreur lors de l\'inscription');
                setSuccess('');
            });
    };

    return (
        <div>

            <div className="container">
                

                <form onSubmit={handleSubmit}>
                    
                    <div className="inputs">

                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input 
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input 
                        type="text" 
                        placeholder="Surname"
                        value={sname}
                        onChange={(e) => setSname(e.target.value)} 
                /> 

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
                
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    value={confirmPsswd}
                    onChange={(e) => setConfirmPsswd(e.target.value)}
                />
                
                    </div>
                
                <button type="submit">Sign Up</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

           <p>Déjà inscrit ? <Link to="/log"> Connectez-vous !!</Link></p> 

            </div>
           

            
        </div>
    );
}
