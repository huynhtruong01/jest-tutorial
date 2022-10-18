function generateFibonacci(n: number): number[] | [] {
    if (n <= 0 || n >= 1000) return []

    const newNumberList: number[] = [0, 1]
    for (let i = 2; i < n; i++) {
        const newNum = newNumberList[i - 1] + newNumberList[i - 2]
        newNumberList.push(newNum)
    }

    return newNumberList
}

describe('generateFibonacci(n) - generate fibonacci have each number array < n', () => {
    test('should return empty array when n <= 0', () => {
        expect(generateFibonacci(0)).toEqual([])
    })

    test('should return number array when it valid', () => {
        expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3])
        expect(generateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8])
    })
})
