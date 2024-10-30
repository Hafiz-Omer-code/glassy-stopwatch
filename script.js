let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
let laps = document.getElementById('laps');

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById('displayTime').innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    if (timer != null) clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    document.getElementById('displayTime').innerHTML = "00:00:00";
    laps.innerHTML = "";  // Clear all recorded laps
}

function recordLap() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let lapTime = `${h}:${m}:${s}`;
    let lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
}
