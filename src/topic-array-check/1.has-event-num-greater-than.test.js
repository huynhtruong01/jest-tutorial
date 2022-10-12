function hasEvenNumberGreaterThanN(numberList, n) {
    if (
        !Array.isArray(numberList) ||
        numberList.length === 0 ||
        !n ||
        typeof n !== 'number'
    )
        return false

    for (const number of numberList) {
        if (number % 2 === 0 && number > n) return true
    }

    return false
}

describe('hasEvenNumberGreaterThanN(numberList, n)', () => {
    test('should return false when it numberList is not array or empty array', () => {
        expect(hasEvenNumberGreaterThanN(null, 2)).toBe(false)
        expect(hasEvenNumberGreaterThanN(undefined, 2)).toBe(false)
        expect(hasEvenNumberGreaterThanN([], 2)).toBe(false)
    })

    test('should return false when it is not type number', () => {
        expect(hasEvenNumberGreaterThanN([1, 2, 3], null)).toBe(false)
        expect(hasEvenNumberGreaterThanN([1, 2, 3], undefined)).toBe(false)
        expect(hasEvenNumberGreaterThanN([1, 2, 3], '2')).toBe(false)
    })

    test('should return false when it has not a even number greater than n ', () => {
        expect(hasEvenNumberGreaterThanN([1, 2, 3], 5)).toBe(false)
    })

    test('should return true when it has a even number greater than n', () => {
        expect(hasEvenNumberGreaterThanN([1, 2, 4], 2)).toBe(true)
    })
})
