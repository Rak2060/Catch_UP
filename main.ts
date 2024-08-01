input.onButtonPressed(Button.A, function () {
    if (paddle > 0) {
        led.unplot(paddle, 4)
        paddle += 0 - 1
        led.plot(paddle, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddle < 4) {
        led.unplot(paddle, 4)
        paddle += 1
        led.plot(paddle, 4)
    }
})
let score = 0
let extraFallingBox_X = 0
let extraFallingBox_Y = 0
let extraBox = false
let fallingbox_Y = 0
let paddle = 0
paddle = 2
let lives = 5
let interval = 500
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("GO!")
let fallingbox_X = Math.randomRange(0, 4)
basic.forever(function () {
    music.setVolume(80)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.clearScreen()
    led.plot(paddle, 4)
    fallingbox_Y += 1
    led.plot(fallingbox_X, fallingbox_Y)
    if (extraBox) {
        extraFallingBox_Y += 1
        led.plot(extraFallingBox_X, extraFallingBox_Y)
    }
    if (fallingbox_Y >= 4 && fallingbox_X == paddle) {
        score += 1
        soundExpression.happy.play()
        fallingbox_X = Math.randomRange(0, 4)
        fallingbox_Y = 0
        if (score % 5 == 0) {
            basic.showNumber(score)
        }
        if (score >= 10 && !(extraBox)) {
            extraBox = true
            extraFallingBox_X = Math.randomRange(0, 4)
            extraFallingBox_Y = 0
        }
        if (score >= 20) {
            interval = 250
        }
    } else if (fallingbox_Y > 4) {
        lives += 0 - 1
        soundExpression.sad.play()
        fallingbox_X = Math.randomRange(0, 4)
        fallingbox_Y = 0
        if (lives <= 0) {
            basic.showString("Game Over!")
            basic.showNumber(score)
            control.reset()
        }
    }
    if (extraBox && extraFallingBox_Y >= 4 && extraFallingBox_X == paddle) {
        score += 1
        soundExpression.happy.play()
        extraFallingBox_X = Math.randomRange(0, 4)
        extraFallingBox_Y = 0
        if (score % 5 == 0) {
            basic.showNumber(score)
        }
        if (score >= 20) {
            interval = 250
        }
    } else if (extraBox && extraFallingBox_Y > 4) {
        lives += 0 - 1
        soundExpression.sad.play()
        extraFallingBox_X = Math.randomRange(0, 4)
        extraFallingBox_Y = 0
        if (lives <= 0) {
            basic.showString("Game Over!")
            basic.showNumber(score)
            control.reset()
        }
    }
    basic.pause(interval)
})
