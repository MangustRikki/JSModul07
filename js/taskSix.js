// VIEW
let imgMegan = document.querySelector('.img');
let text = document.querySelector('.imgText');

function moveText(img, string, timeDelay) {
    setTimeout(() => text.style.width = string, timeDelay);
}



// MODEL



//CONTROLER

imgMegan.addEventListener('mouseover', goMouseOver);
imgMegan.addEventListener('mouseout', goMouseOut);

function goMouseOver(e) {
    e.preventDefault();
    moveText(imgMegan, "100%", 0);
}

function goMouseOut(e) {
    e.preventDefault();
    moveText(imgMegan, "0", 1500);

}