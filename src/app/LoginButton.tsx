"use client"
import { MouseEvent, MouseEventHandler } from "react";
import { useSelector } from "react-redux";

const LoginButton = () => {
  const { userId, password } = useSelector<Object, { userId: string, password: string }>(state => state)

  const onClick: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("form submit", userId, password);
  };

  return <button onClick={onClick}>Log in</button>;
};

export default LoginButton
