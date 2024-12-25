const collectionsList = document.querySelector(".list_collections");
const collectionsButton = document.querySelector(".dropdown_collections");

collectionsButton.addEventListener("click", () => {
  collectionsList.classList.toggle("shop__menu__list__active");
  collectionsButton.classList.toggle("shop__menu__dropdownlist__active");
});

const categoriesButton = document.querySelector(".dropdown_categories");
const categoriesList = document.querySelector(".list_categories");

categoriesButton.addEventListener("click", () => {
  categoriesList.classList.toggle("shop__menu__list__active");
  categoriesButton.classList.toggle("shop__menu__dropdownlist__active");
});

const sizesButton = document.querySelector(".dropdown_sizes");
const sizesList = document.querySelector(".list_sizes");

sizesButton.addEventListener("click", () => {
  sizesList.classList.toggle("shop__menu__list__active");
  sizesButton.classList.toggle("shop__menu__dropdownlist__active");
});

const colorsButton = document.querySelector(".dropdown_colors");
const colorsList = document.querySelector(".list_colors");

colorsButton.addEventListener("click", () => {
  colorsList.classList.toggle("shop__menu__list__active");
  colorsButton.classList.toggle("shop__menu__dropdownlist__active");
});

const shopSmallCardActive = document.querySelector(".shop__item__img1");
const shopSmallCardImg = document.querySelector(".shop__item__small");
const shopSmallCardButton = document.querySelector(".shop__item__button");
const shopSmallCardInfo = document.querySelector(
  ".shop__item__small-card__info",
);

shopSmallCardActive.addEventListener("click", () => {
  shopSmallCardImg.classList.add("shop__item__small__active");
  shopSmallCardButton.classList.add("shop__item__button__active");
  shopSmallCardInfo.classList.add("shop__item__small-card__info__active");
});

const shopSmallCardSize = document.querySelector(
  ".shop__item__small-card__size",
);
const shopInfoMainCard = document.querySelector(".hide-info-card1");

shopSmallCardButton.addEventListener("click", () => {
  shopSmallCardButton.classList.remove("shop__item__button__active");
  shopSmallCardInfo.classList.remove("shop__item__small-card__info__active");
  shopSmallCardSize.classList.add("shop__item__small-card__size__active");
  shopInfoMainCard.classList.add("hide-info-card1__active");
});

const shopBackSmallCard = document.querySelector(
  ".shop__item__small-card__size__return",
);

shopBackSmallCard.addEventListener("click", () => {
  shopSmallCardSize.classList.remove("shop__item__small-card__size__active");
  shopInfoMainCard.classList.remove("hide-info-card1__active");
  shopSmallCardImg.classList.remove("shop__item__small__active");
});
