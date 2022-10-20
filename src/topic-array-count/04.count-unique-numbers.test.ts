function countUniqueNumbers(numberList: number[]): number {
    if (numberList.length === 0) return 0

    const uniqueNumber = numberList.reduce((obj: any, n: number) => {
        if (!obj[n]) {
            obj[n] = 1
        } else {
            obj[n] += 1
        }
        return obj
    }, {})

    return Object.keys(uniqueNumber).length
}

describe('countUniqueNumbers(numberList) - count unique number, example: [1, 2, 3, 3, 3] => 3', () => {
    test('should return 0 when empty array', () => {
        expect(countUniqueNumbers([])).toBe(0)
    })

    test('should return count number when it have array', () => {
        expect(countUniqueNumbers([1, 2, 3, 3])).toBe(3)
    })
})
