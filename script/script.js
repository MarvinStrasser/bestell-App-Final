//Function for Restaurant information//
function toggleAbout(event) {
    if (event) {
        event.stopPropagation();
    }
    const box = document.getElementById('aboutUsBox');
    box.classList.toggle('show');
}

//select Main Dishes or siders//
function ChooseMainDishes() {
    return 
}



//functions for myDishes innerHTML//
function chooseMainDishes() {
  let container = document.getElementById('main_menu');
  container.innerHTML = '';

  let mainDishes = myDishes.filter(dish => dish.Menu === 'MainDish');

  for (let dish of mainDishes) {
    container.innerHTML += createDishHTML(dish);
  }
}

function chooseSideDishes() {
  let container = document.getElementById('main_menu');
  container.innerHTML = '';

  let sideDishes = myDishes.filter(dish => dish.Menu === 'SideDish');

  for (let dish of sideDishes) {
    container.innerHTML += createDishHTML(dish);
  }
}

function chooseDrinks() {
  let container = document.getElementById('main_menu');
  container.innerHTML = '';

  let Drinks = myDishes.filter(dish => dish.Menu === 'Drinks');

  for (let dish of Drinks) {
    container.innerHTML += createDishHTML(dish);
  }
}

window.onload = function () {
  chooseMainDishes();
};

function name(params) {
  id="Shopping_Cart_Amount"
}