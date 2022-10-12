function hasTruthy(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return false

    for (const item of arr) {
        if (item) return true
    }

    return false
}

describe('hasTruthy(arr)', () => {
    test('should return false when it is not array or empty array', () => {
        expect(hasTruthy(null)).toBe(false)
        expect(hasTruthy(undefined)).toBe(false)
        expect(hasTruthy(12345)).toBe(false)
        expect(hasTruthy('')).toBe(false)
        expect(hasTruthy([])).toBe(false)
    })

    test('should return false when all item in array falsy', () => {
        expect(hasTruthy([false, '', undefined])).toBe(false)
        expect(hasTruthy([``, null, NaN])).toBe(false)
    })

    test('should return true when it has a item truthy', () => {
        expect(hasTruthy([true, false, ''])).toBe(true)
        expect(hasTruthy([0, 123, ''])).toBe(true)
    })
})
