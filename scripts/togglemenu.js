function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("open");
    document.querySelector(".stats").classList.toggle("open");

}
let menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
    menu.classList.toggle("clicked")
});

const x = document.querySelector(".hamburger")
x.onclick = toggleMenu;