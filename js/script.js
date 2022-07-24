
"use strict";

const button = document.querySelector('.tap_one');
const vis = document.querySelector('.vision');
const hev = document.querySelectorAll('.buttons_heaven>button');
const blockForMouse = document.querySelector('.block-For-Mouse');
const blockForMouse2 = document.querySelector('.block-For-Mouse-2');

const textItem = document.querySelector('.textLes');
const textItemLimit = textItem.getAttribute('maxlength');
const textCounter = document.querySelector('.textarea_counter span');
textCounter.innerHTML = textItemLimit;

textItem.addEventListener("keyup", textSetCounter);
textItem.addEventListener("keydown", function(event){
    if(event.repeat) textSetCounter();
});



function textSetCounter(){
    const textCounterResult = textItemLimit-textItem.value.length;
    textCounter.innerHTML = textCounterResult;
}


button.addEventListener("click", function(e) {
    console.log('Клик!');
    vis.style.visibility = "visible";
    button.style.visibility = "hidden";
});

vis.addEventListener("click", function(e) {
    console.log('Клак!');
    vis.style.visibility = "hidden";
    button.style.visibility = "visible";
});



blockForMouse.addEventListener("mousemove", function(event){
   blockForMouse.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
blockForMouse.addEventListener("mouseout", function(event){
    blockForMouse.innerHTML = ``;

});



blockForMouse2.addEventListener("mouseover", function(event){
    blockForMouse2.innerHTML = `Курсор над блоком`;
    blockForMouse2.style.backgroundColor = "green";
});
blockForMouse2.addEventListener("mouseout", function(event){
    blockForMouse2.innerHTML = `Курсор ушёл с блока`;
    blockForMouse2.style.backgroundColor = "darkolivegreen";
});









































