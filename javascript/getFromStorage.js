import { incDecPrice, removeElement } from "./productAction.js";

window.addEventListener("DOMContentLoaded", () => {
    let cartItemsDiv = document.querySelector(".bag-content");
    // items from the local storage    
    const list = (localStorage.getItem("list") == null) ? [] : JSON.parse(localStorage.getItem("list"));
    const newList = list.map((item) => {
        return `
            <div class="content" data-id="${item.id}">
                <div class="img">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="info">
                    <div class="price-name">
                        <p>${item.name}</p>
                        <div class="price">
                            <span>$${item.price}</span>
                        </div>
                        <button class="removeFromCart">remove</button>
                    </div>
                    <div class="quantity">
                        <i class="fa-solid fa-angle-up incPrice"></i>
                        <div class="number">
                            <span>${Number(item.quantity)}</span>
                        </div>
                        <i class="fa-solid fa-angle-down decPrice"></i>
                    </div>
                </div>
            </div>
            `;
    });

    let allProducts = newList.join("");
    cartItemsDiv.innerHTML = allProducts;

    let quantityBtns = cartItemsDiv.querySelectorAll(".content .quantity i");
    quantityBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let productID = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
            let numberDiv = e.currentTarget.parentElement;
            let number = numberDiv.querySelector(".number span");
            incDecPrice(productID, button, number);
        });
    });

    let removeFromCartBtns = cartItemsDiv.querySelectorAll(".removeFromCart");
    removeFromCartBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let element = e.currentTarget.parentElement.parentElement.parentElement;
            let buttonid = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
            removeElement(element, buttonid);
        });
    });

});