function findNumbers(numberList: number[]): number[] {
    if (numberList.length <= 1) return []

    let newNumberList: number[] = []
    for (let i = 0; i < numberList.length; i + 2) {
        if (numberList[i] < numberList[i + 1]) newNumberList.push(numberList[i + 1])
    }

    return newNumberList
}

console.log(findNumbers([2, 4, 5, 8]))

describe('findNumbers(numberList) - find number have previous number < next number', () => {
    test('should return [] when array have a number', () => {
        expect(findNumbers([1])).toEqual([])
    })

    test('should return array when array have previous number < next number', () => {
        expect(findNumbers([2, 4, 5, 8])).toEqual([4, 8])
    })
})
