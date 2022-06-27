let load = () => {

    document.querySelector('.menu-btn-burger').addEventListener('click', function(e){
        e.preventDefault();
        let element = e.target;
        element.classList.toggle('open');
    }, false);

    /*

    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    */

};

//window.addEventListener('load', load, false);