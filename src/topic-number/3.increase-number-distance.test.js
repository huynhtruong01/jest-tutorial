function isIncreasingNumberByDistance(n, x) {
    if (n < 0 || n > 1000000) return false
    if (x < 0 || x > 5) return false

    const stringNumberList = String(n)
    for (let i = 1; i < stringNumberList.length; i++) {
        if (
            stringNumberList[i - 1] > stringNumberList[i] ||
            Number.parseInt(stringNumberList[i - 1]) + x !==
                Number.parseInt(stringNumberList[i])
        )
            return false
    }

    return true
}

describe('isIncreasingNumberByDistance(n,x)', () => {
    test('should return false when 0 < n < 1000000', () => {
        expect(isIncreasingNumberByDistance(-1, 1)).toBe(false)
        expect(isIncreasingNumberByDistance(1000100, 1)).toBe(false)
    })
    test('should return false when 0 < n < 5', () => {
        expect(isIncreasingNumberByDistance(5, 6)).toBe(false)
    })
    test('should return false when it do not increase or not increase by distance x', () => {
        expect(isIncreasingNumberByDistance(54321, 6)).toBe(false)
        expect(isIncreasingNumberByDistance(134, 1)).toBe(false)
    })
    test('should return true when it increase by distance', () => {
        expect(isIncreasingNumberByDistance(135, 2)).toBe(true)
        expect(isIncreasingNumberByDistance(123, 1)).toBe(true)
    })
})
