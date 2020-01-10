const { getSunlightHours } = require('../utils')

function sunlightController(req, res) {
    const neighborhood = req.body.neighborhood
    const building = req.body.building
    const floor = req.body.floor    
    const sunlightHours = getSunlightHours(neighborhood, building, floor)
    res.status(200).json({ hours: sunlightHours })
}

module.exports = sunlightController