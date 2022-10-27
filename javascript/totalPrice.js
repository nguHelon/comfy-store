
function totalPrice() {
    const products = (localStorage.getItem("list") == null) ? [] : JSON.parse(localStorage.getItem("list"));
    const price = document.querySelector(".cart-section .total-section .total");
    if (products.length == 0) {
        price.textContent = `0`;
    } else {
        const totalArray = products.map((product) => {
            let price = Number(product.price);
            let quantity = Number(product.quantity);
            return price * quantity;
        });
        const newTotal = totalArray.reduce((prev, next) => prev + next);
        price.textContent = `$${newTotal.toFixed(2)}`;
    }
}

export { totalPrice };