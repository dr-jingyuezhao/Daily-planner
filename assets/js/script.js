// Declare currentDay variable and use moment.js to convert to "dddd(Day of Week), DD/MM/YYYY"
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, DD/MM/YYYY"));
