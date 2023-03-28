let tomb = [1, 2, 3, 4]
let a = {
    nev: "Róbert",
    foglalkozas: "programozó",
    kor: 48
}
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

valtoztat(a, b)

console.log(b)
console.log(a)