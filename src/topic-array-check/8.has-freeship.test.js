function hasFreeShip(productList, price) {
    if (
        !Array.isArray(productList) ||
        productList.length === 0 ||
        !price ||
        typeof price !== 'number'
    )
        return false

    // S1
    // for(const product of productList){
    //     if(product.isFreeShip && x.price < price) return true
    // }

    // S2
    const product = productList.find((x) => x.isFreeShip && x.price < price)

    return product ? true : false
}

describe('hasFreeShip(productList, price) - check has product free ship and price < price specify', () => {
    test('should return false when productList is not array or empty array', () => {
        expect(hasFreeShip(null, 2)).toBe(false)
        expect(hasFreeShip(undefined, 20)).toBe(false)
        expect(hasFreeShip('', 2)).toBe(false)
        expect(hasFreeShip(123, 2)).toBe(false)
        expect(hasFreeShip([], 2)).toBe(false)
    })

    test('should return false when price is not type number', () => {
        expect(
            hasFreeShip(
                [
                    { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
                    {
                        id: 2,
                        name: 'Iphone 16 Pro Max',
                        isFreeShip: true,
                        price: 1500000,
                    },
                ],
                ''
            )
        ).toBe(false)
        expect(
            hasFreeShip(
                [
                    { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
                    {
                        id: 2,
                        name: 'Iphone 16 Pro Max',
                        isFreeShip: true,
                        price: 1500000,
                    },
                ],
                null
            )
        ).toBe(false)
        expect(
            hasFreeShip(
                [
                    { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
                    {
                        id: 2,
                        name: 'Iphone 16 Pro Max',
                        isFreeShip: true,
                        price: 1500000,
                    },
                ],
                undefined
            )
        ).toBe(false)
    })

    test('should return false when it is not product free ship or price product less than specify price', () => {
        expect(
            hasFreeShip(
                [
                    { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
                    {
                        id: 2,
                        name: 'Iphone 16 Pro Max',
                        isFreeShip: true,
                        price: 1500000,
                    },
                ],
                10000000
            )
        ).toBe(true)
    })
})
