import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stateReducer from '../redux/stateReducer';
import votesReducer from '../redux/votesReducer';

export const store = configureStore({
  reducer: {
    state: stateReducer,
    votes: votesReducer,
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
