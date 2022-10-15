interface ProductHaveFreeShip {
    id: number | string
    name: string
    isFreeShip: boolean
}

function findHaveProductFreeShip(
    productList: ProductHaveFreeShip[]
): ProductHaveFreeShip | undefined {
    // S1
    // for(const product of productList){
    //     if(product.isFreeShip) return product
    // }
    // return {}

    // S2
    const productFirstHaveFreeShip = productList.find((x) => x.isFreeShip)

    return productFirstHaveFreeShip || undefined
}

describe('findHaveProductFreeShip(productList) - find first product have free ship', () => {
    test('should return {} when not find product free ship', () => {
        expect(
            findHaveProductFreeShip([
                {
                    id: 1,
                    name: 'Product A',
                    isFreeShip: false,
                },
                {
                    id: 2,
                    name: 'Product B',
                    isFreeShip: false,
                },
                {
                    id: 3,
                    name: 'Product C',
                    isFreeShip: false,
                },
            ])
        ).toEqual(undefined)
    })

    test('should return product when find first product have free ship', () => {
        expect(
            findHaveProductFreeShip([
                { id: 1, name: 'IPhone 5', isFreeShip: false },
                { id: 2, name: 'IPhone X', isFreeShip: true },
                { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
            ])
        ).toEqual({ id: 2, name: 'IPhone X', isFreeShip: true })
    })
})
