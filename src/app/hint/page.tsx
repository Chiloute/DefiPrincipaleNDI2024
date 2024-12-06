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
            position={4}
            content="C la mort."
          />
        </div>
        <div className='right split'>
          <Image src="/personna.png" alt="une personne" width="141" height="388" />
          <HintItem
            position={4}
            content="Click on the body to access additional options."
          />
        </div>
    </div>
  );
};

export default HintPage;
