function hasTwoDigitsWithSum(n, sum) {
    if (n < 0 || n > 1000000 || typeof n !== 'number') return false
    if (sum < 0 || sum > 19 || typeof sum !== 'number') return false

    const stringNumberList = String(n)
    for (let i = 0; i < stringNumberList.length; i++) {
        const cloneStringList = stringNumberList.split('')
        cloneStringList.splice(i, 1)

        for (const number of cloneStringList) {
            if (Number.parseInt(number) + Number.parseInt(stringNumberList[i]) === sum)
                return true
        }
    }

    return false
}

describe('hasTwoDigitsWithSum(n, sum)', () => {
    test('should return false when 0 < n < 1000000 or it is not type number', () => {
        expect(hasTwoDigitsWithSum(-1, 2)).toBe(false)
        expect(hasTwoDigitsWithSum(1000100, 2)).toBe(false)
        expect(hasTwoDigitsWithSum('abc', 3)).toBe(false)
    })
    test('should return false when 0 < sum < 19 or it is not type number', () => {
        expect(hasTwoDigitsWithSum(12, -1)).toBe(false)
        expect(hasTwoDigitsWithSum(20, 19)).toBe(false)
        expect(hasTwoDigitsWithSum('abc', 'abc')).toBe(false)
    })
    test('should return false when it have not two digits not equal sum', () => {
        expect(hasTwoDigitsWithSum(123, 2)).toBe(false)
        expect(hasTwoDigitsWithSum(456, 7)).toBe(false)
    })
    test('should return true when it have two digits equal sum', () => {
        expect(hasTwoDigitsWithSum(123, 3)).toBe(true)
        expect(hasTwoDigitsWithSum(456, 9)).toBe(true)
    })
})
