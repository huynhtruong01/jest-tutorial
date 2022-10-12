function isSymmetricList(numberList: number[]): boolean {
    if (!Array.isArray(numberList) || numberList.length <= 1) return false

    for (let i = 0; i < numberList.length / 2; i++) {
        if (numberList[i] !== numberList[numberList.length - 1 - i]) return false
    }

    return true
}

describe('isSymmetricList(numberList) - check array has symmetric', () => {
    test('should return false when it is not symmetric array or array length less than equal 1', () => {
        expect(isSymmetricList([1, 2, 2, 3])).toBe(false)
        expect(isSymmetricList([1, 2, 3, 4])).toBe(false)
        expect(isSymmetricList([1])).toBe(false)
        expect(isSymmetricList([])).toBe(false)
    })

    test('should return true when it is symmetric array', () => {
        expect(isSymmetricList([1, 2, 2, 1])).toBe(true)
    })
})
