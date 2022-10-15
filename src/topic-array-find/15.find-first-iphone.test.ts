interface ProductSmartPhone {
    id: string | number
    name: string
}

function findFirstIphone(
    productList: ProductSmartPhone[]
): ProductSmartPhone | undefined {
    // S1
    // for (const product of productList) {
    //     if (product.name.split(' ')[0].toLowerCase() === 'iphone') return product
    // }
    // return

    // S2
    const productIphone = productList.find((x) =>
        x.name.toLowerCase().startsWith('iphone')
    )

    return productIphone || undefined
}

describe('findFirstIphone(productList) - find first product name start iphone', () => {
    test('should return undefined when it not find product start by iphone', () => {
        expect(
            findFirstIphone([
                {
                    id: 1,
                    name: 'Samsung',
                },
                {
                    id: 2,
                    name: 'Xiomi',
                },
                {
                    id: 3,
                    name: 'Oppo',
                },
            ])
        ).toEqual(undefined)
    })

    test('should return product when find it', () => {
        expect(
            findFirstIphone([
                {
                    id: 1,
                    name: 'Samsung',
                },
                {
                    id: 2,
                    name: 'iphone X',
                },
                {
                    id: 3,
                    name: 'Iphone 12',
                },
            ])
        ).toEqual({
            id: 2,
            name: 'iphone X',
        })
    })
})
