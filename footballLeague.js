function footballLeague (input) {
    let index = 0;
    let capacityOfStadium = Number(input[index++]);
    let fansCount = Number(input[index++]);

    let sumOfA = 0;
    let sumOfB = 0;
    let sumOfV = 0;
    let sumOfG = 0;
    for (let i = 1; i <= fansCount; i++) {
        let sector = input[index++];
        if (sector === "A") {
            sumOfA++;
        } else if (sector === "B") {
            sumOfB++;
        } else if (sector === "V") {
            sumOfV++;
        } else if (sector === "G") {
            sumOfG++;
        }
    }
    let totalSumOfA = sumOfA / fansCount * 100;
    let totalSumOfB = sumOfB / fansCount * 100;
    let totalSumOfV = sumOfV / fansCount * 100;
    let totalSumOfG = sumOfG / fansCount * 100;
    let sumOfAllFans = fansCount / capacityOfStadium * 100;
    console.log(`${totalSumOfA.toFixed(2)}%`);
    console.log(`${totalSumOfB.toFixed(2)}%`);
    console.log(`${totalSumOfV.toFixed(2)}%`);
    console.log(`${totalSumOfG.toFixed(2)}%`);
    console.log(`${sumOfAllFans.toFixed(2)}%`);
}

footballLeague(["93",
    "16",
    "A",
    "V",
    "G",
    "G",
    "B",
    "B",
    "G",
    "B",
    "A",
    "B",
    "B",
    "B",
    "A",
    "B",])