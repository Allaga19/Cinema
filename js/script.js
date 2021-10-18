const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton =document.querySelector('.m-menu');
const menu =document.querySelector('.menu');

// стоимость билета
let cost = 800;
// общая сумму: цена + колличество
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
   // проверка есть ли у элемента класс booked
   if (!event.target.classList.contains('booked')) {
      // если место незанято, вешаем класс active 
      event.target.classList.toggle('active');
      let totalSeats = schemeSvg.querySelectorAll('.active').length;
      totalPrice = totalSeats * cost;
      totalPriceTag.textContent = totalPrice;
   }
   
});
// menu
menuButton.addEventListener('click', () => {
   console.log('click');
   // menu.style.display = "block";
   menu.classList.toggle("is-open");
});