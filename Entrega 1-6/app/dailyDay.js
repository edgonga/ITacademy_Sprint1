const dailyDay = (bitcoinValue) => {
    return new Promise((resolve, reject) => {
        if(bitcoinValue) {
            setTimeout(() => {
                resolve({
                    rawNumber: bitcoinValue,
                    doubleNumber: bitcoinValue *2
                })
            }, 3000)
    }
        else {
            reject("El bitcoin es una estafa piramidal")
        }
    })
}

module.exports = {dailyDay}