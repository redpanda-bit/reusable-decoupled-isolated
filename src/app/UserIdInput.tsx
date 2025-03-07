"use client"
import type { ChangeEvent } from 'react'
import { setUserId } from "./store";
import { useDispatch, useSelector } from "react-redux";

const id = 'user-id-input'

const UserIdInputComponent = ({ value, onChange }: { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <input id={id} type="text" value={value} onChange={onChange} required />
);

const UserIdInput = () => {
  const userId = useSelector<{userId: string}, string>(({ userId }) => userId)
  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserId(e.target.value))
  };

  return <UserIdInputComponent value={userId} onChange={handleChange} />;
};

export const UserIdInputWithLabel = () => (
  <div>
    <label htmlFor={id}>User id: </label>
    <UserIdInput />
  </div>
)

export default UserIdInputWithLabel
