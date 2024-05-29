/*
Colored clock with setInterval
importance: 4

Create a colored clock like here:

Use HTML/CSS for the styling, JavaScript only updates time in elements.
*/

<!DOCTYPE HTML>
<html>
<body>

  <!-- click on this button calls clockStart() -->
  <input type="button" onclick="clock()" value="Start">

  <!-- click on this button calls clockStop() -->
  <input type="button" onclick="clockstop()" value="Stop">

  <div id="time"></div>

</body>

<script> 

function clock(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();


    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(clock, 1000);
}
/*
function clockstop(){
    let stopclock = document.querySelector("#time");
    stopclock.innerHTML.remove();
    document.querySelector("#time").innherHTML;
}
*/

function color(h, m, s){
  let hcolor = document.
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

</script>

</html>

</script>

/* correction*/

<div id="clock">
  <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
</div>

function update() {
    let clock = document.getElementById('clock');
    let date = new Date(); // (*)
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;
  
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;
  
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
  }

  let timerId;

function clockStart() { // run the clock
  if (!timerId) { // only set a new interval if the clock is not running
    timerId = setInterval(update, 1000);
  }
  update(); // (*)
}

function clockStop() {
  clearInterval(timerId);
  timerId = null; // (**)
}