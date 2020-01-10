function calculateAngle(sideHeight, sideGround) {
    const sideHypotenuse = Math.hypot(sideHeight, sideGround)
    const sinAngle = sideGround / sideHypotenuse
    const angleTop = Math.asin(sinAngle) * 180/Math.PI
    const angleBottom = 180 - 90 - angleTop
    return angleBottom
}

module.exports = calculateAngle
