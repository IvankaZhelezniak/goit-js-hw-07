// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// - Если введено подходящее количество, то border инпута становится зеленым,
//     если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('#validation-input');
const lengthСharacterInputRef = parseInt(inputRef.dataset.length);

inputRef.addEventListener('blur', (event) => {
    if (lengthСharacterInputRef === event.target.value.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
    }

    if (event.target.value.length < 1) {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    }
});

