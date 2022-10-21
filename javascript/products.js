// All imports
import { displayProducts } from "./displayproducts.js";
import "./toggleCart.js";
import { productsArray } from "./store.js";
import addToCart from "./addToCart.js";
import { addToLocalStorage, removeFromStorage } from "./localstorage.js"


// html elements here
const productsDiv = document.querySelector("#products-div");
const filterBtns = document.querySelectorAll("#filters li");
const filterInput = document.querySelector("#search");
let products = displayProducts(productsArray);

productsDiv.innerHTML = products;
// accessing the add to cart btns after the load of the products;
const addCartBtns = productsDiv.querySelectorAll(".addCart");

filterBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        let category = e.currentTarget.dataset.category;
        let filteredProducts = productsArray.filter((item) => {
            if (item.category == category) {
                return item;
            }
        });

        if (category == 'all') {
            productsDiv.innerHTML = products;
        } else {
            productsDiv.innerHTML = displayProducts(filteredProducts);
        };
    });
});

filterInput.addEventListener("keyup", () => {
    const inputValue = filterInput.value;
    let filteredProducts = productsArray.filter((item) => {
        if (item.name.includes(inputValue)) {
            return item;
        };
    });

    if (filteredProducts.length == 0) {
        productsDiv.innerHTML = `<h1>Sorry no items match your search</h1>`;
    } else {
        productsDiv.innerHTML = displayProducts(filteredProducts);
    }
});

addCartBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        let id = e.currentTarget.parentElement.parentElement.dataset.id;

        addToCart(productsArray, id);
        addToLocalStorage(productsArray, id);
    });
});