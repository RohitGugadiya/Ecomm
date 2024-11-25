import { cart } from "./cart.js";
import { products } from "./products.js";

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  console.log(productId);
  let matchingProduct;

  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `<div class="checkout-products 
                                js-cart-item-container-${matchingProduct.id}">
        <div class="first-block">
             <div class="checkout-img">
               <img src="${matchingProduct.image}" />
            </div>
            <div class="checkout-product-btn">
              <button class= "js-delete-btn" data-product-id = "${matchingProduct.id}"> Delete </button>
              <button> Update </button>
            </div>
        </div>
            <div class="checkout-details">
                 <h1>Product: ${matchingProduct.name}</h1>
            </div>
        </div>`;
});

document.querySelector(".checkout-products-iteams").innerHTML = cartSummaryHTML;

document.querySelectorAll(".js-delete-btn").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.remove();
  });
});
