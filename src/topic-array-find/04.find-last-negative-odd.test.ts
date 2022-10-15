function findLastNegativeOdd(numberList: number[]): number | undefined {
    if (!Array.isArray(numberList) || numberList.length === 0) return

    let numNegativeOdd: number | undefined
    for (const n of numberList) {
        if (n < 0 && n % 2 === -1) numNegativeOdd = n
    }

    return numNegativeOdd
}

describe('findLastNegativeOdd(numberList) - find last number negative odd', () => {
    test('should return undefined when it is empty array or not find last number negative odd', () => {
        expect(findLastNegativeOdd([])).toBe(undefined)
        expect(findLastNegativeOdd([1, 2, 3])).toBe(undefined)
    })

    test('should return number negative odd when it found', () => {
        expect(findLastNegativeOdd([1, 6, -2, -9])).toBe(-9)
        expect(findLastNegativeOdd([-1, -6, -3, -18])).toBe(-3)
    })
})
