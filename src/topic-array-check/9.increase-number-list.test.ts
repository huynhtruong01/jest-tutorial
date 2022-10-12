function isIncreaseNumberList(numberList: number[]): boolean {
    if (!Array.isArray(numberList) || numberList.length < 2) return false

    for (let i = 1; i < numberList.length; i++) {
        if (numberList[i - 1] > numberList[i]) return false
    }

    return true
}

describe('isIncreaseNumberList(numberList) - check numberList has increase number', () => {
    test('should return false when it is not increase number', () => {
        expect(isIncreaseNumberList([1, 5, 4])).toBe(false)
        expect(isIncreaseNumberList([5, 4, 2])).toBe(false)
    })

    test('should return true when it is increase number', () => {
        expect(isIncreaseNumberList([1, 2, 3])).toBe(true)
        expect(isIncreaseNumberList([3, 10, 99])).toBe(true)
    })
})
