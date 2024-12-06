import React from 'react';
import HintItem from './HintItem';
import './HintPage.css';
import Image from 'next/image'

const HintPage = () => {
  return (
    <div className='HintTable'>
        <div className='left split'>
          <h1>Hints</h1>
          <HintItem
            x={10}
            y={10}
            content="C la mort."
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
