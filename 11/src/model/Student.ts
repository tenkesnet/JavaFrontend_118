import { Person } from "./Person";

export class Student extends Person {
    constructor(name: string, age: Date) {
        super(name, age)
    }
}