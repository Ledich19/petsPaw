import axios from 'axios';
import { BASE_API_URL } from '../app/variables';
import { ImageType, LikeType } from '../app/types';

const baseUrl = BASE_API_URL;

const getImg = async (): Promise<ImageType[]> => {
  const response = await axios.get(`${baseUrl}/images/search?limit=1`);
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/votes/`, {
    headers: {
      'x-api-key': import.meta.env.VITE_API_KEY,
    },
  });
  return response.data;
};

const like = async (id: string, isLike: boolean): Promise<LikeType> => {
  const response = await axios.post(
    `${baseUrl}/votes`,
    {
      image_id: id,
      sub_id: 'my-user-1234',
      value: isLike ? 1 : -1,
    },
    {
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY,
      },
    }
  );
  return response.data;
};

const addToFav = async () => {
  const response = await axios.get(`${baseUrl}`, {
    headers: {
      'x-api-key': import.meta.env.VITE_API_KEY,
    },
  });
  return response.data;
};

export default { getImg, getAll, like, addToFav };
