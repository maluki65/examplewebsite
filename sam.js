const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper .nv");

let isDragStart = false, prevPageX, prevScrollLeft;
// get first image and add a value of 14px


const showHideIcon = () => {
    //showing the nav button if maxwidth of slider is bigger or equal to 0
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;// On getting the maximum scroll width
    arrowIcons[0].style.display =carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon =>{
    icon.addEventListener("click",() =>{
    let firstImgWidth = firstImg.clientWidth + 14;
//if left is clicked, reduce wisth value from the carousel scroll lef else add to// 
       carousel.scrollLeft += icon.id == "nt" ? -firstImgWidth : firstImgWidth;
       setTimeout(()=> showHideIcon(),80) // the function after 80ms
    });
});
const dragStart = (e)=>{
    //On updating global variables values on mouse down event//
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    // scrolling images to the left according to mouse pointer//
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcon();
}
const dragStop =()=>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);

carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);

carousel.addEventListener("mouseup",dragStop);
carousel.addEventListener("mouseleave",dragStop);
carousel.addEventListener("touchend",dragStop);

