function findLastPerfectSquare(numberList: number[]): number | undefined {
    if (!Array.isArray(numberList) || numberList.length === 0 || numberList.includes(1))
        return

    let numberLastPerfectSquare: number | undefined
    for (const n of numberList) {
        const nSquare = Math.floor(Math.sqrt(n))
        if (nSquare * nSquare === n) numberLastPerfectSquare = n
    }

    return numberLastPerfectSquare
}

describe('findLastPerfectSquare(numberList) - find last number perfect square', () => {
    test('should return undefined when it is empty array', () => {
        expect(findLastPerfectSquare([])).toBe(undefined)
    })

    test('should return undefined when it does not find last number perfect square or include item digit 1', () => {
        expect(findLastPerfectSquare([1, 34, 8])).toBe(undefined)
    })

    test('should return number when it valid', () => {
        expect(findLastPerfectSquare([12, 4, 99, 36, 99])).toBe(36)
    })
})
