const inputAngleOne = document.querySelector("#angle-1")
const inputAngleTwo = document.querySelector("#angle-2")
const inputAngleThree = document.querySelector("#angle-3")
const messageText = document.getElementById("message");
const buttonIsTriangle = document.getElementById("btn-triangle");

function checkTriangle() {
    const angle1 = Number(inputAngleOne.value)
    const angle2 = Number(inputAngleTwo.value)
    const angle3 = Number(inputAngleThree.value)
    if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
        messageText.style.display = "none";
        console.log(angle1 + angle2 + angle3);
        if ((angle1 + angle2 + angle3) === 180) {
            showMessage("Great! These angles can form a triangle");
        } else { showMessage("The angle doesn't form a triangle") }


    } else {
        showError();
    }

    function showMessage(str) {
        messageText.innerHTML = str
        messageText.style.display = "block";
        messageText.style.color = "white";
    }

    function showError() {
        messageText.innerHTML = "Angle should be greater than 0";
        messageText.style.display = "block";
        messageText.style.color = "red";
    }
}


buttonIsTriangle.addEventListener('click', checkTriangle)