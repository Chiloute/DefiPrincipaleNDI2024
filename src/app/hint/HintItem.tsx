'use client'; // Nécessaire si des interactions sont prévues
import React from 'react';
import './HintItem.css';
import { useStore } from '../../store/temperature';

interface HintProps {
  x: number; // La position (par ex., 1, 4, etc.)
  y: number; // La position (par ex., 1, 4, etc.)
  generation: number; 
  intensity?: number; // l'intensité (1:3)
  content: string;  // Le texte de l'aide
}

declare module 'react' {
  interface CSSProperties {
    '--bg-color'?: string;  // Ajoutez ici toutes les variables CSS que vous utilisez
  }
}

const HintItem: React.FC<HintProps> = ({ x, y, generation, intensity=1, content }) => {
  
  let color = "";
  switch (intensity) {
    case 2:
      color = "orange";
      break;
    case 3:
      color = "red";
      break;
    default:
      color = "green";
      break;
  }
  const temperature = useStore((state) => state.temperature);

  if (generation == temperature)
    return (
      <button className='labels' style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, "--bg-color": color}}>
        {content}
      </button>
    );
  else
    return (<button className='labels' style={{display: 'none'}}></button>);
};

export default HintItem;
