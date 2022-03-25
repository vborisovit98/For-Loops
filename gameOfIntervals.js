function gameOfIntervals (input) {
    let index = 0;
    let moves = Number(input[index++]);

    let firstMove = 0;
    let secondMove = 0;
    let thirdMove = 0;
    let fourthMove = 0;
    let fifthMove = 0;
    let invalidNumber = 0;
    let sumOfNumbers = 0;
    for (let i = 1; i <= moves; i++) {
        let numbers = Number(input[index++]);
        if (numbers >= 0 && numbers <= 9) {
            sumOfNumbers += numbers * 0.20;
            firstMove++;
        } else if (numbers >= 10 && numbers <= 19) {
            sumOfNumbers += numbers * 0.30;
            secondMove++;
        } else if (numbers >= 20 && numbers <= 29) {
            sumOfNumbers += numbers * 0.40;
            thirdMove++;
        } else if (numbers >= 30 && numbers <= 39) {
            sumOfNumbers += 50;
            fourthMove++;
        } else if (numbers >= 40 && numbers <= 50) {
            sumOfNumbers += 100;
            fifthMove++;
        } else if (numbers < 0 || numbers > 50) {
            sumOfNumbers = sumOfNumbers / 2;
            invalidNumber++;
        }
    }
    let sumOfFirstMove = firstMove / moves * 100;
    let sumOfSecondMove = secondMove / moves * 100;
    let sumOfThirdMove = thirdMove / moves * 100;
    let sumOfFourthMove = fourthMove / moves * 100;
    let sumOfFifthMove = fifthMove / moves * 100;
    let sumOfInvalidNumber = invalidNumber / moves * 100;
    console.log(`${sumOfNumbers.toFixed(2)}`);
    console.log(`From 0 to 9: ${sumOfFirstMove.toFixed(2)}%`);
    console.log(`From 10 to 19: ${sumOfSecondMove.toFixed(2)}%`);
    console.log(`From 20 to 29: ${sumOfThirdMove.toFixed(2)}%`);
    console.log(`From 30 to 39: ${sumOfFourthMove.toFixed(2)}%`);
    console.log(`From 40 to 50: ${sumOfFifthMove.toFixed(2)}%`);
    console.log(`Invalid numbers: ${sumOfInvalidNumber.toFixed(2)}%`);
}   

gameOfIntervals(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20",])