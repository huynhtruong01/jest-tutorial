export function sum(a, b) {
    return a + b
}

export function multiply(a, b) {
    return a * b
}

export function classifyStudent(mark) {
    if (mark < 0 || mark > 10) return 'Invalid mark'

    if (mark > 8) return 'Excellence'
    if (mark >= 7) return 'Good'
    if (mark >= 4) return 'Not Good'

    return 'Bad'
}

export function checkIfAllEven(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false

    for (const n of numberList) {
        if (n % 2 !== 0) return false
    }

    return true
}
