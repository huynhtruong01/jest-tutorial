interface StudentMath {
    id: number | string
    name: string
    math: number
}

function findStudentHavingHighestMath(studentList: StudentMath[]): StudentMath | {} {
    // check math: 0 <= math < 10
    for (const student of studentList) {
        if (student.math < 0 || student.math > 10) return {}
    }

    // find student have highest math
    let studentHavingHighestMath: {
        maxMath: number
        student: StudentMath
    } = {
        maxMath: studentList[0].math,
        student: studentList[0],
    }

    for (const student of studentList) {
        if (student.math > studentHavingHighestMath.maxMath) {
            const newStudentHavingHighestMath = {
                maxMath: student.math,
                student,
            }
            studentHavingHighestMath = newStudentHavingHighestMath
        }
    }

    return studentHavingHighestMath.student
}

describe('findStudentHavingHighestMath(studentList) - find student have highest math', () => {
    test('should return {} when each student have 0 <= math < 10', () => {
        expect(
            findStudentHavingHighestMath([
                {
                    id: 1,
                    name: 'Nguyen Van A',
                    math: 5,
                },
                {
                    id: 2,
                    name: 'Nguyen Van B',
                    math: 11,
                },
            ])
        ).toEqual({})
    })

    test('should return student have highest math', () => {
        expect(
            findStudentHavingHighestMath([
                {
                    id: 1,
                    name: 'Nguyen Van A',
                    math: 5,
                },
                {
                    id: 2,
                    name: 'Nguyen Van B',
                    math: 8.5,
                },
                {
                    id: 3,
                    name: 'Nguyen Van C',
                    math: 7,
                },
            ])
        ).toEqual({
            id: 2,
            name: 'Nguyen Van B',
            math: 8.5,
        })
    })
})
