let cart = [];

function addToCart(index) {
    let dish = myDishes[index];
    let item = cart.find(i => i.Name === dish.Name);
    item ? item.amount++ : cart.push({ ...dish, amount: 1 });
    updateCartHTML();
}

function updateCartHTML() {
    renderCartItems();
    updateSubtotal();
    checkMinimumOrder(getCartTotal());
    toggleOrderButton();
    clearOrderMessage();
    updateMobileCart();
}

function updateSubtotal() {
    const total = getCartTotal();
    document.getElementById('subtotal').innerText = total.toFixed(2) + ' €';
}

function toggleOrderButton() {
    const btn = document.getElementById('order_btn');
    btn.disabled = getCartTotal() < 40;
}

function clearOrderMessage() {
    document.getElementById('order_message').innerText = '';
}

function updateMobileCart() {
    const price = document.getElementById('shopping-cart-price');
    const count = document.getElementById('shopping-cart-count');
    if (!price || !count) return;

    const total = getCartTotal();
    const items = cart.reduce((sum, item) => sum + item.amount, 0);
    price.innerText = total.toFixed(2) + ' €';
    count.innerText = items;
}

function checkMinimumOrder(total) {
    const note = document.getElementById('min_order_note');
    if (total < 40) {
        note.innerText = ' Mindestbestellwert von 40 € nicht erreicht!';
        note.style.color = 'red';
    } else {
        note.innerText = ' Mindestbestellwert erreicht.';
        note.style.color = 'green';
    }
}

function changeAmount(index, delta) {
    cart[index].amount += delta;
    if (cart[index].amount < 1) cart.splice(index, 1);
    updateCartHTML();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartHTML();
}

function placeOrder() {
    if (getCartTotal() < 40) {
        alert('Der Mindestbestellwert von 40 € ist noch nicht erreicht.');
        return;
    }
    cart = [];
    updateCartHTML();
    document.getElementById('order_message').innerText = 'Deine Bestellung ist auf dem Weg!';
    document.getElementById('order_btn').disabled = true;
    document.getElementById('min_order_note').innerText = '';
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.Price * item.amount, 0);
}
