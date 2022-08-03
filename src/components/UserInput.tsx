import React from 'react';

interface UserInput {
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
  matchType: string;
}
function CaptureUserInput({ handleUserInput, userInput, matchType }: UserInput) {
  return (
    <>
      <input type="text" value={userInput} onChange={handleUserInput} />
      <p>
        English:
        {userInput}
      </p>
      <p>
        Mode:
        {' '}
        {matchType}
      </p>
    </>
  );
}

export default CaptureUserInput;
