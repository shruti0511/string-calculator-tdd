export class StringCalculator {
    add(input: string): number {
        const DEFAULT_SEPARATOR = ',';
        const DELIMITER_PREFIX = '//';
        const NEWLINE = '\n';

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
        const arr = normalizedNumber.split(delimiter).map(num => parseInt(num.trim(), 10));

        return arr.reduce((acc, val) => acc + val, 0)
    }
}