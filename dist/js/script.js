//button

const buttonsMain = document.querySelectorAll('.button__main');
const buttonsReturn = document.querySelectorAll('.button__return');

buttonsMain.forEach(buttonMain => {
    buttonMain.addEventListener('mouseenter', function () {
        buttonsReturn.forEach(buttonReturn => {
            buttonReturn.classList.add('button__animation');
        });
    });

    buttonMain.addEventListener('mouseleave', function () {
        buttonsReturn.forEach(buttonReturn => {
            buttonReturn.classList.remove('button__animation');
        });
    });
});


const more = document.getElementById('more');
const care = document.getElementById('care');

more.addEventListener('click', function () {
    care.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


//menu 


const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');


close.addEventListener('click', function () {
    menu.classList.add('menu__hide');
    menu.classList.remove('menu__visible');
});


const menuButton = document.querySelector('.button__main');

menuButton.addEventListener('click', () => {
    menu.classList.add('menu__visible');
});

//list descr
const tops = document.getElementById('tops');
const listTops = document.querySelector('.tops');
const bottoms = document.getElementById('bottoms');
const Listbottoms = document.querySelector('.bottoms');
const roompers = document.getElementById('roompers');
const Listroompers = document.querySelector('.roompers');
const hats = document.getElementById('hats');
const Listhats = document.querySelector('.hats');
const shopAll = document.getElementById('shopAll');
const ListshopAll = document.querySelector('.shopAll');


tops.addEventListener('click', () => {
    listTops.classList.add('top_visibetly');
    Listbottoms.classList.remove('top_visibetly');
    Listroompers.classList.remove('top_visibetly');
    Listhats.classList.remove('top_visibetly');
    ListshopAll.classList.remove('top_visibetly');

});




bottoms.addEventListener('click', () => {
    Listbottoms.classList.add('top_visibetly');
    listTops.classList.remove('top_visibetly');
    Listroompers.classList.remove('top_visibetly');
    Listhats.classList.remove('top_visibetly');
    ListshopAll.classList.remove('top_visibetly');

});




roompers.addEventListener('click', () => {
    Listroompers.classList.add('top_visibetly');
    listTops.classList.remove('top_visibetly');
    Listbottoms.classList.remove('top_visibetly');
    Listhats.classList.remove('top_visibetly');
    ListshopAll.classList.remove('top_visibetly');

});

hats.addEventListener('click', () => {
    Listhats.classList.add('top_visibetly');
    listTops.classList.remove('top_visibetly');
    Listbottoms.classList.remove('top_visibetly');
    Listroompers.classList.remove('top_visibetly');
    ListshopAll.classList.remove('top_visibetly');

});

shopAll.addEventListener('click', () => {
    ListshopAll.classList.add('top_visibetly');
    listTops.classList.remove('top_visibetly');
    Listbottoms.classList.remove('top_visibetly');
    Listroompers.classList.remove('top_visibetly');
    Listhats.classList.remove('top_visibetly');

});

const shirts = document.getElementById('shirts');
const Tshirts = document.getElementById('t-shirts');
const bottom = document.getElementById('bottom');
const sneakers = document.getElementById('sneakers');
const roomper = document.getElementById('roomper');
const pants = document.getElementById('pants');
const shorts = document.getElementById('shorts');
const hat = document.getElementById('hat');
const all = document.getElementById('all');

const nameClouthes = document.querySelector('.shop_img_descr');
const shopImg = document.querySelector('.shop_img');

shirts.addEventListener('click', () => {
    shopImg.src = 'img/shirts_img.jpg';
    nameClouthes.textContent = 'plaid shirt';
});

Tshirts.addEventListener('click', () => {
    shopImg.src = 'img/t-shirts_img.jpg';
    nameClouthes.textContent = 'mossimo T-shirt';
});

bottom.addEventListener('click', () => {
    shopImg.src = 'img/bottoms_img.jpg';
    nameClouthes.textContent = 'rubber boots';
});

sneakers.addEventListener('click', () => {
    shopImg.src = 'img/sneakers.jpg';
    nameClouthes.textContent = 'Nike sneakers';
});

roomper.addEventListener('click', () => {
    shopImg.src = 'img/roomper.jpg';
    nameClouthes.textContent = 'Jumpsuite';
});

pants.addEventListener('click', () => {
    shopImg.src = 'img/pants.jpg';
    nameClouthes.textContent = 'regular jeens';
});

shorts.addEventListener('click', () => {
    shopImg.src = 'img/shorts.jpg';
    nameClouthes.textContent = 'baby shorts';
});

hat.addEventListener('click', () => {
    shopImg.src = 'img/hats.jpg';
    nameClouthes.textContent = 'Baby hats';
});

all.addEventListener('click', () => {
    shopImg.src = 'img/all.jpg';
    nameClouthes.textContent = 'All clothes';
});



//tabs 
const catalog = document.querySelector('.shopping__img');
const shopBot = document.getElementById('shop_bot');
const shopTop = document.getElementById('shop_top');
const shopRoom = document.getElementById('shop_room');
const shopHat = document.getElementById('shop_hat');
const shopAlls = document.getElementById('shop_all');



shopTop.addEventListener('click', () => {
    shopTop.classList.add('shopping__active__item');
    shopBot.classList.remove('shopping__active__item');
    shopRoom.classList.remove('shopping__active__item');
    shopHat.classList.remove('shopping__active__item');
    shopAlls.classList.remove('shopping__active__item');
    catalog.src = 'img/shopping_img.jpg';

});

shopBot.addEventListener('click', () => {
    shopBot.classList.add('shopping__active__item');
    shopTop.classList.remove('shopping__active__item');
    shopRoom.classList.remove('shopping__active__item');
    shopHat.classList.remove('shopping__active__item');
    shopAlls.classList.remove('shopping__active__item');
    catalog.src = 'img/catalog_bottoms.jpg';
});

shopRoom.addEventListener('click', () => {
    shopRoom.classList.add('shopping__active__item');
    shopTop.classList.remove('shopping__active__item');
    shopBot.classList.remove('shopping__active__item');
    shopHat.classList.remove('shopping__active__item');
    shopAlls.classList.remove('shopping__active__item');
    catalog.src = 'img/catalog_roompers.jpg';
});

shopHat.addEventListener('click', () => {
    shopHat.classList.add('shopping__active__item');
    shopTop.classList.remove('shopping__active__item');
    shopBot.classList.remove('shopping__active__item');
    shopRoom.classList.remove('shopping__active__item');
    shopAlls.classList.remove('shopping__active__item');
    catalog.src = 'img/catalog_hats.jpg';
});

shopAlls.addEventListener('click', () => {
    shopAlls.classList.add('shopping__active__item');
    shopTop.classList.remove('shopping__active__item');
    shopBot.classList.remove('shopping__active__item');
    shopRoom.classList.remove('shopping__active__item');
    shopHat.classList.remove('shopping__active__item');
    catalog.src = 'img/catalog_alls.jpg';
});


//modal window

const modal = document.querySelector('.modal__wrapper');
const overlay = document.querySelector('.overlay');
const discClose = document.querySelector('.discount__close');
const triggerSection = document.querySelector('.shopping');

discClose.addEventListener('click', () => {
    overlay.classList.remove('discount__overlay__active');
    modal.classList.remove('modal__wrapper__active');
});

let modalShown = false;

function showModal() {
    modal.classList.add('modal__wrapper__active');
    overlay.classList.add('discount__overlay__active');
}

window.addEventListener('scroll', () => {
    const sectionTop = triggerSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight && !modalShown) {
        modalShown = true;
        showModal();
    }
});



//carusel


$(document).ready(function () {
    $('.carousel').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,

    });
});


