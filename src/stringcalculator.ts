export class StringCalculator {
    add(input: string): number {
        const DEFAULT_SEPARATOR = ',';
        const DELIMITER_PREFIX = '//';
        const NEWLINE = '\n';
        const MaxNumber = 1000

        if (!input) {
            return 0
        }
        let delimiter = DEFAULT_SEPARATOR
        let numbers = input

        //Custom delimiter support
        if (input.startsWith(DELIMITER_PREFIX)) {
            let endIndex = input.indexOf(NEWLINE)
            delimiter = input.substring(2, endIndex)
            numbers = input.substring(endIndex + 1);
        }

        const normalizedNumber = numbers.replace(/\n/g, delimiter);
        let arr = normalizedNumber.split(delimiter).map(num => parseInt(num.trim(), 10));

        //handle negative numbers
        this.negativeNumberValidation(arr)
        arr = arr.filter(x => x < MaxNumber)
        return arr.reduce((acc, val) => acc + val, 0)
    }
    private negativeNumberValidation(numbers: number[]) {
        const negativeNumbers = numbers.filter(x => x < 0)
        if (negativeNumbers.length > 0)
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);

    }

}