import React, { useEffect, useState } from 'react';
import UserInput from './UserInput';
import '../App.css';
import emojiDictionary from '../utils/emoji-mappings/emoji-name-table';

function Main() {
  const [textPhrase, setTextPhrase] = useState<string>('');
  const [textPhraseWords, setTextPhraseWords] = useState<string[]>([]);
  const [emojiPhraseWords, setEmojiPhraseWords] = useState<string[]>([]);
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
  // or... easy mode, use plugins

  // * filter words for matches w/ emoji names
  // * if true, return the unicode codepoint of that emoji
  // * then convert it from the unicode to the emoji
  // * else return word
  // * and return the array of both words and emojis

  // ? try w/ use effect and a array method, find?

  // const convertText = () => {
  //   const array: string[] = [];
  //   textPhraseWords.map((word: string) => {
  //     emojiDictionary.map((emoji) => {
  //       if (emoji.name.toLowerCase() === word.toLowerCase()) {
  //         console.log('emoji', emoji);
  //         return array.push(emoji.codePoint);
  //       }

  //       if (emoji.name.toLowerCase() !== word.toLowerCase()) {
  //         console.log('word', word);
  //         return array.push(word);
  //       }
  //     });
  //   });
  //   setEmojiPhraseWords(array);
  // };

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
    // convertText();
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
