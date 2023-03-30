
let Szemely = function (nev, foglalkozas, kor) {
    this.nev = nev
    this.foglalkozas = foglalkozas
    this.kor = kor
    this.getBirthDate = function () {
        this.szulEv = 2023 - this.kor
    }
}

class Dolgozo {

    szulEv = 0
    constructor(nev, foglalkozas, kor) {
        this.nev = nev
        this.foglalkozas = foglalkozas
        this.kor = kor
        this.getBirthDate()
    }
    getFoglalkozas() {
        return this.foglalkozas
    }
    getBirthDate() {
        this.szulEv = 2023 - this.kor
    }

    toString() {
        return `[ ${this.nev}, ${this.foglalkozas}, ${this.kor}, ${this.szulEv} ]`
    }
}

let attila = new Dolgozo()

let dolgozo1 = new Dolgozo("Róbert", "fejleszto", 48)
let dolgozoMasolat = dolgozo1
//let dolgozo2 = new Dolgozo("Anna", "fejleszto", 21)
//Dolgozo.prototype.szulEv = 0
let dolgozo3 = new Dolgozo("Gábor", "eladó", 30)
let dolgozo5 = new Szemely("Patrícia", "Sofőr", 33)

let dolgozo2 = {
    nev: "Anna",
    foglalkozas: "programozó",
    kor: 22,
    szulEv: 0,
    getBirthDate: function () {
        this.szulEv = 2023 - this.kor
    },
    toString: function () {
        this.getBirthDate()
        return `[ ${this.nev}, ${this.foglalkozas}, ${this.kor}, ${this.szulEv} ]`
    }
}

let dolgozo4 = Object.create(dolgozo2)

/**
 * 
 * @param {a} x 
 * @param {int} y 
 */
function valtoztat(x, y) {
    x.nev = "Péter"
    y = 100
}

dolgozo5.getBirthDate()
console.log(`Dolgozo1: ${dolgozo1}`)
console.log(`Dolgozo3: ${dolgozo3}`)
console.log(`Dolgozo4: ${dolgozo4}`)
