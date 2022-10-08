function isIncreaseNumber(n) {
    if (n < 0 || n > 1000000) return false
    if (String(n).length < 2) return false

    const stringNumberList = String(n)
    for (let i = 1; i < stringNumberList.length; i++) {
        if (stringNumberList[i - 1] > stringNumberList[i]) return false
    }

    return true
}

describe('isIncreaseNumber(n)', () => {
    test('should return false when 0 < n < 1000000', () => {
        expect(isIncreaseNumber(-1)).toBe(false)
        expect(isIncreaseNumber(1000001)).toBe(false)
    })
    test('should return false when length number < 2', () => {
        expect(isIncreaseNumber(1)).toBe(false)
        expect(isIncreaseNumber(6)).toBe(false)
    })
    test('should return false when number do not increase', () => {
        expect(isIncreaseNumber(21)).toBe(false)
    })
    test('should return true when number increase', () => {
        expect(isIncreaseNumber(1234)).toBe(true)
    })
})
