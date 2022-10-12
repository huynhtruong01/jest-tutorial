function hasOddNumberDivisibleBy3(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false

    for (const number of numberList) {
        if (number % 2 === 1 && number % 3 === 0) return true
    }

    return false
}

describe('hasOddNumberDivisibleBy3(numberList)', () => {
    test('should return false when it is not array or empty array', () => {
        expect(hasOddNumberDivisibleBy3(null)).toBe(false)
        expect(hasOddNumberDivisibleBy3(undefined)).toBe(false)
        expect(hasOddNumberDivisibleBy3(12345)).toBe(false)
        expect(hasOddNumberDivisibleBy3('')).toBe(false)
        expect(hasOddNumberDivisibleBy3([])).toBe(false)
    })

    test('should return false when it has not odd number divisible 3', () => {
        expect(hasOddNumberDivisibleBy3([1, 2, 4])).toBe(false)
        expect(hasOddNumberDivisibleBy3([5, 7, 11])).toBe(false)
    })

    test('should return true when it has odd number divisible 3', () => {
        expect(hasOddNumberDivisibleBy3([1, 2, 3])).toBe(true)
        expect(hasOddNumberDivisibleBy3([22, 47, 15])).toBe(true)
    })
})
