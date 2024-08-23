import { SetStateAction, useState } from "react";
import './reservation.css';


function Res1({ setOccasion, setName, setNbreTables, setHours, selectedOption, setSelectedOption, setTyping, nextStep }) 
{
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    nextStep();
  };

  const handleOptionChange = (event: { target: { value: SetStateAction<string> } }) => {
    const value = event.target.value;
    setSelectedOption(value);

   
    switch (value) {
      case 'Basic':
        setTyping('1000');
        break;
      case 'Prenium':
        setTyping('1500');
        break;
      case 'V.I.P':
        setTyping('2000');
        break;
      default:
        setTyping('');
        break;
    }
  };

  return (
    <>
      
      <div className="container">
        <h1>Réservation</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="occasion"
            placeholder="Occasion"
            onChange={(e) => setOccasion(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Nom"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name="nbretables"
            placeholder="Nombre de tables"
            onChange={(e) => setNbreTables(e.target.value)}
          />
          <input
            type="text"
            name="hours"
            placeholder="Heures"
            onChange={(e) => setHours(e.target.value)}
          />
          <br />

          <label style={{textAlign:'center'}}> <strong>Types de tables</strong></label><br />

          <div className="types">
            <label>
              <input 
                type="radio"
                name="tableType"
                value="Basic"
                checked={selectedOption === 'Basic'} 
                onChange={handleOptionChange}
              />
              Basic
            </label> 

            <label>
              <input 
                type="radio"
                name="tableType"
                value="Prenium"
                checked={selectedOption === 'Prenium'} 
                onChange={handleOptionChange}
              />
              Prenium
            </label> 

            <label>
              <input 
                type="radio"
                name="tableType"
                value="V.I.P"
                checked={selectedOption === 'V.I.P'} 
                onChange={handleOptionChange}
              />
              V.I.P
            </label> 
          </div>
          
          <button type="submit">Aperçu</button>
        </form>
      </div>
    </>
  );
}

function Res2({ occasion, name, nbreTables, hours, prevStep, selectedOption, nextStep }) {
  return (
    <div className="facture">
      <p>
        Réservation de {nbreTables} table(s) ({selectedOption})<br />
        au nom de {name} à l'occasion de {occasion} à {hours}.
      </p>

      <button onClick={prevStep}>Retour</button>
      <button onClick={nextStep}>Confirmer</button>
    </div>
  );
}

function Res3({ typing, selectedOption, prevStep }) {
  return (
    <div className="pay">
      <p>
        Pour confirmer la réservation {selectedOption}, <br />
        vous devez débourser une somme de {typing} FCFA.
      </p>

      <input type="text" placeholder="Entrez votre numéro de téléphone" />

      <button onClick={prevStep}>Retour</button>
      <button>Payer</button>
    </div>
  );
}

export default function Reservation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [nbreTables, setNbreTables] = useState('');
  const [hours, setHours] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [typing, setTyping] = useState('');

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const stepsRes = [
    <Res1
      setOccasion={setOccasion}
      setName={setName}
      setNbreTables={setNbreTables}
      setHours={setHours}
      nextStep={nextStep}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      setTyping={setTyping}
    />,
    <Res2
      occasion={occasion}
      name={name}
      nbreTables={nbreTables}
      hours={hours}
      prevStep={prevStep}
      selectedOption={selectedOption}
      nextStep={nextStep}
    />,
    <Res3
      typing={typing}
      selectedOption={selectedOption}
      prevStep={prevStep}
    />,
  ];

  return (
    <>

    <div className="cont">

      <h2>{currentStep + 1} / {stepsRes.length}</h2>
      
      <div className="content">

        {stepsRes[currentStep]}

      </div>
      
    </div>
      

      
      
    </>
  );
}
