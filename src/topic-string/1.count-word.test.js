function countWords(str) {
    if (!str || typeof str !== 'string') return 0

    return str.split(' ').filter((x) => !!x).length
}

describe('countWords(str)', () => {
    test('should return 0 when it is not string or empty', () => {
        expect(countWords(1324)).toBe(0)
        expect(countWords(null)).toBe(0)
        expect(countWords(undefined)).toBe(0)
        expect(countWords('')).toBe(0)
    })

    test('should return total number word when it right', () => {
        expect(countWords('huynh truong')).toBe(2)
        expect(countWords(' truong')).toBe(1)
    })
})
