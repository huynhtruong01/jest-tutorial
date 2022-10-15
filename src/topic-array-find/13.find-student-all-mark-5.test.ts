interface StudentMark {
    id: number | string
    name: string
    marks: {
        math: number
        english: number
        programming: number
    }
}

function findStudent(studentList: StudentMark[]): StudentMark | undefined {
    for (const student of studentList) {
        const { marks } = student
        const checkMarks = Object.values(marks).filter((x) => x >= 0 && x <= 10)
        if (checkMarks.length < 3) return undefined
    }

    for (const student of studentList) {
        const { marks } = student
        const checkMarksAll5 = Object.values(marks).filter((x) => x >= 5)
        if (checkMarksAll5.length === 2) return student
    }

    return undefined
}

describe('findStudent(studentList) - find student have all mark >= 5 and only a mark < 5', () => {
    test('should return {} when it have mark invalid 0 <= mark <= 10', () => {
        expect(
            findStudent([
                {
                    id: 1,
                    name: 'Nguyen Van A',
                    marks: {
                        math: 6,
                        english: 11,
                        programming: 15,
                    },
                },
                {
                    id: 2,
                    name: 'Nguyen Van B',
                    marks: {
                        math: 6,
                        english: 1,
                        programming: 5,
                    },
                },
            ])
        ).toEqual(undefined)
    })

    test('should return student when it find student have all mark >= 5 adn only a mark < 5', () => {
        expect(
            findStudent([
                {
                    id: 1,
                    name: 'Nguyen Van B',
                    marks: {
                        math: 8,
                        english: 5,
                        programming: 10,
                    },
                },
                {
                    id: 2,
                    name: 'Nguyen Van C',
                    marks: {
                        math: 7,
                        english: 4,
                        programming: 8,
                    },
                },
                {
                    id: 3,
                    name: 'Nguyen Van D',
                    marks: {
                        math: 9,
                        english: 2,
                        programming: 4,
                    },
                },
            ])
        ).toEqual({
            id: 2,
            name: 'Nguyen Van C',
            marks: {
                math: 7,
                english: 4,
                programming: 8,
            },
        })
    })
})
