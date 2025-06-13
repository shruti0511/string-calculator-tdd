export class StringCalculator {
    add(numbers: string): number {
        const DEFAULT_SEPARATOR = ',';

        if (!numbers) {
            return 0
        }

        const normalizedNumber = numbers.replace(/\n/g, DEFAULT_SEPARATOR);
        const arr = normalizedNumber.split(DEFAULT_SEPARATOR).map(num => parseInt(num.trim(), 10));
        return arr.reduce((acc, val) => acc + val, 0)
    }

}