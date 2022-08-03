import React, { useEffect, useState } from 'react';
import UserInput from './UserInput';
import '../App.css';
import emojiDictionary, { EmojiDictionary } from '../utils/emoji-mappings/emoji-name-table';

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
  // ? search for matches, if match, return index of emoji and index of word.
  // ? then in array of ords, replace the indexes w/ their emoji value

  // think i need to sanitise my ditionary into a more usable format, one code point and one word names

  const findStrictEmojiMatches = (textInput: string[], emojis: EmojiDictionary[]) => {
    const emojiMatches: object[] = [];
    textInput.map((word: string, wordIndex: number) => {
      emojis.map((emoji, emojiIndex) => {
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

  // const insertCodePoints = () => {

  // }

  // const findLooseEmojiMatches = () => {
  //   const emojiMatches: object[] = [];
  //   textPhraseWords.map((word: string, wordIndex: number) => {
  //     emojiDictionary.find((emoji, emojiIndex) => {
  //       // if (emoji.name.toLowerCase() === word.toLowerCase()) {
  //       if (emoji.name.toLowerCase().includes(word.toLowerCase())) {
  //         return emojiMatches.push({
  //           word,
  //           wordIndex,
  //           emojiCodePoint: emoji.codePoint,
  //           emojiName: emoji.name,
  //           emojiIndex,
  //         });
  //       }
  //     });
  //   });
  //   setEmojiPhraseWords(emojiMatches);
  // };

  useEffect(() => {
    findStrictEmojiMatches(textPhraseWords, emojiDictionary);
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
