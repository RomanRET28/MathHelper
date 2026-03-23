const inputElementR = document.querySelector(".r")
const resultElement = document.querySelector(".result")

function inputAction() {
    const r = Number(inputElementR.value)
    if (r > 0) {
        const s = Math.PI * Math.pow(r, 2)
        resultElement.value = s
    } else {
        resultElement.value ="Введено неверное значение!"
    }

}

inputElementR.addEventListener("input", inputAction)