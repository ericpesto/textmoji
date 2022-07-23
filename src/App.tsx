import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [textPhrase, setTextPhrase] = useState<string>('')
  const [textPhraseWords, setTextPhraseWords] = useState<string[]>([])
  const [uncodePhraseWords, setUnicodePhraseWords] =  useState<string[]>([])
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

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextInput(e)
    splitTextPhraseIntoWords()
  }

  // need a better way to account for copy and paste
  // do i need a useEffect?

  console.log('textPhrase ->', textPhrase)
  console.log('textPhraseWords ->', textPhraseWords)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Translate text to 🙂
        </p>
        <input type="text" value={textPhrase} onChange={handleUserInput}></input>
        <p>Text: {textPhrase}</p>
        <p>Words:</p>
        {textPhraseWords.map((word, index) => {
          return <li key={index}>{word}</li>
        })}
      </header>
    </div>
  );
}

export default App;
