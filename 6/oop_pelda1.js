let tomb = [1, 2]
let tomb2 = new Array()

/**
 * Ez a Kutyákat leíró osztály
 */
class Kutya {


    /**
     * 
     * @param {String} nev 
     * @param {Number} suly 
     * @param {Boolean} ehes 
     */
    constructor(nev, suly, ehes = false) {
        this.name = nev
        this.weight = suly
        this.hungry = ehes
    }

    /**
     * 
     * @param {number} etel - hány kg ételt adtunk neki
     * @returns True or False attól függően, hogy elfogadta-e az ételt
     */
    eszik(etel) {
        if (this.hungry) {
            //this.weight = this.weight + etel
            this.weight += etel
            this.hungry = !this.hungry
            return true
        }
        return false
    }

    /**
     * 
     * @param {number} tav - hány km-et sétáltunk
     */
    setal(tav) {
        if (tav > 0) {
            this.weight -= tav * 0.1
        }
    }
}

let bodri = new Kutya("Bodri", 10)
let cezar = new Kutya("Cézár", 5, true)
let noname = new Kutya("Panna", 4, false)

if (bodri.eszik(0.3)) {
    console.log(`${bodri.name} elfogadta az ételt és az új súlya: ${bodri.weight}`)
} else {
    console.log(`${bodri.name} nem volt éhes`)
}

if (cezar.eszik(0.7)) {
    console.log(`${cezar.name} elfogadta az ételt és az új súlya: ${cezar.weight}`)
} else {
    console.log(`${cezar.name} nem volt éhes`)
}

bodri.setal(2)
cezar.setal(6)