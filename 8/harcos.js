class Szemely {

    constructor(nev, neme, eletero) {
        this.name = nev
        this.grender = neme
        this.hp = eletero
    }

    toString() {
        return `Az én nevem ${this.name} és az életerőm ${this.hp}.`
    }
}

class Katona extends Szemely {
    constructor(nev, neme, eletero, harciero) {
        super(nev, neme, eletero)
        this.power = harciero
    }

    toString() {
        return super.toString() + ` Ha ütök az ${this.power} jelent Neked.`
    }

    /**
     * 
     * @param {Katona} harcos 
     * @returns Boolean
     */
    harcol(harcos) {
        harcos.sebzes(this.power)
        this.sebzes(harcos.power)
        if (this.hp < 0 || harcos.hp < 0) {
            return false
        }
        return true
    }

    /**
     * 
     * @param {Number} power Sebzés mértéke 
     * @returns Number
     */
    sebzes(power) {
        if (this.sound() != undefined) console.log(this.sound())
        return this.hp -= power
    }

    sound() { }
}

class Magus extends Katona {
    /**
     * 
     * @param {String} nev A neve
     * @param {String} neme A Neme. Értékei: "férfi" , "nő", "ork"
     * @param {Number} eletero Az állóképessége
     * @param {Number} harciero Az ütés ereje
     * @param {Number} magia A mágikus ereje
     */
    constructor(nev, neme, eletero, harciero, magia) {
        super(nev, neme, eletero, harciero)
        this.magic = magia
    }

    /**
     * 
     * @param {Katona} katona 
     */
    harcol(katona) {
        let result = super.harcol(katona)

    }

    sound() {
        console.log("Jobb lett a mágiám.")

    }
}

class Harcos extends Katona {
    /**
     * 
     * @param {String} nev A neve
     * @param {String} neme A Neme. Értékei: "férfi" , "nő", "ork"
     * @param {Number} eletero Az állóképessége
     * @param {Number} harciero Az ütés ereje
     * @param {Number} brutalitas A brutalitás ereje
     */
    constructor(nev, neme, eletero, harciero, brutalitas) {
        super(nev, neme, eletero, harciero)
        this.extraPower = brutalitas
    }

    /**
     * 
     * @param {Katona} katona 
     */
    harcol(katona) {
        let result = super.harcol(katona)
    }

    sound() {
        console.log("Erősebb lettem hiába ütsz")
    }
}

class Ijasz extends Katona {

}

let miklos = new Magus("Miki", "férfi", 200, 20, 10)
let robi = new Harcos("Anna", "nő", 200, 15, 14)

miklos.harcol(robi)
//console.log(`${miklos}`)