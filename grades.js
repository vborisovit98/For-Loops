function grades (input) {
    let index = 0;
    let studentCount = Number(input[index++]);

    let middleGrade = 0;
    let goodGrade = 0;
    let veryGoodGrade = 0;
    let excellentGrade = 0;
    let sumOfGrades = 0;
    for (let i = 1; i <= studentCount; i++) {
        let examGrade = Number(input[index++]);
        sumOfGrades += examGrade;
        if (examGrade >= 2 && examGrade <= 2.99) {
            middleGrade++;
        } else if (examGrade >= 3 && examGrade <= 3.99) {
            goodGrade++;
        } else if (examGrade >= 4 && examGrade <= 4.99) {
            veryGoodGrade++;
        } else if (examGrade >= 5) {
            excellentGrade++;
        }
    }
    let sumOfMiddleGrade = middleGrade / studentCount * 100;
    let sumOfGoodGrade = goodGrade / studentCount * 100;
    let sumOfVeryGoodGrade = veryGoodGrade / studentCount * 100;
    let sumOfExcellentGrade = excellentGrade / studentCount * 100;
    let sumOfAverageGrade = sumOfGrades / studentCount;
    console.log(`Top students: ${sumOfExcellentGrade.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${sumOfVeryGoodGrade.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${sumOfGoodGrade.toFixed(2)}%`);
    console.log(`Fail: ${sumOfMiddleGrade.toFixed(2)}%`);
    console.log(`Average: ${sumOfAverageGrade.toFixed(2)}`);
}

grades(["6",
    "2",
    "3",
    "3",
    "4",
    "5",
    "6",
    "2.2",]);