const ulCategories = document.querySelectorAll('.item');
    console.log(`В списке ${ulCategories.length} категории.`)
    
ulCategories.forEach(function (ulCategories) {
    const categorieTitle = ulCategories.querySelector('h2');
    console.log(`Категория: ${categorieTitle.textContent}`);

    const categorieElem = ulCategories.querySelectorAll('li')
    console.log(`Колличество элементов: ${categorieElem.length}`);
});









