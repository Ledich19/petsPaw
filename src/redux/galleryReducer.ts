import { createSlice } from '@reduxjs/toolkit';
import { Direction } from '../app/types';

type InitialState = {
  order: Direction;
  type: string;
  breed: string;
  limit: string;
};
type OptionsStringAction = {
  type: string;
  payload: string;
};
type OptionsNumberAction = {
  type: string;
  payload: string;
};
type OrderAction = {
  type: string;
  payload: Direction;
};

const initialState: InitialState = {
  order: 'RANDOM',
  type: '',
  breed: '',
  limit: '5',
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setOrder(state, actions: OrderAction) {
      return { ...state, order: actions.payload };
    },
    setType(state, actions: OptionsStringAction) {
      return { ...state, type: actions.payload };
    },
    setBreed(state, actions: OptionsStringAction) {
      return { ...state, breed: actions.payload };
    },
    setLimit(state, actions: OptionsNumberAction) {
      const limit = Number.isNaN(actions.payload) ? '' : actions.payload;
      return { ...state, limit };
    },
  },
});

export const { setOrder, setType, setBreed, setLimit } = gallerySlice.actions;
export default gallerySlice.reducer;
