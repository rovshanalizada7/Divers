//header

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header-bottom")
    if (window.scrollY > 200) {
        header.classList.add("headerAnime")
    } else {
        header.classList.remove("headerAnime")
    }
})


window.addEventListener("scroll", () => {
    let header = document.querySelector(".header-bottom")
    if (window.scrollY > 200) {
        header.classList.add("headerMiniMenuAction")
    } else {
        header.classList.remove("headerMiniMenuAction")
    }
})


// section3

let valueDisplays = document.querySelectorAll(".animated-first")
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)

})


//search

const searchIcon = document.getElementById('btnSearch');
const searchOverlay = document.getElementById('searchOverlay');

searchIcon.addEventListener('click', function () {
    searchOverlay.style.display = 'flex'; 
});

searchOverlay.addEventListener('click', function (e) {
    if (e.target === searchOverlay) {
        searchOverlay.style.display = 'none'; 
    }
});


//choose language

// document.getElementById('lang').addEventListener('click', () => {
// console.log("clicked");

// })




// Wait for the page to fully load
window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loadingOverlay');
});





// document.getElementById('langBtn').addEventListener('click', function() {
//     const dropdown = document.getElementById('dropdownMenu');
//     dropdown.classList.toggle('show');
// });





document.getElementById('menu').addEventListener('click',() => {
    let menu = document.querySelector(".header-bottom-content");
    menu.classList.toggle("showMenu")
})

