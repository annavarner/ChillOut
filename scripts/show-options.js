// functions to show main screen options
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
            <option value="kittens">Kittens</option>
            <option value="cherry_blossoms">Cherry Blossoms</option>
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
            <option value="cat-purring">Cat Purring</option>
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
