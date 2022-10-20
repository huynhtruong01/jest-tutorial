interface Student {
    id: number | string
    name: string
    marks: any
}

function countStudents(studentList: Student[]): number {
    if (studentList.length === 0) return 0

    let count = 0
    for (const student of studentList) {
        const totalMark: any = Object.values(student.marks).reduce(
            (total: any, mark: any) => total + mark,
            0
        )
        const argMark = totalMark / Object.values(student.marks).length

        const findMarkGreaterThanArgMark = Object.values(student.marks).filter(
            (x: any) => x >= argMark
        ).length

        if (findMarkGreaterThanArgMark > 0) count++
    }

    return count
}

describe('countStudents(studentList) - find student have a mark >= arg mark', () => {
    test('should return count when find student have a mark >= arg mark', () => {
        expect(
            countStudents([
                { id: 1, name: 'Alice', marks: { math: 2, english: 3 } },
                { id: 2, name: 'Bob', marks: { math: 9 } },
            ])
        ).toBe(2)
    })
})
