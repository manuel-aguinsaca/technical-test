const technical = require('./technical-tes');

describe('Technical problem 1', () => {
    test('Should print fizz', () => {
        const expected = 'fizz';
        expect(technical.fizzbuzz(3)).toBe(expected);
    });

    test('Should print buzz', () => {
        const expected = technical.fizzbuzz(5);
        expect(expected).toBe('buzz')
    });

    test('Should print fizzbuzz', () => {
        const expected = technical.fizzbuzz(15);
        expect(expected).toBe('fizzbuzz')
    });
});


describe('Technical problem 2', () => {
    test('Should print 50', () => {
        const expected = technical.multiplyWithoutSymbol(10, 5);
        expect(expected).toBe(50);
    })

    test('Should print -30', () => {
        const expected = technical.multiplyWithoutSymbol(-10, 3);
        expect(expected).toBe(-30);
    })

    test('Should print 6', () => {
        const expected = technical.multiplyWithoutSymbol(-2, -3);
        expect(expected).toBe(6);
    })
});

describe('Technical problem 3', () => {
    test('Should print 40', () => {
        const expected = technical.largestNumber([1, 40]);
        expect(expected).toBe(40);
    })
    test('Should print 2', () => {
        const expected = technical.largestNumber([1, -1, 2, -10]);
        expect(expected).toBe(2);
    })
});

describe('Technical problem 4', () => {
    test('Should print [1]', () => {
        const expected = technical.cleanArray([1, null]);
        expect(expected).toEqual([1]);
    })
    test('Should print [1, -10, 1000]', () => {
        const expected = technical.cleanArray([1, null, undefined, 0, -10, 1000]);
        expect(expected).toEqual([1, -10, 1000]);
    })
});

describe('Technical problem 5', () => {
    test('Should print [1, 2, [3,4], 1, []]', () => {
        const expected = technical.flatArray([[1, 2], [[3, 4]], [1, []]]);
        expect(expected).toEqual([1, 2, [3, 4], 1, []]);
    })
});

describe('Technical problem 5', () => {
    test('Should print [1]', () => {
        const expected = technical.cleanArray([1, null]);
        expect(expected).toEqual([1]);
    })
    test('Should print [1, -10, 1000]', () => {
        const expected = technical.cleanArray([1, null, undefined, 0, -10, 1000]);
        expect(expected).toEqual([1, -10, 1000]);
    })
});

describe('Technical problem 6', () => {
    test('Should print { hello: 1, manuel: 2, how: 1, are: 1, you: 1, make: 1, to: 1, test: 1 }', () => {
        const expected = technical.countWords('Hello Manuel. how are you?. MAnUEL make to test');
        expect(expected).toEqual({ hello: 1, manuel: 2, how: 1, are: 1, you: 1, make: 1, to: 1, test: 1 });
    })
    test('Should print { hello: 1, manuel: 2, how: 1, are: 1, you: 1, can: 1, make: 1, test: 3, or: 1 }', () => {
        const expected = technical.countWords('Hello Manuel. how are you?. MAnUEL can make test? TEST or TeSt');
        expect(expected).toEqual({ hello: 1, manuel: 2, how: 1, are: 1, you: 1, can: 1, make: 1, test: 3, or: 1 });
    })
});

describe('Technical problem 7', () => {
    test('Should print true', () => {
        const expected = technical.isPalindrome('ama');
        expect(expected).toEqual(true);
    })
    test('Should print false', () => {
        const expected = technical.isPalindrome('amta');
        expect(expected).toEqual(false);
    })
    test('Should print true', () => {
        const expected = technical.isPalindrome('amA');
        expect(expected).toEqual(true);
    })
    test('Should print true', () => {
        const expected = technical.isPalindrome('Somos o no somos');
        expect(expected).toEqual(true);
    })
});