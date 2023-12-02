input.onGesture(Gesture.Shake, function () {
    basic.showString("Fuchs du hast die Gans gestohlen")
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    music.playMelody("C D E F G G G G ", 120)
    for (let index = 0; index < 2; index++) {
        music.playMelody("A F C5 A G G - - ", 120)
    }
    music.playMelody("G F F F F E E E ", 120)
    music.playMelody("E D E D C E G - ", 120)
    music.playMelody("G F F F F E E E ", 120)
    music.playMelody("E D E D C C C - ", 120)
})
