function findAllPositiveEvenNumber(numberList: number[]): number[] {
    if (numberList.length <= 1) return []

    const newNumberList: number[] = []
    const numberPositiveEven = numberList.find((n) => n % 2 === 0 && n > 0)
    for (const n of numberList) {
        if (numberPositiveEven === n) newNumberList.push(n)
    }

    const results = newNumberList.length <= 1 ? [] : newNumberList.slice(1)

    return results
}

describe('findAllPositiveEvenNumber(n) - find all positive even number', () => {
    test('should return [] when array have a number', () => {
        expect(findAllPositiveEvenNumber([1])).toEqual([])
    })

    test('should return [] when array only have a positive even number', () => {
        expect(findAllPositiveEvenNumber([1, 4, 5])).toEqual([])
    })

    test('should return number list when array have lot of positive even number', () => {
        expect(findAllPositiveEvenNumber([1, 4, 5, 6, 4, 12, 4])).toEqual([4, 4])
    })
})
