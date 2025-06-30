function toggleAbout(event) {
    if (event) {
        event.stopPropagation();
    }
    const box = document.getElementById('aboutUsBox');
    box.classList.toggle('show');
}

function toggleMobileCart() {
    document.getElementsByClassName('.right-content-section')?.scrollIntoView({ behavior: 'smooth' });
}

function chooseMyDish(menuType) {
    let container = document.getElementById('main_menu');
    container.innerHTML = '';
    for (let i = 0; i < myDishes.length; i++) {
        let dish = myDishes[i];
        if (dish.Menu === menuType) {
            container.innerHTML += createDishHTML(dish, i);
        }
    }
}

function toggleMobileCart() {
    const cart = document.querySelector('.right-content-section');
    cart.classList.add('open');
    updateCartHTML();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMobileCart() {
    const cart = document.querySelector('.right-content-section');
    cart.classList.remove('open');
}

window.onload = function() {
  chooseMainDishes();
  document.getElementById('order_btn').addEventListener('click', placeOrder);
};

window.onload = function() {
    chooseMyDish('MainDish');
};

