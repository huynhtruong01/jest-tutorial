function findMinPositive(numberList: number[]): number | undefined {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined

    let minPositive: number = numberList.find((n) => n > 0) || -1

    for (const n of numberList) {
        if (n > 0 && n < minPositive) minPositive = n
    }

    return minPositive === -1 ? undefined : minPositive
}

describe('findMinPositive(numberList) -  find min positive', () => {
    test('should return false when it have not min positive', () => {
        expect(findMinPositive([-1, -2])).toBe(undefined)
        expect(findMinPositive([-7, -2, 0])).toBe(undefined)
    })

    test('should return true when it have min positive', () => {
        expect(findMinPositive([-1, 2, 6])).toBe(2)
        expect(findMinPositive([5, 4, 66])).toBe(4)
    })
})
