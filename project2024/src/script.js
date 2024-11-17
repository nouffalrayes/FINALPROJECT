let countdownInterval; // interval id

function changeTheme() { 
    const theme = document.getElementById('theme').value;
    if(theme === "Light"){
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#333";
    }
    else if(theme === "dark"){
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#f4f4f4";
    }
    else if(theme === "festive"){
        document.body.style.backgroundColor = "#FF5733";
        document.body.style.color = "#fff"
    }
}

// menu function
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function changeBackground(seconds){
    const colors = ["#ff5733", "#ffc300,", "#DAF7A6","#33FFBD"];
    const index = Math.floor(seconds % colors.length);
    document.body.style.backgroundColor = colors[index];
}

// function to start the countdown
function startCountdown() {
    const eventName = document.getElementById('eventName').value.trim();
    const daysInput = document.getElementById('days').value;

    if(daysInput <= 0){
        alert("Please enter a valid number of days!");
        return;
    }
    if (!eventName){
        alert("Please enter an event name!");
        return;
    }
   

    const totalSeconds = daysInput * 24 * 60 * 60; // convert days to seconds
    let remainingTime = totalSeconds; // initialize remaining time

    // clear countdown
    clearInterval(countdownInterval);

    // update display immediately
    updateCountdownDisplay(remainingTime, eventName);
    changeBackground(remainingTime);

    function confetti(){
        alert('Hooray! The count down is complete!')
    }

    // begin countdown
    countdownInterval = setInterval(() => {
        remainingTime--; // decrement remaining time by 1 second

        if (remainingTime <= 0) {
            clearInterval(countdownInterval); // stop countdown when it reaches 0
            document.getElementById('countdownDisplay').textContent = `${eventName}: Countdown Complete`;
            confetti();
        } else {
            updateCountdownDisplay(remainingTime, eventName); // update display
            changeBackground(remainingTime);
        }
    }, 1000); // update every second
}

// countdown display update function
function updateCountdownDisplay(seconds, eventName) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // update display with formatted time
    document.getElementById('countdownDisplay').innerHTML =
        ` ${eventName}:
        <span> ${days} </span> Days, 
        <span>${hours} </span> Hours,
        <span> ${minutes} </span> Minutes,
        <span> ${remainingSeconds}</span> Seconds`;
}

