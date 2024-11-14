let cartCount = 0;

function addToCart() {
    cartCount++;
    document.querySelector(".cart-btn").textContent = `Cart (${cartCount})`;
    alert("Product added to cart!");
}
