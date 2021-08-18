function generateRandomNum() {
    let randomNum = Math.floor(Math.random() * 10000);

    let newNum = randomNum + '';
    if (newNum.length === 4) {
        return newNum
    }
    else {

        return generateRandomNum();

    }

}

let generatePin = document.getElementById('generatePin')
generatePin.addEventListener('click', function () {

    let randomNumber = generateRandomNum()
    document.getElementById('display-pin').value = randomNumber;
})


let keyPad = document.getElementById('key-pad')
let typedNumbers = document.getElementById('typed-numbers')
keyPad.addEventListener('click', function (e) {
    const number = e.target.innerText;
    if (isNaN(number)) {
        typedNumbers.value = ''

    } else {
        let prevNumber = typedNumbers.value
        typedNumbers.value = prevNumber + e.target.innerText;
    }


})


function isMatch() {
    let displayPin = document.getElementById('display-pin')
    let typedNumbers = document.getElementById('typed-numbers')
    let notifyFail = document.getElementById('notify-fail')
    let notifySuccess = document.getElementById('notify-success')

    if (displayPin.value === typedNumbers.value) {
        notifySuccess.style.display = 'block'
        notifyFail.style.display = 'none'
    }
    else {
        notifySuccess.style.display = 'none'
        notifyFail.style.display = 'block'

    }
}

let verifyPin = document.getElementById("verify-pin")
verifyPin.addEventListener('click', function (e) {
    isMatch()
})