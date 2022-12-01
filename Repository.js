const { read } = require('fs');
const fs = require('fs');

fileEncoder = (fileToBase64) => {
    
    InputDataInsideTheFile = fs.readFileSync(fileToBase64, 'utf8')
    console.log(`El string sin codificar es ${InputDataInsideTheFile}`)
    const buff = new Buffer.from(InputDataInsideTheFile)
    const base64file = buff.toString('base64')
    outputText = fs.writeFileSync(fileToBase64, base64file)
    setTimeout(() => {  // No entiendo porque me devuelve un undefined y no el string codificado, aunque espere 2 segundos por si el proceso de codificación tarda mucho :(
        console.log(`El string codificado es ${outputText}`)
    }, 2000)
}

fileEncoder('./helloworld.txt')

/* 
------Chunks------
1ro - Coger el texto actual que hay en el archivo en cuestión (helloworld.txt)
2do - Codificar ese texto a base64 (y más tarde a hex)
3ro - Escribir el texto codificado otra vez al archivo en cuestión (helloworld.txt) 
*/

