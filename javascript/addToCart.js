import { removeFromStorage } from "./localstorage.js";

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
                    <span>${Number(item.quantity)}</span>
                </div>
                <i class="fa-solid fa-angle-down decPrice"></i>
            </div>
        </div>
    `;

    product.innerHTML = contents;
    cartItemsDiv.appendChild(product);

    let removeFromCartBtns = product.querySelectorAll(".removeFromCart");
    removeFromCartBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let element = e.currentTarget.parentElement.parentElement.parentElement;
            let buttonid = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
            element.style.display = "none";
            removeFromStorage(buttonid);

        });
    });
};

export default addToCart;