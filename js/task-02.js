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

const listIngredientsEl = document.querySelector('#ingredients');

const listIngredients = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

listIngredientsEl.append(...listIngredients);



