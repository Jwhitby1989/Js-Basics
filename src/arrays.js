const getNthElement = (index, array) => {
  const numOfElements = array.length;
  const lesserThanArray = index < numOfElements;
  if (lesserThanArray) {
      return array[index]
  } else {
     return array[index - numOfElements]
  }
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element)
};

const removeNthElement = (index, array) => {
  return array.splice(index,1)
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString())
};

const uppercaseWordsInArray = strings => {
  return strings.map (string => string.toUpperCase())
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
