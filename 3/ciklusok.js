let tomb = ["Alma", 'Körte', "Szilva"]
let b = ["teve", 'kutya']
let c = new Array("piros", "zold")

for (let i = 0; i < tomb.length; i++) {
    console.log(`tomb[${i}] = ${tomb[i]}`)
    //console.log(a[i])
}


//Tömb elemeinek kiieatása
for (let item of tomb) {
    console.log(item)
}


for (let i = 3; i <= 1000; i++) {
    let prim = true;
    for (let j = 2; j < i - 1; j++) {
        if (i % j === 0) {
            prim = false
        }
    }
    if (prim) {
        console.log(`A ${i} az primszám.`)
    }

}

// tomb.forEach((item, i, arr) => { arr[i] = item.toLowerCase() });


// console.log(tomb)

// let i = 1
// while (i <= 10) {
//     console.log(`${i}*${i} = ${i * i}`)
//     i++
// }

// {
//     let j = 1
//     for (; j <= 10;) {
//         console.log(`${j}*${j} = ${j * j}`)
//         j++
//     }
// }
// console.log("Vége")