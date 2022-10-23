import { removeFromStorage } from "./localstorage.js";

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
            let products = JSON.parse(localStorage.getItem("list"));

            if (button.classList.contains("incPrice")) {
                let newProducts = products.map((item) => {
                    if (item.id == productID) {
                        let quantity = Number(item.quantity)
                        let newQuantity = quantity++;
                        item.quantity = newQuantity.toString();
                        return item;
                    } else {
                        return item;
                    }
                });

                localStorage.setItem("list", JSON.stringify(newProducts));
                console.log(newProducts);
            } else if (button.classList.contains("decPrice")) {
                let newProducts = products.map((item) => {
                    if (item.id === productID) {
                        let quantity = Number(item.quantity--);
                        item.quantity = quantity.toString();
                        return item;
                    } else {
                        return item;
                    }
                });

                localStorage.setItem("list", JSON.stringify(newProducts));
            }
        });
    });

    let removeFromCartBtns = cartItemsDiv.querySelectorAll(".removeFromCart");
    removeFromCartBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let element = e.currentTarget.parentElement.parentElement.parentElement;
            let buttonid = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
            element.style.display = "none";
            removeFromStorage(buttonid);

        });
    });

});