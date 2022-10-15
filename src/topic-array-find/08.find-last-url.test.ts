function findLastUrl(strList: string[]): string | undefined {
    if (!Array.isArray(strList) || strList.length === 0) return

    let urlLast: string | undefined
    for (const url of strList) {
        // 1) check protocol startsWith [http, https, wss, ws]
        const checkProtocol = ['http', 'https', 'ws', 'wss'].filter((x) =>
            url.startsWith(`${x}://`)
        )
        if (checkProtocol.length <= 0) continue

        // 2) domain must have [.com, .vn, .com.vn]
        const checkDomain = ['.com', '.vn', '.com.vn'].filter((x) => url.endsWith(x))
        if (checkDomain.length <= 0) continue

        // 3) name domain have at least three characters
        const domainName = url.split('//')[1].split('.')[0]
        if (domainName.length < 3) continue

        // 4) assign urlLast
        urlLast = url
    }

    return urlLast
}

describe('findLastUrl(strList) - find last url', () => {
    test('should return undefined when it is empty array', () => {
        expect(findLastUrl([])).toBe(undefined)
    })

    test('should return undefined when it have not valid url', () => {
        expect(
            findLastUrl(['htp://abc.com', 'abc.com', 'https://abc', 'wss://ab.com'])
        ).toBe(undefined)
    })

    test('should return url when valid url', () => {
        expect(
            findLastUrl([
                'http://abc.com',
                'wss://ease-frontend.com.vn',
                'http://localhost.com',
            ])
        ).toBe('http://localhost.com')
    })
})
