/*
-- Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve()
o reject() que rep. Invoca-la passant-li les dues funcions de manera que 
imprimeixin un missatge diferent depenent de si la Promise es resol o no.
*/


const assistantDetails = {
    assistantName: 'Lucas',
    assistantID: '47737141W',
    assistantAge: 17,
    entranceTime: '2:37h',
    assistantState: 'borracho'

}
const discoEntrance = new Promise((resolve, reject) => {

    if(assistantDetails.assistantState != 'borracho' && assistantDetails.assistantAge > 17 ) {

        
        resolve()
        
    }   
        
        else {
        reject()
        
    }
});


discoEntrance
    .then(res => {
        console.log('Adelante')
    })
    .catch(err => {
        
        console.log('A la calle')
    });

