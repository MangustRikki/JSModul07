// VIEW

let obj = {
    showOptionsButton: document.querySelector('.showOptions'),
    options: document.querySelector('.options'),
    leftButton: document.querySelector('.options__leftButton'),
    rightButton: document.querySelector('.options__rightButton')

}

function showOptions(tag) {

    tag.style.top = "0";
    tag.style.opacity = "1";

    setTimeout(() => {
        tag.style.top = "-100%";
        tag.style.opacity = "0";
    }, 5000);
}

function showChosenOpt(className, div) {
    div.style.justifyContent = "space-between";
    div.style.alignItems = "flex-end";
    if (className == "options__leftButton") {
        div.style.background = "url('../img/red-dress.jpg') center center no-repeat";
        div.style.backgroundSize = "contain";

    } else if (className == "options__rightButton") {
        div.style.background = "url('../img/SweetAnn.jpg') center center no-repeat";
        div.style.backgroundSize = "contain";
    }
}


// function hideOptions() {
//     tag.style.top = "-100%";
//     tag.style.opacity = "0";
// }

// MODEL 


//CONTROLER
obj.showOptionsButton.addEventListener('click', go);
obj.options.addEventListener('click', checkOption);

function go(e) {
    e.preventDefault();
    showOptions(obj.options);

}

function checkOption(e) {
    e.preventDefault();
    let targetClassName = e.target.className;

    showChosenOpt(targetClassName, obj.options);
}