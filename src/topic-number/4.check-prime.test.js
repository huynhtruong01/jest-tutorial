function isPrime(n) {
    if (n < 0 || n > 100000 || typeof n !== 'number') return false

    for (let i = 2; i < n - 1; i++) {
        if (n % i === 0) return false
    }

    return true
}

describe('isPrime(n)', () => {
    test('should return false when it is not type number or not number', () => {
        expect(isPrime(-1)).toBe(false)
        expect(isPrime(100100)).toBe(false)
        expect(isPrime('huynhtruong')).toBe(false)
    })
    test('should return false when it is not prime', () => {
        expect(isPrime(6)).toBe(false)
        expect(isPrime(15)).toBe(false)
    })
    test('should return true when it is prime', () => {
        expect(isPrime(3)).toBe(true)
        expect(isPrime(11)).toBe(true)
    })
})
