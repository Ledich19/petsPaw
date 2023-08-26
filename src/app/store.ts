import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stateReducer from '../redux/stateReducer';
import votesReducer from '../redux/votesReducer';
import { breedsApi } from '../services/breedsAPI';
import { imagesApi } from '../services/imagesAPI';
import breedsReducer from '../redux/breedsReducer';

export const store = configureStore({
  reducer: {
    state: stateReducer,
    votes: votesReducer,
    breeds: breedsReducer,
    [breedsApi.reducerPath]: breedsApi.reducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(breedsApi.middleware, imagesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
