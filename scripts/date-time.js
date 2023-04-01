let date = new Date();
let year = date.getFullYear();
document.querySelector(".currentyear").textContent = year;

//display number of days since last visit
function setTime() {
    let startTime = Date.now()
    localStorage.setItem("start-time", startTime);
}


