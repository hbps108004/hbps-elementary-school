let x = 0
sensors.DDMmotor(
AnalogPin.P15,
0,
AnalogPin.P16,
0
)
basic.forever(function () {
    x = pins.digitalReadPin(DigitalPin.P1)
    if (x == 0) {
        for (let index = 0; index < 11; index++) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.pause(300)
            music.stopAllSounds()
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.pause(300)
            music.stopAllSounds()
        }
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        99
        )
        basic.pause(485)
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        0
        )
    }
})
basic.forever(function () {
    x = pins.digitalReadPin(DigitalPin.P1)
    if (x == 0) {
        basic.pause(1000)
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        54
        )
        basic.pause(540)
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        0
        )
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . . .
                # . . . .
                # # # # .
                # . . . .
                . # . . .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                # # # . #
                . . . . .
                # . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                # # . # #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # # #
                . . . # .
                . . . . #
                `)
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # #
                . . # . .
                . . . # .
                `)
            basic.showArrow(ArrowNames.West)
        }
    } else {
        basic.clearScreen()
    }
})
