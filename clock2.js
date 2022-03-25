function clock2 () {
    let hour = 23;
    let min = 59;
    let sec = 59;
    for (let i = 0; i <= hour; i++) {
        for (let j = 0; j <= min; j++) {
            for (let y = 0; y <= sec; y++) {
                console.log(`${i} : ${j} : ${y}`);
            }
        }
    }
}

clock2();