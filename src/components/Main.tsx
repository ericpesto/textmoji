/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import '../App.css';
import name from 'emoji-name-map';
import DisplayOutput from './DisplayOutput';
import UserInput from './UserInput';

function Main() {
  const [userInput, setUserInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleText(e);
  };

  useEffect(() => {
    // * can i invert the inputs to make hte reverse possible?
    // * or should it be its own function?
    // Define a function that takes a string as input
    function convertToEmoji(inputString: string) {
      // Create an object that maps words or phrases to emojis
      const emojiMap = name.emoji;
      // Split the input string into individual words
      const words = inputString.split(' ');
      // Create a variable to store the converted string
      let convertedString = '';
      // Loop through each word in the input string
      for (let i = 0; i < words.length; i += 1) {
        // Get the current word
        const word = words[i];
        // Check if the word is a key in the emojiMap object
        if (emojiMap[word]) {
          // If it is, retrieve the corresponding emoji and add it to the converted string
          convertedString += `${emojiMap[word]} `;
        } else {
          // If not, just add the word itself to the converted string
          convertedString += `${word} `;
        }
      }

      // Return the converted string
      setOutput(convertedString);
      return convertedString;
    }
    convertToEmoji(userInput);
  }, [userInput]);

  return (
    <header className="App-header">
      <p>Translate text to 🙂</p>
      <UserInput handleUserInput={handleUserInput} userInput={userInput} />
      <DisplayOutput output={output} />
    </header>
  );
}

export default Main;
// Lesson, simple data structures make a huge difference to the simplicity of FE code.
// simple data = simple code
