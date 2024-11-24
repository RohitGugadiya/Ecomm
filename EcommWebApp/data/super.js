import { cart } from "./cart.js";

document.querySelector(".products").innerHTML = productsHTML;

document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.productName;

    let matchingItem;
    cart.forEach((item) => {
      if (item.productName === productName) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productName: productName,
        quantity: 1,
      });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
      document.querySelector(".cart-count").innerHTML = cartQuantity;
    });

    console.log(cart);
  });
});
