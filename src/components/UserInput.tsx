import React from 'react';

interface userInput { 
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textPhrase: string;
}

function UserInput({ handleUserInput, textPhrase }: userInput) {
  return (
    <>
      <input type="text" value={textPhrase} onChange={handleUserInput} />
      <p>
        English:
        {textPhrase}
      </p>
    </>
  );
}

export default UserInput;
