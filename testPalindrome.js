// check if the given word is palindrome
// this can be extended to search in a dictionary and find all words

var word = "madam"

const forwardWord = word.split('')
print(forwardWord)

const backwordWord = word.split('').reverse()
print(backwordWord)

// print(JSON.stringify(forwardWord))
// print(JSON.stringify(backwordWord))

console.log(JSON.stringify(forwardWord) == JSON.stringify(backwordWord))

function print(a)
{
    console.log(a)
}
