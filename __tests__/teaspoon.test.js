const Teaspoon = require('../teaspoon');

test('two same unit of measurement is equal', () => {
    const teaspoon = new Teaspoon(1)
    const anotherTeaspoon = new Teaspoon(1)
    expect(teaspoon.equals(anotherTeaspoon)).toBe(true);
 });

 test('two same unit of measurement with different values is not equal', () => {
    const teaspoon = new Teaspoon(1)
    const anotherTeaspoon = new Teaspoon(2)
    expect(teaspoon.equals(anotherTeaspoon)).toBe(false);
    expect(anotherTeaspoon.equals(teaspoon)).toBe(false);
 }
 );

//  test('one unit of measurement is equal to another unit of measurement', () => {
//     const threeTeaspoons = new Teaspoon(3)
//     const tablespoon = new Tablespoon(1)

//     expect(threeTeaspoons.equals(tablespoon)).toBe(true);
//  });


