interface Student {
    id: number | string
    name: string
}

function findStudentById(studentList: Student[], studentId: number | string): number {
    if (!Array.isArray(studentList) || studentList.length === 0) return -1

    // S1: findIndex
    // return studentList.findIndex((student: Student) => student.id === studentId)

    // S2: forEach
    let studentOfIndex: number = -1
    studentList.forEach((student: Student, index: number) => {
        if (student.id === studentId) studentOfIndex = index
    })

    return studentOfIndex
}

describe('findStudentById(studentList, studentId) - find student by id => index student in student list', () => {
    test('should return -1 when it does not find student by id', () => {
        expect(
            findStudentById(
                [
                    { id: 1, name: 'Nguyen Van A' },
                    { id: 2, name: 'Nguyen Van B' },
                ],
                3
            )
        ).toBe(-1)
    })

    test('should return index when it find index student', () => {
        expect(
            findStudentById(
                [
                    {
                        id: 1,
                        name: 'Nguyen Van A',
                    },
                    {
                        id: 2,
                        name: 'Nguyen Van B',
                    },
                ],
                2
            )
        ).toBe(1)
    })
})
