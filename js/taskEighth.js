// VIEW
let wrap = document.querySelector('.wrap');
const resultSeven = document.querySelector('.resultSeven');
let resultRow = document.createElement('p');
let warningErr = "<span class=warningErr>Атрибут  отсутствует</span>";


function showLinkAtrr(target, result) {
    let resultHref = isTarget(target.href, warningErr),
        resultTitle = isTarget(target.title, warningErr),
        resultTarget = isTarget(target.target, warningErr),
        resultHrefP,
        resultTitleP,
        resultTargetP;

    resultHrefP = addTag(resultHref, "p", "href");
    resultTitleP = addTag(resultTitle, "p", "title");
    resultTargetP = addTag(resultTarget, "p", "target");

    result.innerHTML = resultHrefP + resultTitleP + resultTargetP;


}

function showImgAtrr(target, result) {
    let resultSrc = isTarget(target.src, warningErr),
        resultAlt = isTarget(target.alt, warningErr),
        resultSrcP,
        resultAltP;

    resultSrcP = addTag(resultSrc, "p", "src");
    resultAltP = addTag(resultAlt, "p", "alt");

    result.innerHTML = resultSrcP + resultAltP;
}

function checkAlt(target) {
    if (!target.alt) {
        target.style.border = "2px solid red";
    }
    target.addEventListener("mouseout", removeBorder);

}

// MODEL

function isTarget(target, error) {
    return target || error;
}

function addTag(text, tag, atribute) {
    return "<" + tag + ">" + atribute + " = " + text + "</" + tag + ">";
}


//CONTROLER

wrap.addEventListener('mouseover', go);

function go(e) {
    e.preventDefault();


    if (e.target.tagName == "A") {

        showLinkAtrr(e.target, resultSeven);
    } else if (e.target.tagName == "IMG") {
        showImgAtrr(e.target, resultSeven);
        checkAlt(e.target);
    }
}

function removeBorder(e) {
    e.target.style.border = "none";
}