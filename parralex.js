window.addEventListener("DOMContentLoaded", scrollLoop, false);

let bigYellowCircle = document.querySelector('#bigYellowCircle');
let blueSquare = document.querySelector('#blueSquare');
let greenPentagon = document.querySelector('#greenPentagon');

let xScrollPosition;
let yScrollPosition;

function scrollLoop(e)
{
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.2, bigYellowCircle);
    setTranslate(0, yScrollPosition * -1.5, blueSquare);
    setTranslate(0, yScrollPosition * .5, greenPentagon);

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el)
{
    el.style.transform = "translate3d("+xPos+"px, "+ yPos + "px, 0";
}
