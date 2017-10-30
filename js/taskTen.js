const result = document.querySelector('.result');

let tagErr = "Warning, tag absent";


let metaAllTag = document.querySelectorAll('meta');

let metaTitle = Array.from(metaAllTag).filter((x) => x.name == "title")[0] || tagErr;
let metaDescription = Array.from(metaAllTag).filter((x) => x.name == "description")[0] || tagErr;
let metaKeywords = Array.from(metaAllTag).filter((x) => x.name == "keywords")[0] ? "meta keywords is on this page" : tagErr;

function makeResultText(someTag, err, str) {
    return someTag != err ? str + "length = " + someTag.content.length : str + err;
}

function addTag(text, tag) {
    return "<" + tag + ">" + text + "</" + tag + ">";
}


console.log(makeResultText(metaTitle, tagErr, "meta title ") + '\n' + makeResultText(metaDescription, tagErr, "meta description ") + '\n' + metaKeywords);

result.innerHTML = addTag(makeResultText(metaTitle, tagErr, "meta title "), "p") + addTag(makeResultText(metaDescription, tagErr, "meta description "), "p") + addTag(metaKeywords, "p");