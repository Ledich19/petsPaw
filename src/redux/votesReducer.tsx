import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { ImageType, UserActionLog } from '../app/types';
import voteService from '../services/voteService';

type InitialState = {
  imgForVotes: ImageType | null;
  userActionLogs: UserActionLog[];
};
type AsetImagesForVotes = {
  type: string;
  payload: ImageType | null;
};
type AAddToUserActionLogs = {
  type: string;
  payload: UserActionLog;
};

const initialState: InitialState = {
  imgForVotes: null,
  userActionLogs: [],
};

const votesSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    setImagesForVotes(state, actions: AsetImagesForVotes) {
      return { ...state, imgForVotes: actions.payload };
    },
    addToUserActionLogs(state, actions: AAddToUserActionLogs) {
      return { ...state, userActionLogs: state.userActionLogs.concat(actions.payload) };
    },
  },
});

export const { setImagesForVotes, addToUserActionLogs } = votesSlice.actions;

export const getImage = () => {
  return async (dispatch: Dispatch) => {
    const img = await voteService.getImg();
    dispatch(setImagesForVotes(img[0]));
  };
};
export const voteImage = (id: string, action: 'like' | 'dislike') => {
  return async (dispatch: Dispatch) => {
    const likeImg = await voteService.like(id, action === 'like');
    const logItem = {
      imgId: likeImg.image_id,
      date: `${new Date()}`,
      reaction: action,
    };
    dispatch(addToUserActionLogs(logItem));
    dispatch(setImagesForVotes(null));
    const img = await voteService.getImg();
    dispatch(setImagesForVotes(img[0]));
  };
};

export default votesSlice.reducer;
