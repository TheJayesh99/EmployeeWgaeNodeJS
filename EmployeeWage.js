const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 20
const MAX_HRS_IN_MONTH = 160

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS
        case IS_FULL_TIME:
            return FULL_TIME_HOURS
        default:
            return 0
    }
}
function calculateWage(emphrs) {
    return emphrs*WAGE_PER_HOUR
}
let totalEmpHours = 0
let totalWorkingDays = 0
let empDailyWageArray = new Array()
let empDailyWageMap = new Map()

while ( totalEmpHours < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++
    let empCheck = Math.floor(Math.random()*10) % 3
    let empHours = getWorkingHours(empCheck)
    totalEmpHours += empHours
    empDailyWageMap.set(totalWorkingDays,calculateWage(empHours))
}

console.log(empDailyWageMap)
let totalempWage = 0
function sum(dailyWage) {
    totalempWage += dailyWage
}
//a - using reduce
function totalWage(totalWage,dailyWage) {
    return totalWage += dailyWage
}

//total wage using map
console.log("Total wage using map: "+Array.from(empDailyWageMap.values()).reduce(totalWage,0))

//b-show day along daily wage

console.log("Daily Wage Map")
console.log(empDailyWageMap)

//c - Show days full time wage
function fullTimeWage(dailyWage) {
    return dailyWage == 160
}
let fullDayWageArr = Array.from(empDailyWageMap.values()).filter(fullTimeWage);
console.log("Daily Wage Filter With Full Time");
console.log(fullDayWageArr)

//d - Find first occurence of full time wage
function findFullTimeWage(dailyWage) {
    return dailyWage == 160
}
console.log("The first time employee worked full time: "+parseInt(Array.from(empDailyWageMap.values()).findIndex(findFullTimeWage)))

//e - check every full time wage holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage == 160
}
console.log("Check all element have full time wage : " +fullDayWageArr.every(isAllFullTimeWage));

//f - check if thereis any part time
function isAnypartTime(dailyWage) {
    return dailyWage == 80
}
console.log("Check any part time wage: "+Array.from(empDailyWageMap.values()).some(isAnypartTime));

//g - Find number of days employee work
function totalDaysWorked(numberOfDays,dailyWage) {
    if (dailyWage>0) {
        return numberOfDays+1
    }
    return numberOfDays
}
console.log("Number of days employee worked: " +Array.from(empDailyWageMap.values()).reduce(totalDaysWorked,0));