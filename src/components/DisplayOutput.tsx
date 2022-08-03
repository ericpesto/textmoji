import React from 'react';

function DisplayOutput({ output }: {output: string}) {
  return (
    <p>
      Text:
      {' '}
      {output}
    </p>
  );
}

export default DisplayOutput;
