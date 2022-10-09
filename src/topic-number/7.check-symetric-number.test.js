function isSymetricNumber(n) {
    if (n < 0 || n > 1000000 || typeof n !== 'number') return false

    const stringNumberList = String(n)

    // check n have 2 string number
    if (n.length === 2) {
        if (stringNumberList[0] !== stringNumberList[1]) return false
        return true
    }

    // check n greater than 2
    for (let i = 0; i < Math.floor(stringNumberList.length / 2); i++) {
        if (stringNumberList[i] !== stringNumberList[stringNumberList.length - 1 - i])
            return false
    }

    return true
}

describe('isSymetricNumber(n)', () => {
    test('should return false when 0 < n < 1000000 or it is not number', () => {
        expect(isSymetricNumber(-1)).toBe(false)
        expect(isSymetricNumber(1000100)).toBe(false)
    })
    test('should return false when it is not symetric number', () => {
        expect(isSymetricNumber(10)).toBe(false)
        expect(isSymetricNumber(1234)).toBe(false)
    })
    test('should return true when it it symetric number', () => {
        expect(isSymetricNumber(12321)).toBe(true)
        expect(isSymetricNumber(1221)).toBe(true)
        expect(isSymetricNumber(123321)).toBe(true)
    })
})
