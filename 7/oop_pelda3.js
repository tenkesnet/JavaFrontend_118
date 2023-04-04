class Butorlap {

    /**
     * egy adott typus m2 egységára
     */
    artabla = {
        butorlap: 5000,
        hatlap: 600,
        ajto: 7000
    }
    /**
     * 
     * @param {String} tipus -- Értéke lehet: "butorlap","hatlap"
     * @param {number} szellesseg - Centiméterben meganadó szám
     * @param {number} hosszusag - Centiméterben meganadó szám
     */
    constructor(tipus, szellesseg, hosszusag) {
        this.tipus = tipus
        this.szellesseg = szellesseg
        this.hosszusag = hosszusag
        if (!(this.tipus in this.artabla)) {
            this.tipus = "butorlap"
        }
    }

    /**
     * 
     * @returns Number - a bútorlap ára
     */
    getAr() {
        return this.artabla[this.tipus] * (this.szellesseg / 100) * (this.hosszusag / 100)
    }

}

class Butor {

    constructor() {
        this.lapokSzama = 0
        this.butorlapok = []
    }

    /**
     * 
     * @param {Butorlap} butorlap 
     */
    addButorlap(butorlap) {

    }

    arSzamol() {

    }

    toString() {

    }
}

let b1 = new Butorlap("ajto", 300, 400)