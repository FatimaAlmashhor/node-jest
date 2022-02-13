const sum = require('./app');

describe("summation", () => {

    // toBe matcher
    it('add to value ', () => {
        expect(sum(1, 2)).toBe(3)
    });

    it('object assignment', () => {
        const data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 })
    })

})