import { checkIfAllEven, classifyStudent, multiply, sum } from './index'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('calculator multiply', () => {
    expect(multiply(3, 4)).toBe(12)
})

describe('classifyStudent() - description here...', () => {
    test('should return Invalid mark! when pass invalid number', () => {
        expect(classifyStudent(11)).toBe('Invalid mark')
    })

    test('should return Excellence! when mark > 8', () => {
        expect(classifyStudent(8.5)).toBe('Excellence')
    })

    test('should return Good! when mark >= 7', () => {
        expect(classifyStudent(7.5)).toBe('Good')
    })

    test('should return Not Good! when mark >= 4', () => {
        expect(classifyStudent(6)).toBe('Not Good')
    })

    test('should return Bad! when mark < 4', () => {
        expect(classifyStudent(3)).toBe('Bad')
    })
})

describe('checkIfAllEven()', () => {
    test('should return false when all number is not even or number list empty', () => {
        expect(checkIfAllEven(2)).toBe(false)
        expect(checkIfAllEven(null)).toBe(false)
        expect(checkIfAllEven(null)).toBe(false)
        expect(checkIfAllEven([])).toBe(false)
        expect(checkIfAllEven([2, 3, 6, 8, 12])).toBe(false)
        expect(checkIfAllEven([1, 3, 5, 11])).toBe(false)
    })

    test('should return true when all number is even', () => {
        expect(checkIfAllEven([2, 4, 10, 22, 44])).toBe(true)
    })
})
