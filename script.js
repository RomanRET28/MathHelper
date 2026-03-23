const inputElementA = document.querySelector(".a")
const inputElementB = document.querySelector(".b")
const inputElementC = document.querySelector(".c")
const resultElement = document.querySelector(".result")
const calcbtnElement = document.querySelector(".calc")

function clickAction() {
    const a = Number(inputElementA.value)
    const b = Number(inputElementB.value)
    const c = Number(inputElementC.value)
    if (a != 0 && Number.isFinite(a) == true && Number.isFinite(b) == true && Number.isFinite(c) == true) {
        const D = (b ** 2) - (4 * a * c)
        if (D > 0) {
            const x1 = ((b * -1) + (D ** 0.5)) / (2 * a)
            const x2 = ((b * -1) - (D ** 0.5)) / (2 * a)
            const s = "x1 = " + x1 + "; x2 = " + x2
            resultElement.value = s
        }
        else if (D == 0) {
            const x = (b * -1) / (2 * a)
            const s = `x = ${x}`
            resultElement.value = s
        }
        else {
            const s = "Уравнение не имеет решений"
            resultElement.value = s
        }
    } else {
        resultElement.value ="Введено неверное значение!"
    }

}

calcbtnElement.addEventListener("click", clickAction)