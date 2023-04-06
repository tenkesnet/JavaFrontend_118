class Alakzat {
    /**
     * 
     * @param {String} color - Az alakzat színe 
     */
    constructor(color) {
        this.color = color
        this.vonalTipus = "vékony"
    }

    display() {
        console.log(`${this.constructor.name} a színe ${this.color}
Terulete: ${this.area()}
Kerület: ${this.district()}`)
    }

    area() { }

    district() { }
}

class Kor extends Alakzat {
    constructor(color, sugar) {
        super(color)
        this.radius = sugar
    }

    area() {
        return this.radius * this.radius * Math.PI
    }

    district() {
        return 2 * this.radius * Math.PI
    }

    displayProperty() {
        for (const item of Object.getOwnPropertyNames(this)) {
            console.log(`${item}(${typeof this[item]}): ${this[item]}`)
        }
    }

    getColor() { }
}

class Negyzet extends Alakzat {
    constructor(color, sideLenth) {
        super(color)
        this.sideLenth = sideLenth
    }

    area() {
        return Math.pow(this.sideLenth, 2)
    }

    district() {
        return 4 * this.sideLenth
    }
}

let kor1 = new Kor("red", 5)
let negyzet1 = new Negyzet("yellow", 10)

kor1.display()
kor1.displayProperty()

console.log("hasOwnProperty 'vonalTipus' :" + kor1.hasOwnProperty("vonalTipus"))



console.log(kor1 instanceof Kor)

