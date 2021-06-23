input.onButtonPressed(Button.A, function () {
    radio.sendString("helloworld")
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    Signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(Signal)
})
let Signal = 0
radio.setGroup(1)
