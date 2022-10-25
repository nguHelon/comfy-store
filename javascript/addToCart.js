import { incDecPrice, removeElement } from "./productAction.js";
import { addToLocalStorage } from "./localstorage.js"

function addToCart(array, id) {
    let item = array.filter((element) => {
        if (element.id === id) {
            return element;
        }
    });

    let cartItemsDiv = document.querySelector(".bag-content");
    let product = document.createElement('div');
    product.setAttribute("class", "content");
    product.setAttribute("data-id", `${item[0].id}`);

    let contents = `
        <div class="img">
            <img src="${item[0].img}" alt="${item[0].name}">
        </div>
        <div class="info">
            <div class="price-name">
                <p>${item[0].name}</p>
                <div class="price">
                    <span>$${item[0].price}</span>
                </div>
                <button class="removeFromCart">remove</button>
            </div>
            <div class="quantity">
                <i class="fa-solid fa-angle-up incPrice"></i>
                <div class="number">
                    <span>${Number(item[0].quantity)}</span>
                </div>
                <i class="fa-solid fa-angle-down decPrice"></i>
            </div>
        </div>
    `;

    product.innerHTML = contents;
    // if product is already appended increase the price else append it and add to localstorage;
    let numbers = cartItemsDiv.querySelectorAll(".content .quantity .number span");
    cartItemsDiv.appendChild(product);
    addToLocalStorage(array, id);
    let itemFromStorage = (localStorage.getItem("list") == null) ? [] : JSON.parse(localStorage.getItem("list"));

    itemFromStorage.forEach((item) => {
        console.log(item.name);
        //     if (itemFromStorage.length == 0 || item.id !== id) {
        //         cartItemsDiv.appendChild(product);
        //         addToLocalStorage(array, id);
        //     } else if (item.id == id) {
        //         let newProducts = itemFromStorage.map((product) => {
        //             let quantity = Number(product.quantity);
        //             let newQuantity = quantity + 1;
        //             product.quantity = newQuantity.toString();
        //             numbers.forEach((number) => {
        //                 if (product.id === id) {
        //                     number.textContent = newQuantity.toString();
        //                 }
        //             })
        //             return product;
        //         });

        //         itemFromStorage.forEach((item) => {
        //             if (item.id == id) {
        //                 localStorage.setItem("list", JSON.stringify(newProducts));
        //             }
        //         })
        //     }

    });


    let quantityBtns = cartItemsDiv.querySelectorAll(".content .quantity i");
    quantityBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            let productID = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
            let numberDiv = e.currentTarget.parentElement;
            let number = numberDiv.querySelector(".number span");
            incDecPrice(productID, button, number);
        });
    });

    let removeFromCartBtns = product.querySelectorAll(".removeFromCart");
    removeFromCartBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let element = e.currentTarget.parentElement.parentElement.parentElement;
            let buttonid = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
            removeElement(element, buttonid);
        });
    });
};

export default addToCart;