let person = {
    nev: "Róbert",
    kor: 48,
    cim: {
        varos: "Siklós",
        utca: "Berzsenyi"
    },
    2: "körte",
    true: "Ördög",
    false: "Angyal",
    5.5: "Ötegészöt",
    "-1": "Mínusz",
}

console.log(person["kor"])

for (let key in person) {
    console.log(`${key} érték típusa ${typeof person[key]}`)
}