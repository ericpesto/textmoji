Function: convert phrases of text into emojis, where possible, if not keep word in. 


1// get string of test
2// split string at spaces into array
0// store all enoji names in an array
3// filter through array
4// if item in array = a emoji meta name, add the necessary symbol before to make sure it is displayed as an emoji


I need a mapping from word -> emoji name -> utfcode  \u+1F923

conversion is, it finds word match with emoji name, convert that name to its UTF and then display that utf



Converting unicode to emoji resources:
- https://stackoverflow.com/questions/51640509/what-is-the-correct-way-to-convert-unicode-to-emoji


EXEMPT:
``` 
Emoji is a subset of unicode. There is no conversion from unicode to emoji necessary or possible. Just change your array to

var data = ["\u{1F923}", "\u{1F603}"]
If your input is a hex number, you can use

String.fromCodePoint(parseInt ("1F923", 16))
In HTML you can also use HTML hex entities

"&#x" + "1F923" + ";"

```