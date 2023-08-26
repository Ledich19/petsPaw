import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  search: string;
  name: string;
  limit: string;
  sortDirectionFromAZ: boolean;
};
type optionsStringAction = {
  type: string;
  payload: string;
};
type optionsBooleanAction = {
  type: string;
  payload: boolean;
};

const initialState: InitialState = {
  search: '',
  name: '',
  limit: '5',
  sortDirectionFromAZ: true,
};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setSearchBreeds(state, actions: optionsStringAction) {
      return { ...state, imgForVotes: actions.payload };
    },
    setNameBreeds(state, actions: optionsStringAction) {
      return { ...state, name: actions.payload };
    },
    setLimitBreeds(state, actions: optionsStringAction) {
      return { ...state, limit: actions.payload };
    },
    setSortDirectionBreeds(state, actions: optionsBooleanAction) {
      return { ...state, sortDirectionFromAZ: actions.payload };
    },
  },
});

export const { setSearchBreeds, setNameBreeds, setLimitBreeds, setSortDirectionBreeds } =
  breedsSlice.actions;
export default breedsSlice.reducer;
