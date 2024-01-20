const slides = document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;

document.addEventListener("DOMContentLoaded",initializeSlider);
//we will wait for all the DOM content to load then display the image
function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");
    intervalId=setInterval(nextSlide,5000);
}

function showSlide(index){
    if(index>=slides.length){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length-1;
    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
    clearInterval(intervalId);
    intervalId=setInterval(nextSlide,5000);
}