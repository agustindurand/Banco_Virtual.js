let cartItems = 0;

function addToCart() {
    cartItems++;
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cartCount");
    cartCountElement.textContent = cartItems;
}

document.addEventListener("DOMContentLoaded", function () {
    const addButtons = document.querySelectorAll(".add-button");
    addButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
});