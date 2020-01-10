const GENERAL_SUNRISE_TIME = "08:14"
const GENERAL_SUNSET_TIME = "17:30"

function getSunTimeFromAngle(angle) {
    const minutesDiff = getMinutesDiffBetween(GENERAL_SUNRISE_TIME, GENERAL_SUNSET_TIME)
    const minutesSum = ( angle * minutesDiff ) / 180
    const sunTime = sumTimeMinutes(GENERAL_SUNRISE_TIME, minutesSum)
    return sunTime
}

function getMinutesDiffBetween(dateStart, dateEnd){
    const startTime = new Date(`2020/01/01 ${dateStart}`); 
    const endTime = new Date(`2020/01/01 ${dateEnd}`);
    const difference = endTime.getTime() - startTime.getTime();
    const resultInMinutes = Math.round(difference / 60000);
    return resultInMinutes
}

function sumTimeMinutes(dateStart, minutesToSum) {
    const startTime = new Date(`2020/01/01 ${dateStart}`); 
    const d = new Date(startTime.getTime() + minutesToSum*60000)
    const hh = d.getHours().toString().padStart(2, '0')
    const mm = d.getMinutes().toString().padStart(2, '0')
    return `${hh}:${mm}`
}

module.exports = getSunTimeFromAngle