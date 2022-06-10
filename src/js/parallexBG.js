
var stars = document.getElementById("stars");
var moon = document.getElementById("moon");
var mountains_behind = document.getElementById("mountains_behind");
var mountains_front = document.getElementById("mountains_front");
var typing = document.getElementById("anime");
var navBar = document.querySelector("nav");
var explore = document.getElementById("explore");

window.addEventListener("scroll" , () => {
    let value = scrollY;

    stars.style.left = value * 0.25 + "px";
    moon.style.top = `clamp(0px, ${value * 1.05 + "px"}, 1000px)`;
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    typing.style.marginTop = value * 0.2 + "px";
    navBar.style.top = value * 0.5 + "px";
    explore.style.marginTop = `clamp(0px, ${value * 1.4 + "px"}, 1000px)`;
});
