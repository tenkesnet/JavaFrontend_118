interface starInterface {
    addStar(): void
}

function insertArry<T extends starInterface>(array: T[], value: T) {
    value.addStar();
    return [value, ...array];
}

let tomb = ["kjhkjh", "jljl", "nnnnn"]

class Todo implements starInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    addStar() {
        this.name += "*******";
    }
}

class AdvancedTodo implements starInterface {
    addStar() {
    }
}
let tombObj: Todo[] = [new Todo("Tej"), new Todo("kenyer")]


let tomb2 = insertArry(tombObj, new Todo("Cukor"))

let honapok = new Array<string>();

honapok.push("Január")


console.log(tomb2)