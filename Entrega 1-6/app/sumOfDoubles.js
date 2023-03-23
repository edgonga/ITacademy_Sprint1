const dailyDay = (value) => {
    return new Promise((resolve, reject) => {
        if(typeof(value) !== "number") {
            reject("El bitcoin es una estafa piramidal")
        }
        if(value) {
            setTimeout(() => {
                resolve({
                    rawNumber: value,
                    doubleNumber: value *2
                })
            }, 3000)
    }
    })
}

async function sumOfDoubles(num1, num2, num3, callback) {
    try{
        if (isNaN(Number(num1)) || isNaN(Number(num2)) || isNaN(Number(num3))) {
            throw new Error("No númericos")
        }
        const asyncNum1 = await callback(Number(num1))
        const asyncNum2 = await callback(Number(num2))
        const asyncNum3 = await callback(Number(num3))
        console.log(asyncNum1.doubleNumber + asyncNum2.doubleNumber + asyncNum3.doubleNumber)
        
        // const asyncNumbers = await (await Promise.all([num1, num2, num3])).map(callback)
        // const asyncSum = asyncNumbers.reduce((acc, curr) => acc + curr.doubleNumber, 0)
        // console.log(asyncSum)

    }   catch(err) {
        console.log(err)
    }
} 

module.exports = {
    dailyDay,
    sumOfDoubles
}