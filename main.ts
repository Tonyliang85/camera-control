input.onButtonPressed(Button.A, function () {
    bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.ToggleFrontRear)
})
basic.showString("" + (sonar.ping(
DigitalPin.P0,
DigitalPin.P0,
PingUnit.MicroSeconds
)))
