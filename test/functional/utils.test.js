const getSuntimeFromAngle = require('../../src/utils/get-suntime-from-angle')
const getSunlightHours = require('../../src/utils/get-sunlight-hours')

describe('utils.js', () => {

    describe('getSunlightHours', () => {
         it('should return the expected hours', () => {
             const expected = "11:40 - 14:45"
             const result = getSunlightHours('POBLENOU', '01', 1)
             expect(result).toBe(expected)
         })   
    })

    describe('getSuntimeFromAngle(angle)', () => {
        it('0 should return 08:14', () => {
            expect(getSuntimeFromAngle(0)).toBe("08:14")  
          })
      
        it('180 should return 17:30', () => {
            expect(getSuntimeFromAngle(180)).toBe("17:30")  
        })
      
        it('90 should return 12:52', () => {
            expect(getSuntimeFromAngle(90)).toBe("12:52")  
        })
    })

    describe.skip('getContextBuildings(buildings, buildingName)', () => {

    })

})