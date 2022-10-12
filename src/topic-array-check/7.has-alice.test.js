function hasAlice(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return false

    for (const student of studentList) {
        if (student.name.toLowerCase() === 'alice' && student.gender === 'female')
            return true
    }

    return false
}

describe('hasAlice(studentList) - check has student Alice and gender female', () => {
    test('should return false when it is not array or empty array', () => {
        expect(hasAlice(null)).toBe(false)
        expect(hasAlice(undefined)).toBe(false)
        expect(hasAlice(123)).toBe(false)
        expect(hasAlice('')).toBe(false)
        expect(hasAlice([])).toBe(false)
    })

    test('should return false when it has not student Alice and gender female', () => {
        expect(
            hasAlice([
                { id: 1, name: 'abc', gender: 'male' },
                { id: 2, name: 'aliCE', gender: 'male' },
                { id: 3, name: 'Easy Frontend', gender: 'male' },
            ])
        ).toBe(false)
    })

    test('should return true when it has student Alice and gender female', () => {
        expect(
            hasAlice([
                { id: 1, name: 'Alice', gender: 'male' },
                { id: 2, name: 'aliCE', gender: 'female' },
                { id: 3, name: 'Easy Frontend', gender: 'male' },
            ])
        ).toBe(true)
    })
})
