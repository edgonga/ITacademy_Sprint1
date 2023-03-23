const {canaryDelay} = require('../app/canaryDelay')

async function whatTimeIs(currentHour, callback) {
    try{
        
        const asyncPeninsulaHour = await callback(currentHour)
        console.log(`En la Peninsula son las ${asyncPeninsulaHour}h`)
        const asyncCanaryHour = asyncPeninsulaHour -1
        const asyncCanary = await callback(asyncCanaryHour)
        console.log(`Mientras que en las Canarias son las ${asyncCanary}h`)
    }   catch(err) {
        console.log(err)
    }}


module.exports = {
    whatTimeIs
}

whatTimeIs(10, canaryDelay)