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
}

function remove(e) {
    e.target.parentNode.remove();
}


// MODEL




//CONTROLER

obj.addInputsButton.addEventListener('click', go);

function go(e) {
    e.preventDefault();
    if (obj.counter < 6) {
        newFormWrap = obj.formWrap.cloneNode(true);
        newFormWrap.lastElementChild.className = "removeInputs";
        newFormWrap.lastElementChild.innerHTML = "-";
        console.log(newFormWrap);
        obj.form.appendChild(newFormWrap);
        newFormWrap.lastElementChild.addEventListener('click', remove);
        obj.counter += 1;
    }
}

obj.submit.addEventListener('click', goCollectIputs);

function goCollectIputs(e) {
    e.preventDefault();
    let allInputs = document.querySelectorAll('input');

    obj.textarea.value = Array.from(allInputs, x => x = x.value).join("\n");
}