
const calculateAngle = require('./calculate-angle')
const getContextBuildings = require('./get-context-buildings')
const getSunTimeFromAngle = require('./get-suntime-from-angle')


function getSunlightHours(neighborhoodName, buildingName, floorNumber) {
    const neighborHoodsList = require('../../test/test.data.json')
    const params = { neighborhoodName, buildingName, floorNumber }
    const sunriseTime = getSunriseTime(neighborHoodsList, params)
    const sunsetTime = getSunsetTime(neighborHoodsList, params)
    return `${sunriseTime} - ${sunsetTime}`
}

function getSunriseTime(neighborHoodsList, params) {
    const neighborhoodObj = getNeighborhood(neighborHoodsList, params.neighborhoodName)
    const contextBuildings = getContextBuildings(neighborhoodObj.buildings, params.buildingName)

    const isTheFirstBuilding = !contextBuildings.previousBuilding
    if(isTheFirstBuilding) return GENERAL_SUNRISE_TIME 

    const isTheFloorTallerThanEast = (params.floorNumber > contextBuildings.previousBuilding.apartments_count)
    if(isTheFloorTallerThanEast) return GENERAL_SUNRISE_TIME 

    // calculate sunrise angle
    const sideGround = contextBuildings.currentBuilding.distance 
    const sideLeft = calculateSideLeft(neighborhoodObj, contextBuildings.previousBuilding, params.floorNumber)
    const angleBottom = calculateAngle(sideLeft, sideGround) 
    const sunriseTime = getSunTimeFromAngle(angleBottom)

    return sunriseTime
}

function getSunsetTime(neighborHoodsList, params) {
    const neighborhoodObj = getNeighborhood(neighborHoodsList, params.neighborhoodName)
    const contextBuildings = getContextBuildings(neighborhoodObj.buildings, params.buildingName)

    const isTheLastBuilding = !contextBuildings.nextBuilding
    if(isTheLastBuilding) return GENERAL_SUNSET_TIME 

    const isTheFloorTallerThanWest = (params.floorNumber > contextBuildings.nextBuilding.apartments_count)
    if(isTheFloorTallerThanWest) return GENERAL_SUNSET_TIME 

    const sideGround = contextBuildings.nextBuilding.distance
    const sideRight = ( contextBuildings.nextBuilding.apartments_count + 1 ) * neighborhoodObj.apartments_height
    const angleBottom = calculateAngle(sideRight, sideGround) 
    const sunAngle = 180 - angleBottom
    const sunsetTime = getSunTimeFromAngle(sunAngle)

    return sunsetTime
}

function getNeighborhood(neighborhoodsArr, neighborhoodName) {
    return neighborhoodsArr.filter(o => o.neighborhood===neighborhoodName).shift() //select neighborhood matching neighborhoodName
}

function calculateSideLeft(neighborhoodObj, previousBuilding, floorNumber) {
    const floorOffsetInMeters = neighborhoodObj.apartments_height * (floorNumber + 1)
    const previousBuildingHeight = (previousBuilding.apartments_count+1) * neighborhoodObj.apartments_height
    const sideLeft = previousBuildingHeight - floorOffsetInMeters // a
    return sideLeft
}


module.exports = getSunlightHours