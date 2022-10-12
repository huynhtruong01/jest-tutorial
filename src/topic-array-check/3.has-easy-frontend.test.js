function hasEasyFrontend(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return false

    for (const word of wordList) {
        if (['easy', 'frontend', 'easy frontend'].includes(word)) return true
    }

    return false
}

describe('hasEasyFrontend(wordList)', () => {
    test('should return false when it is not array or empty array', () => {
        expect(hasEasyFrontend(null)).toBe(false)
        expect(hasEasyFrontend(undefined)).toBe(false)
        expect(hasEasyFrontend('')).toBe(false)
        expect(hasEasyFrontend(12434)).toBe(false)
        expect(hasEasyFrontend([])).toBe(false)
    })

    test('should return false when it is not includes "easy", "frontend", "easy frontend"', () => {
        expect(hasEasyFrontend(['', 'abc', 'xyz'])).toBe(false)
        expect(hasEasyFrontend(['eas', 'fron', ''])).toBe(false)
    })

    test('should return true when it is include "easy", "frontend", "easy frontend"', () => {
        expect(hasEasyFrontend(['easy', ''])).toBe(true)
        expect(hasEasyFrontend(['frontend', 'easy'])).toBe(true)
        expect(hasEasyFrontend(['easy frontend', 'easy', 'frontend'])).toBe(true)
    })
})
