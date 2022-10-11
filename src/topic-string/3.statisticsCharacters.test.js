function statisticsCharacters(str) {
    if (!str || typeof str !== 'string') return {}

    const characterList = str.split('')

    // Way 1
    // const characterObj = {}
    // for (const character of characterList) {
    //     const key = character !== ' ' ? character : 'space'
    //     if (!characterObj[key]) {
    //         characterObj[key] = 1
    //     } else {
    //         characterObj[key] += 1
    //     }
    // }

    // Way 2
    const characterObj = characterList.reduce((obj, character) => {
        const key = character !== ' ' ? character : 'space'
        if (!obj[key]) {
            obj[key] = 1
        } else {
            obj[key] += 1
        }

        return obj
    }, {})

    return characterObj
}

describe('statisticsCharacters(str)', () => {
    test('should return {} when it is empty or not type string', () => {
        expect(statisticsCharacters({})).toEqual({})
        expect(statisticsCharacters(null)).toEqual({})
        expect(statisticsCharacters(undefined)).toEqual({})
        expect(statisticsCharacters('')).toEqual({})
    })
    test('should return object statistics characters when it valid string type', () => {
        expect(statisticsCharacters('aa b c')).toEqual({ a: 2, b: 1, c: 1, space: 2 })
    })
})
