function findFirstPositiveEven(numberList: number[]): number | undefined {
    if (!Array.isArray(numberList) || numberList.length === 0) return

    for (const n of numberList) {
        if (n % 2 === 0 && n > 0) return n
    }

    return
}

describe('findFirstPositiveEven(numberList) - find first number positive even', () => {
    test('should return undefined when it empty array or not find number positive even', () => {
        expect(findFirstPositiveEven([])).toBe(undefined)
        expect(findFirstPositiveEven([-2, 0, -15])).toBe(undefined)
    })

    test('should return number positive even when it find first number positive even', () => {
        expect(findFirstPositiveEven([-1, 2, 4])).toBe(2)
        expect(findFirstPositiveEven([0, -4, 10])).toBe(10)
    })
})
