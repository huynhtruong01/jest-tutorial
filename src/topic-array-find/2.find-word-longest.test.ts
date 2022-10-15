function findWordLongest(wordList: string[]): string {
    if (!Array.isArray(wordList) || wordList.length === 0) return ''

    let str: string = ''
    for (const word of wordList) {
        // 1) check word has include space
        // 2) check length of word is not greater than 5
        if (!word.includes(' ') && word.length <= 5) {
            if (word.length > str.length) str = word
        }
    }

    return str
}

describe('findWordLongest(wordList) - find word have word longest', () => {
    // condition:
    // 1. not include ' '
    // 2. length word not greater than 5
    // 3. previous length word < current length word
    test('should return empty string when word invalid condition', () => {
        expect(findWordLongest(['', 'easy frontend'])).toBe('')
        expect(findWordLongest([])).toBe('')
    })

    test('should return word when find word longest', () => {
        expect(findWordLongest(['easy', 'easy frontend'])).toBe('easy')
        expect(findWordLongest(['abcde', 'abc', ''])).toBe('abcde')
    })
})
