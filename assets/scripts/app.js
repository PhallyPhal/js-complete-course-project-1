const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

//A better refactor for this would be calculatorAdd()
function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier, 
    previousResult, 
    operationNumber, 
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        previousResult: previousResult,
        inputNumber: operationNumber,
        currentResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteLog("+", initialResult, enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, currentResult);
    
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteLog("-", initialResult, enteredNumber);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteLog("*", initialResult, enteredNumber);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteLog("/", initialResult, enteredNumber);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

//This adds and eventlistener to the various buttons, and then on click executed the add() function.
    addButton.addEventListener("click", add);
    subtractButton.addEventListener("click", subtract);
    multiplyButton.addEventListener("click", multiply);
    divideButton.addEventListener("click", divide);


