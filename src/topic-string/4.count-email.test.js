function countEmail(str) {
    if (!str || typeof str !== 'string') return 0

    const wordList = str.split(' ').filter((x) => !!x)
    const totalOfEmail = wordList.reduce((total, word) => {
        // 1) Check index of @
        const checkEmail = word.indexOf('@') >= 3
        if (!checkEmail) return total

        // 2) Check domain of email
        const checkDomain =
            ['.com', '.vn', '.com.vn'].filter((x) => word.includes(x)).length > 0
        if (!checkDomain) return total

        // 3) Check X@Y.domain: length X >= 3 and Y >= 3
        const splitWord = word.split('.')[0].split('@')
        console.log(splitWord)
        const checkX = splitWord[0].length >= 3 ? true : false
        const checkY = splitWord[1].length >= 3 ? true : false

        if (!checkX || !checkY) return total

        const sumEmail = total + 1

        return sumEmail
    }, 0)

    return totalOfEmail
}

describe('countEmail(str)', () => {
    test('should return 0 when it is not type string or empty', () => {
        expect(countEmail(null)).toBe(0)
        expect(countEmail(12345)).toBe(0)
        expect(countEmail(undefined)).toBe(0)
        expect(countEmail('')).toBe(0)
    })

    test('should return 0 when it have not email', () => {
        expect(countEmail('my email should be a@a.com')).toBe(0)
        expect(countEmail('my email should be @ bla .com')).toBe(0)
    })

    test('should return total number email when it string', () => {
        expect(countEmail('my email should be abc@super.com')).toBe(1)
        expect(
            countEmail(
                'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn'
            )
        ).toBe(3)
    })
})
