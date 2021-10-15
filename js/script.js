const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
//стоимость билета
let cost = 800;
// общая сумму: цена + колличество
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
   // console.log("клик посхеме ");
   // проверка куда кликнул
   // console.log(event.target);
   //находим элемент (event.target) на который кликнули и вешаем на него обработчик события
   // event.target.classList.toggle('active');
   // проверка есть ли у элемента класс booked
   if (!event.target.classList.contains('booked')) {
      // если есть, то
      // console.log('ops no');
      // если место незанято, вешаем класс active 
      event.target.classList.toggle('active');
      // totalPrice = schemeSvg.querySelectorAll('.active').length * cost;
      // запись по другому
      let totalSeats = schemeSvg.querySelectorAll('.active').length;
      totalPrice = totalSeats * cost;
      totalPriceTag.textContent = totalPrice;
      // находим все элементы(кресла), которые выбраны( количество)
      // console.log(schemeSvg.querySelectorAll('.active').length);
   }
   
});