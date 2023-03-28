let tomb = [1, 2, 3, 4]

// let dolgozo1 = {
//     nev: "Róbert",
//     foglalkozas: "programozó",
//     kor: 48,
//     szulEv: 0,
// }

//dolgozo1.foglalkozas = "fejleszto"

let Szemely = function (nev, foglalkozas, kor) {
    this.nev = nev
    this.foglalkozas = foglalkozas
    this.kor = kor
}

class Dolgozo {

    szulEv = 0
    constructor(nev, foglalkozas, kor) {
        this.nev = nev
        this.foglalkozas = foglalkozas
        this.kor = kor
    }
    getFoglalkozas() {
        return this.foglalkozas
    }
    getBirthDate() {
        this.szulEv = 2023 - this.kor
    }

    toString() {
        return `[ ${this.nev}, ${this.foglalkozas}, ${this.kor} ]`
    }
}

let attila = new Dolgozo()

let dolgozo1 = new Dolgozo("Róbert", "fejleszto", 48)
//let dolgozo2 = new Dolgozo("Anna", "fejleszto", 21)
//Dolgozo.prototype.szulEv = 0
let dolgozo3 = new Dolgozo("Gábor", "eladó", 30)




let dolgozo2 = {
    nev: "Anna",
    foglalkozas: "programozó",
    kor: 22,
    szulEv: 0,
    getBirthDate: function () {
        this.szulEv = 2023 - this.kor
    },
    toString: function () {
        return `[ ${this.nev}, ${this.foglalkozas}, ${this.kor} ]`
    }
}

let dolgozo4 = Object.create(dolgozo2)

let b = 10
let c = b
b = 100
console.log(`c: ${c}`)
console.log(`b: ${b}`)

let o1 = { tul1: 10 }
let o2 = { tul1: 10 }
o1.tul1 = 100
console.log(`o2: ${o2.tul1}`)

tomb.fill(0, 2, 4)

/**
 * 
 * @param {a} x 
 * @param {int} y 
 */
function valtoztat(x, y) {
    x.nev = "Péter"
    y = 100
}

//valtoztat(dolgozo1, b)
dolgozo1.getBirthDate()
//dolgozo3.getBirthDate()
dolgozo4.getBirthDate()
console.log(`Dolgozo1: ${dolgozo1}`)
console.log(`Dolgozo3: ${dolgozo3}`)
console.log(`Dolgozo4: ${dolgozo4}`)
//console.log(dolgozo2)
