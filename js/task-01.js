// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
// элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categoriesRef = document.querySelector('#categories');
const itemsCategoriesEl = [...document.querySelectorAll('.item')];

const numberOfCategories = categoriesRef.children.length;
console.log(`В списке ${numberOfCategories} категории.`);

const listEl = itemsCategoriesEl.map(el => {
    const titleEl = el.querySelector('h2').textContent;
    const itemEl = el.querySelectorAll('ul li').length;
    return `
    Категория: ${titleEl}
    Количество элементов: ${itemEl}
    `;

});
console.log(...listEl);

