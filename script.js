const colorPicker = document.querySelector('#color-picker');
const fontSelector = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelectorAll('.news');



const loadPreferences = () => {


};


colorPicker.addEventListener('input', (e) => {

    const color = e.target.value;
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
    // o setitem tem como atributos o "key" e o "value", o key é o nome da propriedade que você quer salvar, e o value é o valor que você quer salvar, nesse caso, o valor do color picker.
    //o setproperty é uma função do css que permite alterar o valor de uma variável css, nesse caso, a variável --primary-color, que é a cor primária do site, e o valor é o valor do color picker.
});


articleColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    newsArticles.forEach(article => {
        article.style.backgroundColor = color;
    });
    localStorage.setItem('articleColor', color);

});


fontSelector.addEventListener('change', (e) => {


});


themeToggle.addEventListener('click', (e) => {


});

loadPreferences();

