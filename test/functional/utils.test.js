const getSuntimeFromAngle = require('../../src/utils/get-suntime-from-angle')

describe('utils.js', () => {
    describe('getSuntimeFromAngle.js', () => {
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
})