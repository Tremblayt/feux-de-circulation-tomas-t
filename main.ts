let Piéton = 0
function jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Éteindre () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
input.onButtonPressed(Button.A, function () {
    if (Piéton == 0) {
        Piéton += 1
    }
})
function Del_blanche () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Del_orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
basic.forever(function () {
    for (let index = 0; index < 100; index++) {
        vert()
        basic.pause(50)
        Del_orange()
        basic.pause(50)
    }
    Éteindre()
    for (let index = 0; index < 100; index++) {
        jaune()
        basic.pause(20)
        Del_orange()
        basic.pause(20)
    }
    Éteindre()
    if (Piéton == 1) {
        Piéton += -1
        for (let index = 0; index < 100; index++) {
            Del_blanche()
            basic.pause(25)
            Rouge()
            basic.pause(25)
        }
        Éteindre()
        for (let index = 0; index < 10; index++) {
            Del_orange()
            basic.pause(125)
            Rouge()
            basic.pause(125)
            Éteindre()
            Rouge()
            basic.pause(150)
        }
        Éteindre()
    } else {
        for (let index = 0; index < 100; index++) {
            Rouge()
            basic.pause(50)
            Del_orange()
            basic.pause(50)
        }
        Éteindre()
    }
})
