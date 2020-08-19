/* Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате.При загрузке страницы у посетителя запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.
const ADMIN_PASSWORD = 'jqueryismyjam';
let message; */

const userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";

let message = ACCESS_DENIED;
const password = prompt("Пожалуйста, введите пароль:");

if (password === userPassword && password === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (password === null) {
  message = CANCELED_BY_USER;
}

console.log(message);
alert(message);
