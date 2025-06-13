import { StringCalculator } from "../src/stringcalculator"

describe('Calculator', () => {
    let calculator = new StringCalculator()

    describe('Basic Functionality', () => {
        test('Empty string: should evaluate "" to 0', () => {
            expect(calculator.add("")).toBe(0)
        });
        test('Single string number: should evaluate "11" to 11', () => {
            expect(calculator.add('11')).toBe(11)
        });
    });

})