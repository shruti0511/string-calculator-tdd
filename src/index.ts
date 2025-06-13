import readline from 'readline';
import { StringCalculator } from './stringcalculator';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new StringCalculator();

function promptUser() {
    rl.question('Enter string input (use \\n for newline, or type "exit" to quit): ', (input) => {
        if (input.trim().toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        try {
            const processedInput = input.replace(/\\n/g, '\n');
            const result = calculator.add(processedInput);
            console.log(`Result: ${result}`);
        } catch (err: any) {
            console.error('Error:', err.message);
        }

        promptUser();
    });
}
promptUser();
