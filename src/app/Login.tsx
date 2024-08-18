"use client"
import UserIdInput from "./UserIdInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";
import { Provider } from 'react-redux'
import { store } from './store'

const Login = () => (
  <Provider store={store}>
    <form>
      <UserIdInput />
      <PasswordInput />
      <div>
        <LoginButton />
      </div>
    </form>
  </Provider>
);


export default Login;
