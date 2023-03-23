const {dailyDay} = require("../app/dailyDay")

async function elMercadoDeLaCripto(bitcoin, callback) {
    try{
        const yesterdayBitcoin = await callback(bitcoin)
        console.log(`Ayer el precio del bitcoin era de ${yesterdayBitcoin.rawNumber}€`)
        const todayBitcoin = await callback(bitcoin *2)
        console.log(`Hoy el precio del bitcoin es de ${todayBitcoin.rawNumber}€`)
    }   catch(err) {
        console.log(err)
    }}

    module.exports = {elMercadoDeLaCripto}


elMercadoDeLaCripto(2, dailyDay)