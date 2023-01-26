import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementByAmount: (state, action: PayloadAction<number>) => (state = state + action.payload),
  },
});

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
