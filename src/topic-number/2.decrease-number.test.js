function decreaseNumber(n) {
    if (n < 0 || n > 1000000) return false
    if (String(n).length < 2) return false

    const stringNumberList = String(n)
    for (let i = 0; i < stringNumberList.length; i++) {
        if (stringNumberList[i - 1] < stringNumberList[i]) return false
    }

    return true
}

describe('decreaseNumber(n)', () => {
    test('should return false when 0 < n < 1000000', () => {
        expect(decreaseNumber(-1)).toBe(false)
    })
    test('should return true when number length < 2', () => {
        expect(decreaseNumber(2)).toBe(false)
    })
    test('should return false when it do not decrease', () => {
        expect(decreaseNumber(1234)).toBe(false)
    })
    test('should return true when it decrease', () => {
        expect(decreaseNumber(321)).toBe(true)
    })
})
