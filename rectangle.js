const inputElementA = document.querySelector(".a")
const inputElementB = document.querySelector(".b")
const resultElement = document.querySelector(".result")

function clickAction() {
    const a = Number(inputElementA.value)
    const b = Number(inputElementB.value)
    if (a > 0 && b > 0) {
        const s = a * b
        resultElement.value = s
    } else {
        resultElement.value ="Введено неверное значение!"
    }

}

inputElementA.addEventListener("input", clickAction)
inputElementB.addEventListener("input", clickAction)