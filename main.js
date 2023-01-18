// btn icon
function toggleImg() {
    let initialImg = document.querySelector(".btn-icon-toggler").src;
    let srcTest = initialImg.includes('images/icon-close.svg');
    let newImg = {
    'false':'images/icon-close.svg', 
    'true':'images/icon-hamburger.svg'}[srcTest];
    console.log(srcTest)
    return newImg;
}
document.querySelector(".navbar-toggler").addEventListener("click", function() {
    console.log(document.querySelector(".btn-icon-toggler").src)
    document.querySelector(".btn-icon-toggler").src = toggleImg();
});

//nav Link dropdown 
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function() {
        link.firstElementChild.classList.toggle("down");
    })
})

window.onclick = function(event) {
    if (!event.target.matches('.nav-link')) {
        document.querySelectorAll(".nav-link-icon").forEach(link =>{
            link.classList.remove("down");
        })
    }
}
// scroll
let navBar = document.querySelector(".navbar");
window.addEventListener("scroll",scrolla);
function scrolla(){
    let scrollY = window.scrollY;
    // console.log(scrollY);
    if (scrollY > 514 ){
        navBar.style.background = " linear-gradient(to right,hsla(13, 100%, 72%),hsla(353, 100%, 62%))";
    }else{
        navBar.style.background = "  linear-gradient(to right,hsla(13, 100%, 72%, 0.452),hsla(353, 100%, 62%, 0.363))";
    }
}

