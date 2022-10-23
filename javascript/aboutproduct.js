import { productsArray } from "./store.js";
import { addToLocalStorage } from "./localstorage.js";
import addToCart from "./addToCart.js";
import "./toggleCart.js";
import "./getFromStorage.js";

// HTML elements;
const img = document.querySelector("#img");
const itemName = document.querySelector(".item-div .item .info h1");
const category = document.querySelector(".item-div .item .info > span #category");
const price = document.querySelector(".item-div .item .info .price");
const description = document.querySelector("#description");
const addButton = document.querySelector(".item-div .item .info .addButton");

// getting the url
let params = new URLSearchParams(location.search);
let id = params.get("id");

let selectedItem = productsArray.filter((item) => {
    if (item.id === id) {
        return item;
    }
});

// setting the html elements' contents with the item data.
img.setAttribute("src", `${selectedItem[0].img}`);
itemName.textContent = `${selectedItem[0].name}`;
category.textContent = `${selectedItem[0].category}`;
price.textContent = `$${selectedItem[0].price}`;
description.textContent = `${selectedItem[0].description}`;

// set the cart bag with the items from the local storage;
addButton.addEventListener("click", (e) => {
    addToCart(productsArray, id);
    addToLocalStorage(productsArray, id);
});