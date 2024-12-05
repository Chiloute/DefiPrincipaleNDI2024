'use client';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Create a wrapper component that will load Phaser dynamically
const WhackAMoleGame = dynamic(() => {
  return import('./WhackAMoleGame');
}, {
  ssr: false // This ensures the component only loads on the client side
});

export default function WhackAMole() {
  return (
    <div className="inline-block">
      <WhackAMoleGame />
    </div>
  );
}
