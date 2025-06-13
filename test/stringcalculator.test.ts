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

    describe('Newline Separator', () => {
        test('Single Newline: should evaluate "5\n4" to 9', () => {
            expect(calculator.add("5\n4")).toBe(9)
        });
        test('Multi Newline: should evaluate "5\n4\n11\n2" to 22', () => {
            expect(calculator.add('5\n4\n11\n2')).toBe(22)
        });
    });

    describe('Mixed Separator', () => {
        test('Newline and comma: should evaluate "5\n4,11\n2" to 22', () => {
            expect(calculator.add('5\n4,11\n2')).toBe(22)
        });
    });

    describe('Custom Delimiter', () => {
        test('Custom Delimiter: should evaluate "//;\n5;4" to 9', () => {
            expect(calculator.add('//;\n5;4')).toBe(9)
        });
        test('Delimiter with any length: should evaluate "//***\n5***4" to 9', () => {
            expect(calculator.add('//***\n5***4')).toBe(9)
        });
    });
})