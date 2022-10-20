import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserInterface } from "../types";

const initialState = {
  username: "",
  id: "",
  capital: {
    total: 0,
    wallets: [],
  },
};

const Home = () => {
  const [user, setUser] = useState<UserInterface>(initialState);

  const url = "/mock/mock.json";

  const getData = async () => {
    const response = await axios.get(url);
    setUser(response.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(user);

  return (
    <>
      <div>Користувач: {user.username}</div>
      <div>Капітал всього: {user.capital.total}</div>
      <div>Гаманець: {user.capital.wallets[0].walletName}</div>
      <div>Всього в гаманці: {user.capital.wallets[0].total}</div>
      <div>
        Дата транзакції: {user.capital.wallets[0].transactions[0].createdAt}
      </div>
      <div>Тип транзакції: {user.capital.wallets[0].transactions[0].type}</div>
      <div>
        Категорія транзакції: {user.capital.wallets[0].transactions[0].category}
      </div>
      <div>Витрати: {user.capital.wallets[0].transactions[0].total}</div>
    </>
  );
};

export default Home;
