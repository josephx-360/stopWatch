let countingInterval;
let result;

const counter = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", startCounting)
resetBtn.addEventListener("click", resetCounter)
stopBtn.addEventListener("click", stopCounting)

function startCounting() {
    let startTime = new Date()
    countingInterval = setInterval(() => {
        let date = new Date();
        const elapsedTime = new Date(date - startTime);
        const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
        const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
        const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');

        result = `${hours}:${minutes}:${seconds}`
        counter.textContent = result;
    }, 1000)
    startBtn.style.display = "none"
    resetBtn.style.display = "inline"
    stopBtn.style.display = "inline"
}

function stopCounting(){
    clearInterval(countingInterval)
    counter.textContent = result;
    startBtn.style.display = "inline"
    resetBtn.style.display = "none"
    stopBtn.style.display = "none"
}

function resetCounter (){
    clearInterval(countingInterval)
    counter.textContent = "00:00:00";
    startBtn.style.display = "inline"
    resetBtn.style.display = "none"
    stopBtn.style.display = "none"
}