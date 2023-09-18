(function () {

    let menu = document.getElementById('menu__icon');
    let navbar = document.querySelector('.navbar')

    menu.onclick = () => {
        menu.classList.toggle('fa-x');
        navbar.classList.toggle('open');
    }

    ScrollReveal().reveal('.container__banner', { delay: 200, reset: true });
    ScrollReveal().reveal('.container__aboutme', { delay: 200, reset: true });
    ScrollReveal().reveal('.container__skills', { delay: 200, reset: true });
    ScrollReveal().reveal('.container__hobbies', { delay: 200, reset: true });
    ScrollReveal().reveal('.formacion__title', { delay: 200, reset: true });
    ScrollReveal().reveal('.formacion__one', { origin: 'left', distance: '50px', duration: 1000, delay: 200, reset: true });
    ScrollReveal().reveal('.formacion__two', { origin: 'right', distance: '50px', duration: 1000, delay: 200, reset: true });
    ScrollReveal().reveal('.projects__list__name', { origin: 'left', distance: '50px', duration: 1000, delay: 200, reset: true });
    ScrollReveal().reveal('.reverse', { origin: 'right', distance: '50px', duration: 1000, delay: 200, reset: true });
    ScrollReveal().reveal('.container__contact', { delay: 200, reset: true });
})();