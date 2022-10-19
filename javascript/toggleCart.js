const openBtn = document.querySelector("#openCart");
const closeBtn = document.querySelector(".closeCart");
const cart = document.querySelector(".cart-section");

openBtn.addEventListener("click", () => {
    cart.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    cart.classList.remove("active");
})