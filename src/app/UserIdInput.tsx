"use client"
import { setUserId } from "./store";
import { useDispatch, useSelector } from "react-redux";

const UserIdInputComponent = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} required />
);

const UserIdInput = () => {
  const userId = useSelector(({ userId }) => userId)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setUserId(e.target.value))
  };

  return <UserIdInputComponent value={userId} onChange={handleChange} />;
};

export const UserIdInputWithLabel = () => (
  <div>
    <label>User id: </label>
    <UserIdInput />
  </div>
)

export default UserIdInputWithLabel
