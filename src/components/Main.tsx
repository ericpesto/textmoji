/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import '../App.css';
import DisplayOutput from './DisplayOutput';
import UserInput from './UserInput';
import emojiDictionary, { EmojiDictionary } from '../utils/emoji-mappings/emoji-name-table';

function Main() {
  const [userInput, setUserInput] = useState<string>('');
  const [words, setWords] = useState<string[]>([]);
  const [emojis, setEmojis] = useState<object[]>([]);
  const [output, setOutput] = useState<string>('');

  const matchType = 'strict';

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const phraseToWords = userInput.split(' ');
    setWords(phraseToWords);
  }, [userInput]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleText(e);
  };

  // TODO
  // * or... easy mode, use plugins
  // * or regex to find macthes in string, could work for emojis with names that have to or more words
  // think i need to sanitise my ditionary into a more usable format, one code point and one word names

  // * Strict Emoji Matches
  const findStrictEmojiMatches = (textInput: string[], emojiDict: EmojiDictionary[]) => {
    const emojiMatches: object[] = [];
    textInput.map((word, wordIndex) => {
      emojiDict.map((emoji, emojiIndex) => {
        if (emoji.name.toLowerCase() === word.toLowerCase()) {
          return emojiMatches.push({
            word,
            wordIndex,
            codePoint: emoji.codePoint,
            emojiName: emoji.name,
            emojiLibIndex: emojiIndex,
          });
        }
      });
    });
    setEmojis(emojiMatches);
  };

  // ...to get the value of the first match only, you can use find()
  // ...to get an array of all match results, you can use filter()
  // ...to get the index of the first match, you can use findIndex()

  // * Loose Emoji Matches
  const findLooseEmojiMatches = (textInput: string[], emojiDict: EmojiDictionary[]) => {
    const emojiMatches: object[] = [];
    textInput.map((word, wordIndex) => {
      emojiDict.map((emoji, emojiIndex) => {
        if (emoji.name.toLowerCase().includes(word.toLowerCase())) {
          return emojiMatches.push({
            word,
            wordIndex,
            codePoint: emoji.codePoint,
            emojiName: emoji.name,
            emojiLibIndex: emojiIndex,
          });
        }
      });
    });
    setEmojis(emojiMatches);
  };
  interface EmojiMatch {
    word: string;
    wordIndex: number;
    codePoint: string;
    emojiName: string;
    emojiLibIndex: number;
  }

  // ! ths function is causing the problem
  const swapMatchesWithEmojis = (inputWords: string[], matchedEmojis: object[]) => {
    const combined: string[] = [];
    inputWords.forEach((word, wordIndex) => {
      matchedEmojis.forEach((emoji: EmojiMatch) => {
        if (emoji.wordIndex === wordIndex) {
          const { codePoint } = emoji;
          let santiziedCodePoint: string = '';
          if (!codePoint.includes(',')) {
            santiziedCodePoint = codePoint.slice(2);
          }
          if (codePoint.includes(',')) {
            const codePoints: string[] = codePoint.split(',');
            santiziedCodePoint = codePoints[0].slice(2);
          }
          const emojiIcon = String.fromCodePoint(parseInt(santiziedCodePoint, 16));
          combined.push(emojiIcon);
        }
        // combined.push(word);
      });
    });
    // atm we are just returning matches if they are found, not word and emojis as was original intention
    console.log('combined ->', combined);
    return combined;
  };

  useEffect(() => {
    if (matchType === 'strict') {
      findStrictEmojiMatches(words, emojiDictionary);
    }

    if (matchType === 'loose') {
      findLooseEmojiMatches(words, emojiDictionary);
    }
  }, [userInput]);

  // the problem is that i was setting output inside a function that was being called.
  useEffect(() => {
    setOutput(swapMatchesWithEmojis(words, emojis));
  }, [words, emojis]);

  console.log('userInput ->', userInput);
  console.log('words ->', words);
  console.log('emojis ->', emojis);
  console.log('output ->', output);

  return (
    <header className="App-header">
      <p>Translate text to 🙂</p>
      <UserInput handleUserInput={handleUserInput} userInput={userInput} matchType={matchType} />
      <DisplayOutput output={output} />
    </header>
  );
}

export default Main;
