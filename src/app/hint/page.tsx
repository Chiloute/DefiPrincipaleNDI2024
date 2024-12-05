import React from 'react';
import HintItem from './HintItem';

const HintPage = () => {
  return (
    <div>
      <h1>Hints</h1>
      <HintItem
        position={4}
        title=" "
        content="C la mort."
      />
      <HintItem
        position={4}
        title="Body"
        content="Click on the body to access additional options."
      />
    </div>
  );
};

export default HintPage;
