//UC 1 

{
    console.log("Welcome")
    const IS_ABSENT=0;
    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck ==IS_ABSENT){
        console.log("UC1 : Employee is Absnet")
        return;
    }else{
        console.log("UC2 : Employee is Present");
    }
}


//UC2-Calculate Employee Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOUR;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage is : " +empWage);


//UC3-Refactore the code Function and Calculate Employee Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;

let empHrs = 0;
function getworkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}
let empCheck = Math.floor(Math.random() *10) % 3;
empHrs = getworkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage is : " +empWage);


//UC4-using For Loop for Num of Working Days
{
    const Is_PartTime=1;
    const is_FullTime=2;
    const Part_Time_Hrs=4;
    const Full_Time_Hrs=8;
    const Wage_Per_Hr=20;
    const Num_Of_WorkingDays=2;
    
        function getWorkingHrs(empCheck)
        {
        switch(empCheck)
        {
            case Is_PartTime:
                return Part_Time_Hrs;
            case is_FullTime:
                return Full_Time_Hrs;
            default:
                return 0;
        }
    }
        let totalemphr=0;
        for(let day=0;day<Num_Of_WorkingDays;day++)
        {
        let empCheck=Math.floor(Math.random()*10)%2;
        empHrs=getWorkingHrs(empCheck);
        totalemphr=empHrs*Wage_Per_Hr;
        }
        empWage=totalemphr*Wage_Per_Hr;
        console.log("Hours="+totalemphr+"  EmpWage="+empWage);
}


//UC5-Calculate Wage till No of working days or total working hours per Month is reached
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
function getworkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && 
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHrs += getworkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days : " +totalWorkingDays+ "\tTotal Hours: "+totalEmpHrs+ "\tEmployee Wage: "+empWage);

//UC6-stored Daily Wage
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;

let empHrs = 0
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
function getworkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && 
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHrs += getworkingHours(empCheck);
            totalEmpHrs += empHrs;
            empDailyWageArr.push(calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days : " +totalWorkingDays+ "\tTotal Hours: "+totalEmpHrs+ "\tEmployee Wage: "+empWage);
