const input = document.querySelector("#input")
const kare = document.querySelector("#kare")
const karekok = document.querySelector("#karekok")
const asal = document.querySelector("#asal")

input.value = 7;


kare.addEventListener("click", function () {

    if (input.value * input.value > 999999999 || input.value == 0) {
        input.value = ""
        input.placeholder = "Geçersiz"
        input.style.background = "crimson"
        setTimeout(function () {
            input.placeholder = ""
            input.style.background = "#fff"
        }, 1000)
    } else {
        input.value = (input.value) * (input.value)
        input.style.background = "seagreen"
        setTimeout(function () { input.style.background = "#fff" }, 300)
    }

});

karekok.addEventListener("click", function () {

    if (input.value == 0) {

        input.value = ""
        input.placeholder = "Geçersiz"
        input.style.background = "crimson"
        setTimeout(function () {
            input.placeholder = ""
            input.style.background = "#fff"
        }, 1000)

    } else {
        input.value = Math.sqrt(input.value)
        input.style.background = "seagreen"
        setTimeout(function () { input.style.background = "#fff" }, 200)
    }

});

asal.addEventListener("click", function () {
    let asalMi = true

    if (input.value < 2 || input.value.includes(".")) {

        asalMi = false

    } else {

        for (i = 2; i <= Math.sqrt(input.value); i++) {

            if (input.value % i == 0) {
                asalMi = false
                break
            }
        }
    }

    if (input.value == 0) {

        input.value = ""
        input.placeholder = "Geçersiz"
        input.style.background = "crimson"
        setTimeout(function () {
            input.placeholder = ""
            input.style.background = "#fff"
        }, 1000)

    } else {
        if (asalMi == true) {

            input.value = ""
            input.placeholder = "Asal Sayı"
            input.style.background = "seagreen"

            setTimeout(function () {
                input.placeholder = ""
                input.style.background = "#fff"
            }, 1000)

        } else {

            input.value = ""
            input.placeholder = "Asal Değil"
            input.style.background = "crimson"

            setTimeout(function () {
                input.placeholder = ""
                input.style.background = "#fff"
            }, 1000)
        }
    }
})