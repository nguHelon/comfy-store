const openBtn = document.querySelector("#openCart");
const closeBtn = document.querySelector(".closeCart");
const cart = document.querySelector(".cart-section");
const menuBtn = document.querySelector(".header .menu");
const uldiv = document.querySelector(".header ul");
const closeMenu = document.querySelector(".header ul .links i.fa-xmark");

menuBtn.addEventListener("click", () => {
    uldiv.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    uldiv.classList.remove("active");
})

openBtn.addEventListener("click", () => {
    cart.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    cart.classList.remove("active");
})