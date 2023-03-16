async function whatTimeIs(currentHour) {
    try{
        
        const asyncPeninsulaHour = await canaryDelay(currentHour)
        console.log(`En la Peninsula son las ${asyncPeninsulaHour}h`)
        const asyncCanaryHour = await canaryDelay(asyncPeninsulaHour)
        console.log(`Mientras que en las Canarias son las ${asyncCanaryHour -1}h`)
    }   catch(err) {
        console.log(err)
    }}


module.exports = {
    whatTimeIs
}