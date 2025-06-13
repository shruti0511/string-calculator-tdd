export class StringCalculator {
    add(numbers: string): number {
        if (!numbers) {
            return 0
        }
        
        const arr = numbers.split(',').map(num => parseInt(num.trim(), 10));
        return arr.reduce((acc, val) => acc + val, 0)
    }
}