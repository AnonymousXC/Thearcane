let navBtns = document.querySelectorAll(".nav-btn")

function addActive(active) {
    navBtns.forEach((el) => {
        el.classList.remove("active");
    });
    active.originalTarget.classList += " active"
}

function addListener() {
    navBtns.forEach((el) => {
        el.addEventListener("click", (e) => {
            addActive(e);
        });
    });
}

addListener();