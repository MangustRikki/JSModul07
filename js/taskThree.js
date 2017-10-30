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

function showErrInEmptyInputs(arr) {
    let arrEmptyValue = Array.from(arr).filter(x => x.value == "");
    let parentArr = arrEmptyValue.map(x => x.parentNode);
    console.log(parentArr[0].firstElementChild);
    // warningMessage.className = "warnMess";
    // warningMessage.textContent = "Пожалуйста, заполните это поле!";
    // let warningMessage = document.createElement('div');
    let warnMess = "<div class='warnMess'>Пожалуйста, заполните это поле!</div>";
    arrEmptyValue.map(x => {
        x.insertAdjacentHTML("beforeBegin", warnMess);
        x.style.border = "3px solid red";
    });
}

function showCorrect(inputs) {
    for (let i of inputs) {
        i.style.border = "3px solid darkgreen";
    }
}

function clearWarning() {
    let warnMessArr = document.querySelectorAll('.warnMess');
    for (let i of warnMessArr) {
        i.remove();
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
    let emptyInputs = allInputsText.filter(x => x == "");

    obj.textarea.value = "";
    clearWarning();
    showCorrect(allInputs);

    if (emptyInputs.length > 0) {
        showErrInEmptyInputs(allInputs);
    } else {
        showCheckedRadio(checkedRadio, obj.textarea, allInputsText);
    }
}