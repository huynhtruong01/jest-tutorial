function generateNumberInRange(a: number, b: number): number[] {
    if (!a || !b || a >= b) return []

    // S1
    // const newNumberList: number[] = []
    // for (let i = a; i <= b; i++) {
    //     newNumberList.push(i)
    // }
    // return newNumberList

    // S2
    const newNumberList = Array.from({ length: b - a + 1 }, (x, i) => a + i)
    return newNumberList
}

describe('generateNumberInRange(a, b) - generate number in range a - b', () => {
    test('should return [] when a >= b', () => {
        expect(generateNumberInRange(7, 4)).toEqual([])
    })

    test('should return number list when it valid', () => {
        expect(generateNumberInRange(3, 6)).toEqual([3, 4, 5, 6])
        expect(generateNumberInRange(1, 4)).toEqual([1, 2, 3, 4])
    })
})
