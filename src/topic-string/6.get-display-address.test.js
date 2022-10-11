function getDisplayAddress(address) {
    if (!address || Object.keys(address).length === 0) return ''

    // S1:
    // let addressStr = ''
    // ;['number', 'street', 'ward', 'district', 'city'].forEach((key) => {
    //     if (address[key]) {
    //         if (key === 'number') {
    //             addressStr += `${address[key]} `
    //         } else {
    //             addressStr += `${address[key]}, `
    //         }
    //     }
    // })
    // const addressTrimmed = addressStr.trim()
    // return addressTrimmed.slice(0, addressTrimmed.length - 1)

    // S2:
    const numberAddress = address.number ? address.number : ''
    const streetAddress = address.street ? address.street : ''
    const wardAddress = address.ward ? `, ${address.ward}` : ''
    const districtAddress = address.district ? `, ${address.district}` : ''
    const cityAddress = address.city ? `, ${address.city}` : ''

    return `${numberAddress} ${streetAddress}${wardAddress}${districtAddress}${cityAddress}`.trim()
}

describe('getDisplayAddress(address)', () => {
    test('should return "" when address is not type string or empty object', () => {
        expect(getDisplayAddress(1234)).toBe('')
        expect(getDisplayAddress('')).toBe('')
        expect(getDisplayAddress(null)).toBe('')
        expect(getDisplayAddress(undefined)).toBe('')
        expect(getDisplayAddress({})).toBe('')
    })

    test('should return address string when address not full information', () => {
        expect(
            getDisplayAddress({
                street: 'Nguyen Cong Tru',
                district: 'Binh Thanh District',
            })
        ).toBe('Nguyen Cong Tru, Binh Thanh District')
    })

    test('should return address string when address full information address', () => {
        expect(
            getDisplayAddress({
                number: 123,
                street: 'Nguyen Cong Tru',
                ward: 'Ward 11',
                district: 'Binh Thanh District',
                city: 'HCMC',
            })
        ).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC')
    })
})
