const products = [
    { name: "Kinderen boek", price: 10.30 },
    { name: "Historische boeken", price: 22.90 },
    { name: "Romans", price: 24.90 }
];

const main = document.querySelector("main");

for (let i = 0; i < products.length; i++) {
    const product = products[i]; // Get the current product object

    const productDiv = document.createElement("div");

    // Create HTML elements to display the product name and price
    const nameElement = document.createElement("h3"); // or any other suitable item
    nameElement.textContent = product.name;

    const priceElement = document.createElement("p"); // or any other suitable item
    priceElement.textContent = product.price; // Use an appropriate format for the price display

    // Add items to the product div
    productDiv.appendChild(nameElement);
    productDiv.appendChild(priceElement);

    main.appendChild(productDiv);
}