// VIEW
let list = document.querySelector('.list');
let listItem = document.querySelectorAll('.list__item');
let addButton = document.querySelector('.buttonTaskFive');
let input = document.querySelector('.inputTaskFive');

function makeItemRed(item) {
    item.classList.toggle("makeRedBg");
}

function addListItem() {
    let li = document.createElement('li');
    li.classList.add('list__item');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
}

// MODEL


//CONTROLER

list.addEventListener('click', go);
addButton.addEventListener('click', goAdd);

function go(e) {
    e.preventDefault();

    if (e.target.classList.contains("list__item")) {
        makeItemRed(e.target);
    }
}

function goAdd(e) {
    e.preventDefault();
    addListItem();
}