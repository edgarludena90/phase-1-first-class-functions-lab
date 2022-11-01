// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(-2)
} 

const selectingDrivers =[ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiply){
  return function (multi){
    return multiply * multi
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

console.log(fareDoubler())

const selectDifferentDrivers = function(drivers, returnDrivers){return returnDrivers(drivers)

}