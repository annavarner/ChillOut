let backgroundChoice = "";
let soundChoice = "";


function showBgOptions() {
    if (document.getElementById("bg-checkbox").checked){
        let options = document.querySelector(".background-options");
        options.innerHTML = 
        `
        <select name="background">
            <option value="" selected disabled>Choose Your Scene</option>
            <option value="starry_sky">Starry Sky</option>
            <option value="rainbow_waterfall">Rainbow Waterfall</option>
            <option value="clouds">Clouds</option>
            <option value="flying_birds">Flying Birds</option>
            <option value="sunset_beach">Sunset Beach</option>
        </select> `
}   else {
        let options = document.querySelector(".background-options");
        options.innerHTML = ``}
}

function showSoundOptions() {
    if (document.getElementById("sounds-checkbox").checked){
        let options = document.querySelector(".sound-options");
        options.innerHTML = 
        `
        <select name="sounds">
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
    }
}

