function isPrime(n: number): boolean {
    if (n <= 1 || n >= 1000) return false

    const numberList = Array.from({ length: n - 1 }, (v, i) => i + 1)
    numberList.shift()
    for (const num of numberList) {
        if (n % num === 0) return false
    }

    return true
}

function generatePrimeNumber(n: number): number[] {
    if (n <= 1 || n >= 1000) return []

    const numberList = Array.from({ length: n - 1 }, (v, i) => i + 1)
    numberList.shift()
    const newNumberList: number[] = []

    for (const num of numberList) {
        if (isPrime(num)) newNumberList.push(num)
    }

    return newNumberList
}

describe('generatePrimeNumber(n) - filter prime number < n (0 < n < 1000)', () => {
    test('should return [] when n <= 0 or n >= 1000', () => {
        expect(generatePrimeNumber(1000)).toEqual([])
        expect(generatePrimeNumber(0)).toEqual([])
    })

    test('should return number list when n valid', () => {
        expect(generatePrimeNumber(10)).toEqual([2, 3, 5, 7])
        expect(generatePrimeNumber(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
    })
})
