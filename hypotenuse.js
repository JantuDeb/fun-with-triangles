const inputBase = document.querySelector("#base")
const inputHeight = document.querySelector("#height")

const messageText = document.getElementById("message");
const buttonCalcHypo = document.getElementById("btn-calc-hypo");

function showMessage(str) {
    messageText.innerHTML = str
    messageText.style.display = "block";
    messageText.style.color = "white";
}

function showError(str) {
    messageText.innerHTML = str;
    messageText.style.display = "block";
    messageText.style.color = "red";
}

function calcHypo() {
    const base = parseInt(inputBase.value)
    const height = parseInt(inputHeight.value)
    if (base === 0 || height === 0) showError("Base and height should not be 0")

    else if (base >= 0 && height >= 0) {
        const hypotenuse = Math.sqrt((base * base + height * height))
        console.log(hypotenuse);
        showMessage(`The length of the Hypotenuse is: ${hypotenuse.toFixed(2)}`)
    } else showError("Base and height should be positive number")

}



buttonCalcHypo.addEventListener('click', calcHypo)