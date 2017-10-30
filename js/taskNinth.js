const result = document.querySelector('.result');

let tagErr = "Warning, tag absent";

let allCaps = {
    tagH1: Array.from(document.querySelectorAll('h1')).length || tagErr,
    tagH2: Array.from(document.querySelectorAll('h2')).length || tagErr,
    tagH3: Array.from(document.querySelectorAll('h3')).length || tagErr,
    tagH4: Array.from(document.querySelectorAll('h4')).length || tagErr,
    tagH5: Array.from(document.querySelectorAll('h5')).length || tagErr,
    tagH6: Array.from(document.querySelectorAll('h6')).length || tagErr
}

function addTag(text, tag, value) {
    return "<" + tag + ">" + value + " - " + text + "</" + tag + ">";
}




console.log("Количество заголовков" + '\n' + "h1 - " + allCaps.tagH1 + '\n' + "h2 - " + allCaps.tagH2 + '\n' + "h3 - " + allCaps.tagH3 + '\n' + "h4 - " + allCaps.tagH4 + '\n' + "h5 - " + allCaps.tagH5 + '\n' + "h6 - " + allCaps.tagH6 + '\n');

function addTagToObjVal(obj) {
    let resultText = "";
    for (let key in obj) {

        resultText += addTag(obj[key], "p", key.slice(3));
    }
    return resultText;
}

result.innerHTML = "<p>Количество заголовков:</p>" + addTagToObjVal(allCaps);