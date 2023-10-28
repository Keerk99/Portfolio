(function () {

    let menu = document.getElementById('menu__icon');
    let navbar = document.querySelector('.navbar')

    menu.onclick = () => {
        menu.classList.toggle('fa-x');
        navbar.classList.toggle('open');
    }
})();