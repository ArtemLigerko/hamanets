// import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import WalletsConrainer from "../containers/WalletsConrainer";
import Wallet from "../components/Wallet";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";
import TransactionsContainer from "../containers/TransactionsContainer";
import TransactionBar from "../components/TransactionBar";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.userData.users[0]);

  // useEffect(() => {
  //   dispatch(userActions.getUser());
  // }, [dispatch]);

  const handleGetUserData = async () => {
    await dispatch(userActions.getUser());
    // console.log(user.isLoading ? "loading" : user);
  };

  const handleChangeName = async () => {
    await dispatch(userActions.editUsername("Artem"));
    // console.log(user.isLoading ? "loading" : user);
  };

  return (
    <>
      <header>
        <span>Користувач: </span>
        <span>{user.username}</span>
      </header>
      <Button onClick={handleGetUserData}>Get user data</Button>
      <Button onClick={handleChangeName}>Change name</Button>
      <WalletsConrainer>
        <Wallet />
      </WalletsConrainer>
      <TransactionsContainer>
        <TransactionBar />
      </TransactionsContainer>
    </>
  );
};

export default Home;
