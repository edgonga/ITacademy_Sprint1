let loopCount = 1

function countFunction() {
    for (let index = 0; index < 10; index++) {
        console.log(index)
    }
    console.log(`Llamada número ${loopCount}`);
    loopCount += 1
}

let countArray = [countFunction(), 
    countFunction(), 
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction(),
    countFunction()]

