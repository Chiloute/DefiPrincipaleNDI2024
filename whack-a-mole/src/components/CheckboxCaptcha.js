'use client';
import { useState } from 'react';
import WhackAMoleGame from '../components/WhackAMole'; // Assurez-vous que le chemin est correct

const CheckboxCaptcha = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  // Gère le changement d'état de la checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Met à jour l'état de la checkbox

    if (event.target.checked) {
      setGameStarted(true); // Lance le jeu dès que la case est cochée
      setGameFinished(false); // Réinitialise l'état du jeu à non terminé
    } else {
      setGameStarted(false); // Cache le jeu si la case est décochée
      setGameFinished(false); // Réinitialise l'état du jeu à non terminé
    }
  };

  // Cette fonction est appelée une fois le jeu terminé
  const handleGameFinished = () => {
    setGameFinished(true); // Le jeu est terminé
  };

  // Fonction pour réinitialiser le jeu à chaque validation
  const resetGame = () => {
    setGameStarted(false);
    setGameFinished(false);
    setIsChecked(false);  // Réinitialise la case à cocher
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Rectangle autour de la checkbox */}
      {!gameStarted && !gameFinished && (
        <div
          style={{
            display: 'inline-block',
            padding: '20px',
            border: '2px solid #4285F4',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            {/* Case à cocher */}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{
                width: '22px',
                height: '22px',
                marginRight: '12px',
                borderRadius: '4px',
                border: '2px solid #ccc',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                accentColor: '#4285F4',
              }}
            />
            <span style={{ fontSize: '16px', color: '#5f6368' }}>
              Je ne suis pas un robot
            </span>
          </label>
        </div>
      )}

      {/* Affichage du jeu si la case est cochée */}
      {gameStarted && !gameFinished && <WhackAMoleGame onGameFinished={handleGameFinished} />}
    </div>
  );
};

export default CheckboxCaptcha;
