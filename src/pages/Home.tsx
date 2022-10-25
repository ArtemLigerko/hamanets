import React, { useEffect } from "react";
// import { Button } from "react-bootstrap";

import WalletsConrainer from "../containers/WalletsConrainer";
import Wallet from "../components/Wallet";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(userActions.getUser());
  }, []);

  // const handleClick = async () => {
  //   await dispatch(userActions.getUser());
  //   console.log("onClick");
  //   console.log(user.isLoading ? "loading" : user);
  // };

  return (
    <WalletsConrainer>
      <Wallet />
      {/* <Button onClick={handleClick}>Fetch</Button> */}
      <div>Користувач: {user.username}</div>
      <div>Капітал всього: {user.capital.total}</div>
      <div>Гаманець: {user.capital.wallets[0]?.walletName}</div>
      <div>Всього в гаманці: {user.capital.wallets[0]?.total}</div>
      <div>
        Дата транзакції: {user.capital.wallets[0]?.transactions[0].createdAt}
      </div>
      <div>Тип транзакції: {user.capital.wallets[0]?.transactions[0].type}</div>
      <div>
        Категорія транзакції:
        {user.capital.wallets[0]?.transactions[0]?.category}
      </div>
      <div>Витрати: {user.capital.wallets[0]?.transactions[0].sum}</div>
    </WalletsConrainer>
  );
};

export default Home;
