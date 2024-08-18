"use client"
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "./store";

const PasswordInputComponent = ({ value, onChange }) => (
  <input type="password" value={value} onChange={onChange} required />
);

const PasswordInput = () => {
  const password = useSelector(({ password }) => password)
  const dispatch = useDispatch()

  const handleChange = e => {
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