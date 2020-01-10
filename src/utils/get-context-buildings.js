function getContextBuildings(buildings, buildingName) {
    const buildingIndex = getBuildingIndex(buildings, buildingName)
    const previousBuilding = buildings[buildingIndex-1]
    const currentBuilding = buildings[buildingIndex]
    const nextBuilding = buildings[buildingIndex+1]

    return {
        previousBuilding: previousBuilding,
        currentBuilding: currentBuilding, 
        nextBuilding: nextBuilding
    }    
}

function getBuildingIndex(buildings, buildingName) {
    return buildings.findIndex(x => x.name===buildingName) //find buildingIndex
}

module.exports = getContextBuildings