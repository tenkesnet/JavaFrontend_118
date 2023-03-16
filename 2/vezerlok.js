let kor
let neme = "nő"

// if (kor < 14) {
//     console.log("Gyermek vagy")
// } else if (kor < 20) {
//     console.log("Serdülő vagy")
// } else if ( (kor < 60 && neme === "férfi") || (kor < 65 && neme != "férfi") ) {
//     console.log("Felnőtt vagy")
// } else {
//     console.log("Idős vagy")
// }

if (kor) {
    console.log("Oké")
}


if (typeof kor === "number" && kor > 0) {
    switch (true) {
        case kor > 0 && kor <= 14:
            console.log("Gyermek vagy")
            break
        case kor > 14 && kor <= 20:
            console.log("serdülő vagy")
            break
        case kor > 20 && kor <= 60:
            console.log("felnőtt vagy")
            break
        default:
            console.log("idős vagy")
            break
    }
} else {
    console.error("Hibás kor érték")
}

