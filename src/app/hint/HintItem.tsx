'use client'; // Nécessaire si des interactions sont prévues

import React, { useState } from 'react';
import './HintItem.css';
import { useStore } from '../page';

interface HintProps {
  x: number; // La position (par ex., 1, 4, etc.)
  y: number; // La position (par ex., 1, 4, etc.)
  generation: number; 
  intensity?: number; // l'intensité (1:3)
  title?: string;    // Le contenu du point
  content: string;  // Le texte de l'aide
}

const HintItem: React.FC<HintProps> = ({ x, y, generation, intensity=1, title="", content }) => {
  var color = "";
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
      <button className='labels' style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, '--bg-color': color}}>
        {content}
      </button>
    );
  else
    return (<button className='labels' style={{display: 'none'}}></button>);
};

export default HintItem;
