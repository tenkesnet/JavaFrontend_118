import { Person } from "./Person";

export class Student extends Person {
    constructor(name: string, birthDate: Date) {
        super(name, birthDate)
    }
}