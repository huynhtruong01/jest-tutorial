function sumEvenNumber(numberList: number[]): number {
    if (numberList.length <= 1) return 0

    let sum: number = 0
    for (let i = 0; i < numberList.length; i += 2) {
        if (numberList[i + 1] % 2 === 0 && numberList[i] < numberList[i + 1])
            sum += numberList[i + 1]
    }

    return sum
}

describe('sumEvenNumber(numberList) - calc sum even number have previous number less than', () => {
    test('should return 0 when array have a number', () => {
        expect(sumEvenNumber([1])).toBe(0)
    })

    test('should return sum when array valid', () => {
        expect(sumEvenNumber([4, 6, 3, 2, 9, 12])).toBe(18)
    })
})
