// Declare currentDay variable and use moment.js to convert to "dddd(Day of Week), DD/MM/YYYY"
var todayDate = moment();
$("#currentDay").text(todayDate.format("dddd, MMMM Do YYYY"));

// Add code to create timeblocks
// Present timeblocks for standard business hours when the user scrolls down.
var containerEl = $(".container");
var timeblocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
$(containerEl).html(function () {
    for (var i = 0; i < timeblocks.length; i++) {
        var timeblockEl = $(`<div id="hour${i + 9}" class="row time-block">
        <div class="hour col-1">${timeblocks[i]}</div>
        <textarea class="col-10 description"></textarea>
        <button class="btn saveBtn col-1"><i class="fas fa-save"></i></button>
        </div>`);
        containerEl.append(timeblockEl);
    }
});

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