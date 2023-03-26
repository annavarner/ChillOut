function showBgOptions() {
    if (document.getElementById("bg-checkbox").checked){
        let options = document.querySelector(".background-options");
        options.innerHTML = 
        `
        <select name="background" id="bg">
            <option value="" selected disabled>Choose Your Scene</option>
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
        `
        <select name="sounds" id="sounds">
            <option value="" selected disabled>Choose Your Sound</option>
            <option value="brahams-lullaby">Brahm's Lullaby</option>
            <option value="crickets">Crickets</option>
            <option value="greensleeves">Greensleeves</option>
            <option value="heavy-rain">Heavy Rain</option>
            <option value="light-rain">Light Rain</option>
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
function displayChill() {
    display = document.querySelector(".selectDisplay")
    display.classList.add("no-display")
    let doneButton = document.querySelector("#done")
    doneButton.classList.remove("inactive");
    //const soundChoice = document.getElementById("sounds").value;

    // let chillPage = document.querySelector(".chillDisplay");

    if (document.getElementById("bg-checkbox").checked) {
        let backgroundChoice = document.getElementById("bg").value;
        let image_url = `'./images/backgrounds/${backgroundChoice}.webp'`
        document.body.style.cssText+=`background-image:url(${image_url})`;
    }
    if (document.getElementById("affirm-checkbox").checked){
        let affirmText = document.querySelector("#affirm");
        affirmText.classList.remove("inactive");
        affirmText.innerHTML = "affirmations will display here"
    }
    if (document.getElementById("breathe-checkbox").checked){
        let breatheText = document.querySelector("#breathe");
        breatheText.classList.remove("inactive");
        breatheText.innerHTML = "breathe";
    }
    if (document.getElementById("sounds-checkbox").checked) {

        chillPage.innerHTML = 
        `<audio>
        <source src="./sounds/${soundChoice}.mp3" type="audio/mpeg">
        Sorry! This browser doesn't support audio.
        </audio>`;
    }

}

function endChill() {
    location.reload()
}


