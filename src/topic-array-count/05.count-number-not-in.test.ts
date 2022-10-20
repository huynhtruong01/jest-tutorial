function countNumbersNotIn(a: number[], b: number[]) {
    if (a.length === 0 || b.length === 0) return 0

    let count = 0
    for (const n of a) {
        if (!b.includes(n)) count++
    }

    return count
}

describe('countNumbersNotIn(a, b) - count number have in array a but not have in array b', () => {
    test('should return 0 when it a or b is empty array', () => {
        expect(countNumbersNotIn([], [])).toBe(0)
    })

    test('should return 0 when it have in array a and array b', () => {
        expect(countNumbersNotIn([1, 2], [1, 2, 3])).toBe(0)
    })

    test('should return count when it have in array a but not have in array b', () => {
        expect(countNumbersNotIn([1, 2, 3], [4, 5])).toBe(3)
    })
})
