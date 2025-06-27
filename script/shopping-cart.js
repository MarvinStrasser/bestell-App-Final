let cart = [];

function addToCart(index) {
    let dish = myDishes[index];
    let item = cart.find(i => i.Name === dish.Name);
    item ? item.amount++ : cart.push({ ...dish, amount: 1 });
    updateCartHTML();
}

function updateCartHTML() {
    let b = document.getElementById('shopping_cart'), t = 0;
    b.innerHTML = cart.length ? '' : '<p>Keine Artikel im Warenkorb.</p>';
    for (let i = 0; i < cart.length; i++) {
        let c = cart[i];
        t += c.Price * c.amount;
        b.innerHTML += `<div class="cart_item"><div class="cart_name">${c.Name} (${c.amount}x)</div><div class="cart_price">${(c.Price * c.amount).toFixed(2)} €</div><div class="cart_buttons"><button onclick="changeAmount(${i},1)">+</button><button onclick="changeAmount(${i},-1)">-</button><button onclick="removeFromCart(${i})"><i class="fa fa-trash"></i></button></div></div>`;
    }
    document.getElementById('subtotal').innerText = t.toFixed(2) + ' €';
    checkMinimumOrder(t);
    const orderBtn = document.getElementById('order_btn');
    orderBtn.disabled = t < 40;
    document.getElementById('order_message').innerText = '';
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
