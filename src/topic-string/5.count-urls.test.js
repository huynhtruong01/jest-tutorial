function countURLs(str) {
    if (!str || typeof str !== 'string') return 0

    const wordList = str.split(' ').filter((x) => !!x)
    const totalNumberUrl = wordList.reduce((total, word) => {
        // 1) Check protocol
        const checkProtocol =
            ['http://', 'https://', 'ws://', 'wss://'].filter((x) => word.startsWith(x))
                .length > 0
        if (!checkProtocol) return total

        // 2) Check domain
        const checkDomain =
            ['.com', '.com.vn', '.vn'].filter((x) => word.includes(x)).length > 0
        if (!checkDomain) return total

        // 3) Check name URL
        const checkNameURL = word.split('.')[0].split('//')[1].length >= 3
        if (!checkNameURL) return total

        const sumURL = total + 1
        return sumURL
    }, 0)

    return totalNumberUrl
}

describe('countURLs(str)', () => {
    test('should return 0 when it is not type string or empty', () => {
        expect(countURLs(null)).toBe(0)
        expect(countURLs(undefined)).toBe(0)
        expect(countURLs(12345)).toBe(0)
        expect(countURLs('')).toBe(0)
    })

    test('should return 0 when it have not URL', () => {
        expect(countURLs('my name is ABC')).toBe(0)
        expect(countURLs('my name is ABC, I have https://ez.com')).toBe(0)
    })

    test('should return total number URL when it valid', () => {
        expect(countURLs('my website is: http://ezfrontend.com you can visit it')).toBe(1)
    })
})
