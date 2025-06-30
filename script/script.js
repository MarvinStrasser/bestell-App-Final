function toggleAbout(event) {
    if (event) {
        event.stopPropagation();
    }
    const box = document.getElementById('aboutUsBox');
    box.classList.toggle('show');
}

function toggleMobileCart() {
    document.querySelector('.right-content-section')?.scrollIntoView({ behavior: 'smooth' });
}

function chooseMainDishes() {
    let container = document.getElementById('main_menu');
    container.innerHTML = '';

    for (let i = 0; i < myDishes.length; i++) {
        let dish = myDishes[i];
        if (dish.Menu === 'MainDish') {
            container.innerHTML += createDishHTML(dish, i);
        }
    }
}

function chooseSideDishes() {
    let container = document.getElementById('main_menu');
    container.innerHTML = '';

    for (let i = 0; i < myDishes.length; i++) {
        let dish = myDishes[i];
        if (dish.Menu === 'SideDish') {
            container.innerHTML += createDishHTML(dish, i);
        }
    }
}

function chooseDrinks() {
    let container = document.getElementById('main_menu');
    container.innerHTML = '';

    for (let i = 0; i < myDishes.length; i++) {
        let dish = myDishes[i];
        if (dish.Menu === 'Drinks') {
            container.innerHTML += createDishHTML(dish, i);
        }
    }
}

function toggleMobileCart() {
    console.log('toggleMobileCart() wurde aufgerufen!');
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

