// const cartItems = [];

function addToCart(array, id) {
    let item = array.filter((element) => {
        if (element.id === id) {
            return element;
        }
    });

    // cartItems.push(item[0]);

    let cartItemsDiv = document.querySelector(".bag-content")
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
                <button>remove</button>
            </div>
            <div class="quantity">
                <i class="fa-solid fa-angle-up"></i>
                <div class="number">
                    <span>1</span>
                </div>
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
    `;

    product.innerHTML = contents;
    cartItemsDiv.appendChild(product);
    // console.log(cartItems);
}

export default addToCart;
// export { cartItems };