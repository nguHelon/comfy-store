

function displayProducts(array) {
    let newArray = array.map((items) => {
        return `
        <div class="product" data-id="${items.id}">
            <img src="${items.img}" alt="${items.name}">
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

export { displayProducts };


// console.log(products);
