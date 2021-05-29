// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция
// создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const divControlsRef = document.querySelector('#controls');
const buttonCreateRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');
const blockBoxesRef = document.querySelector('#boxes');

buttonCreateRef.addEventListener('click', onCreateButtonClick);
buttonDestroyRef.addEventListener('click', destroyBoxes);

function onCreateButtonClick() {
    const inputRef = document.querySelector('[type="number"]');
    createBoxes(inputRef.value);
    inputRef.value = '';
};

function destroyBoxes() {
    blockBoxesRef.textContent = '';
};

function createBoxes(amount) {
    const oneSize = 30;
     const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        const size = oneSize + i * 10;
        const newDiv = document.createElement('div');
        newDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(newDiv);
        
    };
    blockBoxesRef.appendChild(fragment);
    
    
};

function random() {
    return Math.floor(Math.random() * 256);
};