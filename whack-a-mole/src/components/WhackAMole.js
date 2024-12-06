// src/components/WhackAMole.js
'use client';
import dynamic from 'next/dynamic';

const WhackAMoleGame = dynamic(() => import('./WhackAMoleGame'), {
  ssr: false
});

const WhackAMole = ({ onGameComplete }) => {
  return (
    <div className="inline-block">
      <WhackAMoleGame onGameComplete={onGameComplete} />
    </div>
  );
};

export default WhackAMole;
