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
let empDailyHrsAndWageArr = new Array()

while ( totalEmpHours < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++
    let empCheck = Math.floor(Math.random()*10) % 3
    let empHours = getWorkingHours(empCheck)
    totalEmpHours += empHours
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHours,
            dailyWage:calculateWage(empHours),
            toString(){
                return ` Day ${this.dayNum} => Working Hours is ${this.dailyHours} And Wage Earned = ${this.dailyWage} `
            },
        }
    )
}
// printing daily wage using object
console.log("Showing daily worked hours and daily earned= \n"+empDailyHrsAndWageArr);

//a total wage using arrow function
let totalHrs = empDailyHrsAndWageArr.filter(dailyWageAndHrs => dailyWageAndHrs.dailyWage > 0).reduce((totalHrs,dailyWageAndHrs) => totalHrs += dailyWageAndHrs.dailyHours,0)

let totalSalary = empDailyHrsAndWageArr.filter(dailyWageAndHrs => dailyWageAndHrs.dailyWage > 0).reduce((totalSalary,dailyWageAndHrs) => totalSalary += dailyWageAndHrs.dailyWage,0)

console.log("Emp Wage using Arrow: Total Hours "+totalHrs + " Total Wage "+ totalSalary)

//b-show day along daily wage
console.log("Daily Wage Map")
empDailyHrsAndWageArr.forEach(employee => console.log(`${employee.dayNum} : ${employee.dailyWage}`))

//c - Show days full time wage

let fullDayWageArr = empDailyHrsAndWageArr.filter(employee => employee.dailyWage == "160")
console.log("Daily Wage Filter With Full Time");
fullDayWageArr.forEach(employee => console.log(`${employee.dayNum} : ${employee.dailyWage}`))

//d - Find first occurence of full time wage
let firstDay = empDailyHrsAndWageArr.find(employee => employee.dailyWage == "160")
console.log("The first time employee worked full time: "+firstDay.dayNum)

//e - check every full time wage holding full time wage
console.log("Check all element have full time wage : " +fullDayWageArr.every(employee => employee.dailyWage == "160"));

//f - check if thereis any part time
function isAnypartTime(dailyWage) {
    return dailyWage == 4
}
console.log("Check any part time wage: "+empDailyHrsAndWageArr.some(employee => employee.dailyWage == "160"));

//g - Find number of days employee work
let count = empDailyHrsAndWageArr.filter(employee => employee.dailyWage == "0").reduce(count => count+1,0)
console.log("Number of days employee worked: " + count);

let nonWorkingDays = new Array()
let partWorkingDays = new Array()
let fullWorkingDays = new Array()
empDailyHrsAndWageArr.forEach( employee =>{
    if (employee.dailyWage == "160" ) fullWorkingDays.push(employee.dayNum)
    else if (employee.dailyWage == "80") partWorkingDays.push(employee.dayNum)
    else nonWorkingDays.push(employee.dayNum)
})
console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);

process.stdout.write("Logging full Work Days ")
empDailyHrsAndWageArr.filter(dailyWageAndHrs=> dailyWageAndHrs.dailyHours == 8 )
.forEach( dailyWageAndHrs => process.stdout.write(dailyWageAndHrs.toString()))

let partWorkingDaysStrArr = empDailyHrsAndWageArr
.filter(dailyWageAndHrs => dailyWageAndHrs.dailyHours == 4)
.map(dailyWageAndHrs => dailyWageAndHrs.toString())
console.log("Part Time working days \n"+ partWorkingDaysStrArr)

let nonWorkingDaysNumber = empDailyHrsAndWageArr
.filter(dailyWageAndHrs => dailyWageAndHrs.dailyHours == 0)
.map(dailyWageAndHrs => dailyWageAndHrs.dayNum)
console.log("Non working days are \n"+ nonWorkingDaysNumber)