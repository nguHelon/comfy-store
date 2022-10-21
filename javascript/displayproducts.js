function displayProducts(array) {
    let newArray = array.map((items) => {
        return `
        <div class="product" data-id="${items.id}">
            <a href="productItem.html?id=${items.id}">
                <img src="${items.img}" alt="${items.name}">
            </a>
            <div class="info">
                <div class="price">
                    <p>${items.name}</p>
                    <span>$${items.price}</span>
                </div>
                <button class="addCart">Add</button>
            </div>
        </div>
        `;
    });

    newArray = newArray.join("");
    return newArray;
}

export default displayProducts;


// console.log(products);
