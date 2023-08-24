import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  item: string;
};
type Actions = {
  type: string;
  payload: {
    item: string;
  };
};

const initialState: InitialState = {
  item: 'item',
};

const itemSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    changeState(state, actions: Actions) {
      return { ...state, item: actions.payload.item };
    },
  },
});

export const { changeState } = itemSlice.actions;
export default itemSlice.reducer;
