function sumNumber(n: number): number {
    if (n <= 0) return 0
    const strNumberList: string[] = n.toString().split('')
    const sum = strNumberList.reduce((total: number, str: string): number => {
        total += Number.parseInt(str)
        return total
    }, 0)

    return sum
}

function sumAllDigits(numberList: number[]): number {
    if (numberList.length === 0) return 0

    let sum: number = 0
    for (const n of numberList) {
        sum += sumNumber(n)
    }

    return sum
}

describe('sumAllDigits(numberList) - sum all digits number of item', () => {
    test('should return 0 when empty array', () => {
        expect(sumAllDigits([])).toBe(0)
    })

    test('should return sum when array valid', () => {
        expect(sumAllDigits([1, 234, 56])).toBe(21)
        expect(sumAllDigits([56, 0, 10])).toBe(12)
    })
})
