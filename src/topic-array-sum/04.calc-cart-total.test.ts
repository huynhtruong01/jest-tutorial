interface Cart {
    id: string | number
    product: {
        id: string | number
        price: number
    }
    quantity: number
}

function calcCartTotal(cartList: Cart[]): number {
    let totalCart: number = 0
    for (const cart of cartList) {
        totalCart += cart.quantity * cart.product.price
    }

    return totalCart
}

describe('calcCartTotal(cartList) - calc total amount of cart', () => {
    test('should return total amount when valid', () => {
        expect(
            calcCartTotal([
                { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
                { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
            ])
        ).toBe(250000)
    })
})
