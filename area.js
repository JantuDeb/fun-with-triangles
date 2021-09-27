const inputSideOne = document.querySelector("#side-1")
const inputSideTwo = document.querySelector("#side-2")
const inputSideThree = document.querySelector("#side-3")
const messageText = document.getElementById("message");
const buttonCalcArea = document.getElementById("btn-calc-area");


function calcArea() {
    const a = parseInt(inputSideOne.value)
    const b = parseInt(inputSideTwo.value)
    const c = parseInt(inputSideThree.value)
    if (a + b > c && b + c > a && c + a > b) {
        const s = (a + b + c) / 2
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
        console.log(area);
        if (area)
            showMessage(`Area of the triangle is = ${area}`)
    }
    else if (a < 0 || b < 0 || c < 0) showError("Values of side should be positive")
    else showError("A triangle with these sides can not be form");


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
}



buttonCalcArea.addEventListener('click', calcArea)