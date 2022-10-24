import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import WalletsConrainer from "../containers/WalletsConrainer";
import Wallet from "../components/Wallet";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  // const dispatch = useDispatch<AppDispatch>();
  // const user = useSelector<RootState, RootState["rootReducer"]["user"]>(
  //   (store) => store.rootReducer.user
  // );

  useEffect(() => {
    // getUser();
    dispatch(userActions.getUser());
    console.log("Effect");
  }, [dispatch]);

  const user = useAppSelector((store) => store.user);

  const handleClick = async () => {
    await dispatch(userActions.getUser());
    console.log("onClick");
    console.log(user);
  };

  console.log("onRenedr");
  console.log(user);

  return (
    <>
      <WalletsConrainer>
        <Wallet />
        <Button onClick={handleClick}>Fetch</Button>
        <div>Користувач: {user.username}</div>
        {/* <div>Капітал всього: {user.capital.total}</div>
        <div>Гаманець: {user.capital.wallets[0]?.walletName}</div>
        <div>Всього в гаманці: {user.capital.wallets[0]?.total}</div>
        <div>
          Дата транзакції: {user.capital.wallets[0]?.transactions[0].createdAt}
        </div>
        <div>
          Тип транзакції: {user.capital.wallets[0]?.transactions[0].type}
        </div>
        <div>
          Категорія транзакції:
          {user.capital.wallets[0]?.transactions[0]?.category}
        </div>
        <div>Витрати: {user.capital.wallets[0]?.transactions[0].sum}</div> */}
      </WalletsConrainer>
    </>
  );
};

export default Home;
