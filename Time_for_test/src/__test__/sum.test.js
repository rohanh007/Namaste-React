import { sum } from "../sum";

test('Sum of the two number ', () => {
    const result=sum(5,9);

    expect(result).toBe(9); // its i an assertion 
});
