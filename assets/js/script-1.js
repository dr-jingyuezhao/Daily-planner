// Declare currentDay variable and use moment.js to convert to "dddd(Day of Week), DD/MM/YYYY"
var todayDate = moment();
$("#currentDay").text(todayDate.format("dddd, MMMM Do YYYY, h:mm:ss A"));

// Add code to create timeblocks
// Present timeblocks for standard business hours when the user scrolls down.
var containerEl = $(".container");
containerEl.addClass("row");
containerEl.css({"margin": "auto", "justify-content": "center", });

var timerows = ["hour9", "hour10", "hour11", "hour12", "hour13", "hour14", "hour15", "hour16", "hour17"];
var timeblocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
for (var i = 0; i < timeblocks.length; i++) {
    var timeEl = $("<div>")
    timeEl.text(timeblocks[i]);
    timeEl.addClass("hour col-1");

    var textEl = $("<textarea>");
    // textEl.attr("class", "col-10");
    textEl.addClass("col-10 description");
    // $(".time-block").before("<div>timeblocks[i]</div>");
    var buttonEl = $("<i>");
    buttonEl.attr("class", "fas fa-save");
    buttonEl.addClass("btn saveBtn col-1");
    buttonEl.css({"display": "flex", "justify-content": "center", "align-items": "center"});

    containerEl.append(timeEl);
    containerEl.append(textEl);
    containerEl.append(buttonEl);



    // var timeblockEl = $("<div>");
    // timeblockEl.attr("id", timeblocks[i]);
    // timeblockEl.attr("class", "row");
    // timeblockEl.addClass("time-block");
    // containerEl.append(timeblockEl);
    // $(".row").each(function () {
    //     var timeEl = $("<div>")
    //     var textEl = $("<textarea>");
    //     var buttonEl = $("<button>");
    //     // timeEl.attr("class", "hour");
    //     // timeEl.addClass("col-1");
    //     // timeEl.text("10AM");
    //     // textEl.addClass("col-10");

    //     timeblockEl.append(timeEl);
    //     timeblockEl.append(textEl);
    //     timeblockEl.append(buttonEl);


    // })
}

// var timeblockEl = $("<div>");
// timeblockEl.attr("class", "row");
// timeblockEl.addClass("time-block");
// $.each(timeblocks, function(i, timeblock) {
//     timeblockEl.attr("id", timeblocks[i]);

//  })

// $().each(timeblocks, function(i, timeblock) {
//    timeblockEl.append("<div>" + timeblocks + "</div>");
//    timeblockEl.text(timeblocks[i]);
// })


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