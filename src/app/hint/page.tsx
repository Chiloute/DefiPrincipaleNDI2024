import React from 'react';
import HintItem from './HintItem';
import './HintPage.css';
import Image from 'next/image'
import { useStore } from '../page';

const HintPage = () => {
  
  const temperature = useStore((state) => state.temperature);
  return (
    <div className='HintTable'>
        <div className='left split'>
          <Image src="/terre.png" alt="une personne" width="400" height="400" />
          <HintItem
            x={10}
            y={10}
            content=""
          />
        </div>
        <div className='right split'>
          <Image src="/personna.png" alt="une personne" width="141" height="388" />
          <HintItem
            x={65}
            y={10}
            content="maux de tête"
          />
        </div>
    </div>
  );
};

export default HintPage;
