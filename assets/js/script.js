// Declare currentDay variable and use moment.js to convert to "dddd(Day of Week), DD/MM/YYYY"
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, DD/MM/YYYY"));

// Add code to create timeblocks
// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock.

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page.