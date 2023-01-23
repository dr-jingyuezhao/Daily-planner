# Daily-planner
Creating a simple calendar application that allows a user to save events for each hour of the day

## Discription

This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The application can:

- Display the current day at the top of the calendar when a user opens the planner

- Present timeblocks for standard business hours when the user scrolls down 
    
- Color-code each timeblock based on past, present, and future when the timeblock is viewed

- Allow a user to enter an event when they click a timeblock

- Save the event in local storage when the save button is clicked in that timeblock

- Persist events between refreshes of a page

## Installation
The app can be installed follwing the link to the application page:
https://dr-jingyuezhao.github.io/Daily-planner/

## Usage 

When opening the app in the browser, the user will be presented with a daily planner. The current day is displayed at the top of the calendar. The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.). Each timeblock is color coded to indicate whether it is in a past, present, or future hour. Each timeblock contains an input field and save button. Clicking a time block's save button saves the input text to local storage, allowing the text to persist when the application is refreshed.

**Website demo**

The following animation demonstrates the application's functionality:

![website demo](assets/img/05-third-party-apis-homework-demo.gif)

## Credits

Resources:
* https://momentjs.com/
* https://api.jquery.com/
* https://www.w3schools.com/jsref/prop_win_localstorage.asp

## License

MIT License

Copyright (c) 2023 Jasmine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.