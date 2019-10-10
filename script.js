var nextKickoff = new Date(2020, 0, 4, 15, 30);

refreshClock();

var interval = setInterval(function(){
    refreshClock();
}, 1000)

function refreshClock(){
    var currentTime = timeToUtc(new Date());
    var difference = nextKickoff.getTime() - currentTime.getTime();

    if (difference <= 0) {
        difference = 0;
        document.getElementById("header").innerText = "The 2020 season has begun."
    }

    document.getElementById("days").innerText = Math.floor(difference / 1000 / 60 / 60 / 24);
    document.getElementById("hours").innerText = Math.floor(difference / 1000 / 60 / 60) % 24;
    document.getElementById("minutes").innerText = Math.floor(difference / 1000 / 60) % 60;
    document.getElementById("seconds").innerText = Math.floor(difference / 1000) % 60;
}
/**
 * 
 * @param {Date} currentTime 
 */
function timeToUtc(currentTime){
    var timezone = currentTime.getTimezoneOffset() * 60000;
    var utc = currentTime.getTime() + timezone;
    return new Date(utc);
}

document.getElementById("watch").onclick = function(e){
    window.open("https://twitch.tv/firstinspires")
}

if(!CSS.supports('backdrop-filter', 'blur(7px)')){
    // What if we can't use backdrop-filter?
    // Make the background less see-through
    document.getElementById("box").style.backgroundColor = "rgba(50, 50, 50, 0.93)";
}