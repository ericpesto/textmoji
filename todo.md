Function: convert phrases of text into emojis, where possible, if not keep word in. 

NEED TO MATCH WORDS WITH EMOJI NAMES, AND THEN CONVERT THOSE EMOJI NAMES INTO THIER CODPEOINT AND THEN ONLY CONVERT THOSE FROM UNOCDE TO A STTRING IN ORDER TO SHOW THE EMOJI


1// get string of test
2// split string at spaces into array
0// store all enoji names in an array
3// filter through array
4// if item in array = a emoji meta name, add the necessary symbol before to make sure it is displayed as an emoji

I need a mapping from word -> emoji name -> utfcode  \u+1F923

conversion is, it finds word match with emoji name, convert that name to its UTF and then display that utf



Converting unicode to text/emoji:

EXEMPT:
``` 
String.fromCodePoint(parseInt(codePoint, 16))

```

A code point is a number assigned to represent an abstract character in a system for representing text (such as Unicode). In Unicode, a code point is expressed in the form "U+1234" where "1234" is the assigned number. For example, the character "A" is assigned a code point of U+0041.

In JavaScript, fromCodePoint() is a string method that is used to create a string from a sequence of Unicode code points (that may not be representable in a single UTF-16 code unit). Because the fromCodePoint() method is a static method of the String constructor, it must be invoked through the String constructor object rather than through the particular instance of the String class.

convertTextToUnicode:
Use String.fromCharCode() like this: String.fromCharCode(parseInt(input,16)). When you put a Unicode value in a string using \u, it is interpreted as a hexdecimal value, so you need to specify the base (16) when using parseInt.

imporovements:
  // need a better way to account for copy and paste, state out os sync by one
  // do i need a useEffect?
  // stup prettier and es lint


