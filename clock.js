function clock () {
    let hours = 23;
    let min = 59;
    for (let i = 0; i <= hours; i++) {
        for (let j = 0; j <= min; j++) {
            console.log(`${i} : ${j}`);
        }
    }
}

clock()