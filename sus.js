const hexElement = document.querySelector(".hex")
const decElement = document.querySelector(".dec")
const octElement = document.querySelector(".oct")
const binElement = document.querySelector(".bin")

function hdobAction(event) {
    if (event.target === decElement) {
        const textd = decElement.value
        if (textd == "") {
            hexElement.value = ""
            octElement.value = ""
            binElement.value = ""
        } else {
            const decValue = parseInt(textd, 10)
            hexElement.value = decValue.toString(16)
            octElement.value = decValue.toString(8)
            binElement.value = decValue.toString(2)
        }
    } else if (event.target === binElement) {
        const textb = binElement.value
        if (textb == "") {
            hexElement.value = ""
            octElement.value = ""
            decElement.value = ""
        } else {
            const binValue = parseInt(textb, 2)
            hexElement.value = binValue.toString(16)
            octElement.value = binValue.toString(8)
            decElement.value = binValue.toString(10)
        }
    } else if (event.target === hexElement) {
        const texth = hexElement.value
        if (texth == "") {
            binElement.value = ""
            octElement.value = ""
            decElement.value = ""
        } else {
            const hexValue = parseInt(texth, 16)
            binElement.value = hexValue.toString(2)
            octElement.value = hexValue.toString(8)
            decElement.value = hexValue.toString(10)
        }
    } else if (event.target === octElement) {
        const texto = octElement.value
        if (texto == "") {
            hexElement.value = ""
            binElement.value = ""
            decElement.value = ""
        } else {
            const octValue = parseInt(texto, 8)
            hexElement.value = octValue.toString(16)
            binElement.value = octValue.toString(2)
            decElement.value = octValue.toString(10)
        }
    }
}

decElement.addEventListener("input", hdobAction)
binElement.addEventListener("input", hdobAction)
hexElement.addEventListener("input", hdobAction)
octElement.addEventListener("input", hdobAction)