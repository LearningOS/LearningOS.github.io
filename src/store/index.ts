import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import calcReducer from './reducer/calc'
// ...

const store = configureStore({
  reducer: {
    // users: usersReducer,
    calc: calcReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store