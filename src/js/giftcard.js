const giftAmount = document.querySelector('.dropdown-select');
const giftPrice = document.querySelector('.gift__info__prices__price');

giftAmount.addEventListener('change', () => {
    giftPrice.textContent = giftAmount.value + ' USD';
});



document.querySelector('.minus').addEventListener('click', function () {
    const input = document.querySelector('.value');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
    giftPrice.textContent = (giftAmount.value * input.value) + ' USD';
});

document.querySelector('.plus').addEventListener('click', function () {
    const input = document.querySelector('.value');
    input.value = parseInt(input.value) + 1;
    giftPrice.textContent = (giftAmount.value * input.value) + ' USD';
});





const dropDownImportant = document.querySelector('.important');
const listImportant = document.querySelector('.gift__info__ul__important');


dropDownImportant.addEventListener('click', () => {
    listImportant.classList.toggle('gift__info__ul__active');
    dropDownImportant.classList.toggle('gift__info__list__active');
});


const dropDownElse = document.querySelector('.else');
const listElse = document.querySelector('.gift__info__ul__else');


dropDownElse.addEventListener('click', () => {
    listElse.classList.toggle('gift__info__ul__active');
    dropDownElse.classList.toggle('gift__info__list__active');
});


const sendGiftToSocial = document.querySelector('.gift__info__send');
const modalSendGiftToSocial = document.querySelector('.gift__info__send__modal');
const imgSendArrow = document.querySelector('.gift__send__img');
const imgSrc1 = 'icons/giftcard/orange_send_arrow.svg';
const imgSrc2 = 'icons/giftcard/arow.svg';
let isSrc2 = true;

sendGiftToSocial.addEventListener('click', () => {
    sendGiftToSocial.classList.toggle('gift__info__send__active');
    modalSendGiftToSocial.classList.toggle('gift__info__send__modal__active');

    imgSendArrow.src = isSrc2 ? imgSrc1 : imgSrc2;
    isSrc2 = !isSrc2;

});



const sendGift = document.querySelector('.gift__info__button');
const sendModal = document.querySelector('.email-send-modal');
const sendDagger = document.querySelectorAll('.email-send-modal__close');

sendGift.addEventListener('click', () => {
    sendModal.classList.add('email-send-modal-active');
});

const sendReturn = document.querySelector('.gift__info__return');

sendGift.addEventListener('mouseenter', () => {
    sendReturn.classList.add('datails__return__active');
});

sendGift.addEventListener('mouseleave', () => {
    sendReturn.classList.remove('datails__return__active');
});




const emailTab = document.querySelectorAll('.email_tab');
const massageTab = document.querySelectorAll('.massage_tab');
const modalMassage = document.querySelector('.massage-send-modal');
const printModal = document.querySelector('.print-send-modal');
const printTab = document.querySelectorAll('.print_tab');







emailTab.forEach(element => {
    element.addEventListener('click', () => {
        modalMassage.classList.remove('massage-send-modal-active');
        sendModal.classList.add('email-send-modal-active');
        printModal.classList.remove('print-send-modal-active');
    });
});


massageTab.forEach(element => {
    element.addEventListener('click', () => {
        sendModal.classList.remove('email-send-modal-active');
        modalMassage.classList.add('massage-send-modal-active');
        printModal.classList.remove('print-send-modal-active');
    });
});



printTab.forEach(element => {
    element.addEventListener('click', () => {
        modalMassage.classList.remove('massage-send-modal-active');
        sendModal.classList.remove('email-send-modal-active');
        printModal.classList.add('print-send-modal-active');
    });
});


sendDagger.forEach(element => {
    element.addEventListener('click', () => {
        modalMassage.classList.remove('massage-send-modal-active');
        sendModal.classList.remove('email-send-modal-active');
        printModal.classList.remove('print-send-modal-active');
    });
});



document.querySelector('.sticky-minus').addEventListener('click', function () {
    const input = document.querySelector('.sticky-value');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }

});

document.querySelector('.sticky-plus').addEventListener('click', function () {
    const input = document.querySelector('.sticky-value');
    input.value = parseInt(input.value) + 1;
});



const cartButton = document.querySelector('.gift__info__cart__button');
const cartReturn = document.querySelector('.gift__info__cart__return');

cartButton.addEventListener('mouseenter', () => {
    cartReturn.classList.add('gift__info__cart__return__active');
});

cartButton.addEventListener('mouseleave', () => {
    cartReturn.classList.remove('gift__info__cart__return__active');
});





const giftStickyBar = document.querySelector('.sticky-bar');

cartButton.addEventListener('click', () => {
    giftStickyBar.classList.add('sticky-bar__active');
});



const StickyButton = document.querySelector('.sticky-bar__cart__button');
const StickyReturn = document.querySelector('.sticky-bar__cart__return');

StickyButton.addEventListener('mouseenter', () => {
    StickyReturn.classList.add('gift__info__cart__return__active');
});

StickyButton.addEventListener('mouseleave', () => {
    StickyReturn.classList.remove('gift__info__cart__return__active');
});


const StickySendButton = document.querySelector('.sticky-bar__send__button');
const StickySendReturn = document.querySelector('.sticky-bar__send__return');

StickySendButton.addEventListener('mouseenter', () => {
    StickySendReturn.classList.add('gift__info__cart__return__active');
});

StickySendButton.addEventListener('mouseleave', () => {
    StickySendReturn.classList.remove('gift__info__cart__return__active');
});



const item1 = document.getElementById('item1');
const catalogImg1 = document.querySelector('.catalog-img1');
const catalogInfo1 = document.querySelector('.catalog-info1');
const addButton1 = document.querySelector('.add-button1');
const selectsixe1 = document.querySelector('.selectsixe1');

item1.addEventListener('click', () => {
    catalogImg1.classList.add('reviews__rating__catalog__item__small__img__active');
    catalogInfo1.classList.add('reviews__rating__catalog__item__small__info__active');
    addButton1.classList.add('reviews__rating__catalog__item__small__quick-btn__active');
});



addButton1.addEventListener('click', () => {
    addButton1.classList.remove('reviews__rating__catalog__item__small__quick-btn__active');
    catalogInfo1.classList.remove('reviews__rating__catalog__item__small__info__active');
    selectsixe1.classList.add('reviews__rating__catalog__item__selectsize__active');
});

const returnBackCatalog = document.querySelectorAll('.reviews__rating__catalog__item__selectsize__return');

returnBackCatalog.forEach(element => {
    element.addEventListener('click', () => {
        addButton1.classList.remove('reviews__rating__catalog__item__small__quick-btn__active');
        catalogInfo1.classList.remove('reviews__rating__catalog__item__small__info__active');
        selectsixe1.classList.remove('reviews__rating__catalog__item__selectsize__active');
        catalogImg1.classList.remove('reviews__rating__catalog__item__small__img__active');
    });
});