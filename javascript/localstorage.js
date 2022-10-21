function addToLocalStorage(array, id) {
    let cartItems = (localStorage.getItem("list") == null) ? [] : JSON.parse(localStorage.getItem("list"));
    let newArray = array.filter((item) => {
        if (item.id === id) {
            return item;
        }
    });

    cartItems.push(newArray[0]);
    localStorage.setItem("list", JSON.stringify(cartItems));
}

function removeFromStorage(id) {
    let itemsFromStorage = JSON.parse(localStorage.getItem("list"));
    let newArray = itemsFromStorage.filter((item) => {
        return item.id !== id;
    });

    localStorage.setItem("list", JSON.stringify(newArray));
}

export { addToLocalStorage, removeFromStorage };