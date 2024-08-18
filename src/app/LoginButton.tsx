"use client"
import { useSelector } from "react-redux";

const LoginButton = () => {
  const { userId, password } = useSelector(state => state)

  const onClick = (e) => {
    e.preventDefault();
    console.log("form submit", userId, password);
  };

  return <button onClick={onClick}>Log in</button>;
};

export default LoginButton
