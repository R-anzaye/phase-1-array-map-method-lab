const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
  return tutorials.map(tutorial => {
    // Split the tutorial title into an array of words
    let words = tutorial.split(' ')

    // Iterate through each word and capitalize the first character
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }

    // Join the words back together and return the title cased string
    return words.join(' ')
  })
}




console.log(titleCased(tutorials))
