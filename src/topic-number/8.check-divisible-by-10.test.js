function isDivisibleBy10(n) {
    if (n < 0 || n > 1000000 || typeof n !== 'number') return false

    const sum = String(n)
        .split('')
        .reduce((total, number) => total + Number.parseInt(number), 0)
    return sum % 10 === 0
}

describe('isDivisibleBy10(n)', () => {
    test('should return false when it is not type number or 0 < n < 1000000', () => {
        expect(isDivisibleBy10(-1)).toBe(false)
        expect(isDivisibleBy10(1000100)).toBe(false)
        expect(isDivisibleBy10('abc')).toBe(false)
    })
    test('should return false when it is not divisible by 10', () => {
        expect(isDivisibleBy10(123)).toBe(false)
        expect(isDivisibleBy10(654)).toBe(false)
    })
    test('should return true when it is divisible by 10', () => {
        expect(isDivisibleBy10(1234)).toBe(true)
        expect(isDivisibleBy10(6464)).toBe(true)
    })
})
