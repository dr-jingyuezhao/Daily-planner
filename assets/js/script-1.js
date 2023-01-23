// Declare currentDay variable and use moment.js to convert to "dddd(Day of Week), DD/MM/YYYY"
var todayDate = moment();
$("#currentDay").text(todayDate.format("dddd, MMMM Do YYYY, h:mm:ss A"));

// Add code to create timeblocks
// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// use moment to check the current time and create a function to compare the viewed timeblock is past,present, and future
function timeChecker() {
    var nowHour = moment().hour();
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        if (blockTime < nowHour) {
            $(this).addClass("past");
        } else if (blockTime === nowHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
}
// Allow a user to enter an event when they click a timeblock.

// Save the event in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on("click", function () {
    var time = $(this).siblings(".hour").text();
    var event = $(this).siblings(".description").val();
    localStorage.setItem(time, event);
    console.log("The event is saved for " + time);
    // add code to display the message: Appointment is added to localStorage
    var header = $(".jumbotron");
    var descriptionEl = $("<span>");
    descriptionEl.text(time + " appointment is added to localStorage ✔️");
    descriptionEl.addClass("description");
    header.append(descriptionEl);
});

// Persist events between refreshes of a page.
function loadStoredEvent() {
    $(".hour").each(function () {
        var currentHour = $(this).text();
        var storedEvent = localStorage.getItem(currentHour);
        console.log(currentHour + ": " + storedEvent);
        $(this).siblings(".description").val(storedEvent);
    });
}

timeChecker();
loadStoredEvent();