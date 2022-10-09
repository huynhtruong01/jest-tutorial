function isPerfectNumber(n) {
    if (n < 0 || n > 1000 || typeof n !== 'number') return false

    let sum = 0

    // Way 1:
    // for (let i = 1; i < n - 1; i++) {
    //     if (n % i === 0) sum += i
    // }

    // Way 2:
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) sum += i
    }

    return n === sum
}

describe('isPerfectNumber(n)', () => {
    test('should return false when 0 < n < 1000 or it is not type number', () => {
        expect(isPerfectNumber(-1)).toBe(false)
        expect(isPerfectNumber(1001)).toBe(false)
        expect(isPerfectNumber('abc')).toBe(false)
    })
    test('should return false when it is not perfect number', () => {
        expect(isPerfectNumber(5)).toBe(false)
        expect(isPerfectNumber(7)).toBe(false)
    })
    test('should return true when it is perfect number', () => {
        expect(isPerfectNumber(6)).toBe(true)
    })
})
