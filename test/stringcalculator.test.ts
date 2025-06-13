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

    describe('Comma Separator', () => {
        test('Comma separated 2 numbers: should evaluate "5,4" to 9', () => {
            expect(calculator.add("5,4")).toBe(9)
        });
        test('Comma separated multi values: should evaluate "5,4,11" to 20', () => {
            expect(calculator.add('5,4,11')).toBe(20)
        });
    });

})