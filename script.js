var countdownDate = new Date("May 11, 2021 22:30:00").getTime();

var interval = setInterval(() => {
    var now = new Date().getTime();
    var timeleft = countdownDate - now;

    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById('hours').innerHTML = hours + 'h ';
    document.getElementById('minutes').innerHTML = minutes + 'm ';
    document.getElementById('seconds').innerHTML = seconds + 's ';

    if (timeleft < 0) {
        clearInterval(interval);
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("minutes").innerHTML = ""
        document.getElementById("seconds").innerHTML = ""
        document.getElementById("end").innerHTML = "Update should be up in a minute or two.";
    }
}, 1000)