class footballPlayer {
    constructor(tshirtName) {
        this.tshirtName = tshirtName;
        
    }

    dirNom() {
            return console.log(this.tshirtName)
            //return this.tshirtName(tshirtName)
            
    }
    
}

let robertLewandowski = new footballPlayer('Lewandowski');
robertLewandowski.dirNom();

