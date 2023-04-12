let affirmInterval = 0;
function validateCheckboxes() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    if (checkedOne == true) {
        displayChill();
    }
    else alert("Please select at least one option to continue");
}

function displayChill() {
    footer = document.querySelector(".footer");
    footer.classList.add("inactive");
    mainDisplay = document.querySelector(".selectDisplay");
    mainDisplay.classList.add("inactive");
    display = document.querySelector(".chillDisplay");
    display.classList.remove("inactive");
    display.innerHTML = `                   
    <p class="inactive affirm"></p>
    <span class="inactive breathe">
        <p>breathe</p>
    </span>
    <span class="inactive sound"></span>
    <button class="inactive" id="done" onClick="endChill(); getTime()">I'm done!</button>`
    let doneButton = document.querySelector("#done");
    doneButton.classList.remove("inactive");


    if (document.getElementById("bg-checkbox").checked) {
        let backgroundChoice = document.getElementById("bg").value;
        let image_url = `'./images/backgrounds/${backgroundChoice}.webp'`
        document.body.style.cssText+=`background-image:url(${image_url})`;
    }
    if (document.getElementById("affirm-checkbox").checked){
        let affirmText = document.querySelector(".affirm");
        affirmText.classList.remove("inactive");
        getAffirmation(affirmText);
    }
    if (document.getElementById("breathe-checkbox").checked) {
        let breatheSelect = document.querySelector(".breathe");
        breatheSelect.classList.remove("inactive");
    }
    if (document.getElementById("sounds-checkbox").checked) {
        let soundChoice = document.getElementById("sounds").value;
        let sounds = document.querySelector(".sound");
        sounds.classList.remove("inactive");
        sounds.innerHTML = `<audio controls autoplay loop>
        <source src="./sounds/${soundChoice}.mp3" type="audio/mp3">
        Sorry! This browser doesn't support audio.
        </audio>`;
    }
    else {

    }


}
function getAffirmation(affirmText){
    const requestUrl = './json/affirmations.json'
    fetch(requestUrl)
    .then (function (response) {
        return response.json();
    })
    .then (function (jsonObject) {
        const affirmations = jsonObject['affirmations'];
        getRandom();
        affirmInterval = setInterval(getRandom, 15000);
        function getRandom() {
            const randomIndex = Math.floor(Math.random() * affirmations.length);
            const randomKey = JSON.stringify(affirmations[randomIndex]);
            affirmText.innerHTML = randomKey.slice(16, -2)}
    })
}



