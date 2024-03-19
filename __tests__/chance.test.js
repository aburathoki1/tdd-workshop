const Chance = require('../Chance');

//certail 
//uncertain

xtest('Chance of getting heads equals chance of getting tails', () => {
const chance1 = new Chance(2,1)
const chance2 = new Chance(2,1)
expect(chance1.equals(chance2)).toBe(true);
 });

 xtest('Chance of rolling a 6 and chance of rolling two 6s', () => {
    const chance1 = new Chance(6,1)
    const chance2 = new Chance(36,1)
    expect(chance1.equals(chance2)).toBe(false);
 });
 
//  test('Chance of not rolling a 1', () => {
//     const roll_one = new Chance(6,1)
//     const expected_chance = new Chance(6,5)
//     expect(roll_one.not()).toEqual(expected_chance);
//  });

//  test('chance of rolling 1 again', () => {
//     const roll_1 = new Chance(6,1)
//     const expected_chance = new Chance(36,1)
//     expect(roll_1.and(roll_1).equals(expected_chance)).toBe(true);
//  });


// test('impossible outcome', () => {
//     const chance = new Chance(1,0)
//     expect(chance.equals(chance)).toThrow("error");
// });

 





