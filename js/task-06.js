// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// - Если введено подходящее количество, то border инпута становится зеленым,
//     если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('blur', handleInputValidation);

const dataLength = parseInt(inputRef.dataset.length);
console.log(dataLength);

function handleInputValidation(event) {
    if (event.currentTarget.value.length === dataLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add('invalid');
    };
     if (event.currentTarget.value === '') {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.remove('invalid');
    };
};






