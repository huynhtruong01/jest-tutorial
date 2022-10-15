interface StudentMathAndEnglish {
    id: number | string
    name: string
    math: number
    english: number
}

function findLastStudentHavingMinAvg(
    studentList: StudentMathAndEnglish[]
): StudentMathAndEnglish | {} {
    // check 0 <= math <= 10 and 0 <= english <= 10
    for (const student of studentList) {
        if (
            student.math < 0 ||
            student.english < 0 ||
            student.math > 10 ||
            student.english > 10
        )
            return {}
    }

    // check find
    let averageMin: number = Number(
        ((studentList[0].math + studentList[0].english) / 2).toFixed(1)
    )

    // let studentIndex: number = -1
    const newStudentMinAverageList: StudentMathAndEnglish[] = []
    for (const student of studentList) {
        const averageMathAndEnglish = Number(
            ((student.math + student.english) / 2).toFixed(1)
        )
        if (averageMathAndEnglish <= averageMin) {
            averageMin = averageMathAndEnglish
            newStudentMinAverageList.push(student)
        }
    }

    return newStudentMinAverageList[newStudentMinAverageList.length - 1]
}

describe('findLastStudentHavingMinAvg(studentList) - find student having min average', () => {
    test('should return {} when each student have math&english < 0 and math&english > 10 ', () => {
        expect(
            findLastStudentHavingMinAvg([
                { id: 1, name: 'Alice', math: 11, english: 9 },
                { id: 2, name: 'Bob', math: 5, english: -2 },
                { id: 3, name: 'John', math: 5, english: 5 },
            ])
        ).toEqual({})
    })

    test('should return student when it find last student min average', () => {
        expect(
            findLastStudentHavingMinAvg([
                { id: 1, name: 'Alice', math: 10, english: 9 },
                { id: 2, name: 'Bob', math: 5, english: 5 },
                { id: 3, name: 'John', math: 5, english: 5 },
            ])
        ).toEqual({ id: 3, name: 'John', math: 5, english: 5 })
    })
})
