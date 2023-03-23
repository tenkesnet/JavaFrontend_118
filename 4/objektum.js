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