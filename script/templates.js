function createDishHTML(dish, index) {
    return `
        <div class="select_menu">
            <h2>${dish.Name}</h2>
            <div class="order">
                <span>${dish.Price.toFixed(2)}€</span>
                <button class="order_btn" onclick="addToCart(${index})">+</button>
            </div>
            <span>${dish.description}</span>
        </div>
    `;
}

function renderCartItems() {
    const container = document.getElementById('shopping_cart');
    container.innerHTML = cart.length ? '' : '<p>Keine Artikel im Warenkorb.</p>';
    cart.forEach((c, i) => {
        container.innerHTML += `
            <div class="cart_item">
                <div class="cart_name">${c.Name} (${c.amount}x)</div>
                <div class="cart_price">${(c.Price * c.amount).toFixed(2)} €</div>
                <div class="cart_buttons">
                    <button onclick="changeAmount(${i},1)">+</button>
                    <button onclick="changeAmount(${i},-1)">-</button>
                    <button onclick="removeFromCart(${i})"><i class="fa fa-trash"></i></button>
                </div>
            </div>`;
    });
}