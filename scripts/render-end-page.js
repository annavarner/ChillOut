
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

    const chillTime = document.querySelector(".finish");
    chillTime.innerHTML = `    
    <figure>
        <img src="./images/penguin.webp" alt="an animated penguin" class="logo"></img>
    </figure>
    <div class="time-display">
    <p><strong>Chill Time = ${minutes} minutes and ${seconds} seconds.</strong></p>
    <p><em>Do you feel more calm?</em></p>
    <input type="radio" name="calmer" value="yes" onChange="calmer()">
    <label for="yes">yes!</label>
    <input type="radio" name="calmer" value="no" onChange="notCalmer()">
    <label for="no">not really</label>
    <span class="finish"></span>
    </div>`
}
function calmer() {
    finish = document.querySelector(".finish")
    finish.innerHTML = `
    <figure>
        <img src="./images/penguin.webp" alt="an animated penguin" class="logo"></img>
    </figure>
    <p>I'm glad you're feeling calmer! Please come chill with me again the next time you want to feel more relaxed.</p>
    <button id="end" onClick="reset()">Start Over</button>`

}

function notCalmer() {
    finish = document.querySelector(".finish")
    finish.innerHTML = `
    <figure>
        <img src="./images/penguin.webp" alt="an animated penguin" class="logo"></img>
    </figure>
    <p>Ok, you're not feeling calmer yet. We can try a different chill or here are some other things you can 
        try to feel more relaxed:</p>
    <ul>
        <li>Go for a walk or run</li>
        <li>Talk to a friend or family member</li>
        <li>Listen to soft music</li>
        <li>Take a warm bath</li>
        <li>Make a list of things you're grateful for</li>
        <li>Try some yoga poses</li>
        <li>Draw or paint a picture</li>
    </ul>
    <button id="end" onClick="reset()">Try a New Chill</button>`

}
function reset() {
    location.reload();
}