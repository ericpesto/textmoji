import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [textPhrase, setTextPhrase] = useState<string>('')
  const [textPhraseWords, setTextPhraseWords] = useState<string[]>([])
  // const [unicodePhraseWords, setUnicodePhraseWords] =  useState<string[]>([])
  const [emojiPhraseWords, setEmojiPhraseWords] = useState<string[]>([])
  const [emojiPhrase, setEmojiPhrase] = useState<string>('')

  const handleTextInput = (e: any) => {
    // bug/ account for extra spaces? atm they are counted as words
    setTextPhrase( e.target.value)
  }

  const splitTextPhraseIntoWords = () => {
    const phraseToWords = textPhrase.split(' ')
    setTextPhraseWords(phraseToWords)
    console.log(textPhraseWords)
  }
  // TODO
  // * filter words for matches w/ emoji names. 
  // * if true, return the unicode codepoint of that emoji. 
  // * then convert it from the unicode to the emoji 
  // * and return the array of both words and emojis.

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextInput(e)
    splitTextPhraseIntoWords()
  }


  console.log('textPhrase ->', textPhrase)
  console.log('textPhraseWords ->', textPhraseWords)
  // console.log('unicodePhraseWords ->', unicodePhraseWords)
  console.log('emojiPhraseWords ->', emojiPhraseWords)
  console.log('emojiPhrase ->', emojiPhrase)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Translate text to 🙂
        </p>
        <input type="text" value={textPhrase} onChange={handleUserInput}></input>
        <p>Text: {textPhrase}</p>
        {/* <p>Output: {emojiPhrase}</p> */}
        {/* <p>Words:</p>
        {textPhraseWords.map((word, index) => {
          return <li key={index}>{word}</li>
        })} */}
      </header>
    </div>
  );
}

export default App;
