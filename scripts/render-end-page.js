
function endChill() {
    document.body.style = null;
    let affirm = document.querySelector(".affirm");
    affirm.classList.add("inactive");
    clearInterval(affirmInterval);
    let breathe = document.querySelector(".breathe");
    breathe.classList.add("inactive");
    let sound = document.querySelector(".sound");
    sound.classList.add("inactive");
    sound.innerHTML = "";

    let allDone = document.querySelector("#done");
    allDone.classList.add("inactive");
    getTime();

}

function getTime() {
    let stopTime = Date.now();
    let startTime = Number(window.localStorage.getItem("start-time"));
    let milliseconds = (stopTime - startTime);
    let minutes = Math.floor(milliseconds / 60000);
    let seconds = ((milliseconds % 60000 / 1000).toFixed(0));
    displayResults(minutes, seconds);

}
function displayResults(minutes, seconds) {
    const chillTime = document.querySelector(".chill-time");
    chillTime.innerHTML = `    
    <figure>
        <img src="./images/penguin.webp" alt="an animated penguin" class="logo"></img>
    </figure>
    <div class="time-display">
    Chill Time = ${minutes} minutes and ${seconds} seconds.
    </div>`
    feelBetter = chillTime.appendChild("div");
    feelBetter.innerHTML = `<h2>Do you feel more calm?</h2>
    <input type="radio" name="calmer" value="yes" id="morecalm">>
    <label for="yes">yes!</label>
    <input type="radio" name="calmer" value="no" id="notcalm">
    <label for="no">no</label>`


}
