const {dailyDay} = require("../app/dailyDay")

async function elMercadoDeLaCripto(bitcoin, callback) {
    try{
        const yesterdayBitcoin = await callback(bitcoin)
        console.log(`Ayer el precio del bitcoin era de ${yesterdayBitcoin.rawNumber}€`)
        //console.log(`Ayer el precio del bitcoin era de ${yesterdayBitcoin}€`)
        const todayBitcoin = await callback(bitcoin *2)
        console.log(`Hoy el precio del bitcoin es de ${todayBitcoin.rawNumber}€`)
        //console.log(`Hoy el precio del bitcoin es de ${todayBitcoin}€`)
    }   catch(err) {
        console.log(err)
    }}

//elMercadoDeLaCripto(3, dailyDay)

module.exports = {elMercadoDeLaCripto}
