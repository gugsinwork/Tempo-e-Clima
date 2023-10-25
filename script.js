
    document.addEventListener('DOMContentLoaded', function () {
   
    const expandButton = document.getElementById('submitButton');
    const menu = document.getElementById('menu');


    expandButton.addEventListener('click', function () {
        if (menu.style.height === '400px') {
            menu.style.height = '80px';
        } else {
            menu.style.height = '400px';
        }
    });
});




