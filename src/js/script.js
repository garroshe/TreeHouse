//button

const buttonsMain = document.querySelector(".promo__button");
const buttonsReturn = document.querySelector(".promo__return");

buttonsMain.addEventListener("mouseenter", () => {
  buttonsReturn.classList.add("button__animation");
});

buttonsMain.addEventListener("mouseleave", () => {
  buttonsReturn.classList.remove("button__animation");
});

const buttonWelcome = document.querySelector(".welcome__button");
const returnWelcome = document.querySelector(".welcome__return");

buttonWelcome.addEventListener("mouseenter", () => {
  returnWelcome.classList.add("button__animation");
});

buttonWelcome.addEventListener("mouseleave", () => {
  returnWelcome.classList.remove("button__animation");
});

const buttonAction = document.querySelector(".action__main");
const returnAction = document.querySelector(".action__return");

buttonAction.addEventListener("mouseenter", () => {
  returnAction.classList.add("button__animation");
});

buttonAction.addEventListener("mouseleave", () => {
  returnAction.classList.remove("button__animation");
});

const buttonTrust = document.querySelector(".button__trust");
const returnTrust = document.querySelector(".trust__button__return");

buttonTrust.addEventListener("mouseenter", () => {
  returnTrust.classList.add("button__animation");
});

buttonTrust.addEventListener("mouseleave", () => {
  returnTrust.classList.remove("button__animation");
});

const care = document.getElementById("care");

buttonWelcome.addEventListener("click", () => {
  care.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//menu

const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close");

close.addEventListener("click", () => {
  menu.classList.add("menu__hide");
  menu.classList.remove("menu__visible");
});

buttonsMain.addEventListener("click", () => {
  menu.classList.add("menu__visible");
});

//list descr
function toggleVisibility(activeElement, elements) {
  elements.forEach((el) => el.classList.remove("top_visibetly"));
  activeElement.classList.add("top_visibetly");
}

const buttons = [
  { id: "tops", listClass: "tops" },
  { id: "bottoms", listClass: "bottoms" },
  { id: "roompers", listClass: "roompers" },
  { id: "hats", listClass: "hats" },
  { id: "shopAll", listClass: "shopAll" },
];

const allLists = buttons.map((button) =>
  document.querySelector(`.${button.listClass}`),
);

buttons.forEach(({ id, listClass }) => {
  document.getElementById(id).addEventListener("click", () => {
    const targetList = document.querySelector(`.${listClass}`);
    toggleVisibility(targetList, allLists);
  });
});

const items = [
  { id: "shirts", src: "img/shirts_img.jpg", text: "plaid shirt" },
  { id: "t-shirts", src: "img/t-shirts_img.jpg", text: "mossimo T-shirt" },
  { id: "bottom", src: "img/bottoms_img.jpg", text: "rubber boots" },
  { id: "sneakers", src: "img/sneakers.jpg", text: "Nike sneakers" },
  { id: "roomper", src: "img/roomper.jpg", text: "Jumpsuite" },
  { id: "pants", src: "img/pants.jpg", text: "regular jeens" },
  { id: "shorts", src: "img/shorts.jpg", text: "baby shorts" },
  { id: "hat", src: "img/hats.jpg", text: "Baby hats" },
  { id: "all", src: "img/all.jpg", text: "All clothes" },
];

const shopImg = document.querySelector(".shop_img");
const nameClouthes = document.querySelector(".shop_img_descr");

items.forEach(({ id, src, text }) => {
  document.getElementById(id).addEventListener("click", () => {
    shopImg.src = src;
    nameClouthes.textContent = text;
  });
});

//tabs
const catalog = document.querySelector(".shopping__img");

const shopItems = [
  { id: "shop_top", img: "img/shopping_img.jpg" },
  { id: "shop_bot", img: "img/catalog_bottoms.jpg" },
  { id: "shop_room", img: "img/catalog_roompers.jpg" },
  { id: "shop_hat", img: "img/catalog_hats.jpg" },
  { id: "shop_all", img: "img/catalog_alls.jpg" },
];

function updateActive(itemId, imgSrc) {
  shopItems.forEach(({ id }) => {
    const button = document.getElementById(id);
    button.classList.toggle("shopping__active__item", id === itemId);
  });
  catalog.src = imgSrc;
}

shopItems.forEach(({ id, img }) => {
  document
    .getElementById(id)
    .addEventListener("click", () => updateActive(id, img));
});

//modal window

const modal = document.querySelector(".modal__wrapper");
const overlay = document.querySelector(".overlay");
const discClose = document.querySelector(".discount__close");
const triggerSection = document.querySelector(".shopping");

discClose.addEventListener("click", () => {
  overlay.classList.remove("discount__overlay__active");
  modal.classList.remove("modal__wrapper__active");
});

let modalShown = false;

function showModal() {
  modal.classList.add("modal__wrapper__active");
  overlay.classList.add("discount__overlay__active");
}

window.addEventListener("scroll", () => {
  const sectionTop = triggerSection.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (sectionTop < viewportHeight && !modalShown) {
    modalShown = true;
    showModal();
  }
});

//carusel

$(document).ready(function () {
  $(".carousel").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  });
});

const cloth1 = document.querySelector(".clothes1");
const viewproducts1 = document.querySelector(".view-products1");

const cloth2 = document.querySelector(".clothes2");
const viewproducts2 = document.querySelector(".view-products2");

const cloth3 = document.querySelector(".clothes3");
const viewproducts3 = document.querySelector(".view-products3");

const cloth4 = document.querySelector(".clothes4");
const viewproducts4 = document.querySelector(".view-products4");

const cloth5 = document.querySelector(".clothes5");
const viewproducts5 = document.querySelector(".view-products5");

viewproducts1.addEventListener("click", () => {
  cloth1.classList.toggle("slide_active");
});

viewproducts2.addEventListener("click", () => {
  cloth2.classList.toggle("slide_active");
});

viewproducts3.addEventListener("click", () => {
  cloth3.classList.toggle("slide_active");
});

viewproducts4.addEventListener("click", () => {
  cloth4.classList.toggle("slide_active");
});

viewproducts5.addEventListener("click", () => {
  cloth5.classList.toggle("slide_active");
});

//adv

const advLeftTexts = [
  "Free Shipping Over $150",
  "Get 25% off buying the entire capsule collection",
];
const advRightTexts = [
  "Free pick up",
  "Subscribe to us and get 15% off your first order",
];

const oldAdvLeft = document.querySelector(".adv__wrapper__left");
const oldAdvRight = document.querySelector(".adv__wrapper__right");

let index = 0;

function changeAdv() {
  oldAdvLeft.textContent = advLeftTexts[index];
  oldAdvRight.textContent = advRightTexts[index];

  index = (index + 1) % advLeftTexts.length;

  setTimeout(changeAdv, 3000);
}

setTimeout(changeAdv, 3000);
