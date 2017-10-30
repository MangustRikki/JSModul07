// VIEW

let obj = {
    form: document.querySelector('form'),
    submit: document.querySelector('.submit'),
    formWrap: document.querySelector('.form__wrap'),
    newInputs: document.createElement('input'),
    newButton: document.createElement('button'),
    addInputsButton: document.querySelector('.addInputs'),
    counter: 1,
    textarea: document.querySelector('textarea'),
    radio: document.querySelectorAll('input[type=radio]')
}

function addInputs(domNode, parentDomElem) {
    let newNode = domNode.cloneNode(true);
    newNode.lastElementChild.className = "removeInputs";
    newNode.lastElementChild.innerHTML = "-";
    newNode.firstElementChild.value = "";
    parentDomElem.appendChild(newNode);
    newNode.lastElementChild.addEventListener('click', remove);
}

function remove(e) {
    e.target.parentNode.remove();
}

function showCheckedRadio(radio, textarea, textArr) {

    if (radio.id == "even") {
        textarea.value = textArr.filter((x, i) => i % 2 == 1).join("\n");
    } else if (radio.id == "odd") {
        textarea.value = textArr.filter((x, i) => i % 2 == 0).join("\n");
    } else if (radio.id == "all") {
        textarea.value = textArr.join("\n");
    }
}



// MODEL




//CONTROLER

obj.addInputsButton.addEventListener('click', go);

function go(e) {
    e.preventDefault();
    if (obj.counter < 6) {
        addInputs(obj.formWrap, obj.form);

        obj.counter += 1;
    }
}

obj.submit.addEventListener('click', goCollectIputs);

function goCollectIputs(e) {
    e.preventDefault();
    let allInputs = document.querySelectorAll('.form__input');
    let allInputsText = Array.from(allInputs, x => x = x.value);
    let checkedRadio = Array.from(obj.radio).filter(x => x.checked)[0];

    showCheckedRadio(checkedRadio, obj.textarea, allInputsText);
}