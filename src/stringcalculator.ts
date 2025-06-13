export class StringCalculator {
    add(input: string): number {
        const DEFAULT_SEPARATOR = ',';
        const DELIMITER_PREFIX = '//';
        const NEWLINE = '\n';
        const MaxNumber = 1000

        if (!input) {
            return 0
        }
        let delimiterList = [DEFAULT_SEPARATOR]
        let numbers = input

        //Custom delimiter support
        if (input.startsWith(DELIMITER_PREFIX)) {
            let endIndex = input.indexOf(NEWLINE)
            let section = input.substring(2, endIndex)
            numbers = input.substring(endIndex + 1);
            delimiterList = this.extractDelimiters(section);
        }
        let arr = this.getNumberArray(numbers, delimiterList)

        //handle negative numbers
        this.negativeNumberValidation(arr)
        arr = arr.filter(x => x < MaxNumber)
        return arr.reduce((acc, val) => acc + val, 0)
    }

    private extractDelimiters(delimiterSection: string): string[] {
        const matches = delimiterSection.match(/\[(.*?)\]/g);
        if (matches) {
            return matches.map(m => m.slice(1, -1));
        }
        return [delimiterSection];
    }

    private getNumberArray(numbers: string, delimiterList: string[]) {
        const multiDelimiters = delimiterList.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const regex = new RegExp(multiDelimiters.join('|') + '|\n', 'g');
        return numbers.split(regex).map(num => parseInt(num.trim(), 10));
    }

    private negativeNumberValidation(numbers: number[]) {
        const negativeNumbers = numbers.filter(x => x < 0)
        if (negativeNumbers.length > 0)
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);

    }

}