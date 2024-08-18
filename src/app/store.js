import { createSlice, configureStore } from '@reduxjs/toolkit'

const login = createSlice({
  name: 'login',
  initialState: {
    userId: '',
    password: '',
  },
  reducers: {
    userId: (state, action) => {
      state.userId = action.payload
    },
    password: (state, action) => {
      state.password = action.payload
    }
  }
})

export const { userId: setUserId, password: setPassword } = login.actions

export const store = configureStore({
  reducer: login.reducer
})
