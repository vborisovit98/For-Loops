function bills (input) {
    let index = 0;
    let months = Number(input[index++]);

    let bills = 0;
    let water = 20;
    let internet = 15;
    let another = 0;
    for (let i = 0; i < months; i++) {
        let electricy = Number(input[index++]);
        bills += electricy;
        another += (electricy + water + internet) * 1.20;
    }
    let sumOfWater = water * months;
    let sumOfInternet = internet * months;
    let average = (bills + sumOfWater + sumOfInternet + another) / months;
    console.log(`Electricity: ${bills.toFixed(2)} lv`);
    console.log(`Water: ${sumOfWater.toFixed(2)} lv`);
    console.log(`Internet: ${sumOfInternet.toFixed(2)} lv`);
    console.log(`Other: ${another.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

bills(["8",
    "123.54",
    "231.54",
    "140.23",
    "100",
    "122.4",
    "430",
    "178.52",
    "64.2",])