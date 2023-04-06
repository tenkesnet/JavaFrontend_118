class Butorlap {

    /**
     * egy adott typus m2 egységára
     */
    artabla = {
        butorlap: 5000,
        hatlap: 600,
        ajto: 7000,
        szerelesiDij: 3000
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
        //Object.values(b1.artabla).includes(600)  Értékekben így tudnánk keresni
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

    constructor(nev) {
        this.lapokSzama = 0
        this.butorlapok = []
        this.szerelesiDij = 0
        this.designDij = 0
        this.alapanyagAr = 0
        this.nev = nev
    }

    /**
     * 
     * @param {Butorlap} butorlap 
     */
    addButorlap(butorlap) {
        this.butorlapok.push(butorlap)
        this.lapokSzama++
    }

    /**
     * 
     * @returns Number - a butor értékét adja vissza
     */
    getEladasiAr() {
        this.alapanyagAr = 0
        this.designDij = 0
        this.szerelesiDij = 0
        for (let butorlap of this.butorlapok) {
            this.alapanyagAr += butorlap.getAr()
            this.szerelesiDij += butorlap.artabla.szerelesiDij
        }
        this.designDij = this.lapokSzama * 6000
        return this.alapanyagAr + this.szerelesiDij + this.designDij
    }

    toString() {
        let result = `A ${this.nev} bútor ára: \n`
        let osszesen = this.getEladasiAr()
        result += "\n".padStart(40, "-")
        result += `Alapanyag ár:`.padEnd(30) + `${this.alapanyagAr}`.padStart(9) + `\n`
        result += `Szerelési díj:`.padEnd(30) + `${this.szerelesiDij}`.padStart(9) + `\n`
        result += `Design díj:`.padEnd(30) + `${this.designDij}`.padStart(9) + `\n`
        result += `Összesen:`.padEnd(30) + `${osszesen}`.padStart(9) + `\n`
        return result
    }
}

//let b1 = new Butorlap("ajto", 300, 400)   
let butor = new Butor("Misi gyerekbútor")
butor.addButorlap(new Butorlap("butorlap", 200, 300))
butor.addButorlap(new Butorlap("butorlap", 200, 300))
butor.addButorlap(new Butorlap("butorlap", 200, 900))
butor.addButorlap(new Butorlap("hatlap", 500, 500))
butor.addButorlap(new Butorlap("ajto", 300, 150))
butor.addButorlap(new Butorlap("ajto", 300, 150))

console.log(`${butor}`)