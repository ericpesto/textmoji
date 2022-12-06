/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import '../App.css';
import DisplayOutput from './DisplayOutput';
import UserInput from './UserInput';
// NEW DICTORIARY

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
    // Define a function that takes a string as input
    function convertToEmoji(inputString: string) {
      // Create an object that maps words or phrases to emojis
      const emojiMap = {
        happy: '😊',
        sad: '😢',
        angry: '😠',
        laughing: '😂',
        love: '❤️',
      };

      // Split the input string into individual words
      const words = inputString.split(' ');

      // Create a variable to store the converted string
      let convertedString = '';

      // Loop through each word in the input string
      for (let i = 0; i < words.length; i++) {
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

  console.log('userInput ->', userInput);
  console.log('output ->', output);

  return (
    <header className="App-header">
      <p>Translate text to 🙂</p>
      <UserInput handleUserInput={handleUserInput} userInput={userInput} />
      <DisplayOutput output={output} />
    </header>
  );
}

export default Main;
