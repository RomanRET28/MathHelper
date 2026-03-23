const inputElementA = document.querySelector(".a")
const inputElementB = document.querySelector(".b")
const inputElementH = document.querySelector(".h")
const resultElement = document.querySelector(".result")

function clickAction() {
    const a = Number(inputElementA.value)
    const b = Number(inputElementB.value)
    const h = Number(inputElementH.value)
    if (a > 0 && b > 0 && h > 0) {
        const s = (a + b) * h / 2
        resultElement.value = s
    } else {
        resultElement.value ="Введено неверное значение!"
    }

}
inputElementA.addEventListener("input", clickAction)
inputElementB.addEventListener("input", clickAction)
inputElementH.addEventListener("input", clickAction)
