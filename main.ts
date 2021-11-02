let i = 0
basic.forever(function () {
    i = input.compassHeading()
    if (i < 45 || i > 315) {
        basic.showString("N")
    } else if (i < 135) {
        basic.showString("E")
    } else if (i < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
