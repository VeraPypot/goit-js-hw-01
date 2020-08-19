/* Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

    Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов */

const countryName = "КитаЙ";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    // Write code under this line
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
  }
}
if (price) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (countryName === null) {
  // Write code on this line
  message = CANCELED_BY_USER;
} else {
  message = NO_DELIVERY;
}
console.log(message);
