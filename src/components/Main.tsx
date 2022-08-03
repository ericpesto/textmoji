import React, { useEffect, useState } from 'react';
import UserInput from './UserInput';
import '../App.css';
import emojiDictionary, { EmojiDictionary } from '../utils/emoji-mappings/emoji-name-table';

function Main() {
  const [userInput, setUserInput] = useState<string>('');
  const [words, setWords] = useState<string[]>([]);
  const [emojis, setEmojis] = useState<object[]>([]);
  const [output, setOutput] = useState<string>('');

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const splitPhraseIntoWords = () => {
    const phraseToWords = userInput.split(' ');
    setWords(phraseToWords);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextInput(e);
  };

  useEffect(() => {
    splitPhraseIntoWords();
  }, [userInput]);

  // TODO
  // * or... easy mode, use plugins
  // * or regex to find macthes in string, could work for emojis with names that have to or more words

  // ...to get the value of the first match only, you can use find()
  // ...to get an array of all match results, you can use filter()
  // ...to get the index of the first match, you can use findIndex()

  // * NEW APPROACH?
  // ? search for matches, if match, return index of emoji and index of word.
  // ? then in array of ords, replace the indexes w/ their emoji value

  // think i need to sanitise my ditionary into a more usable format, one code point and one word names

  const findStrictEmojiMatches = (textInput: string[], emojiDict: EmojiDictionary[]) => {
    const emojiMatches: object[] = [];
    textInput.map((word: string, wordIndex: number) => {
      emojiDict.map((emoji, emojiIndex) => {
        if (emoji.name.toLowerCase() === word.toLowerCase()) {
          return emojiMatches.push({
            word,
            wordIndex,
            emojiCodePoint: emoji.codePoint,
            emojiName: emoji.name,
            emojiIndex,
          });
        }
      });
    });
    setEmojis(emojiMatches);
  };

  // const swapMatchesWithEmojis = (words:) => {
  //   // map through words
  //   // if word matches emojis,
  //   // remove item/rewrite item as codepoint
  //   // convert codepoint to emoji
    
  // };

  const findLooseEmojiMatches = (textInput: string[], emojiDict: EmojiDictionary[]) => {
    const emojiMatches: object[] = [];
    textInput.map((word: string, wordIndex: number) => {
      emojiDict.map((emoji, emojiIndex) => {
        if (emoji.name.toLowerCase().includes(word.toLowerCase())) {
          return emojiMatches.push({
            word,
            wordIndex,
            emojiCodePoint: emoji.codePoint,
            emojiName: emoji.name,
            emojiIndex,
          });
        }
      });
    });
    setEmojis(emojiMatches);
  };

  useEffect(() => {
    findStrictEmojiMatches(words, emojiDictionary);
  }, [words]);

  console.log('userInput ->', userInput);
  console.log('words ->', words);
  console.log('emojis ->', emojis);
  console.log('output ->', output);

  return (
    <header className="App-header">
      <p>Translate text to 🙂</p>
      <UserInput handleUserInput={handleUserInput} userInput={userInput} />
    </header>
  );
}

export default Main;
