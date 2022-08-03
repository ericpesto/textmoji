// TODO
// * create mapping: word -> emoji name -> utf codepoint
// * filter words for matches w/ emoji names
// * if true, return the unicode codepoint of that emoji
// * then convert it from the unicode to the emoji 
// * and return the array of both words and emojis

// v1 convert english to emoji
// v2, convert emjoi to english, this would actually be easier


EXTRA INFO: 
* Converting unicode to text/emoji:

``` 
String.fromCodePoint(parseInt(codePoint, 16))

```

A code point is a number assigned to represent an abstract character in a system for representing text (such as Unicode). In Unicode, a code point is expressed in the form "U+1234" where "1234" is the assigned number. For example, the character "A" is assigned a code point of U+0041.

In JavaScript, fromCodePoint() is a string method that is used to create a string from a sequence of Unicode code points (that may not be representable in a single UTF-16 code unit). Because the fromCodePoint() method is a static method of the String constructor, it must be invoked through the String constructor object rather than through the particular instance of the String class.

* convertTextToUnicode:
Use String.fromCharCode() like this: String.fromCharCode(parseInt(input,16)). When you put a Unicode value in a string using \u, it is interpreted as a hexdecimal value, so you need to specify the base (16) when using parseInt.

imporovements:
  // need a better way to account for copy and paste, state out os sync by one
  // do i need a useEffect?
  // stup prettier and es lint



code snippets

```

const convertTextToUnicode = () => {
    // words to characters
    // convert chars to unicode
    const wordsToUnicode = textPhraseWords.map(word => {
      const unicodeWordsArray = word.split('').map(char => {
        return String.fromCharCode(parseInt(char, 16))
      })
      return unicodeWordsArray
    })
    // join groupings of chars in unicode as words, like an array of arrays
    setUnicodePhraseWords(wordsToUnicode)
  }

  const convertUnicodeToText = () => {
    const unicodeToWords = unicodePhraseWords.map(codePoint => {
      console.log('codePoint ->', codePoint)
      //return String.fromCodePoint(parseInt(codePoint, 16))
      return 'a'
    })
    setEmojiPhraseWords(unicodeToWords)
  }

  ``

  // stroing the mapping. 
  - yaml?
  - json?
  - js object?


how to make emji co**** mponent
  https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7



  **** easy mode: https://github.com/IonicaBizau/emoji-unicode#readme

var emojiUnicode = require("emoji-unicode")

var toEmoji = require("emoji-name-map")

const emojiName = 'poop'
const codePoint = emojiUnicode(toEmoji.get(emojiName))
console.log(String.fromCodePoint(parseInt(codePoint, 16)))