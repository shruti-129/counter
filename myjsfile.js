$(document).ready(function () {
var x,temp,counter,inputdata;
  function Countstart() {
    counter = inputdata;
    x=setInterval(function() {
      counter-=10;
      if (counter >= 0) {
        function padZero(counter) {
          return counter < 10 ? '0' + counter : '' + counter;
        }
        var c_sec=padZero(parseInt((counter%1000)/100));
        $("#c_sec").html(c_sec);
        console.log(c_sec);
        var seconds =padZero(parseInt(counter/1000));
        var minutes =padZero(parseInt(seconds/60, 10));
        seconds = seconds%60;
        var  hours =padZero(parseInt(minutes/60, 10));
        $("#hr").html(hours);
        minutes = minutes%60;
        $("#sec").html(seconds);
        $("#min").html(minutes);
        temp=counter;
      }
      if (counter === 0) {
        clearInterval(0);
        $("#hr").text("00");
        $("#min").text("00");
        $("#sec").text("00");
        $("#c_sec").text("00");
      }
    }, 10);
  }
  function startTimer(){
    inputdata=$("#inputsecond").val();
    inputdata=inputdata*1000;
      Countstart();
      $('#startbtn').css({pointerEvents:'none'});
    $('#pausebtn,#stopbtn').css({pointerEvents:'auto'});
  }
  function pauseTimer(){
    clearTimeout(x);
    $('#resumebtn').removeClass('dn');
    $('#startbtn').addClass('dn');
    $('#stopbtn').css({pointerEvents:'none'});
  }
  function resumeTimer(){
    inputdata=temp;
    console.log(inputdata);
    Countstart();
    $('#resumebtn').addClass('dn');
    $('#startbtn').removeClass('dn');
    $('#stopbtn').css({pointerEvents:'auto'});
  }
  function stopTimer(){
    clearTimeout(x);
    $('#startbtn').addClass('dn');
    $('#restartbtn').removeClass('dn');
    $('#pausebtn').css({pointerEvents:'none'});
  }
  function  restartTimer(){
    inputdata=$("#inputsecond").val();
    inputdata=inputdata*1000;
    console.log(inputdata);
    Countstart();
    $('#startbtn').removeClass('dn');
    $('#restartbtn').addClass('dn');
    $('#pausebtn').css({pointerEvents:'auto'});
  }
  function  resetTimer(){
    clearTimeout(x);
    $("#hr").text("00");
    $("#min").text("00");
    $("#sec").text("00");
    $("#c_sec").text("00");
    $("#inputsecond").val('');
    $('#startbtn').removeClass('dn').css({pointerEvents:'auto'});
    $('#pausebtn,#stopbtn').css({pointerEvents:'none'});
    $('#restartbtn').addClass('dn');
    $('#resumebtn').addClass('dn');
  }

$("#startbtn").click(function(){
  if ($('#inputsecond').val()===''){
    return false;
  }
  startTimer();
  $("#status").html("Counter Start");
});
$('#pausebtn').click(function () {
  pauseTimer();
  $("#status").html("Counter Pause");
});
$('#resumebtn').click(function () {
  resumeTimer();
  $("#status").html("Counter Start");
});
$('#stopbtn').click(function () {
  stopTimer();
  $("#status").html("Counter Stop");
});
$('#restartbtn').click(function () {
  restartTimer();
  $("#status").html("Counter Restart");
});
$('#resetbtn').click(function () {
  resetTimer();
  $("#status").html("Enter Time & Hit Start!");
});
});


