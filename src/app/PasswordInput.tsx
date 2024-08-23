"use client"
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "./store";
import { ChangeEvent } from "react";

const PasswordInputComponent = ({ value, onChange }: { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <input type="password" value={value} onChange={onChange} required />
);

const PasswordInput = () => {
  const password = useSelector<{password: string}, string>(({ password }) => password)
  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value))
  };

  return <PasswordInputComponent value={password} onChange={handleChange} />
};

const PasswordInputWithLabel = () => (
  <div>
    <label>Password: </label>
    <PasswordInput />
  </div>
)

export default PasswordInputWithLabel