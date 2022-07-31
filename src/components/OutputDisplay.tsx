import React from 'react';

function OutputDisplay({ textPhrase }: {textPhrase: string}) {
  return (
    <p>
      Text:
      {' '}
      {textPhrase}
    </p>
  );
}

export default OutputDisplay;
