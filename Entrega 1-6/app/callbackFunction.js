const callbackFunction = (parametro) => {
    const num_parametro = parseInt(parametro)
    if (num_parametro > 3 && typeof(num_parametro) === 'number') {
        return "Es correcto"
    }
    else {
        return "Incorrecto"
    }
}


module.exports = {
    callbackFunction
}