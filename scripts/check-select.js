
function showBgOptions() {
    if (document.getElementById("bg-checkbox").checked){
        let options = document.querySelector(".background-options");
        options.innerHTML = 
        `<p> <strong>Choose Your Scene: </strong></p>
        <select name="background" id="bg">
            <option value="starry_sky">Starry Sky</option>
            <option value="rainbow_waterfall">Rainbow Waterfall</option>
            <option value="clouds">Clouds</option>
            <option value="flying_birds">Flying Birds</option>
            <option value="sunset_beach">Sunset Beach</option>
        </select> `
}   else {
        let options = document.querySelector(".background-options");
        options.innerHTML = ``};
}

function showSoundOptions() {
    if (document.getElementById("sounds-checkbox").checked){
        let options = document.querySelector(".sound-options");
        options.innerHTML = 
        `<p><strong>Choose Your Sounds: </strong></p>
        <select name="sounds" id="sounds">
            <option value="light-rain">Light Rain</option>
            <option value="brahms-lullaby">Brahm's Lullaby</option>
            <option value="crickets">Crickets and Thunder</option>
            <option value="greensleeves">Greensleeves</option>
            <option value="heavy-rain">Heavy Rain</option>
            <option value="ocean-waves">Ocean Waves</option>
            <option value="relax">Relax</options>
            <option value="waves-on-sand-beach">Waves on Sand Beach</option>
        </select> `
    }
    else {
        let options = document.querySelector(".sound-options");
        options.innerHTML = ``
    };
}    
function showAffirmOptions(){
    if (document.getElementById("affirm-checkbox").checked){
        let options = document.querySelector(".affirm-options");
        options.innerHTML = `<p>We'll think positive thoughts together!</p>`
    }
    else {
        let options = document.querySelector(".affirm-options");
        options.innerHTML = ``
    }
}
function breatheOptions(){
    if (document.getElementById("breathe-checkbox").checked){
        let options = document.querySelector(".breathe-options");
        options.innerHTML = `<p>Let's do some guided breathing!</p>`
    }
    else {
        let options = document.querySelector(".breathe-options");
        options.innerHTML = ``
    }
}

function displayChill() {
    footer = document.querySelector(".footer");
    footer.classList.add("inactive");
    // hamburger = document.querySelector(".hamburger")
    // hamburger.classList.add("inactive");
    display = document.querySelector(".selectDisplay");
    display.classList.add("inactive");
    chillDisplay = document.querySelector(".chillDisplay");
    chillDisplay.classList.remove("inactive");


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
        setInterval(getRandom, 15000);
        function getRandom() {
            const randomIndex = Math.floor(Math.random() * affirmations.length);
            const randomKey = JSON.stringify(affirmations[randomIndex]);
            affirmText.innerHTML = randomKey.slice(16, -2)}
    })
}

function endChill() {
    window.location.reload();

}

