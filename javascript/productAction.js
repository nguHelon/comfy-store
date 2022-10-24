import { removeFromStorage } from "./localstorage.js";

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
    } else if (button.classList.contains("decPrice")) {
        let newProducts = products.map((item) => {
            if (item.id === id) {
                let quantity = Number(item.quantity);
                let newQuantity = quantity - 1;
                item.quantity = newQuantity.toString();
                number.textContent = newQuantity.toString();
                return item;
            } else {
                return item;
            }
        });

        localStorage.setItem("list", JSON.stringify(newProducts));
    }
}

function removeElement(element, id) {
    element.style.display = "none";
    removeFromStorage(id);
}

export { incDecPrice, removeElement };