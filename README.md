# String-Calculator-TDD

A simple **String Calculator** implemented in **Node + TypeScript** with **Test-Driven Development(TDD)**. This CLI app allows user to input strings containing numbers, and returns the sum of the numbers.

## Setup Instuctions

### 1.Clone Repository

```bash
git clone https://github.com/shruti0511/string-calculator-tdd.git
cd string-calculator-tdd
```
### 2.Install Dependencies 

```bash
npm install
```


## Usage
### Run the CLI

Start the calculator by running:

```bash
npm start
```

You'll be prompted to enter an input string. Use `\n` for newlines in your input.

### Examples

   - Input: ```1,2``` → Output: Result: ```3```
   - Input: ```1\n2,3``` → Output: Result: ```6```
   - Input: ```//[**][%%%]\n4**2%%%3``` → Output: Result: ```9```
   - Input: ```exit``` → Quits the program

## Run Tests
To run the test suite and verify all functionality:

```bash
npm test
```
### Test Cases
The test suite includes the following scenarios:
   - Handling empty string (e.g. ```""``` → ```0```)
   - Handling signle number string (e.g. ```"5"``` → ```5```) 
   - Adding two numbers (e.g. ```"1,2"``` → ```3```)
   - Adding multiple numbers (e.g. ```"1,2,3,4"``` → ```10```)
   - Newline delimiters (e.g. ```"1\n2\n3"``` → ```6```)
   - Mixed delimiters (e.g. ```"1\n2,3"``` → ```6```)
   - Custom delimiters (e.g. ```"//;\n4;2"``` → ```6```)
   - Negative numbers (e.g. ```"-1,2"``` → ```throws error```)
   - Ignore numbers greater than 1000 (e.g. ```"1000,12"``` → ```12```)
   - Multiple custom delimiters (e.g. ```"//[;;][%%%]\n4;;2%%%3"``` → ```9```)

## Built With
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Jest](https://jestjs.io/) - Testing framework
- [npm](https://www.npmjs.com/) - Package manager


