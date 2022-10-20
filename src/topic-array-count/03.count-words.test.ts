function countWords(wordList: string[], wordLength: number): number {
    if (wordList.length === 0) return 0

    let count: number = 0
    for (const word of wordList) {
        if (word.length >= wordLength) count++
    }

    return count
}

describe('countWords(wordList, wordLength) - count all word have length of word > wordLength', () => {
    test('should return 0 when empty array', () => {
        expect(countWords([], 4)).toBe(0)
    })

    test('should return 0 when it have not word > wordLength', () => {
        expect(countWords(['ab', '123'], 4)).toBe(0)
    })

    test('should return count when it have word > wordLength', () => {
        expect(countWords(['easy', 'frontend'], 4)).toBe(2)
    })
})
