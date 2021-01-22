let PotentiometerVal = 0
basic.showString("Hello!")
basic.forever(function () {
    PotentiometerVal = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P2, PotentiometerVal)
})
