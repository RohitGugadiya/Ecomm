import { cart, addToCart } from "./cart.js";
import { products } from "./products.js";

let productsHTML = "";

products.forEach((products) => {
  productsHTML += `  <div class="product-card">

        <img class="product-image" src="${products.image}" />

        <p class="product-price">$${products.price}<p>

        <p class="product-name">${products.name}</p>

        <button class="add-to-cart-button" data-product-Id="${products.id}">Add to cart</button>
        
    </div>`;
});
document.querySelector(".products").innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    document.querySelector(".cart-count").innerHTML = cartQuantity;
  });
}

document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();

    console.log(cart);
  });
});
