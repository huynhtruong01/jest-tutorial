function findMinNumber(n: number): number {
    if (n <= 0) return 0

    const strNumberList: string[] = n.toString().split('')
    const newStrNumberList = strNumberList.map((str: string) => Number(str))
    return Math.min(...newStrNumberList)
}

function sumAllMinDigits(numberList: number[]): number {
    if (numberList.length === 0) return 0

    let sum: number = 0
    for (const n of numberList) {
        sum += findMinNumber(n)
    }

    return sum
}

describe('sumAllMinDigits(numberList) - calc sum all number have digits min number', () => {
    test('should return 0 when empty array', () => {
        expect(sumAllMinDigits([])).toBe(0)
    })

    test('should return sum when array valid', () => {
        expect(sumAllMinDigits([123, 523, 987])).toBe(10)
    })
})
