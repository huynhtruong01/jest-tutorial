function findSecondLargestNumber(numberList: number[]): number | undefined {
    if (!Array.isArray(numberList) || numberList.length <= 1) return

    const newNumberList: number[] = numberList.sort((a, b) => a - b)

    return newNumberList[newNumberList.length - 2]
}

describe('findSecondLargestNumber(numberList) - find second largest number ', () => {
    test('should return undefined when it has an item in array', () => {
        expect(findSecondLargestNumber([1])).toBe(undefined)
    })

    test('should return number when it found', () => {
        expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3)
        expect(findSecondLargestNumber([15, 20, 3, 99])).toBe(20)
    })
})
