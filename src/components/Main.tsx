import React, { useEffect, useState } from 'react';
import UserInput from './UserInput';
import '../App.css';
import emojiDictionary from '../utils/emoji-mappings/emoji-name-table';

function Main() {
  const [textPhrase, setTextPhrase] = useState<string>('');
  const [textPhraseWords, setTextPhraseWords] = useState<string[]>([]);
  const [emojiPhraseWords, setEmojiPhraseWords] = useState<object[]>([]);
  const [emojiPhrase, setEmojiPhrase] = useState<string>('');

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextPhrase(e.target.value);
  };

  const splitPhraseIntoWords = () => {
    const phraseToWords = textPhrase.split(' ');
    setTextPhraseWords(phraseToWords);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextInput(e);
  };

  useEffect(() => {
    splitPhraseIntoWords();
  }, [textPhrase]);

  // TODO
  // * or... easy mode, use plugins
  // * or regex to find macthes in string, could work for emojis with names that have to or more words

  // ...to get the value of the first match only, you can use find()
  // ...to get an array of all match results, you can use filter()
  // ...to get the index of the first match, you can use findIndex()

  // * NEW APPROACH?
  // ? store textPhraseWords as array of objects, each object:
  // ? [{word: blah, index: 0}, {word: blob, index: 1}], index so you know and can preserve order
  // ? look for matches, modify exisiting array
  // ? remove them from textPhraseWords array
  // ? add them to new array w/ index (relative to textPhraseWords array)
  // ? this way you can preserve order of words?

  // * NEW APPROACH?
  // ? search for matches, if match, return index of emoji and index of word.
  // ? then in array of ords, replace the indexes w/ their emoji value

  const findEmojiMatches = () => {
    const emojiMatches: object[] = [];
    textPhraseWords.map((word: string, wordIndex: number) => {
      emojiDictionary.map((emoji, emojiIndex) => {
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
    setEmojiPhraseWords(emojiMatches);
  };

  // const convertText = () => {
  //   const array: string[] = [];
  //   for (let i: number; i < emojiDictionary.length; i++) {
  //     for (let n: number; n < textPhraseWords.length; i++) {
  //       if (emojiDictionary[i].name.toLowerCase() === textPhraseWords[n].toLowerCase()) {
  //         console.log(emojiDictionary[i].name);
  //         console.log(emojiDictionary[i].codePoint);
  //         console.log(textPhraseWords[n]);
  //       }
  //     }
  //   }
  //   setEmojiPhraseWords(array);
  // };

  useEffect(() => {
    findEmojiMatches();
  }, [textPhraseWords]);

  console.log('textPhrase ->', textPhrase);
  console.log('textPhraseWords ->', textPhraseWords);
  console.log('emojiPhraseWords ->', emojiPhraseWords);
  console.log('emojiPhrase ->', emojiPhrase);

  return (
    <header className="App-header">
      <p>Translate text to 🙂</p>
      <UserInput handleUserInput={handleUserInput} textPhrase={textPhrase} />
      {/* <p>Output: {emojiPhrase}</p> */}
      {/* <p>Words:</p>
      {textPhraseWords.map((word, index) => {
        return <li key={index}>{word}</li>
      })} */}
    </header>
  );
}

export default Main;
