const inputElementN = document.querySelector(".n")
const resultElement = document.querySelector(".result")

function inputAction() {
    const n = Number(inputElementN.value)
    if (n > 2) {
        const s = 180 * (n - 2)
        resultElement.value = s
    } else {
        resultElement.value ="Введено неверное значение!"
    }

}

inputElementN.addEventListener("input", inputAction)