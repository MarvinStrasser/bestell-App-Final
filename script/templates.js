function createDishHTML(dish) {
    return `
        <div class="select_menu">
            <h2>${dish.Name}</h2>
            <div class="order">
                <span>${dish.Price.toFixed(2)}€</span>
                <button class="order_btn" onclick="addToCart('${dish.Name}')">+</button>
            </div>
            <span>${dish.description}</span>
        </div>
    `;
}