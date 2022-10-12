function hasStudent(studentList, studentId) {
    if (!Array.isArray(studentList) || studentList.length === 0 || !studentId)
        return false

    // S1:
    // return studentList.find((student) => student.id === studentId) ? true : false

    // S2:
    const isFindStudent = studentList.findIndex((student) => student.id === studentId)
    return isFindStudent >= 0 ? true : false
}

describe('hasStudent(studentList, studentId)', () => {
    test('should return false when it is not array or empty array', () => {
        expect(hasStudent(null, 2)).toBe(false)
        expect(hasStudent(undefined, 10)).toBe(false)
        expect(hasStudent('', '')).toBe(false)
        expect(hasStudent(123, 'abc')).toBe(false)
        expect(hasStudent([], 2)).toBe(false)
    })

    test('should return false when it has not student by id', () => {
        expect(
            hasStudent(
                [
                    {
                        id: 1,
                        name: 'Nguyen Van A',
                    },
                ],
                2
            )
        ).toBe(false)
    })

    test('should return true when it has student by id', () => {
        expect(
            hasStudent(
                [
                    {
                        id: 1,
                        name: 'Nguyen Van B',
                    },
                    {
                        id: 2,
                        name: 'Nguyen Van C',
                    },
                ],
                2
            )
        ).toBe(true)
    })
})
