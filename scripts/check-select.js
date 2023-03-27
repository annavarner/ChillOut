function showBgOptions() {
    if (document.getElementById("bg-checkbox").checked){
        let options = document.querySelector(".background-options");
        options.innerHTML = 
        `<p> Choose Your Scene:</p>
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
        `<p>Choose Your Sounds:</p>
        <select name="sounds" id="sounds">
            <option value="light-rain">Light Rain</option>
            <option value="brahams-lullaby">Brahm's Lullaby</option>
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
function displayChill() {
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
        apiFetch();
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


async function apiFetch() {
    try {
        const response = await fetch("https://www.affirmations.dev", {  
            headers: {
                Accept: "application/json"
            }
        });
        if (response.ok) {
            const affirmation = await response.json();
            affirmText.innerHTML = affirmation;
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
            console.log(error);
    }
    }

function endChill() {
    window.location.reload();

}