let load = () => {

    document.querySelector('.menu-btn-burger').addEventListener('click', function(e){
        e.preventDefault();
        let element = e.target;
        element.classList.toggle('open');
    }, false);

};

window.addEventListener('load', load, false);