function statisticsWords(str) {
    if (!str || typeof str !== 'string') return {}

    const wordList = str.split(' ').filter((x) => !!x)
    const wordObj = {}
    for (const word of wordList) {
        if (!wordObj[word]) {
            wordObj[word] = 1
        } else {
            wordObj[word] += 1
        }
    }

    return wordObj
}

describe('statisticsWords(str)', () => {
    test('should return {} when it is not type string or empty string', () => {
        expect(statisticsWords(null)).toEqual({})
        expect(statisticsWords(undefined)).toEqual({})
        expect(statisticsWords('')).toEqual({})
    })
    test('should return a object aggregate the number word in string when it is string', () => {
        expect(statisticsWords('one two one')).toEqual({ one: 2, two: 1 })
        expect(statisticsWords('easy frontend too easy')).toEqual({
            easy: 2,
            frontend: 1,
            too: 1,
        })
    })
})
