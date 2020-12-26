// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>


// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список
// ul.ingredients.Для создания DOM - узлов используй
// document.createElement().



const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

console.table(ingredients);

const listIngredientsRef = document.querySelector('#ingredients');


const createListIngredients = ingredients.map((ingredient) => {
  let listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  return listItemRef;
});

listIngredientsRef.append(...createListIngredients);

