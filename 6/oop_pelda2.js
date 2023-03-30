class Robot {

    utolsoUtesEreje = 0
    /**
     * 
     * @param {String} nev 
     * @param {number} elet - 2-300-ig a robot vitalitása
     * @param {number} ero  - a robot harci ereje
     */
    constructor(nev, elet, ero) {
        this.name = nev
        this.life = elet
        this.strong = ero
    }

    getEletEro() {
        return this.life
    }

    getHarciEro() {
        return this.strong
    }

    sebzodes(utes_ereje) {
        let kocka = Math.round(Math.random() * 20 + 1)
        let sebzodes = Math.round(utes_ereje * (1.3 - (0 - kocka / 20)))
        this.life -= sebzodes
        this.utolsoUtesEreje = sebzodes
    }

    /**
     * 
     * @param {Robot} elenfel 
     */
    harcol(elenfel) {
        this.sebzodes(elenfel.getHarciEro())
        elenfel.sebzodes(this.getHarciEro())
        if (this.getEletEro() < 0 || elenfel.getEletEro() < 0) {
            return false
        }
        return true
    }

    toString() {
        return `${this.name}, HE:${this.getHarciEro()} ; EE: ${this.getEletEro()}`
    }

}

let robot1 = new Robot("RobRobi", 200, Math.round(Math.random() * 40 + 1))
let robot2 = new Robot("PanBot", 250, Math.round(Math.random() * 40 + 1))

console.log(`Szenzációs harc következik az alábbi robotok között:`)
console.log("" + robot1)
console.log("" + robot2)
console.log("*****************************")

let kor = 1
while (robot1.harcol(robot2)) {
    console.log(`${kor}. kör:`)
    console.log(`${robot1} Utolsó sebzés: ${robot1.utolsoUtesEreje}`)
    console.log(`${robot2} Utolsó sebzés: ${robot2.utolsoUtesEreje}`)
    kor++
}
console.log(`${kor}. kör:`)
console.log(`${robot1} Utolsó sebzés: ${robot1.utolsoUtesEreje}`)
console.log(`${robot2} Utolsó sebzés: ${robot2.utolsoUtesEreje}`)


if (robot1.getEletEro() < 0 && robot2.getEletEro() < 0) {
    console.log("Mindketten vesztettek!")
} else if (robot1.getEletEro() < 0) {
    console.log(`A ${robot2.name} nevű robot nyert`)
} else {
    console.log(`A ${robot1.name} nevű robot nyert`)
}

