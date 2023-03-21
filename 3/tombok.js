let a = ["Alma", 'Körte', "Szilva"]
let b = ["teve", 'kutya']
let c = new Array("piros", "zold")



console.log(`a = ${a.join(",")}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)

console.log(`Az a tömb Körte indexe ${a.indexOf("alma")}`)

let kerdes = "kutya"
console.log(`A b tömb tartalmazza a ${kerdes} kifejezést: ${b.includes(kerdes)}`)

let deletedItem = a.pop()
console.log(`Az a tömb utolsó értéke ${deletedItem} 
    volt így a tömb most ilyen lett: ${a}`)

a.unshift(deletedItem)
console.log(`Shift után a értéke: ${a}`)