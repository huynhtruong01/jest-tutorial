function fillParams(path, params) {
    if (!path || !params || Object.keys(params).length === 0) return ''

    let newPath = path

    // S1:
    // for (const key in params) {
    //     newPath = newPath.replace(`:${key}`, params[key])
    // }

    // S2:
    // split path
    const pathList = path.split('/')

    // loop to pathList includes key, re-assign at index in pathList
    for (const key in params) {
        if (pathList.includes(`:${key}`)) {
            const index = pathList.findIndex((x) => x === `:${key}`)
            pathList[index] = params[key]
        }
    }

    // join('/') pathList
    newPath = pathList.join('/')

    return newPath
}

describe('fillParams(path, params) - replace params in path by value of params obj', () => {
    test('should return "" when it is not path string or empty object', () => {
        expect(fillParams('', '')).toBe('')
        expect(fillParams(undefined, { productId: 1 })).toBe('')
        expect(fillParams(null, { productId: 1 })).toBe('')
        expect(fillParams(1223, '')).toBe('')
        expect(fillParams('/categories/:categoryId', {})).toBe('')
    })

    test('should return path changed when it path and params valid', () => {
        expect(fillParams('/products/:productId', { productId: 123 })).toBe(
            '/products/123'
        )
        expect(
            fillParams('/categories/:categoryId/products/:productId', { productId: 2 })
        ).toBe('/categories/:categoryId/products/2')
    })
})
