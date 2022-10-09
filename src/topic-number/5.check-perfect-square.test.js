function isPerfectSquare(n) {
    if (n < 0 || n > 100000 || typeof n !== 'number') return false

    return n === Math.sqrt(n) ** 2
}

describe('isPerfectSquare(n)', () => {
    test('should return false when it is not number or 0 < n < 100000', () => {
        expect(isPerfectSquare(-1)).toBe(false)
        expect(isPerfectSquare(100100)).toBe(false)
        expect(isPerfectSquare('abc')).toBe(false)
    })
    test('should return false when it is not perfect square', () => {
        expect(isPerfectSquare(5)).toBe(false)
        expect(isPerfectSquare(123)).toBe(false)
    })
    test('should return true when it is perfect square', () => {
        expect(isPerfectSquare(4)).toBe(true)
        expect(isPerfectSquare(9)).toBe(true)
    })
})
