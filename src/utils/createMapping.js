import * as JSONEmojiMap from './emoji-mappings/key-value-codepoint-mapping.json';

const array = [];
const createArray = () => {
  const emojiMap = JSONEmojiMap.data;
  for (const [key, value] of Object.entries(emojiMap)) {
    // console.log(`${key}: ${value}`);
    array.push({ name: key, codePoint: value });
  }
  return array;
};

createArray();

console.log(array);
