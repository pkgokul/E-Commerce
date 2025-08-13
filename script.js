const products = [
    { id: 1, name: "Smartphone", price: 15000, image: "images/smartphone.jpg" },
    { id: 2, name: "Headphones", price: 2000, image: "images/headphones.jpg" },
    { id: 3, name: "Smart Watch", price: 3000, image: "images/watch.jpg" },
    { id: 4, name: "Laptop", price: 45000, image: "images/laptop.jpg" },
    { id: 5, name: "Shirt", price: 1500, image: "images/shirt.jpg" },
    { id: 6, name: "Pant", price: 2000, image: "images/pant.jpg" },
    { id: 7, name: "Pen", price: 20, image: "images/pen.jpg" },
    { id: 8, name: "Bag", price: 2500, image: "images/bag.jpg" },
    { id: 9, name: "Tv", price: 22000, image: "images/tv.jpg" },
    { id: 10, name: "Fan", price: 2000, image: "images/fan.jpg" }
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <li>
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${index})">❌</button>
            </li>
        `;
    });

    document.getElementById("cart-total").textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout successful! Thank you for shopping.");
    cart = [];
    updateCart();
});

renderProducts();
