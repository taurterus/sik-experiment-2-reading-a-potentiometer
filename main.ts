let PotentiometerVal = 0
basic.forever(function () {
    PotentiometerVal = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P2, PotentiometerVal)
})
