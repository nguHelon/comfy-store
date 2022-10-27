import { removeFromStorage } from "./localstorage.js";
import { totalPrice } from "./totalPrice.js";

function incDecPrice(id, button, number) {
    let products = JSON.parse(localStorage.getItem("list"));

    if (button.classList.contains("incPrice")) {
        let newProducts = products.map((item) => {
            if (item.id === id) {
                let quantity = Number(item.quantity);
                let newQuantity = quantity + 1;
                item.quantity = newQuantity.toString();
                number.textContent = newQuantity.toString();
                return item;
            } else {
                return item;
            }
        });

        localStorage.setItem("list", JSON.stringify(newProducts));
        totalPrice();

    } else if (button.classList.contains("decPrice")) {
        let newProducts = products.map((item) => {
            if (item.id === id) {
                let quantity = Number(item.quantity);
                let newQuantity = (quantity <= 0) ? quantity = 0 : quantity - 1;
                item.quantity = newQuantity.toString();
                number.textContent = newQuantity.toString();
                return item;
            } else {
                return item;
            }
        });

        localStorage.setItem("list", JSON.stringify(newProducts));
        totalPrice();
    }
}

function removeElement(element, id) {
    element.style.display = "none";
    removeFromStorage(id);
    totalPrice();
}

export { incDecPrice, removeElement };