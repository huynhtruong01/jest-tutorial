function isFirstNumberOdd(n: number): boolean {
    if (n <= 0 || n >= 1000) return false

    const firstNumber = `${n}`.split('')[0]
    if (Number(firstNumber) > 0 && Number(firstNumber) % 2 === 1) return true

    return false
}

function findAllFirstOddNumber(numberList: number[]): number[] {
    if (numberList.length === 0) return []

    // S1:
    // const newNumberList: number[] = []
    // for (const n of numberList) {
    //     if (isFirstNumberOdd(n)) newNumberList.push(n)
    // }

    // S2:
    const newNumberList = numberList.reduce((arr: number[], n: number) => {
        if (isFirstNumberOdd(n)) arr.push(n)

        return arr
    }, [])

    return newNumberList
}

describe('numberList(n) - find all number have a first digit odd number, example: 345 have 3 is first odd number', () => {
    test('should return [] when array empty', () => {
        expect(findAllFirstOddNumber([])).toEqual([])
    })

    test('should return empty array when it is not find number have first odd number', () => {
        expect(findAllFirstOddNumber([2, 456, 21])).toEqual([])
    })

    test('should return number list when array find number have first odd number', () => {
        expect(findAllFirstOddNumber([3, 734, 1, 478, 21])).toEqual([3, 734, 1])
    })
})
