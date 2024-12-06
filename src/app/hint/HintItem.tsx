'use client'; // Nécessaire si des interactions sont prévues

import React from 'react';
import './HintItem.css';

interface HintProps {
  position: number; // La position (par ex., 1, 4, etc.)
  title?: string;    // Le contenu du point
  content: string;  // Le texte de l'aide
}

const HintItem: React.FC<HintProps> = ({ position, title="", content }) => {
  return (
    <div className="item-hints">
      <div className="hint" data-position={position}>
        <span className="hint-radius"></span>
        <span className="hint-dot">{title}</span>
        <div className="hint-content do--split-children">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default HintItem;
