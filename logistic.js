function logistic (input) {
    let index = 0;
    let count = Number(input[index++]);

    let microCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        let kilograms = Number(input[index++]);
        sum += kilograms;
        if (kilograms <= 3) {
            microCounter += kilograms;
            kilograms *= 200;
            microbus += kilograms
        } else if (kilograms >= 4 && kilograms <= 11) {
            truckCounter += kilograms;
            kilograms *= 175;
            truck += kilograms
        } else if (kilograms >= 12) {
            trainCounter += kilograms;
            kilograms *= 120;
            train += kilograms
        }
    }
    let totalSum = (microbus + truck + train) / sum
    let lastPriceMicrobus = microCounter / sum * 100;
    let lastPriceTruck = truckCounter / sum * 100;
    let lastPriceTrain = trainCounter / sum * 100;
    console.log(`${totalSum.toFixed(2)}`);
    console.log(`${lastPriceMicrobus.toFixed(2)}%`);
    console.log(`${lastPriceTruck.toFixed(2)}%`);
    console.log(`${lastPriceTrain.toFixed(2)}%`);
}

logistic(["5", "2", "10", "20", "1", "7"]);