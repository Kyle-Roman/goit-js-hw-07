const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.getElementById('ingredients');

const allIngredients = ingredients.map(ingridient => {
    const ingredientsListItem = document.createElement('li');   
    ingredientsListItem.textContent = `${ingridient}`;
    return ingredientsListItem;
  });

ingredientsList.append(...allIngredients);

