import { removeFromStorage } from "./localstorage.js";

window.addEventListener("DOMContentLoaded", () => {
    // items from the local storage    
    const list = JSON.parse(localStorage.getItem("list"));
    console.log(list.length);
    let cartItemsDiv = document.querySelector(".bag-content");
    if (list.length == 0) {
        cartItemsDiv.innerHTML = `<h4>Sorry there are no items here</h4>`;
    } else {
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
                        <i class="fa-solid fa-angle-up"></i>
                        <div class="number">
                            <span>1</span>
                        </div>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            `;
        });

        let allProducts = newList.join("");
        cartItemsDiv.innerHTML = allProducts;

        let removeFromCartBtns = cartItemsDiv.querySelectorAll(".removeFromCart");
        removeFromCartBtns.forEach((button) => {
            button.addEventListener("click", (e) => {
                let element = e.currentTarget.parentElement.parentElement.parentElement;
                let buttonid = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
                element.style.display = "none";
                removeFromStorage(buttonid);

            });
        });
    }

});