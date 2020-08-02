const getEvenNumbers = (numbersArray) => {
  numbersArray.filter((number) => {   
    return number % 2 === 0
  })
}

module.exports = getEvenNumbers;