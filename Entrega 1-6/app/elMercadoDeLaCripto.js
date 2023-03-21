async function elMercadoDeLaCripto(bitcoin) {
    try{
        const yesterdayBitcoin = await dailyDay(bitcoin)
        console.log(`Ayer el precio del bitcoin era de ${yesterdayBitcoin.rawNumber}€`)
        const todayBitcoin = await dailyDay(bitcoin)
        console.log(`Hoy el precio del bitcoin es de ${todayBitcoin.doubleNumber}€`)
    }   catch(err) {
        console.log(err)
    }}

    module.exports = {elMercadoDeLaCripto}