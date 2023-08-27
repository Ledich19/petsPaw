import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isOpenModal: boolean;
};
type IsOpenModalActions = {
  type: string;
  payload: boolean;
};

const initialState: InitialState = {
  isOpenModal: false,
};

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setStateModal(state, actions: IsOpenModalActions) {
      return { ...state, isOpenModal: actions.payload };
    },
  },
});

export const { setStateModal } = stateSlice.actions;
export default stateSlice.reducer;
