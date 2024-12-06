'use client'; // Nécessaire si des interactions sont prévues

import React, { useState } from 'react';
import './HintItem.css';

interface HintProps {
  x: number; // La position (par ex., 1, 4, etc.)
  y: number; // La position (par ex., 1, 4, etc.)
  intensity?: number; // l'intensité (1:3)
  title?: string;    // Le contenu du point
  content: string;  // Le texte de l'aide
}

const HintItem: React.FC<HintProps> = ({ x, y, intensity=1, title="", content }) => {
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
  return (
    <button className='labels' style={{ position: 'absolute', left: x, top: y, '--bg-color': color}}>
      {content}
    </button>
  );
};

export default HintItem;
