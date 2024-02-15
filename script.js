document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to
    var countDownDate = new Date().getTime() + 600000; // 10 minutes from now
  
    // Update the countdown every 1 second
    var x = setInterval(function() {
  
      // Get the current time
      var now = new Date().getTime();
  
      // Calculate the remaining time
      var distance = countDownDate - now;
  
      // Calculate minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="timer"
      document.getElementById("timer").innerHTML = minutes + ":" + seconds;
  
      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  });
  