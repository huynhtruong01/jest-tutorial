function findFirstEmail(strList: string[]): string | undefined {
    if (!Array.isArray(strList) || strList.length === 0) return

    for (const email of strList) {
        // 1) must have domain: .com, .vn, .com.vn
        const domainList = ['.com', '.vn', '.com.vn']
        const emailIncludeDomainList = domainList.filter(
            (x: string) => email.includes(x) && email.endsWith(x)
        )
        if (emailIncludeDomainList.length <= 0) continue

        // 2) email include @
        if (email.indexOf('@') === email.length - 1) continue

        const splitEmail = email.split('.')
        if (!email.includes('@')) continue

        // 3) have format X@Y, X have at least length 3 and Y have at least length 3
        const splitXY = splitEmail[0].split('@')
        const nameX = splitXY[0]
        const nameY = splitXY[1]
        if (nameX.length < 3) continue
        if (nameY.length < 3) continue

        // 4) assign variables emailValid

        return email
    }

    return
}

describe('findFirstEmail(strList) - find valid email', () => {
    test('should return undefined when it is empty array', () => {
        expect(findFirstEmail([])).toBe(undefined)
    })

    test('should return undefined when it have not  valid email', () => {
        expect(
            findFirstEmail([
                'abcf',
                'fe@gmail.com',
                'abc@gmail.frontend',
                'abcdefgh.c@om',
                'defgmail.com@',
            ])
        ).toBe(undefined)
    })

    test('should return email when it valid', () => {
        expect(findFirstEmail(['abc@gmail.com', 'abc@yahoo.com'])).toBe('abc@gmail.com')
    })
})
