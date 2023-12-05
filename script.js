$(document).ready(function () {

  var buttonClickEl = $('.btn saveBtn')

 
  var today = dayjs()
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
    var currentHour = (dayjs().hour())

    setInterval(myTime, 1000);
    function myTime() {
      const d = new Date();
      document.getElementById("currentTime").innerHTML = d.toLocaleTimeString();
    }
  
  var myHour = [
    { hour: 9, memo: '' },
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

    addEventListener("click", function(event) {
      event.preventDefault();
      memo = myHour[i].memo
      localStorage.setItem(memo)
    })
  }
})