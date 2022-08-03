import React from 'react';

interface UserInput {
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
}
function CaptureUserInput({ handleUserInput, userInput }: UserInput) {
  return (
    <>
      <input type="text" value={userInput} onChange={handleUserInput} />
      <p>
        English:
        {userInput}
      </p>
    </>
  );
}

export default CaptureUserInput;
