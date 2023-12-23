const iconOpen = document.getElementById('iconopen')
const iconClose = document.getElementById('iconclose')
const navLeft = document.getElementById('navLeft')
const menu = document.getElementById('menu')

navLeft.addEventListener('click', () => {
    iconOpen.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    menu.classList.toggle('hide')
})
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


    


window.addEventListener('scroll', animateOnScroll);

document.addEventListener('DOMContentLoaded', animateOnScroll);



window.addEventListener("scroll", function () {
    const navbar = document.getElementById("myNavbar");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) { 
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

ScrollReveal({ delay: 250 }).reveal(".scrollreveal");
ScrollReveal({ delay: 3 }).reveal(".scrollreveal-noreturn");

document.addEventListener("DOMContentLoaded", function () {

    var body = document.body;
    setInterval(createStar, 100);
    function createStar() {
        var right = Math.random() * 500;
        var top = Math.random() * screen.height;
        var star = document.createElement("div");
        star.classList.add("star")
        body.appendChild(star);
        setInterval(runStar, 10);
        star.style.top = top + "px";
        function runStar() {
            if (right >= screen.width) {
                star.remove();
            }
            right += 3;
            star.style.right = right + "px";
        }
    }
})

var toggleButton = document.getElementById('centered-toggle-button');
var modal = document.getElementById('myModal');
var closeModalButton = document.getElementById('closeModal');

toggleButton.onclick = function () {
    modal.style.display = 'block';
};

closeModalButton.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
