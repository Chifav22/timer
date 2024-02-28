let time = {
    days: document.querySelector(".days .number"),
    hours: document.querySelector(".hours .number"),
    mins: document.querySelector(".mins .number"),
    secs: document.querySelector(".secs .number"),
  };
  
  // Countdown setup
  let endSeconds = 59;
  let endMinutes = 59;
  let endHours = 33;
  let endDays = 38;
  
  // Function to update countdown
  let timeCapture = function () {
    setTimeout(function () {
      let date = new Date();
      time.secs.innerText = endSeconds - date.getSeconds();
      time.mins.innerText = endMinutes - date.getMinutes();
      time.hours.innerText = endHours - date.getHours();
      time.days.innerText = endDays - date.getDate();
      timeCapture();
    }, 1000);
  };
  
  timeCapture();