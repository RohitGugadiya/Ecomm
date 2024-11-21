const products = [
  {
    img: "images/products/backpack.jpg",
    price: 50,
    name: "backpack",
  },
  {
    img: "images/products/bathroomrug.jpg",
    price: 30,
    name: "bathroom rug",
  },
];

let productsHTML = "";
products.forEach((products) => {
  productsHTML += `  <div class="product-card">
    <img class="product-image" src="images/products/${products.name}.jpg" />
    <p class="product-price">$${products.price}<p>
    <p class="product-name">${products.name}</p>
    <button class="add-to-cart-button">Add to cart</button>
  </div>`;
});

document.querySelector(".products").innerHTML = productsHTML;
