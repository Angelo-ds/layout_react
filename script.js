const colorPicker = document.querySelector('#color-picker');
const fontSelector = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelectorAll('.news');


const loadPreferences = () => {

    const savedColor = localStorage.getitem('primaryColor');
    if(savedColor){
        document.documentElement.style.setProperty('--primary-color',savedColor);
        colorPicker.value = savedColor;
    };

    const savedArticleColor = localStorage.getItem('articleColor');

    if (savedArticleColor){

        newsArticles.forEach(article => {
        article.style.backgroundColor = savedArticleColor;
        });
    };


    const savedFont = localStorage.getitem('fontFamily');
    if (savedFont){
        document.documentElement.style.setProperty('--font-family',savedFont);
        fontSelector.value = savedFont;

    };




    const savedTheme = localStorage.getitem('theme');
    if(savedTheme  === 'dark'){
        body.classList.add('dark');
        themeToggle.textContent = 'light_mode';
    };



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

    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font);
    localStorage.setItem('fontFamily', font);

});


themeToggle.addEventListener('click', (e) => {

    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark'); 

    themeToggle.textContent = isDark ? 'dark_mode' : 'light_mode' //coloca dentro do span 

    localStorage.setItem('theme',isDark ? 'dark' : 'light') // altera no loca storage



});

loadPreferences();

