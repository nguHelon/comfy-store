

function displayProducts(array) {
    let newArray = array.map((items) => {
        return `
        <div class="product">
            <img src="${items.img}" alt="${items.name}">
            <div class="info">
                <div class="price">
                    <p>${items.name}</p>
                    <span>$${items.price}</span>
                </div>
                <button>Add</button>
            </div>
        </div>
        `
    });

    newArray = newArray.join("");
    return newArray;
}

export { displayProducts };


// console.log(products);
