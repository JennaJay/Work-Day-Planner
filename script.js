$(document).ready(function () {

  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  var today = dayjs()
  $('#currentDay').text(today.format('dddd MMM D, YYYY'));
    var currentHour = (dayjs().hour())
  
  var myHour = [
    { hour: 9, memo: 'get coffee' },
    { hour: 10, memo: '' }, 
    { hour: 11, memo: '' },
    { hour: 12, memo: '' },
    { hour: 13, memo: '' },
    { hour: 14, memo: '' },
    { hour: 15, memo: '' },
    { hour: 16, memo: '' },
    { hour: 17, memo: '' },
  ]

  for (var i = 0; i < myHour.length; i++) {
    var timeBlock = myHour[i]
    var colorClass;
    if(timeBlock.hour < currentHour) {
    colorClass = 'past'
    } else if ( timeBlock.hour === currentHour) {
      colorClass = 'present'
    } else {
    colorClass = 'future'
  }
    var amPm = (timeBlock.hour > 11) ? "PM" : "AM"
    var displayHour = (timeBlock.hour > 12) ? timeBlock.hour - 12 : timeBlock.hour
    var wrapper = $('<div class="row time-block">')
    wrapper.addClass(colorClass)
    wrapper.attr("id", "hour-" + timeBlock.hour)
    var hourTime = $('<div class="col-2 col-md-1 hour text-center py-3">')
    hourTime.text(displayHour + amPm)
    var textArea = $('<textarea class="col-8 col-md-10 description" rows="3">')
    textArea.val(timeBlock.memo)
    var saveButton = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save">')
    var icon = $('<i class="fas fa-save" aria-hidden="true">')
    saveButton.append(icon)
    wrapper.append(hourTime, textArea, saveButton)
    $('#days').append(wrapper)

  }
}) 



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});
{/* <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div> */}