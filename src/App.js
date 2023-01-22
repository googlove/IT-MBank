// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 10000;
const LIMIT_BALANCE = 1000000;

const GIVE_ZP = 1800;
const GET_MONEY = 120;
const GET_DOLLAR = 300;
const GIVE_ARMY = 100;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setPayment] = React.useState([]);

  const get_my_zp = () => {
    setBalance(balance + GIVE_ZP);
    setPayment([
      ...payment,
      {
        name: "Отримання ЗП",
        amount: GIVE_ZP,
        type: "+"
      }
    ]);
  };

  const replenish_balance = () => {
    setBalance(balance + GET_MONEY);

    setPayment([
      ...payment,
      {
        name: "Поповнити баланс",
        amount: GET_MONEY,
        type: "+"
      }
    ]);
  };

  const buy_currency = () => {
    setBalance(balance - GET_DOLLAR);
    setPayment([
      ...payment,
      {
        name: "Покупка валюти",
        amount: GET_DOLLAR,
        type: "-"
      }
    ]);
  };

  const give_money_army = () => {
    setBalance(balance - GIVE_ARMY);
    setPayment([
      ...payment,
      {
        name: "На армію",
        amount: GIVE_ARMY,
        type: "-"
      }
    ]);
  };
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом
  const HelloWorld = () => alert("Моя перша робота з JS!");

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="SMILABANK" onClick={HelloWorld} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      <Balance balance={balance} />

      {/* Компонент меню з кнопками */}
      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Отримання ЗП",
            onClick: get_my_zp,
            img: "/icon/money.svg"
          },
          {
            name: "Поповнити баланс",
            onClick: replenish_balance,
            img: "/icon/coine.svg"
          },
          {
            name: "Покупка валюти",
            onClick: buy_currency,
            img: "/icon/robot.svg"
          },
          {
            name: "На армію",
            onClick: give_money_army,
            img: "/icon/helmet.svg"
          }
        ]}
      />
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      <Payment payment={payment} />
    </Page>
  );
}
