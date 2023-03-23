function udvozol_o() {
    console.log("function.js-ben az udvozolo függvényben vagyok")
}


/**
* Ez egy üdvözlő függvény
* @param { String } nev
* @param { String } cim
* @returns {String} - az üdözlő szöveggel tér vissza
*/
function udvozol_f(nev, cim) {

    //console.log("function.js-ben az udvozolf függvényben vagyok")
    let result = `Szia ${nev}! Látom ${cim}-ről jöttél!`

    return result
}

/**
 * Ez a függvény két számot ad össze a Spread operátor használatával
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
function osszead(...szamok) {
    let result = 0;
    if (szamok.length > 0) {
        for (let szam of szamok) {
            if (typeof (szam) != "number") {
                continue
            }
            result += szam
        }
    }
    return result
}

/**
 * Megállapítja egy számról, hogy prím-e vagy nem
 * @param {number} szam 
 * @returns - boolean 
 */
function isPrime(szam) {
    let prim = true;
    //a vizsgálandó szám -1 -ig nézzük van -e osztója és ezt 3as szám utántól nézzük
    if (szam > 3) {
        for (let i = 2; i * i < szam; i++) {
            if (szam % i === 0) {  // ezt a maradékosztással vizsgáljuk meg
                prim = false
                continue
            }
        }
    }
    return prim
}
