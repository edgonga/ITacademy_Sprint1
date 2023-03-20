async function whatTimeIs(currentHour, callback) {
    try{
        
        const asyncPeninsulaHour = await callback(currentHour)
        console.log(`En la Peninsula son las ${asyncPeninsulaHour}h`)
        const asyncCanaryHour = await callback(asyncPeninsulaHour)
        console.log(`Mientras que en las Canarias son las ${asyncCanaryHour -1}h`)
    }   catch(err) {
        console.log(err)
    }}


module.exports = {
    whatTimeIs
}