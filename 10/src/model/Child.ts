import { Person } from './Person'

export class Child extends Person {
    ovodas: boolean
    constructor(nev: string, eletkor: number, ovodas: boolean) {
        super(nev, eletkor)
        this.ovodas = ovodas
    }
}