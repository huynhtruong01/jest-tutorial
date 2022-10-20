function countNumbers(numberList: number[]): number {
    if (numberList.length === 0) return 0

    let count: number = 0
    // for (let i = 1; i < numberList.length; i++) {
    //     if (numberList[i - 1] > numberList[i]) count++
    // }

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] > numberList[i + 1]) count++
    }

    return count
}

describe('countNumbers(numberList) - count number have previous number > next number', () => {
    test('should return 0 when empty array', () => {
        expect(countNumbers([])).toBe(0)
    })

    test('should return 0 when it have not previous number > next number', () => {
        expect(countNumbers([1, 2, 3, 4])).toBe(0)
    })

    test('should return count when it valid condition', () => {
        expect(countNumbers([1, 2, 3, 10, 9, 8])).toBe(2)
        expect(countNumbers([1, 5, 3, 10, 9, 8])).toBe(3)
    })
})
